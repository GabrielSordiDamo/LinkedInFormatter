import styles from "./Header.module.scss";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  const likedInUrl = "https://www.linkedin.com/in/gabriel-sordi-damo/";
  return (
    <header className={styles.header}>
      <span className={styles.title}>LinkedIn Formatter</span>
      <span className={styles.icons}>
        <a href={likedInUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
      </span>
    </header>
  );
};

export default Header;
