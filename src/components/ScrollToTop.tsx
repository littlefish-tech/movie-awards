import React, { useEffect, useState } from "react";
import "../style/scrollToTop.css";
import top from "../asset/images/top.png";

export default function ScrollToTop() {
  // scroll to top idea give credit to https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component
  const [visible, setVisible] = useState<boolean>(false);

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scrollToTop">
      {visible && (
        <div onClick={scrollToTop}>
          <img src={top} alt="Go to top" />
        </div>
      )}
    </div>
  );
}
