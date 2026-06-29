/* gas_questions.js · 가스기능사 샘플 문제 DB v1
   원본 기출 이미지 입력 전 기능 검증용 샘플입니다. */
window.GAS_QUESTIONS = [
  {
    id:'gas_sample_001', license:'gas', certTitle:'가스기능사',
    level:'gas_law', groupTitle:'가스법령 활용', category:'고압가스 안전관리법',
    q:'가스시설의 허가 및 신고, 안전관리자 선임 기준과 가장 관련이 깊은 학습 영역은?',
    opts:['가스법령 활용','도면 색채 계획','건축 미장','일반 조경'], ans:0,
    ex:'가스시설의 허가, 신고, 안전관리자 선임 기준은 가스법령 활용 영역에서 다룹니다.',
    repeatCount:4, repeatTags:['가스법령','안전관리자'], source:'샘플'
  },
  {
    id:'gas_sample_002', license:'gas', certTitle:'가스기능사',
    level:'gas_accident_prevention', groupTitle:'가스사고 예방·관리', category:'비상조치',
    q:'가스 누출이 의심될 때 가장 먼저 해야 할 조치로 적절한 것은?',
    opts:['전기 스위치를 켠다','화기를 사용해 위치를 확인한다','밸브를 잠그고 환기한다','불꽃으로 누출 여부를 확인한다'], ans:2,
    ex:'가스 누출이 의심되면 화기를 금지하고 밸브를 잠근 뒤 환기하는 것이 기본 조치입니다.',
    repeatCount:5, repeatTags:['누출','비상조치','환기'], source:'샘플'
  },
  {
    id:'gas_sample_003', license:'gas', certTitle:'가스기능사',
    level:'gas_facility_maintenance', groupTitle:'가스시설 유지관리', category:'압력조정기',
    q:'가스 공급 압력을 사용 기기에 적합하게 낮추거나 일정하게 유지하는 장치는?',
    opts:['압력조정기','방열기','연수기','집진기'], ans:0,
    ex:'압력조정기는 가스 공급 압력을 적정 압력으로 조정하고 일정하게 유지하는 장치입니다.',
    repeatCount:3, repeatTags:['압력조정기','시설관리'], source:'샘플'
  },
  {
    id:'gas_sample_004', license:'gas', certTitle:'가스기능사',
    level:'gas_properties', groupTitle:'가스특성 활용', category:'연소범위',
    q:'가연성 가스가 공기 중에서 연소할 수 있는 농도 범위를 무엇이라고 하는가?',
    opts:['연소범위','비열범위','증발잠열','포화수위'], ans:0,
    ex:'연소범위는 가연성 가스와 공기가 혼합되어 점화 시 연소가 가능한 농도 범위입니다.',
    repeatCount:5, repeatTags:['연소범위','폭발범위'], source:'샘플'
  },
  {
    id:'gas_sample_005', license:'gas', certTitle:'가스기능사',
    level:'gas_facility_maintenance', groupTitle:'가스시설 유지관리', category:'배관 및 밸브',
    q:'가스 배관에서 유체의 흐름을 열거나 차단하는 데 사용하는 대표적인 부속품은?',
    opts:['밸브','절연재','연도','수면계'], ans:0,
    ex:'밸브는 배관 내 유체의 흐름을 열고 닫거나 조절하는 부속품입니다.',
    repeatCount:3, repeatTags:['배관','밸브'], source:'샘플'
  }
];
