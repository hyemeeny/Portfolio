import Link from "next/link";
import Image from "next/image";
import s from "./Modal.module.scss";
import { travelmakerTechStack } from "@/data/techStackData";
import { travelmakerPageData } from "@/data/pageData";
import { IoLogoGithub } from "react-icons/io";

interface PageProps {
  title: string;
  description: string[];
  image?: string;
}

const TravelmakerModal = () => {
  return (
    <>
      <div className={s.url}>
        <h2 className={s.subTitle}>
          🔗 배포 주소
          <Link href={"https://github.com/hyemeeny/travelmaker"} target="_blank" className={s.github}>
            <IoLogoGithub />
          </Link>
        </h2>
        <Link href={"https://travelmaker-ten.vercel.app"} target="_blank" className={s.link}>
          https://travelmaker-ten.vercel.app/
        </Link>
      </div>

      <div className={s.techStack}>
        <h2 className={s.subTitle}>⚙️ 기술 스택</h2>
        <ul>
          {travelmakerTechStack.map((tech) => (
            <li key={tech.id}>{tech.name}</li>
          ))}
        </ul>
      </div>

      <div className={s.pageWrap}>
        <h2 className={s.subTitle}>📺 작업 페이지</h2>
        <div className={s.pageList}>
          {travelmakerPageData.map((page: PageProps) => (
            <div key={page.title} className={s.pageItem}>
              <h3 className={s.pageTitle}>{page.title}</h3>
              <ul className={s.skillDescription}>
                {page.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              {page.image && <Image src={page.image} width={800} height={100} alt={`${page.title} image`} />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TravelmakerModal;
