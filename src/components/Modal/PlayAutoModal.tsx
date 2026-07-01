import Link from 'next/link';
import Image from 'next/image';
import s from './Modal.module.scss';
import { FiExternalLink } from 'react-icons/fi';
import { ModalPageProps } from '@/types/modal';
import { sellfitData, playAutoData } from '@/data/pageData';
import { playAutoTechStack } from '@/data/techStackData';
import SubTitle from '@/components/Modal/components/SubTitle';
import clsx from 'clsx';

const PlayAutoModal = () => {
  return (
    <>
      <div className={s.techStack}>
        <SubTitle>⚙️ 기술 스택</SubTitle>
        <ul>
          {playAutoTechStack.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      </div>

      <div className={s.pageWrap}>
        <SubTitle participation='참여도 100%'>📺 AI 기반 상품 상세페이지 자동 생성 에디터</SubTitle>
        <div className={s.pageList}>
          {sellfitData.map((page: ModalPageProps) => (
            <article key={page.title} className={s.pageItem} aria-labelledby={`page-${page.title}`}>
              <h3 className={s.pageTitle}>
                {page.url && (
                  <Link
                    href={page.url}
                    className={clsx(s.link, s.tooltipLink)}
                    aria-label={`${page.title} 페이지 열기`}
                    data-tooltip='클릭하여 이동'
                    target='_blank'
                  >
                    {page.title}
                    <FiExternalLink />
                  </Link>
                )}
              </h3>
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

      <div className={s.pageWrap}>
        <SubTitle participation='참여도 100%'>📺 자사 웹사이트·솔루션 운영 및 유지보수</SubTitle>
        <div className={s.pageList}>
          {playAutoData.map((page: ModalPageProps) => (
            <article key={page.title} className={s.pageItem} aria-labelledby={`page-${page.title}`}>
              <h3 className={s.pageTitle}>
                {page.url && (
                  <Link
                    href={page.url}
                    className={clsx(s.link, s.tooltipLink)}
                    aria-label={`${page.title} 페이지 열기`}
                    data-tooltip='클릭하여 이동'
                    target='_blank'
                  >
                    {page.title}
                    <FiExternalLink />
                  </Link>
                )}
              </h3>
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

export default PlayAutoModal;
