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
          className="flex justify-between items-start border-b border-[#979797] py-2"
        >
          <div className="flex flex-col gap-1 w-[90%]">
            <p className="text-[10px] lg:text-xl font-semibold text-gray-500">
              {msg.date}
            </p>
            <p className="text-[12px] lg:text-3xl font-bold text-black">
              {msg.title}
            </p>
            <p className="text-[10px] lg:text-2xl text-black truncate">
              {msg.content}
            </p>
          </div>
          <MailOpen className="w-4 h-4
           lg:w-12 lg:h-12 text-red-600" />
        </div>
      ))}

      {/* Footer */}
      <div className="flex justify-between items-center px-2 text-xs lg:text-2xl text-gray-500 mt-2">
        <p>Showing 1 to 4 of 4</p>
        <div className="flex gap-2">
          <button className="w-6 h-6
          lg:h-12 lg:w-12 flex items-center justify-center bg-[#4B465C] text-white rounded-sm">
            ❮
          </button>
          <button className="w-6 h-6 flex items-center justify-center bg-[#4B465C] text-white rounded-sm  lg:h-12 lg:w-12">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageList;
