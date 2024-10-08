import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>React and React Native Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                Web and Hybrid Mobile applications{" "}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Mern Stack Developer</h3>
              <p>
                Experience in Full stack development using NodeJs and MongoDb
                for the Backend and Datebase Querries
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
