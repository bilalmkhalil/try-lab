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

// ================= Chat Types =================
export interface Content {
  type: string;
  body: string;
  attachments?: string[];
}

export interface Reaction {
  emoji: string;
  count: number;
  users: SenderRecieverUsers[];
}

export interface SenderRecieverUsers {
  id: string;
  name: string;
}

export interface PrivateBroadcastMessage {
  id: string;
  sender: SenderRecieverUsers[];
  receivers: SenderRecieverUsers[];
  content: Content;
  reactions: Reaction[];
  timestamp: Date;
  status: string;
}

// ------- Chat Functions Props Types -------
export interface MessageBubbleProps {
  message: PrivateBroadcastMessage;
  index: number;
}

export interface renderMessageContentProps {
  content: Content;
}

export interface renderMessageStatusProps {
  timestamp: Date;
  status: string;
  index: number;
}

export interface renderMessageReactionsProps {
  reactions: Reaction[];
}
