"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./modules/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className={styles.container}>
        {/* IMAGE CONTAINER */}
        <div className={styles.imageContainer}>
          <Image src="/cat.jpeg" alt="" fill className="object-contain" />
        </div>

        {/* TEXT CONTAINER */}
        <div className={styles.textContainer}>
          {/* TITLE */}
          <h1 className={styles.title}>Welcome to my Portfolio.</h1>

          {/* DESCRIPTION */}
          <p className={styles.description}>
            Hello everyone! I'm Meriem, a computer science student with a
            background in telecommunications and network engineering. I
            specialize in front-end development and UI/UX design.
          </p>

          {/* BUTTONS */}
          <div className={styles.buttons}>
            {/* Button linking to your portfolio or work section */}
            <Link href="/portfolio">
              <button className={styles.buttonPrimary}>View My Work</button>
            </Link>

            {/* Button linking to your contact page */}
            <Link href="/contact">
              <button className={styles.buttonSecondary}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
