"use client";

import { useState } from "react";
import PostView from "./postView";
import Image from "next/image";
import img from "@/assets/img.jpg";

export default function Post() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="bg-black/50 rounded-md p-4 space-y-4 w-full max-w-2xl mx-auto">
      <div className="aspect-video w-full h-[200px] relative bg-gray-800 rounded-lg overflow-hidden">
        <Image
          src={img} // Replace with your image path
          alt="Post image"
          className="object-center w-full h-full "
          width={500}
          height={500}
        />
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="min-h-[100px] hover:cursor-pointer focus:outline-none focus:ring-0 "
      >
        {isOpen ? (
          <PostView onClose={() => setIsOpen(!isOpen)} />
        ) : (
          <p className="w-full bg-transparent text-white resize-none focus:outline-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos...
          </p>
        )}
      </div>

      <div className="flex gap-5 border-t border-gray-700 pt-4">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* <button className="flex items-center gap-2 text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span>Comment</span>
        </button> */}

        <button className="flex items-center gap-2 text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </button>
        <p className="text-sm text-gray-400">2 hours ago</p>
      </div>
    </div>
  );
}
