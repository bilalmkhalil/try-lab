import { Editor } from "@tiptap/react";
import { LucideIcon } from "lucide-react";

export interface ToolbarProps {
  editor: Editor | null;
}

export interface ToolbarButtonProps {
  icon: LucideIcon;
  action: string;
  command: (editor: Editor) => void;
  isActive?: (editor: Editor) => boolean;
  isEnabled?: (editor: Editor) => boolean;
}

export interface EditorProps {
  setContent: any;
}
