import { Paperclip, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const MessageInput = () => {
  return (
    <form className="flex gap-2 py-2 mx-4">
      <Button
        type="button"
        variant="outline"
        className="py-5 border-gray-300 rounded-xl flex items-center justify-center"
      >
        <Paperclip className="text-gray-500" />
      </Button>
      <Input
        type="text"
        onChange={() => null}
        placeholder="Type your message here..."
        className="w-full focus-visible:ring-0 bg-white border-gray-300 py-5 rounded-xl shadow-none"
      />
      <Button
        type="submit"
        variant="outline"
        className="py-5 border-gray-300 rounded-xl flex items-center justify-center"
      >
        <Send className="text-gray-500" />
      </Button>
    </form>
  );
};

export default MessageInput;
