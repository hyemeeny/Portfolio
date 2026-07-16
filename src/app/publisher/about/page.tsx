import Tag from '@/components/Tag/Tag';
import s from '@/app/about/About.module.scss';
import Container from '@/components/Layout/Container';

const About = () => {
  return (
    <section className={s.aboutPage}>
      <Container>
        <Tag tagName='html' hasAttr attr='lang' attrValue='ko' />
        <Tag tagName='head' padding='medium' />
        <Tag tagName='title' padding='large'>
          <p>
            안녕하세요! 👋 <br />웹 퍼블리셔로 시작해 React·Next.js 기반 UI 개발로 확장하고 있는 지혜민입니다.
          </p>
        </Tag>
        <Tag tagName='title' isClosed padding='large' />
        <Tag tagName='head' isClosed padding='medium' />
        <Tag tagName='body' padding='medium' />
        <Tag tagName='heaeder' hasAttr attr='class' attrValue='자기소개' padding='large'>
          <ul className={s.introduce}>
            <li>
              <p>시맨틱 마크업과 컴포넌트 기반 UI 설계를 지향하며, 재사용성과 유지보수성을 고려한 구조로 화면을 구현합니다.</p>
              <p>사용자 입장에서 더 편리한 화면을 만들기 위해 끊임없이 고민하며, 접근성과 크로스브라우저 호환성을 중요하게 생각합니다.</p>
            </li>
            <li>
              <p>직접 설계한 컴포넌트가 서비스 곳곳에서 재사용되며 완성되어 가는 과정에서 큰 보람을 느끼고,</p>
              <p>기획자, 디자이너, 개발자와의 적극적인 협업을 통해 프로젝트의 초기 기획부터 마무리까지 함께 고민하고 완성해본 경험이 있습니다.</p>
            </li>
            <li>
              <p>또한, 스스로 부족한 부분은 학습하고 팀원들과 지식을 공유하며 함께 성장하는 과정을 중요하게 여깁니다.</p>
              <p>서로의 강점을 살린 협업이 더 나은 사용자 경험을 만든다고 생각합니다.</p>
            </li>
          </ul>
          <ul className={s.introduce}>
            <li>
              <h2 className={s.subTitle}>✨ 구조를 설계하고 흐름을 만드는 퍼블리셔</h2>
              <p>
                5년간 다양한 웹사이트와 솔루션에서 UI 컴포넌트를 구조화하고,
                <br /> SCSS 기반 스타일 시스템과 시맨틱 마크업으로 코드 일관성과 유지보수성을 향상시켰습니다.
              </p>
            </li>
            <li>
              <p>
                공용 UI 컴포넌트를 팀원과 논의하며 설계하고, 퍼블리싱 가이드를 제작하여 개발 단계에서 별도 수정 없이 바로 활용하도록 준비하며 협업 효율을
                높였습니다.
              </p>
            </li>
            <li>
              <p>
                Jira 칸반 보드를 활용해 일정과 작업을 체계적으로 관리하며, 퍼블리싱뿐 아니라 UI 개발 전반에 걸쳐 사용자 경험 향상과 팀 생산성 개선에
                기여하였습니다.
              </p>
              <p>꼼꼼함을 강점으로 책임감 있게 문제를 해결하는 퍼블리셔로 꾸준히 성장하고 있습니다.</p>
            </li>
          </ul>
        </Tag>
        <Tag tagName='heaeder' isClosed padding='large' />
        <Tag tagName='main' hasAttr attr='class' attrValue='기술과 경험, 그리고 경력' padding='large' className={s.marginTop}>
          <div className={s.workExperience}>
            <ul className={s.aboutbox}>
              <li>
                <h2 className={s.subTitle}>✍️ 사용 기술과 경험</h2>
                <h3 className={s.title}>
                  <em>HTML/CSS</em>
                </h3>
                <div className={s.description}>
                  <p>시맨틱 마크업을 기반으로 웹 표준과 접근성을 고려한 구조적인 HTML을 작성합니다.</p>
                  <p>테이블 기반 레이아웃을 시맨틱 구조로 개선하고, SEO 친화적 마크업을 적용한 경험이 있습니다.</p>
                  <p>크로스브라우저 호환성을 고려하며 다양한 브라우저·디바이스 환경에서 일관된 화면을 구현합니다.</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>Styling</em>
                </h3>
                <div className={s.description}>
                  <p>SCSS 변수·믹스인 기반 스타일 모듈화로 다수 사이트의 스타일 일관성을 확보하고 유지보수성을 높입니다.</p>
                  <p>모바일·태블릿·PC 대응 반응형 웹 구현 경험이 있으며, 브레이크포인트를 변수로 관리합니다.</p>
                  <p>CSS Module, TailwindCSS, Styled-Components 등 다양한 스타일링 방식을 프로젝트에 맞게 선택하여 적용합니다.</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>JavaScript / jQuery</em>
                </h3>
                <div className={s.description}>
                  <p>탭·토글·슬라이드 등 인터랙티브 UI를 구현하고 정적 데이터 기반으로 동적 콘텐츠를 처리합니다.</p>
                  <p>IntersectionObserver를 활용한 스크롤 진입 애니메이션 및 LazyLoadImage 적용으로 성능을 개선한 경험이 있습니다.</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>React / Next.js</em>
                </h3>
                <div className={s.description}>
                  <p>컴포넌트를 블록 단위로 설계하여 재사용성과 확장성을 고려한 UI 구조를 구현합니다.</p>
                  <p>Server Action·서버 컴포넌트 기반 데이터 패칭 구조 설계 및 React Query를 활용한 캐싱·성능 개선 경험이 있습니다.</p>
                  <p>Next.js App Router 환경에서 UI 구현 및 유지보수 경험이 있습니다.</p>
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
                  <em>State Management</em>
                </h3>
                <div className={s.description}>
                  <p>Zustand를 활용한 전역 상태 관리로 컴포넌트 간 상태 공유 구조를 단순화하고 props drilling을 제거합니다.</p>
                  <p>TanStack Query로 서버 데이터 캐싱 및 중복 API 요청을 제거하여 불필요한 호출을 줄이고 렌더링 성능을 개선합니다.</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>Collaboration</em>
                </h3>
                <div className={s.description}>
                  <p>Git/GitHub 기반 형상 관리 및 Jira 칸반 보드를 활용해 개발·기획·디자인 팀과 협업합니다.</p>
                  <p>Figma·Photoshop을 활용하여 디자인 시안을 검토하고 퍼블리싱 작업에 반영합니다.</p>
                </div>
              </li>
            </ul>

            <ul className={s.aboutbox}>
              <li>
                <h2 className={s.subTitle}>💻 경력</h2>
                <h3 className={s.title}>
                  <em>커넥트웨이브</em> <span>웹 퍼블리셔(React·Next.js 기반 UI 개발) 2025.05 ~ 2026.03</span>
                </h3>
                <div className={s.description}>
                  <p>셀핏AI(상품 상세페이지 자동 생성 에디터) 프로젝트 참여</p>
                  <p>상세페이지 스킨 28개 중 15개를 블록 단위 컴포넌트 구조로 설계 및 퍼블리싱, 템플릿 확장성과 재사용성 확보</p>
                  <p>SVG 속성값을 데이터 파일로 분리하여 스킨 커스터마이징 구조 개선</p>
                  <p>공용 UI 컴포넌트(버튼, 모달, 배너) 구현 및 Zustand 기반 상태 관리로 재사용성 개선, 퍼블리싱 가이드로 UI 일관성 유지</p>
                  <p>React·Next.js 기반 자사 웹사이트·솔루션 UI 구현 및 유지보수</p>
                  <p>IntersectionObserver 기반 스크롤 진입 애니메이션 및 LazyLoadImage 적용으로 성능 개선</p>
                  <p>이벤트·프로모션 페이지 반응형 퍼블리싱 및 크로스브라우저·접근성 개선 적용</p>
                  <p>Git/GitHub 형상 관리 및 Jira 기반 개발·기획·디자인 팀 협업</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>한국학술정보</em> <span>웹 퍼블리셔 2020.10 ~ 2024.04</span>
                </h3>
                <div className={s.description}>
                  <p>총 37개 학회·대학 홈페이지와 논문 투고 시스템(JOSS) 구축 및 유지보수</p>
                  <p>SCSS 변수·믹스인 기반 스타일 모듈화로 모바일·태블릿·PC 대응 반응형 웹 구현</p>
                  <p>테이블 기반 레이아웃을 시맨틱 구조로 전환하고 SEO 친화적 마크업 적용</p>
                  <p>Google Search Console·네이버 서치어드바이저 등록 및 robots.txt·사이트맵 설정으로 검색 노출 환경 구성</p>
                  <p>폼 마크업·비회원 분기 처리·결제 연동(이지페이·토스)으로 사전등록·회비납부 기능 구현</p>
                  <p>학회와 직접 소통하며 요구사항 수집부터 DB 이전, 도메인 연결, SSL 적용까지 오픈 전 과정 주도적으로 조율</p>
                  <p>한국보건행정학회 사전등록 개선: 다중 입력·비회원 결제 흐름 재설계로 전환율 24% 달성 (770건 중 187건)</p>
                </div>
              </li>
              <li>
                <h3 className={s.title}>
                  <em>엔타스듀티프리</em> <span>웹 퍼블리셔 2019.04 ~ 2019.11</span>
                </h3>
                <div className={s.description}>
                  <p>인터넷 면세점 사이트 유지보수 및 이벤트·프로모션 페이지 퍼블리싱 수행</p>
                  <p>JSP 기반 환경에서 마크업 구조 개선 및 스타일 코드 정리를 통해 UI 일관성 확보</p>
                  <p>슬라이드·팝업·탭·플로팅 배너 등 인터랙티브 UI를 수정하고 PC·모바일 반응형 대응</p>
                  <p>기획·디자인·개발 팀과 협업하여 기능 연동 지원</p>
                </div>
              </li>
            </ul>
          </div>
        </Tag>
        <Tag tagName='main' isClosed padding='large' />
        <Tag tagName='footer' hasAttr attr='class' attrValue='교육 및 자격증' padding='large' className={s.marginTop}>
          <ul className={s.aboutbox}>
            <li>
              <h3 className={s.title}>
                <em>프론트엔드 엔지니어 부트캠프</em> <span>2024.07 ~ 20024.12</span>
              </h3>
              <div className={s.description}>
                <p>Next.js, React, TypeScript, JavaScript, Git 등 프론트엔드 핵심 기술 심화 강의 수강</p>
                <p>3개 팀 프로젝트 참여를 통해 협업 경험과 다양한 기술 활용 역량 강화</p>
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
                </div>
              </div>
            </li>
          </ul>
        </Tag>
        <Tag tagName='footer' isClosed padding='large' />
        <Tag tagName='body' isClosed padding='medium' />
        <Tag tagName='html' isClosed />
      </Container>
    </section>
  );
};

export default About;
