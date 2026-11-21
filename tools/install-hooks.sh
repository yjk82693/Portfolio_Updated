#!/usr/bin/env bash
# Connects tools/pre-commit to this repository's git hooks.
# Run once from anywhere inside the repository: bash tools/install-hooks.sh
# The installed hook finds the repo root at run time, so moving the folder is fine.
set -euo pipefail

root="$(git rev-parse --show-toplevel)"
hooks_dir="$(cd "$root" && git rev-parse --git-path hooks)"
case "$hooks_dir" in /*) ;; *) hooks_dir="$root/$hooks_dir" ;; esac
mkdir -p "$hooks_dir"

target="$hooks_dir/pre-commit"
if [ -e "$target" ] && ! grep -q "public-portfolio-guard" "$target"; then
  echo "A different pre-commit hook already exists: $target" >&2
  echo "Move it away first, then run this script again." >&2
  exit 1
fi

cat > "$target" <<'HOOK'
#!/usr/bin/env bash
# public-portfolio-guard: runs tools/pre-commit from the repository root.
exec python3 "$(git rev-parse --show-toplevel)/tools/pre-commit"
HOOK
chmod +x "$target" "$root/tools/pre-commit"

if [ ! -f "$root/tools/blocklist.txt" ]; then
  cp "$root/tools/blocklist.example.txt" "$root/tools/blocklist.txt"
  echo "Created tools/blocklist.txt from the example. Add your own words to it."
fi
echo "Installed: $target"
