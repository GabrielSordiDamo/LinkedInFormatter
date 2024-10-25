import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styles from "./LinkedInEditor.module.scss";
import { convertDeltasToHtml } from "@/components/Editor/LinkedInEditor.utils.tsx";

export interface EditorPropsInput {
  readonly onContentChange?: (content: string) => void;
  readonly className?: string;
}

const LinkedInEditor = forwardRef(
  ({ onContentChange, className }: EditorPropsInput, ref) => {
    const editorRef = useRef(null);
    const quillRef = useRef<Quill>();
    const clear = () => {
      quillRef.current?.setContents([]);
    };
    useImperativeHandle(ref, () => {
      return {
        clear: clear,
      };
    }, []);

    const handleCopy = (e: any) => {
      e.preventDefault();
      const selection = quillRef.current?.getSelection();
      if (selection) {
        const selectedDelta = quillRef.current!.getContents(
          selection.index,
          selection.length,
        );
        const html = convertDeltasToHtml(selectedDelta);
        e.clipboardData.setData("text/html", html);
      }
    };

    useEffect(() => {
      if (editorRef.current && !quillRef.current) {
        const quill = new Quill(editorRef.current, {
          theme: "snow",
          modules: {
            toolbar: {
              container: [
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                [
                  "scriptText",
                  "squared",
                  "negativeSquared",
                  "circled",
                  "negativeCircled",
                  "doubleStruck",
                ],
              ],
            },
          },
          placeholder: "Create your LinkedIn post...",
        });

        quill.on("editor-change", () => {
          const deltas = quill.getContents();
          const html: string = convertDeltasToHtml(deltas);
          onContentChange && onContentChange(html);
        });

        quillRef.current = quill;
      }
      quillRef.current?.root.addEventListener("copy", handleCopy);

      return () => {
        quillRef.current?.root.removeEventListener("copy", handleCopy);
      };
    }, []);

    return (
      <div className={`${styles.wrapper} ${className}`}>
        <div className={`${className}`} ref={editorRef}></div>
      </div>
    );
  },
);

export default memo(LinkedInEditor);
