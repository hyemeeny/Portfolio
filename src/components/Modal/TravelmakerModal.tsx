import Image from "next/image";
import s from "./Modal.module.scss";
import { travelmakerTechStack } from "@/data/techStackData";
import { travelmakerPageData } from "@/data/pageData";

interface PageProps {
  title: string;
  description: string[];
  image?: string;
}

const TravelmakerModal = () => {
  return (
    <>
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
          {travelmakerPageData.map((page: PageProps, index) => (
            <div key={index} className={s.pageItem}>
              <h3 className={s.pageTitle}>{page.title}</h3>
              <ul className={s.skillDescription}>
                {page.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
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
