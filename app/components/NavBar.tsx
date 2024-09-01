"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { links, socialMedia } from "../data/data";
import { listVariants, variants, listItemVariants } from "../data/variants";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import styles from "../modules/NavBar.module.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const animate = open ? "opened" : "closed";
  return (
    <div className={styles.container}>
      {/* LINKS */}
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className={styles.logo}>
        <Link href="/" className={styles.logoText}>
          <span className={styles.logoHighlight}>Meriem</span>
          <span className={styles.logoSubtext}>.Dev</span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className={styles.social}>
        {socialMedia.map((media) => (
          <Link href={media.href}>
            <Image src={media.src} alt={media.alt} width={24} height={24} />
          </Link>
        ))}
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className={styles.menuButton} onClick={() => setOpen(!open)}>
          {variants.map((variant, index) => (
            <motion.div
              key={index} // Utilise l'index comme clé
              variants={variant}
              animate={animate}
              className={styles.menuIcon}
            ></motion.div>
          ))}
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className={styles.menuList}
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url} key={link.title}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
