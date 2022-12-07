import React from 'react';
import styles from "../../styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
          <div className="container">
          <div className={styles.headerContent}>
              <Link href="/">
                  <a className={styles.logo}/>
              </Link>
              <div className={styles.navbar}>
                  <Link href="/" >
                      <p className={styles.navItem}>
                          Accueil
                      </p>
                  </Link>
                  <Link href="/">
                      <p className={styles.navItem}>
                          Notre objectif
                      </p>
                  </Link>
                  <Link href="Avantage">
                      <p className={styles.navItem}>
                          Nos avantages
                      </p>
                  </Link>
                  <Link href="/">
                      <p className={styles.navItem}>
                          nos clients en parlent
                      </p>
                  </Link>
                  <Link href="/">
                      <p className={styles.navItem}>
                          Nos partenaires
                      </p>
                  </Link>
              </div>
              <button className="primary-btn">
                  Prendre rendez-vous avec un expert
              </button>
          </div>
          </div>
        </div>
    );
};

export default Header;
