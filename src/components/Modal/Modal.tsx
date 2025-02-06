import Image from "next/image";
import s from "./Modal.module.scss";
import { useModalStore } from "@/store/modalStore";
import { IoClose } from "react-icons/io5";
import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const { isOpen, project, closeModal } = useModalStore();

  if (!isOpen || !project) return null;

  return (
    <section className={s.modalWrap} onClick={closeModal}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={closeModal}>
          <IoClose />
        </button>
        <div className={s.modalBody}>
          <div>
            <div className={s.titleWrap}>
              <h2 className={s.mainTitle}>{project.title}</h2>
              <p className={s.description}>{project.description}</p>
            </div>
            <div className={s.imageWrap}>
              <Image src={project.image} fill alt={project.title} />
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Modal;
