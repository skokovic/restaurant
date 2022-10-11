import React from "react";
import styles from "../styles/Navbar.module.scss";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import Image from "next/image";
import { logo } from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  // logic for opening hamburger menu
  const [openHambuger, setOpenHambuger] = useState(false);
  const handleOpenHamburger = () => {
    setOpenHambuger((prev) => !prev);
  };

  return (
    // main div
    <div>
      {/* desktop navbar */}
      <div className={styles.container}>
        <div className={styles.item}>
          {/* <BsFillTelephoneOutboundFill className={styles.icon} /> */}
          <div>
            <p className={styles.text}>Order now</p>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>dobrodosli</li>
            <li className={styles.listItem}>jelovnik</li>
            <li className={styles.listItem}>
              <Image
                className={styles.image}
                src='https://batak-grill.hr/wp-content/uploads/2020/05/Batak-logo.svg'
                height='80px'
                width='80px'
              />
              {/* <MdFastfood className={styles.icon} /> */}
            </li>
            <li className={styles.listItem}>rezervacije</li>
            <li className={styles.listItem}>o nama</li>
          </ul>
        </div>
        <div className={styles.item}>
          <p className={styles.text}>kontakt</p>
        </div>
      </div>
      {/* mobile navbar */}
      <div className={styles.hamburger}>
        <GiHamburgerMenu
          className={styles.hamburgerMenu}
          onClick={handleOpenHamburger}
        />
        <Image
          className={styles.image}
          src='https://batak-grill.hr/wp-content/uploads/2020/05/Batak-logo.svg'
          height='80px'
          width='80px'
        />
      </div>
      {/* show hamburgermenu when openhamburger variable is set to true and dont show it when its false,some nice animation with it aswell */}
      {openHambuger && (
        <motion.div
          initial={{
            x: -200,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className={styles.mobileMenu}
        >
          <ul className={styles.mobileList}>
            <li className={styles.mobileListItem}>test</li>
            <li className={styles.mobileListItem}>test</li>
            <li className={styles.mobileListItem}>test</li>
            <li className={styles.mobileListItem}>test</li>
            <li className={styles.mobileListItem}>test</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;