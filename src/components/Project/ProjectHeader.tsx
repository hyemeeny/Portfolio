import s from "./ProjectHeader.module.scss";
import { useProjectStore } from "@/store/projectStore";

const ProjectHeader = () => {
  const { category, setCategory } = useProjectStore();

  return (
    <div className={s.projectHeader}>
      <h2 className={s.title}>It&apos;s my works! 💻</h2>
      <nav className={s.category}>
        <button onClick={() => setCategory("All")} className={category === "All" ? s.active : ""}>
          All
        </button>
        <button onClick={() => setCategory("Personal")} className={category === "Personal" ? s.active : ""}>
          Personal
        </button>
        <button onClick={() => setCategory("Team")} className={category === "Team" ? s.active : ""}>
          Team
        </button>
        <button onClick={() => setCategory("Company")} className={category === "Company" ? s.active : ""}>
          Company
        </button>
      </nav>
    </div>
  );
};

export default ProjectHeader;
