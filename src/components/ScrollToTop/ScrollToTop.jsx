import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button onClick={scrollToTop} style={styles.button}>
          ↑
        </button>
      )}
    </>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#fbf8f8",
    color: "black",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
};