import CopyLink from "components/copy-link";
import useLocalStorage from "hooks/use-local-storage";

const MyLinks = () => {
  const [shortLinks, dispatch] = useLocalStorage("shortLinks", []);
  const deleteLink = (id) => {
    const result = shortLinks.filter((item) => item.id !== id);
    dispatch(result);
  };
  return (
    <div className="max-w-4xl mx-auto pb-40">
      <div className="mt-20 mb-8 sm:mt-32">
        <h1 className="text-4xl sm:text-6xl text-white text-center font-bold  items-center justify-center gap-4">
          Shortened Links
        </h1>
      </div>
      {shortLinks.map((shortLinkData) => (
        <div
          key={shortLinkData.id}
          className="relative flex items-center mb-5 group ">
          <div className="flex-1 mx-8 sm:mx-9 sm:pr-9">
            <CopyLink shortLinkData={shortLinkData} />
          </div>
          <button
            onClick={() => deleteLink(shortLinkData.id)}
            type="button"
            title="Delete"
            className="absolute flex top-[-4px] right-[28px] sm:right-9 sm:top-1/2 sm:-translate-y-1/3 sm:hidden group-hover:inline-flex ml-auto -mx-1.5 -my-1.5 bg-red-500 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100  items-center justify-center h-8 w-8 dark:text-red-500 dark:hover:text-red-600 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close">
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyLinks;
