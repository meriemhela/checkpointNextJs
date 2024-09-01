"use client";

import { motion } from "framer-motion";
import styles from "../modules/About.module.css";
import Biography from "../components/Biography";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const About = () => {
  return (
    <motion.div
      className={styles.motionContainer}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className={styles.container}>
        <Biography />
        <Skills />
        <Experience />
      </div>
    </motion.div>
  );
};

export default About;
