import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={styles.footer}>

      <div style={styles.info}>
        <p>
          <strong>Architect Abuzar Plasterwala</strong><br />
          XAR Workshop LLP
        </p>
        <br />
        <p>
          201, sagar xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br />
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />
          xxxxxxxxxxxxxxxxx, 400055
        </p>
        <p>
          <strong>GSTIN: 27AALCR146659</strong>
        </p>
      </div>

      <div
        style={{
          ...styles.social,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
        }}
      >
        <a href="https://youtube.com" style={styles.btn}>
          <i className="fab fa-youtube" style={styles.i}></i> YouTube
        </a>
        <a href="https://twitter.com" style={styles.btn}>
          <i className="fab fa-twitter" style={styles.i}></i> Twitter
        </a>
        <a href="https://linkedin.com" style={styles.btn}>
          <i className="fab fa-linkedin" style={styles.i}></i> Linkedin
        </a>
        <a href="https://github.com" style={styles.btn}>
          <i className="fab fa-github" style={styles.i}></i> Github
        </a>
      </div>

      <div style={styles.copyright}>
        &copy; Mayur Rathod, 2025
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2em',
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  course: {
    marginBottom: '10px',
  },
  info: {
    lineHeight: '1.6',
  },
  social: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid grey',
    borderRadius: '8px',
    padding: '10px 16px',
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
    fontSize: '14px',
    transition: 'background-color 0.2s ease',
  },
  i: {
    marginRight: '8px',
    fontSize: '16px',
  },
  head: {
    color: 'black',
    fontSize: '18px',
  },
  part: {
    color: 'grey',
    textDecoration: 'none',
  },
  copyright: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '13px',
    color: '#666',
  },
};

export default Footer;
