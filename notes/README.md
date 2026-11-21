# Notes

Daily study notes and algorithm practice. These files are not part of the website build: Vite only bundles `index.html`, `src/`, and `public/`.

- `daily/`: one short study note per day (copy `daily/_template.md`)
- `algorithms/`: one solved problem at a time, with a link to the problem
- `docs/`: the daily commit routine and the publishing rules (Korean and English)

The pre-commit guard in `../tools/` checks every commit for secrets, blocked words, and large files. Set it up once with `bash tools/install-hooks.sh` from the repository root.

---

# 노트

매일 학습 노트와 알고리즘 연습을 둔다. 웹사이트 빌드에는 들어가지 않는다. Vite는 `index.html`, `src/`, `public/`만 묶는다.

- `daily/`: 하루 한 개의 짧은 학습 노트(`daily/_template.md`를 복사)
- `algorithms/`: 한 번에 한 문제 풀이, 문제 링크 포함
- `docs/`: 매일 커밋 방법과 공개 규칙(한국어·영어)

`../tools/`의 커밋 전 검사가 모든 커밋에서 비밀값, 금지어, 큰 파일을 검사한다. 저장소 루트에서 `bash tools/install-hooks.sh`로 한 번 설정한다.
