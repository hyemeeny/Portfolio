export const spaceLinkPageData = [
  {
    title: "메인 페이지",
    description: [
      "사용자가 부드럽게 화면을 넘길 수 있도록 React-fullpage를 활용해 전체 화면 스크롤을 구현했습니다.",
      "역동적인 화면 구성을 위해 별과 유성 효과를 추가하고, LottieFiles를 활용해 페이지별로 생동감 있는 애니메이션을 구현했습니다.",
    ],
    image: "/images/spaceLink/main.gif",
  },
  {
    title: "회원가입 및 로그인 페이지",
    description: [
      "JWT 토큰을 쿠키에 저장하는 인증 방식을 이용한 사용자 로그인 페이지 개발을 통해 보안성 강화했습니다.",
      "로그아웃 시 쿠키에 저장된 토큰도 함께 삭제되도록 구현하여, 인증 정보를 바로 제거하고 자동 로그인을 방지했습니다.",
      "Zod와 React-Hook-Form으로 유효성 검사를 추가해 사용자 입력의 정확성과 안정성을 강화했습니다.",
    ],
    image: "/images/spaceLink/login.gif",
  },
  {
    title: "링크 및 폴더 기능",
    description: [
      "번들 크기 최적화, 초기 로딩 속도 향상, 및 보안 강화를 위해 링크 및 폴더 데이터 패칭을 서버 컴포넌트로 구현하였습니다.",
      "데이터의 최신 상태를 유지하기 위해 Server Action의 revalidateTag를 활용하여 링크와 폴더 단위로 캐시를 갱신하도록 구현했습니다.",
      "POST와 PATCH를 Server Action으로 RESTful API를 연동하여 백엔드와의 원활한 데이터 통신을 구현했습니다.",
      "코드 중복을 최소화하고 재사용성을 높이기 위해 공용 모달을 제작하여 웹페이지의 효율성과 사용자 경험을 향상시켰습니다.",
    ],
    image: "/images/spaceLink/link-folder.gif",
  },
  {
    title: "검색 기능",
    description: ["서버 컴포넌트에서 params를 이용해 검색 기능을 구현했습니다."],
    image: "/images/spaceLink/search.gif",
  },
  {
    title: "즐겨찾기 페이지",
    description: ["POST와 PATCH를 Server Action으로 RESTful API를 연동하여 백엔드와의 원활한 데이터 통신을 구현했습니다."],
    image: "/images/spaceLink/favorite.gif",
  },
];

export const travelmakerPageData = [
  {
    title: "로그인 페이지",
    description: [
      "JWT 토큰을 쿠키에 저장하는 인증 방식을 이용한 사용자 로그인 페이지 개발을 통해 보안성 강화했습니다.",
      "로그아웃 시 쿠키에 저장된 토큰도 함께 삭제되도록 구현하여, 인증 정보를 바로 제거하고 자동 로그인을 방지했습니다.",
    ],
    image: "/images/travelmaker/login.gif",
  },
  {
    title: "내 프로필 페이지",
    description: [
      "번들 크기를 줄이고 초기 로딩 속도를 향상시키며 보안을 강화하기 위해, 내 프로필 페이지와 헤더의 유저 데이터 패칭을 서버 컴포넌트로 구현했습니다.",
      "사용성 테스트 및 피드백 수집을 통해 공용 메뉴바와 사이드바를 제작하여 코드 중복을 줄이고 웹페이지 사용성 개선했습니다.",
      "Zod와 React-Hook-Form으로 유효성 검사를 추가해 사용자 입력의 정확성과 안정성을 강화했습니다.",
    ],
    image: "/images/travelmaker/profile.gif",
  },
  {
    title: "내 체험 등록 및 수정 페이지",
    description: [
      "성능 최적화와 보안을 강화하기 위해 수정 페이지의 정적 렌더링 데이터 패칭을 서버 컴포넌트로 구현했습니다. 이를 통해 불필요한 클라이언트 렌더링을 줄이고, 서버에서 직접 데이터를 처리함으로써 보안을 더욱 강화했습니다.",
      "내 체험 등록 및 수정 페이지를 하나의 컴포넌트로 제작하여 코드의 중복을 줄였습니다.",
      "POST와 PATCH를 Server Action으로 RESTful API를 연동하여 백엔드와의 원활한 데이터 통신을 구현했습니다.",
      "사용자 편의성을 위해 React-Daum-Postcode를 통한 주소 검색 기능을 추가했습니다.",
      "UI 개선을 위해 react-datepicker 캘린더를 커스텀 했습니다.",
    ],
    image: "/images/travelmaker/activity.gif",
  },
  {
    title: "공통 작업",
    description: ["스타일 관리 효율성을 높이기 위해 SCSS Variables을 통한 반응형 및 Global Style 추가했습니다."],
  },
];
