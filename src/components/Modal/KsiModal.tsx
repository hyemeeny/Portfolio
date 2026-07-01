import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import s from './Modal.module.scss';
import { FiExternalLink } from 'react-icons/fi';
import { ModalPageProps } from '@/types/modal';
import { ksiJournalData, ksiData } from '@/data/pageData';
import { ksiTechStack } from '@/data/techStackData';
import SubTitle from '@/components/Modal/components/SubTitle';

const KsiModal = () => {
  return (
    <>
      <div className={s.techStack}>
        <SubTitle>⚙️ 기술 스택</SubTitle>
        <ul>
          {ksiTechStack.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      </div>

      <div className={s.pageWrap}>
        <SubTitle participation='참여도 100%'>📺 논문 투고 시스템 운영 및 유지보수</SubTitle>
        <div className={s.pageList}>
          {ksiJournalData.map((page: ModalPageProps) => (
            <article key={page.title} className={s.pageItem} aria-labelledby={`page-${page.title}`}>
              <h3 className={s.pageTitle}>
                {page.url ? (
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
                ) : (
                  page.title
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
        <SubTitle participation='참여도 100%'>📺 학회·대학 홈페이지 구축 및 유지보수 (37개 사이트)</SubTitle>
        <div className={s.pageList}>
          {ksiData.map((page: ModalPageProps) => (
            <article key={page.title} className={s.pageItem} aria-labelledby={`page-${page.title}`}>
              <h3 className={s.pageTitle}>
                {page.url ? (
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
                ) : (
                  page.title
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

export default KsiModal;
