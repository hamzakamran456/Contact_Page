import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Hamza")
  const [email, setEmail] = useState("hamzakamrn8@gmail.com")
  const [text, setText] = useState("hello how are you")

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button icon={<MdMessage fontSize="24px" />} text="VIA SUPPORT CHAT"/>
          <Button icon={<FaPhoneAlt fontSize="24px" />} text="VIA CALL" />
        </div>
        <Button isOutline={true} icon={<MdEmail fontSize="24px" />} text="VIA EMAIL FORM" />
        <form onSubmit={onSubmit} action="">
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"  />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"  />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows={10}/>
        </div>
        <div style={{display: "flex", justifyContent: "end"}}>
        <Button text="SUBMIT" />
        </div>
        <div>
          {name + " , " + email + " , " + text}
        </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/public/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
