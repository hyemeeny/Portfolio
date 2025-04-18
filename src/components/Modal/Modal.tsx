import Image from "next/image";
import s from "./Modal.module.scss";
import { useModalStore } from "@/store/modalStore";
import { IoClose } from "react-icons/io5";
import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const { isOpen, project, closeModal } = useModalStore();

  if (!isOpen || !project) return null;

  return (
    <section className={s.modalWrap} onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={closeModal} aria-label="모달 닫기">
          <IoClose aria-hidden="true" />
        </button>
        <div className={s.modalBody}>
          <div>
            <div className={s.titleWrap}>
              <h2 id="modal-title" className={s.mainTitle}>
                {project.title}
              </h2>
              <p id="modal-description" className={s.description}>
                {project.description}
              </p>
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
