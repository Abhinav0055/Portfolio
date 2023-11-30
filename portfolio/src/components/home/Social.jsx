import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/abhinav_rawat08/"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://github.com/Abhinav0055"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/abhinav-rawat-143763294/"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}

export default Social;
