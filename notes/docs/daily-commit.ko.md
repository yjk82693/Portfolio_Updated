# 데일리 커밋 방법

원칙: **하루 15분 안**, 작고 실제 내용이 있는 커밋 하나. **커밋 수 채우기용 빈 커밋 금지**(`--allow-empty`, 공백만 바꾸기, 날짜만 바꾸기 모두 금지). 쉬는 날은 쉰다.

## 고를 수 있는 것 (하나만)
1. **학습 노트** — `notes/daily/YYYY-MM-DD.md`. `notes/daily/_template.md`를 복사해 오늘 배운 것을 3줄로 요약.
2. **알고리즘 한 문제** — `notes/algorithms/<사이트>/<문제>.py` 등. 풀이 + 위에 주석 2줄(접근, 시간복잡도). 문제 본문은 복사하지 않고 링크만.
3. **작은 도구 개선** — 이 저장소의 도구에 작은 기능, 테스트, README 보강 하나.

## 순서
```
cp notes/daily/_template.md notes/daily/2026-11-22.md   # 오늘 날짜로
# 3줄 채우기
git add notes/daily/2026-11-22.md
git commit -m "daily: <한 줄 요약>"         # 훅이 비밀값·금지어·큰 파일을 검사
```
현재 수강 과목의 과제 풀이는 올리지 않는다(`notes/docs/publish-rules.ko.md`).
