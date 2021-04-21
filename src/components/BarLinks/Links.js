import React from "react";
import styles from './Links.module.css';

const Links = ({ isActive, icon, text, caption, logout }) => {
  const isLogOut = () => {
    if (logout) {
      return (
        <div className={styles.sidebar__logout}>
          <i className={icon}></i>
          <a href="#">{text}</a>
        </div>
      );
    }
    return (
      <div className={`${styles.sidebar__link} ${isActive ? styles.active_menu_link : ""}`}>
        <i className={icon}></i>
        <a href="#">{text}</a>
      </div>
    );
  };
  return (
    <>
      {isLogOut()}
      {caption && <h2>{caption}</h2>}
    </>
  );
};

export default Links;
