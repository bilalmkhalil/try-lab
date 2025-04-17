"use client";

import { ToolbarButtonProps, ToolbarProps } from "@/types/types";
import { Button } from "./ui/button";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  Underline,
} from "lucide-react";

const Toolbar = ({ editor }: ToolbarProps) => {
  const toolbarButtons: ToolbarButtonProps[] = [
    {
      icon: Bold,
      action: "bold",
      command: (editor) => editor.chain().focus().toggleBold().run(),
    },
    {
      icon: Italic,
      action: "italic",
      command: (editor) => editor.chain().focus().toggleItalic().run(),
    },
    {
      icon: Strikethrough,
      action: "strike",
      command: (editor) => editor.chain().focus().toggleStrike().run(),
    },
    {
      icon: Underline,
      action: "underline",
      command: (editor) => editor.chain().focus().toggleUnderline().run(),
    },
    {
      icon: ListOrdered,
      action: "ordered_list",
      command: (editor) => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      icon: List,
      action: "bullet_list",
      command: (editor) => editor.chain().focus().toggleBulletList().run(),
    },
  ];

  return (
    <div className="flex gap-2">
      {toolbarButtons.map((button: any) => (
        <Button
          key={button.action}
          onClick={(e) => {
            e.preventDefault();
            button.command(editor);
          }}
          className="bg-transparent shadow-none hover:bg-slate-200 text-black"
        >
          <button.icon />
        </Button>
      ))}
    </div>
  );
};

export default Toolbar;
