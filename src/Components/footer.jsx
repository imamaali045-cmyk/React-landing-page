import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['mntn-footer']}>
      <div className={styles['mntn-footer-container']}>
        
        {/* Left Section */}
        <div className={styles['mntn-footer-left']}>
          <div className={styles['mntn-footer-brand']}>
            <h2 className={styles['mntn-footer-logo']}>Alpine Heights</h2>
            <p className={styles['mntn-footer-tagline']}>
              Get out there & discover your next<br />slope, mountain & destination!
            </p>
          </div>
          <p className={styles['mntn-footer-copyright']}>
            Copyright 2026 Alpine Heights, Inc. Terms & Privacy
          </p>
        </div>

        {/* Right Section */}
        <div className={styles['mntn-footer-links']}>
          
          <div className={styles['mntn-footer-col']}>
            <h4 className={styles['mntn-footer-heading']}>More on The Blog</h4>
            <ul>
              <li><a href="#about">About MNTN</a></li>
              <li><a href="#contributors">Contributors & Writers</a></li>
              <li><a href="#write">Write For Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className={styles['mntn-footer-col']}>
            <h4 className={styles['mntn-footer-heading']}>More on Alpine Heights</h4>
            <ul>
              <li><a href="#team">The Team</a></li>
              <li><a href="#jobs">Jobs</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;