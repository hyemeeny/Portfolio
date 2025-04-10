import Image from "next/image";
import s from "./Setting.module.scss";
import Container from "@/components/Layout/Container";
import ThemeButton from "@/components/Button/ThemeButton";

const Setting = () => {
  return (
    <section className={s.settingPage}>
      <Container className={s.settingWrap}>
        <h2 className={s.title}>Color Theme Settings ⚙️</h2>

        <ul className={s.themeWrap} role="group" aria-label="Theme selection">
          <li className={s.themeButton}>
            <Image src={"/icons/Monokai.png"} width={200} height={200} alt="Monokai Icon" priority className={s.themeIcon} />
            <p className={s.description}>Monokai Theme Style</p>
            <ThemeButton themeKey="light">🎨 Monokai</ThemeButton>
          </li>
          <li className={s.themeButton}>
            <Image src={"/icons/Dracula.png"} width={200} height={200} alt="Dracula Icon" priority className={s.themeIcon} />
            <p className={s.description}>Dracula Theme Style</p>
            <ThemeButton themeKey="dark">🧛‍♂️ Dracula</ThemeButton>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Setting;
