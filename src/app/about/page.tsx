import Tag from "@/components/Tag/Tag";
import s from "./About.module.scss";
import Container from "@/components/Layout/Container";

const About = () => {
  return (
    <section className={s.aboutPage}>
      <Container>
        <Tag tagName="html" hasAttr attr="lang" attrValue="ko" />
        <Tag tagName="head" padding="medium" />
        <Tag tagName="title" padding="large">
          <p>
            안녕하세요! 👋 <br />
            퍼블리셔로 시작해 프론트엔드 개발까지 확장해가고 있는 지혜민입니다.
          </p>
        </Tag>
        <Tag tagName="title" isClosed padding="large" />
        <Tag tagName="head" isClosed padding="medium" />
        <Tag tagName="body" padding="medium" />
        <Tag tagName="heaeder" hasAttr attr="class" attrValue="자기소개" padding="large">
          <ul className={s.introduce}>
            <li>
              <p>아토믹 디자인 기반의 모듈화된 UI 설계를 선호하며, 재사용성과 유지보수성을 고려한 작업에 강점을 가지고 있습니다.</p>
              <p>사용자 입장에서 더 편리한 화면을 만들기 위해 끊임없이 고민하며, 코드의 유연성과 확장성을 중요하게 생각합니다.</p>
            </li>
            <li>
              <p>직접 만든 컴포넌트가 서비스 곳곳에서 재사용되며 완성되어 가는 과정에서 큰 보람을 느끼고,</p>
              <p>기획자, 디자이너, 백엔드 개발자와의 적극적인 협업을 통해 프로젝트의 초기 기획부터 마무리까지 함께 고민하고 완성해본 경험이 있습니다.</p>
            </li>
            <li>
              <p>또한, 스스로 부족한 부분은 학습하고 팀원들과 지식을 공유하며 함께 성장하는 과정을 중요하게 생각합니다.</p>
              <p>서로의 강점을 살려 협업할 때, 더 나은 서비스를 만들 수 있다고 믿고 있습니다.</p>
            </li>
          </ul>
          <ul className={s.introduce}>
            <li>
              <h2 className={s.subTitle}>✨ 보이지 않는 디테일까지 책임지는 꼼꼼함</h2>
              <p>어릴 적부터 무언가를 정리하고 계획하는 걸 좋아했습니다.</p>
              <p>학창 시절에는 학급 문서나 자료를 정리하는 역할을 자주 맡으며, 자연스럽게 책임감과 정리 습관을 기를 수 있었습니다.</p>
            </li>
            <li>
              <p>이런 경험은 개발을 배우는 과정에서도 큰 도움이 되었습니다.</p>
              <p>특히 컴포넌트를 구조화하고 공통된 패턴을 찾아 재사용하는 작업은 저에게 자연스럽고 즐거운 일이었으며, 팀 프로젝트에서도 강점이 되었습니다.</p>
              <p>공통 UI 컴포넌트의 인터페이스를 팀원들과 사전에 논의해 구조를 설계하고, 개발 단계에서 별도 수정 없이 바로 활용할 수 있도록 준비했습니다.</p>
              <p>
                또한, 스타일 코드의 중복을 줄이기 위해 SCSS 전역 스타일 시스템을 도입하고, 자주 사용하는 스타일을 모듈화해 팀과 적극적으로 공유함으로써 코드의
                일관성과 유지보수성을 높였습니다.
              </p>
            </li>
            <li>
              <p>
                초기 설정 단계에서 완성도를 높이려다 일정이 지연된 경험이 있지만, 이를 개선하기 위해 GitHub 프로젝트 보드를 적극 활용하며,
                <br /> 전체 일정의 80% 수준까지 빠르게 완료한 뒤 보완하는 전략을 적용했습니다.
              </p>
            </li>
            <li>
              <p>이처럼 꼼꼼함을 강점으로 책임감 있게 문제를 해결하며 꾸준히 성장하는 개발자입니다.</p>
            </li>
          </ul>
        </Tag>
        <Tag tagName="heaeder" isClosed padding="large" />
        <Tag tagName="main" hasAttr attr="class" attrValue="기술과 경험, 그리고 경력" padding="large" className={s.marginTop}>
          <div className={s.workExperience}>
            <ul className={s.aboutbox}>
              <li>
                <h2 className={s.subTitle}>✍️ 사용 기술과 경험</h2>
                <h3 className={s.title}>
                  <em>Next.js, React</em>
                </h3>
                <div className={s.description}>
                  <p>컴포넌트를 Atomic한 단위로 설계하는 것을 선호하며, 재사용성과 확장성을 고려한 개발을 지향합니다.</p>
                  <p>반복적으로 사용되는 비즈니스 로직은 커스텀 Hook으로 모듈화하여 유지보수성과 가독성을 높입니다.</p>
                  <p>불필요한 리렌더링을 최소화하기 위해 useEffect, useCallback, useMemo를 활용하여 컴포넌트를 최적화합니다.</p>
                  <p>Next.js 14 App Router 환경에서 Server Actions을 활용한 개발 경험이 있습니다.</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>TypeScript</em>
                </h3>
                <div className={s.description}>
                  <p>API 응답 타입을 명확히 정의하여 잘못된 요청을 사전에 방지하고, 안정성을 높입니다.</p>
                  <p>컴포넌트와 페이지의 props 및 함수 인자에 타입을 지정하여 예상치 못한 오류를 사전에 예방합니다.</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>Zustand</em>
                </h3>
                <div className={s.description}>
                  <p>전역 상태 관리가 필요한 경우 Zustand를 활용하여 효율적으로 상태를 관리하고, 가독성과 유지보수성을 고려한 Store를 설계합니다.</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>SCSS, CSS Module, TailwindCSS, Styled-Components</em>
                </h3>
                <div className={s.description}>
                  <p>SCSS, CSS Module, TailwindCSS, Styled-Components을 활용한 다양한 스타일링 경험이 있습니다.</p>
                  <p>컴포넌트 기반 스타일링을 통해 유지보수성을 높이고, 프로젝트에 적합한 스타일링 방식을 선택하여 적용합니다.</p>
                  <p>전역 스타일을 관리하고, 테마별 색상 및 크기 단위를 변수로 관리하여 유지보수성을 높입니다.</p>
                  <p>반응형 디자인 구현과 next-themes를 활용한 다크 모드 적용 등, UI/UX 최적화를 위한 경험이 있습니다.</p>
                </div>
              </li>
            </ul>

            <ul className={s.aboutbox}>
              <li>
                <h2 className={s.subTitle}>💻 경력</h2>
                <h3 className={s.title}>
                  <em>커넥트웨이브</em> <span>웹 퍼블리셔 2025.05 ~ 재직중</span>
                </h3>
                <div className={s.description}>
                  <p>React 기반 AI 에디터 솔루션 프로젝트에 참여하여, 블록 단위 상세 페이지 스킨 설계 및 퍼블리싱 수행</p>
                  <p>재사용 가능한 UI 컴포넌트와 디자인 시스템 가이드 구축을 통해 일관된 디자인 구현과 개발 생산성 향상에 기여</p>
                  <p>자사 React 웹사이트 및 2.0 솔루션을 유지보수하며, 기획안에 따른 UI 컴포넌트 개선 작업으로 UX 품질 향상에 기여</p>
                  <p>이벤트 프로모션 페이지를 퍼블리싱하며, 다양한 브라우저와 디바이스 환경에서 접근성을 강화하고 사용자 유입률 향상에 기여</p>
                  <p>Git/GitHub을 활용한 형상 관리와 Jira 기반 협업으로 개발자·기획·디자인 팀 간 원활한 커뮤니케이션 수행</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>한국학술정보</em> <span>웹 퍼블리셔 2020.10 ~ 2024.04</span>
                </h3>
                <div className={s.description}>
                  <p>총 37개 학회·대학 홈페이지와 논문 투고 시스템(JOSS) 구축 및 유지보수</p>
                  <p>SCSS 기반 모듈화 스타일링과 모바일·태블릿·PC 대응 반응형 구현을 통해 유지보수성과 코드 재사용성 향상에 기여</p>
                  <p>낙후된 테이블 코드를 시멘틱 마크업으로 전면 개선하고, SEO 최적화를 통해 추가 계약률 24% 증가 달성</p>
                  <p>기획·자료 검토·견적 산출부터 사후 고객 서비스까지 전 과정 체계적 관리로 장기적 고객 신뢰 및 유치 확보</p>
                  <p>FTP 프로토콜을 활용해 퍼블리싱 페이지 직접 배포 및 robots.txt와 사이트맵 설정으로 검색 엔진 최적화에 기여</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>엔타스듀티프리</em> <span>웹 퍼블리셔 2019.04 ~ 2019.11</span>
                </h3>
                <div className={s.description}>
                  <p>인터넷 면세점 사이트 유지보수 및 이벤트 페이지 구축</p>
                  <p>JSP 기반 환경에서 페이지 구조 개선 및 마크업·스타일 코드 리팩토링으로 화면 일관성과 사용성 향상</p>
                  <p>기획·디자인·개발 팀과 협업하여 고객 맞춤형 UI/UX 구현 및 페이지 최적화를 통해 사용자 유입률 13% 증가</p>
                </div>
              </li>
            </ul>
          </div>
        </Tag>
        <Tag tagName="main" isClosed padding="large" />
        <Tag tagName="footer" hasAttr attr="class" attrValue="교육 및 자격증" padding="large" className={s.marginTop}>
          <ul className={s.aboutbox}>
            <li>
              <h3 className={s.title}>
                <em>코드잇 스프린트 프론트엔드 9기</em> <span>2024.07 ~ 20024.12</span>
              </h3>
              <div className={s.description}>
                <p>Next.js, React, TypeScript, JavaScript, Git 등 프론트엔드 핵심 기술 심화 강의 수강</p>
                <p>3개 팀 프로젝트 참여를 통해 협업 및 다양한 기술의 통합적 활용 역량 강화</p>
                <p>GitHub 코드 리뷰 및 피드백 반영 과정을 통해 코드 품질 개선과 소통 능력 향상</p>
              </div>
            </li>
            <li className={s.education}>
              <div className={s.educationWrap}>
                <div>
                  <h3 className={s.title}>
                    <em>한국방송통신대학교</em> <span>2021.03 ~ 2023.08</span>
                  </h3>
                  <div className={s.description}>
                    <p>컴퓨터과학과 편입/졸업</p>
                    <p>학점 4.2 / 4.5</p>
                  </div>
                </div>
                <div>
                  <h3 className={s.title}>
                    <em>경인여자대학교</em> <span>2015.02 ~ 2017.02</span>
                  </h3>
                  <div className={s.description}>
                    <p>스마트미디어과 졸업</p>
                    <p>학점 4.22 / 4.5</p>
                  </div>
                </div>
              </div>
              <div className={s.certification}>
                <h3 className={s.title}>
                  <em>자격증</em>
                </h3>
                <div className={s.description}>
                  <p>
                    정보처리기사 | 한국산업인력공단<span>2022.06</span>
                  </p>
                  <p>
                    웹디자인기능사 | 한국산업인력공단<span>2018.06</span>
                  </p>
                  <p>
                    정보처리산업기사 | 한국산업인력공단<span>2016.07</span>
                  </p>
                  <p>
                    GTQ포토샵1급 | 한국생산성본부 &#40;KPC&#41;<span>2016.06</span>
                  </p>
                  <p>
                    OCJP | Oracle<span>2016.01</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </Tag>
        <Tag tagName="footer" isClosed padding="large" />
        <Tag tagName="body" isClosed padding="medium" />
        <Tag tagName="html" isClosed />
      </Container>
    </section>
  );
};

export default About;
