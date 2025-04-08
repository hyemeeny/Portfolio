import Link from "next/link";
import s from "./Contact.module.scss";
import Container from "@/components/Layout/Container";

const Contact = () => {
  return (
    <section className={s.contactPage}>
      <Container>
        <h2 className={s.title}>Contact with me! 🤙</h2>
        <div className={s.contactLine}>
          <div className={s.number}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
          </div>
          <div className={s.text}>
            <p>
              <span>.Connect</span> &#123;
            </p>
            <div className={s.contactWrap}>
              <div className={s.contactbox}>
                <p>
                  <span>.Contact</span> &#123;
                </p>
                <div className={s.info}>
                  <p>
                    Email :
                    <Link href={"mailto:hyemeeeny@gmail.com"} target="_blank" rel="noopener noreferrer">
                      <span>hyemeeeny@gmail.com</span>
                    </Link>
                  </p>
                  <p>
                    Phone :
                    <Link href={"tel:+821037181373"} target="_blank" rel="noopener noreferrer">
                      <span>010-3718-1373</span>
                    </Link>
                  </p>
                </div>
                <p>&#125;</p>
              </div>
              <div className={s.contactbox}>
                <p>
                  <span>.Channel</span> &#123;
                </p>
                <div className={s.info}>
                  <p>
                    GitHub :
                    <Link href={"https://github.com/hyemeeny"} target="_blank" rel="noopener noreferrer">
                      <span>hyemeeny</span>
                    </Link>
                  </p>
                  <p>
                    Blog :
                    <Link href={"https://velog.io/@hyemeeny"} target="_blank" rel="noopener noreferrer">
                      <span>hyemeeny.log</span>
                    </Link>
                  </p>
                </div>
                <p>&#125;</p>
              </div>
            </div>
            <p>&#125;</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
