import Link from 'next/link';
import Image from 'next/image';
import s from './Modal.module.scss';
import { ModalPageProps } from '@/types/modal';
import { travelmakerTechStack } from '@/data/techStackData';
import { travelmakerData } from '@/data/pageData';
import { VscGithubInverted } from 'react-icons/vsc';
import SubTitle from '@/components/Modal/components/SubTitle';

const TravelmakerModal = () => {
  return (
    <>
      <div className={s.url}>
        <SubTitle>
          🔗 배포 주소
          <Link href={'https://github.com/hyemeeny/travelmaker'} target='_blank' className={s.github} aria-label='GitHub 저장소로 이동'>
            <VscGithubInverted aria-hidden='true' />
          </Link>
        </SubTitle>
        <Link href={'https://travelmaker-ten.vercel.app'} target='_blank' className={s.link} aria-label='travelmaker 배포 사이트 열기'>
          https://travelmaker-ten.vercel.app
        </Link>
      </div>

      <div className={s.techStack}>
        <SubTitle>⚙️ 기술 스택</SubTitle>
        <ul>
          {travelmakerTechStack.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      </div>

      <div className={s.pageWrap}>
        <SubTitle participation='참여도 100%'>📺 작업 프로젝트</SubTitle>
        <div className={s.pageList}>
          {travelmakerData.map((page: ModalPageProps) => (
            <article key={page.title} className={s.pageItem} aria-labelledby={`page-${page.title}`}>
              <h3 className={s.pageTitle}>{page.title}</h3>
              <ul className={s.skillDescription}>
                {page.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              {page.image && <Image src={page.image} width={800} height={100} alt={page.title} unoptimized />}
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default TravelmakerModal;
