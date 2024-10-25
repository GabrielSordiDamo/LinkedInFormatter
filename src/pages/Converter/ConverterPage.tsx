import { memo, useRef, useState } from "react";
import LinkedInPost from "../../components/LinkedInPost/LinkedInPost.tsx";
import Editor from "../../components/Editor/LinkedInEditor.tsx";
import styles from "./ConverterPage.module.scss";
import ProfileImg from "../../assets/imgs/profile.jpg";
import { Button } from "@/components/Buttom/Buttom.tsx";
import { FaCopy } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Text } from "@/components/Text/Text.tsx";
import TypeIt from "typeit-react";
import { Title } from "@/components/Title/Title.tsx";
import rocketGif from "@/assets/imgs/rocket.gif";

const ConverterPage = () => {
  const editorRef = useRef<any>(null);
  const [editorContent, setEditorContent] = useState("");

  const handeCopy = () => {
    const blob = new Blob([editorContent], { type: "text/html" });
    const clipboardItem = new ClipboardItem({ "text/html": blob });
    navigator.clipboard.write([clipboardItem]);
  };
  const handeClear = () => {
    editorRef.current?.clear();
  };
  return (
    <div className={styles.page}>
      <Title className={styles.title_container}>
        <TypeIt
          options={{ speed: 50 }}
          getAfterInit={(instance) => {
            instance.destroy();
            return instance;
          }}
          getBeforeInit={(instance) =>
            instance
              .type("Edit, Preview And Polish Your Post")
              .type(
                ` <img src='${rocketGif}' class='${styles.rocket}' alt="Rocket" />`,
              )
          }
        ></TypeIt>
      </Title>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Text className={styles.wrapper_title}>Editor</Text>
          <Editor
            ref={editorRef}
            className={styles.editor}
            onContentChange={setEditorContent}
          ></Editor>
          <div className={styles.buttons}>
            <Button className={styles.button} onClick={handeCopy}>
              <FaCopy />
              Copy
            </Button>
            <Button
              className={`secondary ${styles.button}`}
              onClick={handeClear}
            >
              <FaRegTrashCan />
              Clear
            </Button>
          </div>
        </div>

        <div className={styles.wrapper}>
          <Text className={styles.wrapper_title}>Preview</Text>
          <LinkedInPost
            className={styles.post}
            profileImage={ProfileImg}
            contentText={editorContent}
            name="Gabriel Sordi Damo"
            headline="Full Stack Enginner | React | Node "
            profileHref="https://www.linkedin.com/in/gabriel-sordi-damo/"
          ></LinkedInPost>
        </div>
      </div>
    </div>
  );
};

export default memo(ConverterPage);
