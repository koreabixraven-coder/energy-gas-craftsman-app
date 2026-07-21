v2.79 GAS_2001_2003_ANSWER_INDEX_HOTFIX_MOBILE_BOTTOM_DARK_SAFE

- 기준본: v2.78 GAS_2003_03_30_60_PAST_EXAM_AUTO_CHAIN_MOBILE_BOTTOM_DARK_SAFE
- 가스기능사 2001년 04월 29일~2003년 03월 30일, 총 8개 회차 480문제 정답 오류 전수 수정
- 원인: PDF 정답 번호(1~4)를 앱 내부 정답 인덱스(0~3)로 변환하지 않고 저장하여, 4번 정답은 undefined가 되고 1~3번 정답도 한 칸씩 어긋남
- 조치: 각 교사용 PDF 본문 정답표시와 마지막 60문제 정답표를 대조하여 모든 ans 값을 0~3 인덱스로 정상 변환
- 검증: 8개 회차 x 60문제 = 480문제, 누락 0 / 범위초과 0 / PDF 정답표 불일치 0
- 전체 문제 수: 4574문제 유지
- questions.js?v=2.79 / manifest.json?v=2.79 / sw.js?v=2.79
- CACHE_NAME energy-gas-v2-79-gas-2001-2003-answer-index-hotfix-mobile-bottom-dark-safe
- 기존 문제·보기·해설·TTS·설정창·오답노트·암기완료·자동낭독·모바일 하단 다크 보정은 변경하지 않음

---

v2.78 GAS_2003_03_30_60_PAST_EXAM_AUTO_CHAIN_MOBILE_BOTTOM_DARK_SAFE

- 기준본: v2.77 GAS_2003_01_26_60_MOBILE_BOTTOM_DARK_SAFE
- 가스기능사 2003년 03월 30일 필기 기출문제 60문제 추가
- 새 key: 가스_기출_2003_03_30
- 전체 문제 수: 4574문제
- questions.js?v=2.78 / manifest.json?v=2.78 / sw.js?v=2.78
- CACHE_NAME energy-gas-v2-78-gas-2003-03-30-60-past-exam-auto-chain-mobile-bottom-dark-safe
- .nojekyll 포함
- 기존 TTS / 설정창 / 오답노트 / 암기완료 / 심화중복문제 / 자동낭독 / 모바일 하단 다크 보정 유지
