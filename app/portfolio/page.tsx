"use client";
import { motion } from "framer-motion";
import { projects } from "../data/data";
import styles from "../modules/Portfolio.module.css";

const page = () => {
  return (
    <>
      <h1 className={styles.myWork}>My Projects</h1>
      <div className={styles.items}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectItem}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className="p-6">
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className={styles.projectLink}
              >
                View Code on GitHub
              </a>
              <br />
              <a
                href={project.website}
                target="_blank"
                className={styles.projectWebsite}
              >
                View the project Output
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default page;
