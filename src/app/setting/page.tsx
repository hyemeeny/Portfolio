import s from "./Setting.module.scss";
import Container from "@/components/Layout/Container";
import ThemeButton from "@/components/Button/ThemeButton";

const Setting = () => {
  return (
    <section className={s.settingPage}>
      <Container>
        <div className={s.themeButton}>
          <ThemeButton themeKey="light">🎨 Monokai</ThemeButton>
          <ThemeButton themeKey="dark">🧛‍♂️ Dracula</ThemeButton>
        </div>
      </Container>
    </section>
  );
};

export default Setting;
