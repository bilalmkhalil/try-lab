"use client";

import Editor from "@/components/Editor";
import { useState } from "react";

const EditorPage = () => {
  const [content, setContent] = useState<TrustedHTML>("");
  return (
    <div className="grid grid-cols-2 gap-5 p-10">
      <div className="border-b-slate-200 border-2 h-[400px] rounded-lg p-5">
        <Editor setContent={setContent} />
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default EditorPage;
