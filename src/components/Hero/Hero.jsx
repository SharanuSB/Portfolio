import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sharanu</h1>
        <p className={styles.description}>
          I'm a full-stack Web and Hybrid Mobile Application developer with 1.5
          years of experience using Mern Stack and React Native. Reach out if
          you'd like to learn more!
        </p>
        <a href="mailto:sharanusb12345@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
