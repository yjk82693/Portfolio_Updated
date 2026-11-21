#!/usr/bin/env bash
# Tests tools/pre-commit in a throwaway repository. Does not touch this repository.
# Run: bash tools/test_pre_commit.sh
# Fake values are built by string joining so this file itself never contains them.
set -uo pipefail

src="$(cd "$(dirname "$0")" && pwd)"
tmp="$(mktemp -d "${TMPDIR:-/tmp}/precommit-test.XXXXXX")"
trap 'rm -rf "$tmp"' EXIT

cd "$tmp"
git init -q -b main
git config user.name "hook-test"
git config user.email "hook-test@example.invalid"
mkdir -p tools
cp "$src/pre-commit" tools/pre-commit
chmod +x tools/pre-commit
# Test blocklist (words joined at run time).
printf '%s\n' "# test blocklist" "Fake""Codename" ".cla""ude/" > tools/blocklist.txt
git add tools && git commit -q -m "setup" --no-verify

pass=0; fail=0
run_case() { # name expect(block|pass) file
  local name="$1" expect="$2" file="$3" out rc
  git add -- "$file"
  out="$(python3 tools/pre-commit 2>&1)"; rc=$?
  if { [ "$expect" = block ] && [ $rc -ne 0 ]; } || { [ "$expect" = pass ] && [ $rc -eq 0 ]; }; then
    echo "PASS  $name (expected $expect)"; pass=$((pass+1))
  else
    echo "FAIL  $name (expected $expect, rc=$rc)"; echo "$out" | sed 's/^/      /'; fail=$((fail+1))
  fi
  # Leak check: the hook output must never contain the fake secret body.
  if echo "$out" | grep -q "FAKEFAKE"; then
    echo "FAIL  $name leaked a value in output"; fail=$((fail+1))
  fi
  git reset -q -- "$file"
  rm -rf -- "$file"
}

F="FAKEFAKE"
echo "key = \"sk-""ant-api03-${F}${F}${F}0000\"" > a.txt;             run_case "Anthropic key" block a.txt
echo "OPENAI=sk-""proj-${F}${F}${F}1111" > b.txt;                       run_case "OpenAI key" block b.txt
echo "gh = ghp""_${F}${F}${F}${F}abcd" > c.txt;                         run_case "GitHub token" block c.txt
echo "pat = github""_pat_${F}${F}${F}${F}_x" > c2.txt;                  run_case "GitHub PAT" block c2.txt
echo "aws = AKIA""FAKEFAKEFAKE0000" > d.txt;                            run_case "AWS key id" block d.txt
echo "g = AIza""Sy${F}${F}${F}${F}abcde" > e.txt;                       run_case "Google key" block e.txt
printf '%s\n' "-----BEGIN ""PRIVATE KEY-----" "${F}" > f.txt;          run_case "Private key block" block f.txt
echo "s = xox""b-${F}-${F}" > g.txt;                                    run_case "Slack token" block g.txt
echo "pass""word=Zq8${F}x7Lm2Pw9Rt" > h.txt;                              run_case "Generic high-entropy password" block h.txt
echo "X=1" > .env.local;                                                run_case ".env file name" block .env.local
echo "not really a key" > server.pem;                                   run_case "Key file name" block server.pem
dd if=/dev/zero of=big.bin bs=1048576 count=6 2>/dev/null;              run_case "6 MB file" block big.bin
echo "Notes about the fake""codename project" > i.md;                   run_case "Blocklist word (case-insensitive)" block i.md
mkdir -p ".cla""ude"; echo "{}" > ".cla""ude/settings.json";           run_case "Blocklist word in path" block ".cla""ude"
printf '%s\n' "# Hello" "password = see the docs" "Normal text." > ok.md; run_case "Normal markdown" pass ok.md
printf 'def add(a, b):\n    return a + b\n' > ok.py;                    run_case "Normal code" pass ok.py
dd if=/dev/zero of=small.bin bs=1048576 count=1 2>/dev/null;            run_case "1 MB file" pass small.bin

echo "----"
echo "passed: $pass, failed: $fail"
[ "$fail" -eq 0 ]
