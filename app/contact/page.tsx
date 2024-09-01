"use client";

import { motion } from "framer-motion";
import styles from "../modules/Contact.module.css";
import ContactMe from "../components/ContactMe";
import EmailForm from "../components/EmailForm";

const Contact: React.FC = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className={styles.container}>
        <div className={styles.text}>
          <ContactMe />
        </div>

        <EmailForm />
      </div>
    </motion.div>
  );
};

export default Contact;
