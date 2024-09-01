import { useState } from "react";
import styles from "../modules/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent } from "react";

const EmailForm: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVER_ID || "",
          process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
          },
          (error) => {
            setError(true);
            console.error("EmailJS Error:", error); // Ajout pour afficher l'erreur exacte
          }
        );
    }
  };
  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <span>Dear Meriem Dev ,</span>
      <textarea rows={6} className={styles.emailContant} name="user_message" />
      <br />
      <span>My email address is : </span>
      <input type="text" className={styles.emailAddress} name="user_email" />
      <br />
      <span>Regards</span>
      <br />
      <button className={styles.emailbtn}>Send</button>
      {success && (
        <span>Your message has been sent successfully ! &#127881;</span>
      )}
      {error && <span>Something went error ! &#128683;</span>}
    </form>
  );
};

export default EmailForm;
