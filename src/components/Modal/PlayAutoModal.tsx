import Link from 'next/link';
import Image from 'next/image';
import s from './Modal.module.scss';
import { ModalPageProps } from '@/types/modal';
import { playAutoPageData } from '@/data/pageData';

const PlayAutoModal = () => {
  return (
    <>
      <div className={s.url}>
        <h2 className={s.subTitle}>🔗 배포 주소</h2>
        <Link href={'https://www.plto.com'} target='_blank' className={s.link} aria-label='PLAYAUTO 배포 사이트 열기'>
          https://www.plto.com
        </Link>
      </div>

      <div className={s.pageWrap}>
        <h2 id='pages' className={s.subTitle}>
          📺 작업 페이지
        </h2>
        <div className={s.pageList}>
          {playAutoPageData.map((page: ModalPageProps) => (
            <article key={page.title} className={s.pageItem} aria-labelledby={`page-${page.title}`}>
              <h3 className={s.pageTitle}>
                {page.url && (
                  <Link href={page.url} target='_blank' className={s.link} aria-label={`${page.title} 페이지 열기`}>
                    {page.title}
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
