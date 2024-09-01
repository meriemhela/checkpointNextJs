import styles from "../modules/About.module.css";
import { easeInOut, motion } from "framer-motion";
import { PiMouseScroll } from "react-icons/pi";

const Biography = () => {
  return (
    <div className={styles.bioContainer}>
      <h1 className={styles.bioTitle}>BIOGRAPHY</h1>
      <p className={styles.bioText}>
        I am Meriem, currently a student at USTHB (Université des Sciences et de
        la Technologie Houari Boumediene) with a strong foundation in
        telecommunications and networking engineering. This background has
        provided me with a robust technical foundation, which I have seamlessly
        integrated into my career as a front-end developer. Specializing in
        modern web technologies, I excel in React.js, Next.js, JavaScript,
        TypeScript, and Redux, with additional expertise in Framer Motion for
        animations. My proficiency extends to SQL and Python, enhancing my
        versatility in both front-end development and data handling. Passionate
        about design, I have a keen interest in UI/UX design, utilizing Figma to
        create intuitive and visually engaging user interfaces. My dedication to
        both functional and aesthetic aspects of web development drives me to
        continually explore and innovate in the design space. I am committed to
        blending technical skills with design sensibilities to craft exceptional
        digital experiences, reflecting my enthusiasm for creating well-rounded,
        user-centric applications.
      </p>
      <span>
        <i>
          “You must be the change you wish to see in the world.” – Mahatma
          Gandhi
        </i>
      </span>
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

export default Biography;
