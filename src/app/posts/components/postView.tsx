import Image from "next/image";
import img from "@/assets/img.jpg";

export default function PostView({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      {/* Updated responsive classes for the main container */}
      <div className="h-full w-full md:w-2/3 lg:w-1/2 bg-gray-900 ml-auto animate-slide-in-from-right transform-gpu overflow-y-auto">
        {/* Updated header with responsive padding */}
        <div className="sticky top-0 bg-gray-900 flex justify-between items-center p-3 sm:p-4 border-b border-gray-700">
          <h2 className="text-lg sm:text-xl font-bold text-white">Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Updated content area with responsive padding */}
        <div className="aspect-video w-full max-h-[300px] relative bg-gray-800 rounded-lg overflow-hidden">
          <Image
            src={img} // Replace with your image path
            alt="Post image"
            className="object-center w-full h-full"
            width={500}
            height={500}
          />
        </div>
        <div className="p-3 sm:p-4 space-y-4">
          <div className="min-h-[100px]">
            <p className="text-white text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos... (Full content here)
            </p>
          </div>

          {/* Updated interaction buttons with responsive sizing */}
          <div className="flex gap-3 sm:gap-5 border-t border-gray-700 pt-3 sm:pt-4">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* ... svg path remains the same ... */}
              </svg>
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* ... svg path remains the same ... */}
              </svg>
            </button>
            <p className="text-xs sm:text-sm text-gray-400">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
