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
          <p>안녕하세요, 프론트엔드 개발자 지혜민입니다!</p>
        </Tag>
        <Tag tagName="title" isClosed padding="large" />
        <Tag tagName="head" isClosed padding="medium" />
        <Tag tagName="body" padding="medium" />
        <Tag tagName="heaeder" hasAttr attr="class" attrValue="자기소개" padding="large">
          <ul className={s.introduce}>
            <li>
              <p>안녕하세요! 👋</p>
              <p>아토믹 디자인 패턴을 바탕으로 작은 단위의 컴포넌트 개발을 좋아하는 프론트엔드 개발자 지혜민입니다.</p>
            </li>
            <li>
              <p>코드의 유연성을 중요하게 생각하며, 직접 만든 컴포넌트가 재사용되면서 서비스가 완성되는 과정에서 큰 보람을 느낍니다.</p>
              <p>기획자, 디자이너, 백엔드 개발자와 적극적으로 협업하며, 프로젝트의 시작부터 마무리까지 함께 고민하고 완성해본 경험이 있습니다.</p>
            </li>
            <li>
              <p>배우고 성장하는 과정에서 즐거움을 느끼며, 스스로 부족한 부분을 학습하고 이를 팀원들과 공유하는 것에 큰 가치가 있다고 여깁니다.</p>
              <p>함께 고민하고 서로의 강점을 살려 부족한 부분을 보완해 나갈 때, 더 나은 서비스를 만들어갈 수 있다고 생각합니다.</p>
            </li>
          </ul>
        </Tag>
        <Tag tagName="heaeder" isClosed padding="large" />
        <Tag tagName="main" hasAttr attr="class" attrValue="기술과 경험, 그리고 경력" padding="large" className={s.marginTop}>
          <div className={s.workExperience}>
            <ul className={s.aboutbox}>
              <li>
                <h2 className={s.workTitle}>✍️ 사용 기술과 경험</h2>
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
                  <p>반응형 디자인 및 다크 모드와 같은 UI/UX 최적화 경험이 있습니다.</p>
                </div>
              </li>
            </ul>

            <ul className={s.aboutbox}>
              <li>
                <h2 className={s.workTitle}>💻 경력</h2>
                <h3 className={s.title}>
                  <em>한국학술정보</em> <span>웹 퍼블리셔 2020.10 ~ 2024.04</span>
                </h3>
                <div className={s.description}>
                  <p>학회 및 대학 홈페이지 37개를 신규 구축 및 유지보수</p>
                  <p>낙후된 테이블 코드를 시멘틱 마크업으로 개선하고 SEO 최적화를 통해 추가 계약률 24% 달성</p>
                  <p>
                    홈페이지 구축 및 IT 서비스 전 과정에서 기획, 자료 검토, 견적 산출부터 사후 고객 서비스까지 체계적으로 관리하여 장기적인 고객 신뢰와 유치를
                    달성
                  </p>
                  <p>제작 완료된 퍼블리싱 페이지를 FTP 프로토콜을 이용하여 직접 배포</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>엔타스듀티프리</em> <span>웹 퍼블리셔 2019.04 ~ 2019.11</span>
                </h3>
                <div className={s.description}>
                  <p>인터넷 면세점 사이트 유지보수 및 이벤트 페이지 구축</p>
                  <p>JSP 기반 환경에서 페이지 구조를 개선하고 마크업 및 스타일 코드 리팩토링을 통해 화면 일관성과 사용성을 향상</p>
                  <p>기획, 디자인, 개발팀과 협업하여 고객 맞춤형 UI/UX를 구현하고 페이지 최적화를 통해 사용자 유입률 13% 증가</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>매스티지</em> <span>웹 퍼블리셔 2018.09 ~ 2018.12</span>
                </h3>
                <div className={s.description}>
                  <p>5개 기업 홈페이지 신규 구축 및 3개 프로젝트 서브 페이지/영문 버전 페이지 제작 및 유지보수</p>
                  <p>기획자 및 디자이너와 협업을 통해 요구사항 분석 및 UI/UX 설계 참여로 일관성 있는 구조 설계</p>
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
                <p>Next.js, React, Typescript, Javascript, git 등 프론트엔드 개발자에게 필요한 심화 기술 강의 수강</p>
                <p>3개의 팀 프로젝트 진행으로 협업하는 방법과 다양한 기술을 통합적으로 활용하는 역량 익힘</p>
                <p>스프린트 미션을 통한 GitHub 코드 리뷰 및 적극적인 피드백 반영</p>
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
