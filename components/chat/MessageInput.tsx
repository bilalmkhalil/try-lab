import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Attachment01Icon,
  DocumentAttachmentIcon,
  Image02Icon,
  SentIcon,
  Video01Icon,
} from "hugeicons-react";
import { motion } from "motion/react";

const renderAttachmentPopover = () => {
  const icons = [
    { icon: <Image02Icon />, label: "Photo" },
    { icon: <Video01Icon />, label: "Video" },
    { icon: <DocumentAttachmentIcon />, label: "Document" },
  ];

  const iconVariants = {
    rest: { rotate: 0, scale: 1 },
    hover: {
      rotate: 90,
      scale: 1.05,
      transition: { duration: 0.28, ease: "easeOut" },
    },
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.div initial="rest" whileHover="hover">
          <Button
            type="button"
            variant="outline"
            className="py-5 border-border dark:border-primary bg-primary rounded-xl flex items-center justify-center"
          >
            <motion.div variants={iconVariants} >
              <Attachment01Icon />
            </motion.div>
          </Button>
        </motion.div>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        sideOffset={10}
        className="bg-primary dark:border-none p-2 rounded-xl dark:shadow-2xl dark:shadow-black/50 overflow-hidden"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.08,
            duration: 0.4,
            ease: "easeOut",
          }}
          className="text-md font-medium pb-2 px-1"
        >
          Attach
        </motion.div>
        <div className="flex flex-col justify-between gap-2">
          {icons.map((item, index) => (
            <motion.div
              initial={{ x: 20 * (index + 1) }}
              animate={{ x: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
              key={index}
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full flex flex-row justify-start items-center dark:border-none gap-2 p-2 rounded-xl hover:bg-muted"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const MessageInput = () => {
  return (
    <form className="flex gap-2 py-2 mx-4">
      {renderAttachmentPopover()}
      <Input
        type="text"
        onChange={() => null}
        placeholder="Type your message here..."
        className="w-full focus-visible:ring-0 bg-primary border-border dark:border-none py-5 rounded-xl shadow-none"
      />
      <Button
        type="submit"
        variant="outline"
        className="py-5 border-border dark:border-none bg-primary rounded-xl flex items-center justify-center"
      >
        <SentIcon />
      </Button>
    </form>
  );
};

export default MessageInput;
