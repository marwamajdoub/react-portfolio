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
              <h3>Web development</h3>
              <p>
              I am deeply passionate about web development and have mastered tools such as HTML, CSS, Bootstrap, Figma, and React.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX design</h3>
              <p>
              I am passionate about UI/UX design, specializing in creating intuitive and engaging interfaces. With expertise in Figma and Adobe Illustrator, I excel in wireframing, prototyping, and visual design. My focus is on understanding user behavior to deliver visually appealing and highly functional experiences.






</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
