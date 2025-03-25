import Tag from "@/components/About/Tag";
import s from "./About.module.scss";
import Container from "@/components/Layout/Container";

const About = () => {
  return (
    <section className={s.aboutPage}>
      <Container>
        <Tag tagName="html" hasAttr attr="lang" attrValue="ko" />
        <Tag tagName="head" padding="medium" />
        <Tag tagName="title" padding="large">
          <p>안녕하세요! 프론트엔드 개발자 지혜민입니다.</p>
        </Tag>
        <Tag tagName="title" isClosed padding="large" />
        <Tag tagName="head" isClosed padding="medium" />
        <Tag tagName="body" padding="medium" />
        <Tag tagName="heaeder" hasAttr attr="class" attrValue="자기소개" padding="large">
          <ul className={s.introduce}>
            <li>
              <p>안녕하세요!</p>
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
        <Tag tagName="main" hasAttr attr="class" attrValue="경력" padding="large" className={s.marginTop}>
          <ul className={s.workExperience}>
            <li>
              <h3 className={s.title}>
                한국학술정보 <span>웹 퍼블리셔 2020.10 ~ 2024.04</span>
              </h3>
              <p>학회 및 대학 홈페이지 37개를 신규 구축 및 유지보수</p>
              <p>낙후된 테이블 코드를 시멘틱 마크업으로 개선하고 SEO 최적화를 통해 추가 계약률 24% 달성</p>
              <p>
                홈페이지 구축 및 IT 서비스 전 과정에서 기획, 자료 검토, 견적 산출부터 사후 고객 서비스까지 체계적으로 관리하여 장기적인 고객 신뢰와 유치를 달성
              </p>
              <p>제작 완료된 퍼블리싱 페이지를 FTP 프로토콜을 이용하여 직접 배포</p>
            </li>
          </ul>
        </Tag>
        <Tag tagName="main" isClosed padding="large" />
        <Tag tagName="footer" hasAttr attr="class" attrValue="교육 및 자격증" padding="large" className={s.marginTop}>
          <ul className={s.education}>
            <li>
              <h3 className={s.title}>
                한국학술정보 <span>웹 퍼블리셔 2020.10 ~ 2024.04</span>
              </h3>
              <p>학회 및 대학 홈페이지 37개를 신규 구축 및 유지보수</p>
              <p>낙후된 테이블 코드를 시멘틱 마크업으로 개선하고 SEO 최적화를 통해 추가 계약률 24% 달성</p>
              <p>
                홈페이지 구축 및 IT 서비스 전 과정에서 기획, 자료 검토, 견적 산출부터 사후 고객 서비스까지 체계적으로 관리하여 장기적인 고객 신뢰와 유치를 달성
              </p>
              <p>제작 완료된 퍼블리싱 페이지를 FTP 프로토콜을 이용하여 직접 배포</p>
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
