# energy-gas-craftsman-app v2.34
CBT_MOCK_7_60_CACHE_FORCE_REDEPLOY_STRICT_ORIGINAL_EX

배관기능장 안정된 TTS 로직 기반의 에너지관리기능사·가스기능사 통합 학습앱입니다.

## v2.34 긴급 캐시 강제 갱신
- v2.33 데이터 유지
- CBT 대비 적중모의고사 1~7회 카드 유지
- 전체 문제 수: 1899문제 유지
- index/questions/theory/manifest/sw 캐시버스터 v2.34 적용
- Service Worker CACHE_NAME v2.34 적용
- 이전 energy-gas 계열 캐시 전체 삭제
- install 단계에서 skipWaiting 적용
- activate 단계에서 clients.claim 적용
- 핵심 파일(index/questions/theory/manifest/sw)은 network-first + no-store 적용

## v2.34 변경
- 기준본 v2.32 내용 유지
- 에너지관리기능사 / CBT 대비 적중모의고사 / 7회 60문제 추가
- CBT 대비 적중모의고사 메뉴: 1회 / 2회 / 3회 / 4회 / 5회 / 6회 / 7회 카드 유지
- 전체 문제 수: 1899문제
- questions.js?v=2.34 반영
- theory.js?v=2.34 반영
- manifest.json?v=2.34 반영
- Service Worker 등록 sw.js?v=2.34 반영
- Service Worker CACHE_NAME: energy-gas-v2-33-cbt-mock-7-60-cache-menu-strict-original-ex
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능은 변경하지 않음
- 원본 사진의 문제·보기·정답·해설만 반영
- 캐시버전 동시 업데이트 완료

## 업로드 방법
압축을 풀고 GitHub `energy-gas-craftsman-app` 저장소에 전체 파일을 덮어 업로드합니다.

업로드 후 GitHub Pages 배포 완료 시간을 확인하고, 앱 주소에 `?v=2.33`을 붙여 확인합니다.


---

# energy-gas-craftsman-app v2.32 CBT_MOCK_6_60_CACHE_MENU_STRICT_ORIGINAL_EX

배관기능장 안정본 TTS 로직 기반의 에너지관리기능사·가스기능사 통합 학습앱입니다.

## v2.32 변경
- 기준본 v2.31 내용 유지
- 에너지관리기능사 / CBT 대비 적중모의고사 / 6회 60문제 추가
- CBT 대비 적중모의고사 메뉴: 1회 / 2회 / 3회 / 4회 / 5회 / 6회 카드 유지
- 전체 문제 수: 1839문제
- questions.js?v=2.32 반영
- theory.js?v=2.32 반영
- manifest.json?v=2.32 반영
- Service Worker 등록 sw.js?v=2.32 반영
- Service Worker CACHE_NAME: energy-gas-v2-32-cbt-mock-6-60-cache-menu-strict-original-ex
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능은 변경하지 않음
- 원본 해설 없음 원칙 유지: 원본 회색 해설박스가 없을 경우 `원문 해설 없음`만 입력
- 확인 필요 메모: 6회 2번은 정답표와 문제·해설이 불일치하여 정답은 정답표 기준으로 보존하고 해설에 확인 필요 메모를 반영함

## 업로드 방법
압축을 풀고 GitHub `energy-gas-craftsman-app` 저장소에 전체 파일을 덮어 업로드합니다.

업로드 후 GitHub Pages 배포 완료 시간을 확인하고, 앱 주소에 `?v=2.32`를 붙여 확인합니다.


---

# energy-gas-craftsman-app v2.31 CBT_MOCK_5_60_CACHE_MENU_STRICT_ORIGINAL_EX

배관기능장 안정본 TTS 로직 기반의 에너지관리기능사·가스기능사 통합 학습앱입니다.

## v2.31 변경
- 기준본 v2.30 내용 유지
- 에너지관리기능사 / CBT 대비 적중모의고사 / 5회 60문제 추가
- CBT 대비 적중모의고사 메뉴: 1회 / 2회 / 3회 / 4회 / 5회 카드 유지
- 전체 문제 수: 1779문제
- questions.js?v=2.31 반영
- theory.js?v=2.31 반영
- manifest.json?v=2.31 반영
- Service Worker 등록 sw.js?v=2.31 반영
- Service Worker CACHE_NAME: energy-gas-v2-31-cbt-mock-5-60-cache-menu-strict-original-ex
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능은 변경하지 않음
- 원본 해설 없음 원칙 유지: 원본 회색 해설박스가 없을 경우 `원문 해설 없음`만 입력

## 업로드 방법
압축을 풀고 GitHub `energy-gas-craftsman-app` 저장소에 전체 파일을 덮어 업로드합니다.

업로드 후 GitHub Pages 배포 완료 시간을 확인하고, 앱 주소에 `?v=2.31`을 붙여 확인합니다.


---

# energy-gas-craftsman-app v2.29 CBT_MOCK_4_60_MENU_FIX_STRICT_ORIGINAL_EX



## v2.30 변경
- 기준본 v2.29 내용 유지
- CBT 대비 적중모의고사 1~4회 하위 카드 메뉴 유지
- 캐시 강제 갱신: questions.js?v=2.30, theory.js?v=2.30, manifest.json?v=2.30
- Service Worker 등록 sw.js?v=2.30 반영
- Service Worker CACHE_NAME: energy-gas-v2-30-cache-force-menu-fix-strict-original-ex
- 문제 데이터와 TTS 로직은 건드리지 않음
배관기능장 안정본 TTS 로직 기반의 에너지관리기능사·가스기능사 통합 학습앱입니다.

## v2.20 변경

- 기존 v2.19 내용 유지
- 에너지관리기능사 / 기출문제 / 2015년 4회 60문제 입력
- 전체 문제 수: 1359문제
  - 에너지관리기능사 제1장 01. 열 및 증기 46문제 유지
  - 에너지관리기능사 제1장 02. 보일러의 종류 및 특징 81문제 유지
  - 에너지관리기능사 제1장 03. 보일러 부속장치 182문제 유지
  - 에너지관리기능사 제1장 04. 연료, 연소 및 연소장치 108문제 유지
  - 에너지관리기능사 제2장 01. 보일러 안전관리 124문제 유지
  - 에너지관리기능사 제2장 02. 보일러 시공 84문제 유지
  - 에너지관리기능사 제2장 03. 보일러 배관 114문제 유지
  - 에너지관리기능사 제3장 01. 에너지관리법규 80문제 유지
  - 에너지관리기능사 기출문제 2014년 2회 60문제 유지
  - 에너지관리기능사 기출문제 2014년 3회 60문제 유지
  - 에너지관리기능사 기출문제 2014년 4회 60문제 유지
  - 에너지관리기능사 기출문제 2015년 1회 60문제 유지
  - 에너지관리기능사 기출문제 2015년 2회 60문제 유지
  - 에너지관리기능사 기출문제 2015년 3회 60문제 유지
  - 에너지관리기능사 기출문제 2016년 1회 60문제 추가
  - 가스기능사 2009년 1회 60문제 유지
- 원본 해설 없음 처리: 2015년 4회 30번
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 로직은 건드리지 않음
- 캐시명 v2.20으로 변경

## 업로드 방법

압축을 풀고 GitHub `energy-gas-craftsman-app` 저장소에 전체 파일을 덮어 업로드합니다.

업로드 후 아래 주소처럼 확인합니다.

`?v=2.20`


## v2.21 변경
- 에너지관리기능사 기출문제 2016년 1회 60문제 추가
- 전체 문제 수 1359문제
- questions.js?v=2.21 및 Service Worker CACHE_NAME v2.21 반영
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능 보존
- 원본 해설 없음 처리: 2016년 1회 25번, 28번, 52번


## v2.22 변경
- 에너지관리기능사 기출문제 2016년 2회 60문제 추가
- 전체 문제 수: 1359 → 1419문제
- questions.js?v=2.22 및 Service Worker CACHE_NAME v2.22 반영
- 원본 해설 없음 처리: 2016년 2회 35번, 44번, 55번
- 정답표와 해설 불일치 확인 필요 메모 반영: 2016년 2회 9, 10, 11, 12, 14, 15, 17, 19, 20, 22, 23, 24번


## v2.23 변경
- 에너지관리기능사 기출문제 2016년 3회 60문제 추가
- 전체 문제 수: 1419 → 1479문제
- questions.js?v=2.23 및 Service Worker CACHE_NAME v2.23 반영
- 원본 해설 없음 처리: 2016년 3회 44번, 46번
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능은 변경하지 않음


## v2.24 변경
- 기준본 v2.23에서 에너지관리기능사 기출문제 2016년 2회 08~24번을 정상 원본 페이지 기준으로 교체
- 전체 문제 수 1479문제 유지
- questions.js?v=2.24 및 Service Worker CACHE_NAME v2.24 반영
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능 변경 없음


## v2.25 변경
- 에너지관리기능사 / CBT 대비 적중모의고사 / 1회 60문제 추가
- 57번 해설 사용자 재확인본 기준 보강
- 전체 문제 수 1539문제
- questions.js?v=2.25 및 Service Worker CACHE_NAME v2.25 반영
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능은 변경하지 않음


## v2.26 변경
- 에너지관리기능사 / CBT 대비 적중모의고사 / 2회 60문제 추가
- CBT 대비 적중모의고사 1회 60문제 유지
- 전체 문제 수 1599문제
- questions.js?v=2.26 및 Service Worker CACHE_NAME v2.26 반영
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능은 변경하지 않음


## v2.27 수정 사항
- CBT 대비 적중모의고사 2회 30번 해설을 사용자 지시 기준에 따라 `원문 해설 없음`으로 수정.
- 원본 사진에 없는 임의 해설 배제 기준 반영.
- questions.js 캐시버스터를 v=2.27로 변경.
- Service Worker 캐시명을 v2.27로 변경.


## v2.28 변경

- 기존 v2.27 내용 유지
- 에너지관리기능사 / CBT 대비 적중모의고사 / 3회 60문제 추가
- 전체 문제 수: 1599 → 1659문제
- questions.js?v=2.28 및 Service Worker CACHE_NAME v2.28 반영
- 원본 사진의 문제·보기·정답·회색 해설박스 기준만 반영
- 16번 해설은 다음 페이지 상단 원문 해설로 반영
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능은 변경하지 않음


## v2.29 변경

- 기준본 v2.28 유지
- 에너지관리기능사 / CBT 대비 적중모의고사 / 4회 60문제 추가
- CBT 대비 적중모의고사 메뉴 구조 수정
  - 문제풀이 → 에너지관리기능사 → CBT 대비 적중모의고사 → 1회 / 2회 / 3회 / 4회 카드 순서로 진입
  - 기존처럼 바로 1회 문제로 들어가던 구조를 회차별 카드 구조로 분리
- 전체 문제 수: 1719문제
- questions.js?v=2.29 반영
- Service Worker CACHE_NAME v2.29 반영
- 원본 사진의 문제, 보기, 정답, 해설만 반영
- 원문 해설 없는 문항 처리: 4회 32번, 40번
- TTS 자동읽기 로직, 설정창, 오답노트, 암기완료 기능은 변경하지 않음