import Link from "next/link";
import Image from "next/image";
import s from "./Modal.module.scss";
import { spaceLinkTechStack } from "@/data/techStackData";
import { spaceLinkPageData } from "@/data/pageData";
import { VscGithubInverted } from "react-icons/vsc";

interface PageProps {
  title: string;
  description: string[];
  image?: string;
}

const SpaceLinkModal = () => {
  return (
    <>
      <div className={s.url}>
        <h2 className={s.subTitle}>
          🔗 배포 주소
          <Link href={"https://github.com/hyemeeny/SpaceLink"} target="_blank" className={s.github}>
            <VscGithubInverted />
          </Link>
        </h2>
        <Link href={"https://spacelink-hyemin.vercel.app"} target="_blank" className={s.link}>
          https://spacelink-hyemin.vercel.app
        </Link>
      </div>

      <div className={s.techStack}>
        <h2 className={s.subTitle}>⚙️ 기술 스택</h2>
        <ul>
          {spaceLinkTechStack.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      </div>

      <div className={s.pageWrap}>
        <h2 className={s.subTitle}>📺 작업 페이지</h2>
        <div className={s.pageList}>
          {spaceLinkPageData.map((page: PageProps) => (
            <div key={page.title} className={s.pageItem}>
              <h3 className={s.pageTitle}>{page.title}</h3>
              <ul className={s.skillDescription}>
                {page.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              {page.image && <Image src={page.image} width={800} height={100} alt={page.title} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpaceLinkModal;
