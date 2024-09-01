import styles from "../modules/About.module.css";
import Timeline from "./TimeLine";

const Experience = () => {
  return (
    <div className={styles.skillsContainer}>
      {/* EXPERIENCE CONTAINER */}
      <div className={styles.experienceContainer}>
        <h1 className={styles.experienceTitle}>EXPERIENCE</h1>
        {/* EXPERIENCE LIST */}
        <div className={styles.experienceList}>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Experience;
