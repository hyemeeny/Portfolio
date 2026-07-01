import Link from 'next/link';
import Image from 'next/image';
import s from './Modal.module.scss';
import { ModalPageProps } from '@/types/modal';
import { spaceLinkTechStack } from '@/data/techStackData';
import { spaceLinkData } from '@/data/pageData';
import { VscGithubInverted } from 'react-icons/vsc';
import SubTitle from '@/components/Modal/components/SubTitle';

const SpaceLinkModal = () => {
  return (
    <>
      <div className={s.url}>
        <SubTitle>
          🔗 배포 주소
          <Link href={'https://github.com/hyemeeny/SpaceLink'} target='_blank' className={s.github} aria-label='GitHub 저장소로 이동'>
            <VscGithubInverted aria-hidden='true' />
          </Link>
        </SubTitle>
        <Link href={'https://spacelink-hyemin.vercel.app'} target='_blank' className={s.link} aria-label='SpaceLink 배포 사이트 열기'>
          https://spacelink-hyemin.vercel.app
        </Link>
      </div>

      <div className={s.techStack}>
        <SubTitle>⚙️ 기술 스택</SubTitle>
        <ul>
          {spaceLinkTechStack.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      </div>

      <div className={s.pageWrap}>
        <SubTitle participation='참여도 100%'>📺 작업 프로젝트</SubTitle>
        <div className={s.pageList}>
          {spaceLinkData.map((page: ModalPageProps) => (
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

export default SpaceLinkModal;
