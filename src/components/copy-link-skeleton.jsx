const CopyLinkSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 sm:mt-44 mb-8  shadow rounded-md p-4 w-full dark:bg-gray-800">
      <div className="animate-pulse">
        <div className="flex items-center">
          <div className="flex-1 grid grid-cols-3 gap-4">
            <div className="h-4 bg-slate-700 rounded col-span-2"></div>
            <div className="h-4 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="rounded-md bg-slate-700 h-8 w-14 ml-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CopyLinkSkeleton;
