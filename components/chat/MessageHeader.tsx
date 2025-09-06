import { CircleAlert } from "lucide-react";

const MessageHeader = () => {
  return (
    <div className="flex items-center gap-4 border bg-primary border-border dark:border-none rounded-xl my-4 p-4 mx-4">
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
        alt="john"
        className="w-10 h-10 rounded-full bg-gray-300"
      />
      <div>
        <p className="font-bold text-xl">John Doe</p>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Online</span>
        </div>
      </div>

      <CircleAlert className="text-accent ml-auto w-6 h-6" />
    </div>
  );
};

export default MessageHeader;
