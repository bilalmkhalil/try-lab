import { Editor } from "@tiptap/react";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

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

export interface FormTypes {
  name: string;
  email: string;
  role: string;
  admincode?: string;
  usercode?: string;
}

export interface AnimatedFormElementProps {
  children: ReactNode;
  delay?: number;
}

export interface AnimatedFormErrorMessageProps {
  message?: string;
}
