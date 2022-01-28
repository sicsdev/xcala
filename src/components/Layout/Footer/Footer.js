import React from 'react';
import Styles from "../Footer/Footer.module.scss"
function Footer() {
  return <div className={Styles.footer_wrapper}>
    <img src='/assets/images/footer-logo.svg' alt='footer-logo'/>
  </div>;
}

export default Footer;
