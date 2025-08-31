import {
  MessageBubbleProps,
  Reaction,
  renderMessageContentProps,
  renderMessageReactionsProps,
  renderMessageStatusProps,
} from "@/types/types";
import { Check, CheckCheckIcon } from "lucide-react";

const renderMessageContent = ({ content }: renderMessageContentProps) => {
  return (
    <div>
      {content?.attachments && content?.attachments?.length > 0 && (
        <div className="mb-2">
          {content?.attachments?.map((attachment: any, idx: number) => (
            <img
              key={idx}
              src={attachment.url}
              alt={`attachment-${idx}`}
              className="object-cover rounded-lg"
            />
          ))}
        </div>
      )}
      <p>{content?.body}</p>
    </div>
  );
};

const renderMessageStatus = ({
  timestamp,
  status,
  index,
}: renderMessageStatusProps) => {
  return (
    <div className={`${index % 2 === 0 && "hidden"} flex items-end pl-0.5`}>
      <p className="message-gray-500 mr-3 message-sm">
        {new Date(timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      {status === "seen" ? (
        <CheckCheckIcon className="message-green-500 w-5 h-5" />
      ) : status === "delivered" ? (
        <CheckCheckIcon className="message-gray-400 w-5 h-5" />
      ) : (
        <Check className="message-blue-400 w-5 h-5" />
      )}
    </div>
  );
};

const renderMessageReactions = ({ reactions }: renderMessageReactionsProps) => {
  return (
    <div>
      {reactions?.length > 0 && (
        <div className="flex gap-2">
          {reactions?.map((reaction: Reaction, idx: number) => (
            <div
              key={idx}
              className="border border-none bg-secondary px-2 py-1.5 rounded-full message-sm flex items-center gap-1"
            >
              <span>{reaction?.emoji}</span>
              <span className={`${reaction?.count < 2 && "hidden"}`}>
                {reaction?.count}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MessageBubble = ({ message, index }: MessageBubbleProps) => {
  return (
    <div>
      <div
        className={`flex flex-col w-2/3 border border-none px-1 pt-1 pb-1 rounded-xl
        ${
          index % 2 === 0
            ? "bg-primary justify-start mr-auto"
            : "bg-primary justify-end ml-auto"
        }  `}
      >
        <div className="bg-background p-4 rounded-xl">
          {renderMessageContent({ content: message?.content })}
        </div>
        <div className="flex justify-between items-center m-2">
          {renderMessageReactions({ reactions: message?.reactions })}
          {renderMessageStatus({
            timestamp: message?.timestamp,
            status: message?.status,
            index: index,
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
