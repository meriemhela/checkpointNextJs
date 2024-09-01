import { motion } from "framer-motion";

const ContactMe = () => {
  const txt = "Contact Me ";
  return (
    <div>
      {txt.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
      <span>&#128522;</span>
    </div>
  );
};

export default ContactMe;
