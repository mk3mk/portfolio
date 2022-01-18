import React from 'react';
import styles from "./aboutMe.module.css";


export const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.photo}>
            <img src="https://trydo.rainbowit.net/assets/images/about/about-8.jpg" alt="photo"
                 className={styles.photo_img}/>
          </div>
          <div className={styles.info}>
            <div className={styles.section_title}>
              <h2 className={styles.title}>
                About Me
              </h2>
              <p className={styles.description}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable.
                If you are going to use a passage of Lorem Ipsum
              </p>
            </div>
            <div className={styles.section_tabs}>
              <ul className={styles.tabs_list}>
                <li className={`${styles.tab_item} ${styles.tab_item_active}`}>Main skills</li>
                <li className={styles.tab_item}>Awards</li>
                <li className={styles.tab_item}>Experience</li>
                <li className={styles.tab_item}>Education & Certification</li>
              </ul>
              <div className={styles.tab_content}>
                <div className={styles.tab_content_item}>
                    <h3>User experience design - UI/UX</h3>
                    <p>Delight the user and make it work.</p>
                </div>
                <div className={styles.tab_content_item}>
                  <h3>Web and user interface design - Development</h3>
                  <p>Websites, web experiences, ...</p>
                </div>
                <div className={styles.tab_content_item}>
                  <h3>Interaction design - Animation</h3>
                  <p>I like to move it move it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}