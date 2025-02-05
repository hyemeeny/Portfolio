import Image from "next/image";
import s from "./Modal.module.scss";

const TravelmakerModal = () => {
  return (
    <div>
      <Image src="/images/travelmaker/login.gif" width={800} height={100} alt="login page" />
      <ul className={s.skillDescription}>
        <li>JWT 토큰을 쿠키에 저장하는 인증 방식을 이용한 사용자 로그인 페이지 개발을 통해 보안성 강화</li>
        <li>번들 크기를 줄이고 초기 로딩 속도 향상 및 유저 데이터 보안을 위해 내 프로필 페이지 및 헤더를 서버 컴포넌트로 구현</li>
        <li>
          내 체험 등록 및 수정 페이지를 하나의 컴포넌트로 제작하여 코드 중복을 줄이고 Server Action으로 RESTful API를 연동하여 백엔드와의 원활한 데이터 통신
          구현
        </li>
        <li>사용성 테스트 및 피드백 수집을 통해 공용 메뉴바와 사이드바를 제작하여 코드 중복을 줄이고 웹페이지 사용성 개선</li>
        <li>사용자 편의성을 위해 React-Daum-Postcode를 통한 주소 검색 기능 추가</li>
        <li>스타일 관리 효율성을 높이기 위해 SCSS Variables을 통한 반응형 및 Global Style 추가</li>
      </ul>
    </div>
  );
};

export default TravelmakerModal;
