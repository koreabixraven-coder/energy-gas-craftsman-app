/* energy_questions.js · 에너지관리기능사 샘플 문제 DB v1
   원본 기출 이미지 입력 전 기능 검증용 샘플입니다. */
window.ENERGY_QUESTIONS = [
  {
    id:'energy_sample_001', license:'energy', certTitle:'에너지관리기능사',
    level:'energy_boiler_structure', groupTitle:'보일러 설비 및 구조', category:'보일러의 종류',
    q:'보일러의 종류 중 물이 관 내부를 흐르고, 연소가스가 관 외부를 흐르는 보일러는?',
    opts:['노통연관식 보일러','수관식 보일러','주철제 보일러','전기 보일러'], ans:1,
    ex:'수관식 보일러는 물이 관 내부를 흐르고 연소가스가 관 외부를 지나며 열을 전달하는 구조입니다.',
    repeatCount:3, repeatTags:['보일러종류','수관식'], source:'샘플'
  },
  {
    id:'energy_sample_002', license:'energy', certTitle:'에너지관리기능사',
    level:'energy_boiler_structure', groupTitle:'보일러 설비 및 구조', category:'보일러 부속장치',
    q:'보일러 수면의 높이를 확인하기 위한 장치는?',
    opts:['압력계','수면계','온도계','연도댐퍼'], ans:1,
    ex:'수면계는 보일러 내부의 물 높이, 즉 수위를 확인하는 장치입니다.',
    repeatCount:4, repeatTags:['부속장치','수면계'], source:'샘플'
  },
  {
    id:'energy_sample_003', license:'energy', certTitle:'에너지관리기능사',
    level:'energy_construction_handling', groupTitle:'보일러 시공 및 취급', category:'급수 취급',
    q:'보일러 급수 처리의 주된 목적은?',
    opts:['연료 소비 증가','스케일과 부식 방지','배기가스 온도 상승','연소 공기 감소'], ans:1,
    ex:'급수 처리는 보일러 내부의 스케일 부착과 부식을 방지하여 안전하고 효율적인 운전을 돕습니다.',
    repeatCount:2, repeatTags:['급수처리','스케일'], source:'샘플'
  },
  {
    id:'energy_sample_004', license:'energy', certTitle:'에너지관리기능사',
    level:'energy_safety_piping', groupTitle:'안전관리 및 배관 일반', category:'안전장치',
    q:'보일러 압력이 설정값 이상으로 상승할 때 자동으로 증기를 배출하는 안전장치는?',
    opts:['체크밸브','감압밸브','안전밸브','스트레이너'], ans:2,
    ex:'안전밸브는 보일러 압력이 허용압력 이상으로 상승할 때 자동으로 열려 압력을 낮추는 장치입니다.',
    repeatCount:5, repeatTags:['안전장치','안전밸브'], source:'샘플'
  },
  {
    id:'energy_sample_005', license:'energy', certTitle:'에너지관리기능사',
    level:'energy_law', groupTitle:'관계 법규', category:'에너지이용합리화법',
    q:'에너지관리기능사 시험에서 관계 법규 학습 시 우선 확인해야 할 내용으로 가장 적절한 것은?',
    opts:['색상 디자인','에너지이용합리화법 등 관련 기준','사무용 문서 작성법','전기회로 납땜법'], ans:1,
    ex:'에너지관리기능사는 보일러 및 에너지 설비와 관련된 법령과 검사 기준을 함께 학습해야 합니다.',
    repeatCount:2, repeatTags:['법규','검사기준'], source:'샘플'
  }
];
