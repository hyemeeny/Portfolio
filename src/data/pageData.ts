export const sellfitData = [
  {
    title: '셀핏AI 프로젝트',
    participation: '참여도 100%',
    description: [
      '상세페이지 스킨 28개 중 15개를 블록 단위 컴포넌트 구조로 설계 및 퍼블리싱하여, 다양한 템플릿에 쉽게 적용할 수 있도록 구조화하고 템플릿 확장성과 재사용성을 확보했습니다.',
      '시맨틱 마크업과 BEM 기반 클래스 네이밍 규칙을 적용해 퍼블리싱 일관성을 유지하고, 반응형 그리드 구조로 다양한 해상도에서도 레이아웃이 깨지지 않도록 구현했습니다.',
      'SVG 속성값을 데이터 파일로 분리하여 스킨 커스터마이징 구조를 개선하고, 디자인 변경 시 마크업 수정 없이 데이터만으로 스킨 옵션을 확장할 수 있도록 했습니다.',
      '버튼, 모달, 배너 등 공용 UI 컴포넌트를 구현하고 퍼블리싱 가이드를 제작하여 팀 내 일관된 UI 유지와 작업 효율을 높였습니다.',
      'Zustand를 활용해 모달 상태를 전역으로 관리하여 컴포넌트 간 props drilling을 줄이고 코드 재사용성과 유지보수성을 강화했습니다.',
    ],
    image: '/images/playauto/sellfit_ai.png',
    url: 'https://sellfit-ai.plto.com/editor',
  },
];

export const playAutoData = [
  {
    title: '이용요금 페이지',
    description: [
      '탭 기능과 JSON 데이터 바인딩을 활용하여 사용자가 버전별 요금을 쉽게 확인할 수 있도록 구현했습니다.',
      '버전별 이동 버튼을 분기 처리하고, 결제 주기별 할인 기능을 적용하여 사용자에게 직관적인 요금 정보를 제공했습니다.',
      '토글 버튼과 동적 계산을 통해 할인 적용 금액을 실시간으로 확인할 수 있도록 구현했으며, 툴팁을 활용해 각 요금제의 상세 기능 정보를 제공합니다.',
      '시맨틱 태그와 표(table) 마크업을 활용해 요금표 정보를 구조적으로 퍼블리싱하여 스크린리더에서도 항목별 비교가 가능하도록 접근성을 고려했습니다.',
      '뷰포트 단위에 따른 반응형 분기 처리로 모바일에서는 탭 형태로, 데스크톱에서는 비교표 형태로 전환되도록 퍼블리싱했습니다.',
    ],
    image: '/images/playauto/charge.png',
    url: 'https://www.plto.com/introduction/Charge/?tabActive=0',
  },
  {
    title: '통합솔루션 소개 페이지',
    description: [
      '풀페이지 스크롤 기능을 적용하여 각 솔루션의 특징을 한눈에 볼 수 있도록 구현했습니다.',
      '해당 섹션 진입 시 애니메이션이 적용되도록 IntersectionObserver를 활용하여 콘텐츠 전환을 구현했습니다.',
      '터치 스크롤 이벤트에서 발생하는 이벤트 버블링을 e.stopPropagation()으로 제어했으나 링크 작동 문제와 사파리 충돌이 발생하여, CSS Scroll Snap을 적용해 크로스브라우징 문제를 해결하고 부드러운 슬라이드 전환을 구현했습니다.',
      '섹션별 시맨틱 구조(section, article)를 적용해 풀페이지 스크롤 환경에서도 콘텐츠 구조가 명확하게 유지되도록 퍼블리싱했습니다.',
      'iOS Safari, Android Chrome 등 모바일 브라우저별 스크롤 동작 차이를 직접 테스트하며 크로스브라우저 호환성을 검증하고 보정했습니다.',
    ],
    image: '/images/playauto/info.png',
    url: 'https://www.plto.com/introduction/Info',
  },
  {
    title: '브랜드타겟 페이지',
    description: [
      '버튼 텍스트가 섹션 진입 시 변경되도록 구현하여 사용자 인터랙션을 강화했습니다.',
      '브랜드 로고에 서로 엇갈리는 무한 슬라이드 애니메이션을 적용하여 동적인 UI 효과를 구현했습니다.',
      'CSS keyframe 애니메이션과 will-change 속성을 활용해 무한 슬라이드 구간에서도 끊김 없는 렌더링 성능을 확보했습니다.',
      '이미지 alt 텍스트와 포커스 스타일을 보완하여 키보드 탐색 및 스크린리더 사용자도 브랜드 정보를 인지할 수 있도록 접근성을 개선했습니다.',
    ],
    image: '/images/playauto/brandTarget.png',
    url: 'https://www.plto.com/ads/BrandTarget',
  },
  {
    title: '셀핏AI 페이지',
    description: [
      '메인 이미지에 마우스 오버 시 확대와 텍스트 표시가 나타나도록 구현했습니다.',
      '스크롤 시 각 섹션이 애니메이션과 함께 표시되도록 구성했습니다.',
      'sticky 플로팅바를 적용하여 주요 정보를 항상 확인할 수 있도록 구현했습니다.',
      'IntersectionObserver 기반 스크롤 섹션 감지로 플로팅 버튼 텍스트가 진입 섹션에 맞춰 동적으로 전환되도록 구현했습니다.',
      'LazyLoadImage를 적용해 이미지 지연 로딩을 처리하고 페이지 성능을 개선했으며, 메타태그와 구조화 데이터를 보완해 검색 노출을 최적화했습니다.',
    ],
    image: '/images/playauto/sellfit.png',
    url: 'https://www.plto.com/additional/Sellfit',
  },
  {
    title: '프로모션 페이지',
    description: [
      '마케팅 팀과 협업하여 프로모션 페이지 UI/UX를 개선하고, React로 주요 기능과 모달/버튼 인터랙션을 구현했습니다.',
      '메타태그와 구조화된 SEO 최적화를 적용하여 검색 효율을 높였습니다.',
      '이미지 Lazy Loading과 IntersectionObserver를 활용하여 웹 성능을 최적화하고 페이지 로딩 속도를 개선, 사용자 경험을 향상시켰습니다.',
      '마케팅·영업팀과의 협업을 통해 이벤트·프로모션 일정에 맞춰 반응형 퍼블리싱을 빠르게 대응하고, 크로스브라우저 테스트와 접근성 개선(시맨틱 마크업, 대비 색상 보정)을 함께 적용했습니다.',
      'Git/GitHub 기반 형상 관리와 Jira를 통한 개발·기획·디자인 팀 간 협업으로 일정 내 배포를 안정적으로 진행했습니다.',
    ],
    image: '/images/playauto/promotion.png',
    url: 'https://plto.com/event/Promo_2508',
  },
];

export const ksiData = [
  {
    title: '공통 운영 작업',
    description: [
      'SCSS 변수·믹스인 기반 스타일 모듈화로 모바일·태블릿·PC 대응 반응형 웹을 구현하고 다수 사이트의 스타일 일관성을 확보했습니다.',
      '테이블 기반 레이아웃을 시맨틱 구조로 전환하고 SEO 친화적 마크업을 적용했습니다.',
      'Google Search Console·네이버 서치어드바이저를 등록하고 robots.txt·사이트맵 설정으로 검색 노출 환경을 구성했습니다.',
      '폼 마크업·비회원 분기 처리·결제 연동(이지페이·토스)으로 사전등록·초록등록·회비납부 기능을 구현했습니다.',
      '학회와 직접 소통하며 요구사항 수집부터 단가 안내, DB 이전, 도메인 연결, SSL 적용까지 오픈 전 과정을 주도적으로 조율했습니다.',
    ],
  },
  {
    title: '한국보건행정학회',
    description: [
      '학회 공지·행사일정을 한눈에 파악할 수 있는 대시보드형 메인을 구성하고 반응형으로 퍼블리싱했습니다.',
      '사전등록 페이지 다중 입력 및 비회원 결제 흐름 재설계로 전환율 24% 달성(770건 중 187건)했습니다.',
    ],
    image: '/images/ksi/kshpa.org_.png',
    url: 'https://kshpa.org/',
  },

  {
    title: '탄소중립순환경제학회',
    description: ['친환경 테마에 맞춰 그린 톤 컬러와 풀스크린 비주얼을 적용하여 학회 홈페이지를 퍼블리싱했습니다.'],
    image: '/images/ksi/acce.or.kr_.png',
    url: 'https://acce.or.kr/',
  },
  {
    title: '현대영어교육학회',
    description: ['논문 투고 프로세스를 시각화하고 학술대회·워크샵 일정을 명확하게 노출하도록 레이아웃을 구성했습니다.'],
    image: '/images/ksi/meeso.or.kr_.png',
    url: 'https://meeso.or.kr/',
  },
  {
    title: '한국노어노문학회',
    description: ['공지사항·소식지·학술대회 일정을 한눈에 파악할 수 있도록 정보 구조를 정리하고 퍼블리싱했습니다.'],
    image: '/images/ksi/karll.or.kr_.png',
    url: 'https://karll.or.kr/',
  },
  {
    title: '한국언어정보학회',
    description: ['학회 소개, 논문 투고, 공지사항 등 주요 콘텐츠를 시맨틱 마크업 기반으로 구조화하여 퍼블리싱했습니다.'],
    image: '/images/ksi/ksli.or.kr_.png',
    url: 'https://ksli.or.kr/',
  },
  {
    title: '한국PR학회',
    description: ['국제 컨퍼런스 정보와 학회 활동을 효과적으로 전달할 수 있도록 레이아웃을 설계하고 퍼블리싱했습니다.'],
    image: '/images/ksi/kaspr.net_.png',
    url: 'http://kaspr.net/',
  },
  {
    title: '한국사회교과교육학회',
    description: ['학회 일정과 공지사항을 중심으로 한 학술 홈페이지를 웹 표준에 맞게 퍼블리싱했습니다.'],
    image: '/images/ksi/kasse.or.kr_.png',
    url: 'https://kasse.or.kr/',
  },
  {
    title: '홍익대학교 법학연구소',
    description: ['연구소 소개와 학술지 정보를 체계적으로 구성하고, 크로스 브라우저 환경에서도 동일하게 표시되도록 퍼블리싱했습니다.'],
    image: '/images/ksi/hongiklawcenter.kr_.png',
    url: 'https://hongiklawcenter.kr/',
  },
  {
    title: '현대영화연구소',
    description: ['영화 연구 학술 자료와 소식을 아카이브 형태로 정리하고 반응형 레이아웃으로 퍼블리싱했습니다.'],
    image: '/images/ksi/cocri.hanyang.ac.kr_.png',
    url: 'http://cocri.hanyang.ac.kr/',
  },
  {
    title: '심훈선생기념사업회',
    description: ['문학·역사 콘텐츠를 중심으로 기념사업 활동과 공지사항을 효과적으로 전달하도록 퍼블리싱했습니다.'],
    image: '/images/ksi/shimhoon.com_.png',
    url: 'https://shimhoon.com/',
  },
  {
    title: '산림경영정보학회',
    description: ['학술 연구와 학회 공지를 중심으로 정보 접근성을 고려한 레이아웃으로 퍼블리싱했습니다.'],
    image: '/images/ksi/ksfmi.co.kr_.png',
    url: 'https://ksfmi.co.kr/',
  },
  {
    title: '아프리카미래학회',
    description: ['학회 소개와 연구 활동을 직관적으로 파악할 수 있도록 구조를 정리하고 반응형으로 퍼블리싱했습니다.'],
    image: '/images/ksi/afs.re.kr_.png',
    url: 'https://afs.re.kr/',
  },
  {
    title: '한국운동역학회',
    description: [
      '학술대회 일정과 논문 정보를 명확하게 노출하고 모바일 환경까지 고려한 반응형 레이아웃으로 퍼블리싱했습니다.',
      '영문 버전 페이지를 별도로 구성하여 국제 학술 교류에 대응했습니다.',
    ],
    image: '/images/ksi/kssb.kr_.png',
    url: 'https://xn--3e0bv5jy2qywaw94cna74s.kr/',
  },
  {
    title: '한국민족운동사학회',
    description: ['역사 학회의 연구 성과와 활동을 체계적으로 정리하고 웹 표준에 맞게 퍼블리싱했습니다.'],
    image: '/images/ksi/hknm.or.kr_.png',
    url: 'http://hknm.or.kr/',
  },
  {
    title: '부경역사연구소',
    description: ['지역 역사 연구소의 학술 자료와 소식을 구조적으로 정리하여 퍼블리싱했습니다.'],
    image: '/images/ksi/pkh.co.kr_.png',
    url: 'http://pkh.co.kr/',
  },
  {
    title: '한국지명학회',
    description: ['지명 연구 학술 정보와 공지사항을 시맨틱 마크업 기반으로 구성하여 퍼블리싱했습니다.'],
    image: '/images/ksi/placename.or.kr_.png',
    url: 'https://placename.or.kr/',
  },
  {
    title: '한말연구학회',
    description: ['한국어 연구 학회의 논문·공지 콘텐츠를 접근성을 고려한 구조로 정리하고 퍼블리싱했습니다.'],
    image: '/images/ksi/hanmal.or.kr_.png',
    url: 'https://hanmal.or.kr/',
  },
  {
    title: '열처리공학회 학술대회',
    description: ['학술대회 일정과 논문 접수 안내를 한눈에 파악할 수 있도록 랜딩 페이지 형태로 구성하고 퍼블리싱했습니다.'],
    image: '/images/ksi/ksht.or.kr_.png',
    url: 'https://www.ksht.or.kr/cfr/202310/index.asp',
  },
  {
    title: '한국광물학회',
    description: ['광물 연구 학회의 학술 정보와 학회 활동을 웹 표준에 맞게 정리하고 유지보수했습니다.'],
    image: '/images/ksi/mskorea.or.kr_.png',
    url: 'http://mskorea.or.kr/',
  },
  {
    title: 'NEUL STUDIO',
    description: [
      '촬영부터 앨범 디자인까지 서비스를 소개하는 스튜디오 홈페이지를 반응형으로 퍼블리싱했습니다.',
      '풀페이지 스크롤을 적용하여 각 서비스 섹션을 부드럽게 전환할 수 있도록 구현했습니다.',
    ],
    image: '/images/ksi/neul-studio.com_.png',
    url: 'https://neul-studio.com/',
  },
];

export const ksiJournalData = [
  {
    title: '논문 투고 시스템',
    description: [
      '투고자·심사위원·편집위원·편집위원장 역할별 워크플로우를 파악하고, 심사 단계·구성에 따른 화면 접근 권한 및 노출 항목 기준을 개발자와 협의해 확정했습니다.',
      '빌더 기반 논문 투고 시스템에서, 테이블·모달·상태 뱃지 등 관리자 화면 UI 컴포넌트를 학회별 요구사항에 맞게 직접 퍼블리싱했습니다.',
      '업체 확인 문서를 기반으로 메일·알림·결제 시스템의 활용 기능을 확정하고, 빌더 환경 초기 세팅과 운영 가이드 작성을 전담했습니다.',
      'KISS 검색 위젯을 홈페이지에 연동하고, 논문 검색 페이지로 이동하는 링크를 연결해 검색 환경을 통합했습니다.',
    ],
    image: '/images/ksi/ksiJournal.png',
  },
];

export const spaceLinkData = [
  {
    title: '메인 페이지',
    description: [
      'React-fullpage를 활용해 전체 화면 풀페이지 스크롤을 구현하고, 별·유성 CSS 애니메이션으로 몰입감 있는 비주얼을 구성했습니다.',
      'LottieFiles를 활용해 페이지별로 생동감 있는 애니메이션을 적용하고, 섹션 전환 시 자연스러운 인터랙션을 구현했습니다.',
    ],
    image: '/images/spaceLink/main.gif',
  },
  {
    title: '회원가입 및 로그인 페이지',
    description: [
      'Zod와 React-Hook-Form으로 유효성 검사를 적용하고, 이메일 입력값을 useDebounce로 디바운싱하여 중복 확인 요청의 불필요한 API 호출을 최소화했습니다.',
      '서버 에러 응답 시 setError로 해당 필드에 직접 에러 메시지를 표시하여 사용자가 오류를 즉시 인지하고 수정할 수 있도록 UX를 개선했습니다.',
      'Server Action 기반 인증 구조와 httpOnly 쿠키로 보안을 강화하고, redirect() 기반 하드 네비게이션으로 로그인 후 페이지 전환 흐름을 개선했습니다.',
    ],
    image: '/images/spaceLink/signup-login.gif',
  },
  {
    title: '링크 및 폴더 기능',
    description: [
      '공용 모달·입력 필드·버튼 컴포넌트를 설계하고 Zustand로 전역 모달 상태를 관리하여 일관된 UI와 재사용성을 확보했습니다.',
      '추가·수정·삭제·즐겨찾기 등 다양한 사용자 인터랙션에 대응하는 UI를 구현하고, 각 액션에 맞는 모달 흐름과 상태 변화를 설계했습니다.',
      '링크·폴더 데이터를 Promise.all로 병렬 패칭하고 revalidateTag로 캐시를 갱신하여 초기 로딩 속도와 데이터 최신성을 확보했습니다.',
    ],
    image: '/images/spaceLink/link-folder.gif',
  },
  {
    title: '검색 기능',
    description: [
      'URLSearchParams와 useRouter로 검색 조건을 URL에 동기화하여 새로고침·히스토리 이동·공유 시에도 동일한 검색 결과를 유지했습니다.',
      'searchParams를 통해 서버 컴포넌트에서 URL 쿼리를 읽어 서버 사이드에서 검색 결과를 처리하고 초기 렌더링 성능을 개선했습니다.',
    ],
    image: '/images/spaceLink/search.gif',
  },
  {
    title: '즐겨찾기 페이지',
    description: [
      '미들웨어에서 accessToken 쿠키 유무를 검증하여 미인증 사용자를 로그인 페이지로 redirect하고, 인증된 사용자만 접근할 수 있도록 라우트 단위로 접근을 제어했습니다.',
      '사용자 정보와 즐겨찾기 데이터를 서버 컴포넌트에서 병렬로 요청하여 초기 렌더링 속도를 개선했습니다.',
    ],
    image: '/images/spaceLink/favorite.gif',
  },
];

export const travelmakerData = [
  {
    title: '스타일 시스템',
    description: [
      'SCSS 변수와 믹스인을 정의하여 색상·타이포그래피·간격 등 공통 스타일 값을 중앙에서 관리하고 프로젝트 전반의 스타일 일관성을 확보했습니다.',
      '반응형 브레이크포인트를 믹스인으로 정의하여 모바일·태블릿·PC 환경에서 일관된 레이아웃을 효율적으로 구현했습니다.',
      'Global Style을 설정하여 프로젝트 전반의 기본 스타일을 통일하고 불필요한 스타일 중복을 제거했습니다.',
    ],
  },
  {
    title: '로그인 페이지',
    description: [
      'JWT 토큰을 httpOnly 쿠키에 저장하는 인증 방식으로 보안을 강화하고, 로그아웃 시 토큰을 즉시 삭제하여 자동 로그인을 방지했습니다.',
      'Zod와 React-Hook-Form으로 유효성 검사를 적용하여 사용자 입력의 정확성과 안정성을 강화했습니다.',
    ],
    image: '/images/travelmaker/login.gif',
  },
  {
    title: '내 프로필 페이지',
    description: [
      '사용성 테스트 및 피드백을 바탕으로 공용 메뉴바와 사이드바를 설계·제작하여 코드 중복을 줄이고 일관된 사용자 경험을 확보했습니다.',
      'Zod와 React-Hook-Form으로 프로필 수정 폼의 유효성 검사를 적용하여 사용자 입력의 정확성을 강화했습니다.',
      '유저 데이터 패칭을 서버 컴포넌트로 구현하여 초기 로딩 속도를 개선하고 불필요한 클라이언트 렌더링을 줄였습니다.',
    ],
    image: '/images/travelmaker/profile.gif',
  },
  {
    title: '내 체험 등록 및 수정 페이지',
    description: [
      '등록·수정 페이지를 하나의 공용 컴포넌트로 설계하여 코드 중복을 줄이고 유지보수성을 높였습니다.',
      'react-datepicker 캘린더를 커스텀하여 서비스 디자인에 맞는 UI로 개선하고 사용자 편의성을 높였습니다.',
      'React-Daum-Postcode를 활용한 주소 검색 기능을 추가하여 사용자 입력 편의성을 개선했습니다.',
      'POST·PATCH를 Server Action으로 RESTful API와 연동하여 서버 컴포넌트 기반의 데이터 처리 구조를 구현했습니다.',
    ],
    image: '/images/travelmaker/activity.gif',
  },
];
