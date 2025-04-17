"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import { EditorProps } from "@/types/types";

const Editor = ({ setContent }: EditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });

  setContent(editor?.getHTML() || "");
  
  return (
    <div className="flex gap-5 flex-col">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="w-full min-h-screen" />
    </div>
  );
};

export default Editor;
