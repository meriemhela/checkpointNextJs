import styles from "../modules/About.module.css";
import { easeInOut, motion } from "framer-motion";
import { skills } from "../data/data";
import { PiMouseScroll } from "react-icons/pi";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.skillsTitle}>SKILLS</h1>
      {/* SKILLS LIST */}
      <div className={styles.skillsList}>
        {skills.map((skill) => (
          <div className={styles.skillItem}>{skill.name}</div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: "10px" }}
        transition={{ repeat: Infinity, duration: 3, ease: easeInOut }}
        className=""
      >
        <PiMouseScroll style={{ width: "40px", height: "40px" }} />
      </motion.div>
    </div>
  );
};

export default Skills;
