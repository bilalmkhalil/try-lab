"use client";

import MessageBubble from "@/components/chat/MessageBubble";
import MessageHeader from "@/components/chat/MessageHeader";
import MessageInput from "@/components/chat/MessageInput";
import UserAbout from "@/components/chat/UserAbout";
import { ModeToggle } from "@/components/ThemeModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PrivateBroadcastMessage } from "@/types/types";
import { Check, CheckCheckIcon, Search, Send } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import io from "socket.io-client";

// const socket = io("http://localhost:4001");

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey, how are you?",
      sender: {
        name: "John Doe",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      timestamp: new Date("2024-01-10T10:30:00"),
    },
    {
      id: 2,
      text: "I'm doing great! How about you?",
      sender: {
        name: "Alice Smith",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      },
      timestamp: new Date("2024-01-10T10:31:00"),
    },
    {
      id: 3,
      text: "Working on any interesting projects?",
      sender: {
        name: "Bob Wilson",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      },
      timestamp: new Date("2024-01-10T10:32:00"),
    },
    {
      id: 4,
      text: "Yes! I'm building a chat app.",
      sender: {
        name: "John Doe",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      timestamp: new Date("2024-01-10T10:33:00"),
    },
    {
      id: 5,
      text: "That sounds fun. What stack are you using?",
      sender: {
        name: "Alice Smith",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      },
      timestamp: new Date("2024-01-10T10:34:00"),
    },
    {
      id: 6,
      text: "React, TypeScript, and Socket.io for real-time features.",
      sender: {
        name: "John Doe",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      timestamp: new Date("2024-01-10T10:35:00"),
    },
    {
      id: 7,
      text: "Nice! Are you deploying it anywhere?",
      sender: {
        name: "Bob Wilson",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      },
      timestamp: new Date("2024-01-10T10:36:00"),
    },
    {
      id: 8,
      text: "Planning to use Vercel for frontend and Heroku for backend.",
      sender: {
        name: "John Doe",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      timestamp: new Date("2024-01-10T10:37:00"),
    },
    {
      id: 9,
      text: "Let me know if you need help with deployment.",
      sender: {
        name: "Alice Smith",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      },
      timestamp: new Date("2024-01-10T10:38:00"),
    },
    {
      id: 10,
      text: "Thanks, Alice! I appreciate it.",
      sender: {
        name: "John Doe",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      timestamp: new Date("2024-01-10T10:39:00"),
    },
    {
      id: 11,
      text: "What features are you planning to add?",
      sender: {
        name: "Bob Wilson",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      },
      timestamp: new Date("2024-01-10T10:40:00"),
    },
    {
      id: 12,
      text: "Group chats, emojis, and maybe file sharing.",
      sender: {
        name: "John Doe",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      timestamp: new Date("2024-01-10T10:41:00"),
    },
    {
      id: 13,
      text: "Emojis would be awesome!",
      sender: {
        name: "Alice Smith",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      },
      timestamp: new Date("2024-01-10T10:42:00"),
    },
    {
      id: 14,
      text: "Let me know when it's live. I'd love to try it.",
      sender: {
        name: "Bob Wilson",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      },
      timestamp: new Date("2024-01-10T10:43:00"),
    },
    {
      id: 15,
      text: "Will do! Thanks for the support, everyone.",
      sender: {
        name: "John Doe",
        profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      timestamp: new Date("2024-01-10T10:44:00"),
    },
  ]);
  const [message, setMessage] = useState("");

  const texts = [
    {
      id: 1,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "Hey, I have a question: How do I use useEffect to fetch data from an API in React?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:30:00Z",
      status: "seen",
      reactions: [
        {
          emoji: "👍",
          count: 2,
          users: [
            { id: "user_456", name: "Bob" },
            { id: "user_789", name: "Charlie" },
          ],
        },
        { emoji: "❤️", count: 1, users: [{ id: "user_456", name: "Bob" }] },
      ],
    },
    {
      id: 2,
      sender: { id: "user_456", name: "Bob" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "You can use useEffect to fetch data by calling your API inside the effect and updating state with the result.",
        attachments: [
          {
            type: "image",
            url: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ],
      },
      timestamp: "2024-01-10T10:31:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 3,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "What is the difference between useState and useReducer?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:32:00Z",
      status: "seen",
      reactions: [
        { emoji: "🤔", count: 1, users: [{ id: "user_789", name: "Charlie" }] },
      ],
    },
    {
      id: 4,
      sender: { id: "user_789", name: "Charlie" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_456", name: "Bob" },
      ],
      content: {
        type: "text",
        body: "useState is simpler for basic state, while useReducer is better for complex state logic.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:33:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 5,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I optimize performance in a large React app?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:34:00Z",
      status: "seen",
      reactions: [
        { emoji: "🚀", count: 1, users: [{ id: "user_456", name: "Bob" }] },
      ],
    },
    {
      id: 6,
      sender: { id: "user_456", name: "Bob" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "Use memoization hooks like useMemo and useCallback, and split components to reduce unnecessary renders.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:35:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 7,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "Can you explain how context works in React?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:36:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 8,
      sender: { id: "user_789", name: "Charlie" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_456", name: "Bob" },
      ],
      content: {
        type: "text",
        body: "Context lets you share data across components without passing props manually at every level.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:37:00Z",
      status: "seen",
      reactions: [
        { emoji: "👏", count: 1, users: [{ id: "user_123", name: "Alice" }] },
      ],
    },
    {
      id: 9,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I handle forms and validation in React?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:38:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 10,
      sender: { id: "user_456", name: "Bob" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "You can use controlled components and libraries like Formik or React Hook Form for validation.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:39:00Z",
      status: "seen",
      reactions: [
        { emoji: "✅", count: 1, users: [{ id: "user_789", name: "Charlie" }] },
      ],
    },
    {
      id: 11,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "What are some best practices for managing state?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:40:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 12,
      sender: { id: "user_789", name: "Charlie" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_456", name: "Bob" },
      ],
      content: {
        type: "text",
        body: "Keep state local where possible, use context for global state, and consider libraries like Redux for complex apps.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:41:00Z",
      status: "seen",
      reactions: [
        { emoji: "💡", count: 1, users: [{ id: "user_456", name: "Bob" }] },
      ],
    },
    {
      id: 13,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I implement authentication in a React app?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:42:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 14,
      sender: { id: "user_456", name: "Bob" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "Use JWT tokens, context for user state, and protect routes with conditional rendering.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:43:00Z",
      status: "seen",
      reactions: [
        { emoji: "🔒", count: 1, users: [{ id: "user_123", name: "Alice" }] },
      ],
    },
    {
      id: 15,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "What is the purpose of useMemo and useCallback?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:44:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 16,
      sender: { id: "user_789", name: "Charlie" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_456", name: "Bob" },
      ],
      content: {
        type: "text",
        body: "They help prevent unnecessary recalculations and re-renders by memoizing values and functions.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:45:00Z",
      status: "seen",
      reactions: [
        { emoji: "🧠", count: 1, users: [{ id: "user_123", name: "Alice" }] },
      ],
    },
    {
      id: 17,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I fetch data with async/await in useEffect?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:46:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 18,
      sender: { id: "user_456", name: "Bob" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "Define an async function inside useEffect and call it, then update state with the fetched data.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:47:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 19,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I use custom hooks?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:48:00Z",
      status: "seen",
      reactions: [
        { emoji: "🪝", count: 1, users: [{ id: "user_456", name: "Bob" }] },
      ],
    },
    {
      id: 20,
      sender: { id: "user_789", name: "Charlie" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_456", name: "Bob" },
      ],
      content: {
        type: "text",
        body: "Create a function starting with 'use' that uses React hooks, then reuse it across components.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:49:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 21,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I deploy a React app to Vercel?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:50:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 22,
      sender: { id: "user_456", name: "Bob" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "Push your code to GitHub and import the repo in Vercel, which will handle the deployment automatically.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:51:00Z",
      status: "seen",
      reactions: [
        {
          emoji: "🚀",
          count: 2,
          users: [
            { id: "user_123", name: "Alice" },
            { id: "user_789", name: "Charlie" },
          ],
        },
      ],
    },
    {
      id: 23,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I set up routing with React Router?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:52:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 24,
      sender: { id: "user_789", name: "Charlie" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_456", name: "Bob" },
      ],
      content: {
        type: "text",
        body: "Install react-router-dom and use <BrowserRouter>, <Routes>, and <Route> components to define routes.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:53:00Z",
      status: "seen",
      reactions: [
        { emoji: "🛣️", count: 1, users: [{ id: "user_456", name: "Bob" }] },
      ],
    },
    {
      id: 25,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I use TypeScript with React?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:54:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 26,
      sender: { id: "user_456", name: "Bob" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "Install TypeScript and @types/react, then use .tsx files and type your props and state.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:55:00Z",
      status: "seen",
      reactions: [
        { emoji: "📦", count: 1, users: [{ id: "user_123", name: "Alice" }] },
      ],
    },
    {
      id: 27,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I handle errors in React components?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:56:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 28,
      sender: { id: "user_789", name: "Charlie" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_456", name: "Bob" },
      ],
      content: {
        type: "text",
        body: "Use error boundaries for catching render errors, and handle async errors with try/catch.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:57:00Z",
      status: "seen",
      reactions: [
        { emoji: "⚠️", count: 1, users: [{ id: "user_456", name: "Bob" }] },
      ],
    },
    {
      id: 29,
      sender: { id: "user_123", name: "Alice" },
      receivers: [
        { id: "user_456", name: "Bob" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "How do I add animations with Framer Motion?",
        attachments: [],
      },
      timestamp: "2024-01-10T10:58:00Z",
      status: "seen",
      reactions: [],
    },
    {
      id: 30,
      sender: { id: "user_456", name: "Bob" },
      receivers: [
        { id: "user_123", name: "Alice" },
        { id: "user_789", name: "Charlie" },
      ],
      content: {
        type: "text",
        body: "Install framer-motion and use the <motion> components to animate elements with props like initial and animate.",
        attachments: [],
      },
      timestamp: "2024-01-10T10:59:00Z",
      status: "delivered",
      reactions: [
        {
          emoji: "✨",
          count: 2,
          users: [
            { id: "user_123", name: "Alice" },
            { id: "user_789", name: "Charlie" },
          ],
        },
      ],
    },
  ];

  // const [texts, setTexts] = useState<PrivateBroadcastMessage[]>([]);

  // useEffect(() => {
  // Listen for incoming messages
  // socket.on("broadcast", (message) => {
  // console.log("Received message:", message);
  // setTexts((prevTexts) => [...prevTexts, message]);
  // setMessages((prevMessages) => [
  //   ...prevMessages,
  //   {
  //     id: prevMessages.length + 1,
  //     text: message.content,
  //     sender: {
  //       name: message.senderId,
  //       profile: message.senderId,
  //     },
  //     timestamp: new Date(),
  //   },
  // ]);
  // });

  // Cleanup on unmount
  // return () => {
  //   socket.off("broadcast");
  // };
  // }, []);

  // console.log(texts);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    socket.emit("message", {
      content: message,
      senderId: "John Doe",
    });

    setMessage("");
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="grid grid-cols-4">
        <div className="col-span-1 flex h-screen flex-col">
          <div className="border bg-white border-gray-300 px-4 py-5 mt-4 flex items-center rounded-xl mx-4">
            <div className="flex items-center gap-3 flex-1">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=CurrentUser"
                alt="Current User"
                className="w-10 h-10 rounded-full bg-gray-300"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">You</h3>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
            <ModeToggle />
          </div>

          <div className="border bg-white border-gray-300 px-4 py-2 my-4 flex items-center rounded-xl mx-4">
            <Search className=" text-gray-500" />
            <Input
              type="text"
              placeholder="Search"
              className="w-full border-none shadow-none focus-visible:ring-0 p-2 h-6"
            />
          </div>

          <motion.div className="flex flex-col gap-2 px-4 overflow-y-scroll no-scrollbar">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className="border bg-white border-gray-300 px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={message.sender.profile}
                    alt={message.sender.name}
                    className="w-10 h-10 rounded-full bg-gray-300"
                  />
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="font-bold">{message.sender.name}</p>
                      <p className="text-gray-500 text-sm">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <p className="text-gray-600 line-clamp-1">{message.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="col-span-2">
          <MessageHeader />

          <div className="flex flex-col gap-4 px-4 h-[calc(100vh-175px)] overflow-y-scroll no-scrollbar">
            {texts.map((text, index) => (
              <MessageBubble key={index} message={text} index={index} />
            ))}
          </div>

          <MessageInput />
        </div>

        <div className="col-span-1">
          <UserAbout />
        </div>
      </div>
    </div>
  );
};

export default Chat;
