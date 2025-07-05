// MessageList.jsx
import React from "react";
import { messagesData } from "../data/massageData";
import { MailOpen } from "lucide-react";

function MessageList() {
  return (
    <div className="w-full h-full overflow-y-auto p-2">
      {messagesData.slice(0, 4).map((msg) => (
        <div
          key={msg.id}
          className="flex justify-between items-start border-b border-[#979797] md:py-2 lg:py-1 "
        >
          <div className="flex flex-col gap-1 w-[90%]">
            <p className="text-[10px] lg:text-xs font-semibold text-gray-500">
              {msg.date}
            </p>
            <p className="text-[12px] lg:text-md font-bold text-black">
              {msg.title}
            </p>
            <p className="text-[10px] lg:text-xs text-black truncate">
              {msg.content}
            </p>
          </div>
          <MailOpen className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
        </div>
      ))}

      {/* Footer */}
      <div className="flex justify-between items-center px-2 text-xs lg:text-md text-gray-500 mt-2">
        <p>Showing 1 to 4 of 4</p>
        <div className="flex gap-2">
          <button className="w-6 h-6 lg:h-7 lg:w-7 flex items-center justify-center bg-[#4B465C] text-white rounded-sm">
            ❮
          </button>
          <button className="w-6 h-6 lg:h-7 lg:w-7 flex items-center justify-center bg-[#4B465C] text-white rounded-sm">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageList;
