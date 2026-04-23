import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/yolakshya19"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/lakshya-dhawan19"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://leetcode.com/u/lakshyad1902"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-code-branch"></i>
      </a>
    </div>
  );
};

export default Social;
