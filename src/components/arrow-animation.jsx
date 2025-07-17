const ArrowAnimation = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 sm:mt-28 mb-5">
      <div className="flex justify-center">
        <div className="animate-bounce bg-gray-800 text-purple-400 border-[0.5px] border-gray-600 p-2 rounded-full w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ArrowAnimation;
