import styles from "./Footer.module.scss";
import { Text } from "@/components/Text/Text.tsx";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text className="secondary">
        Contact me{" "}
        <a
          href="https://www.linkedin.com/in/gabriel-sordi-damo/"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Gabriel Sordi Damo
        </a>
      </Text>
    </footer>
  );
};

export default Footer;
