import { useState } from "react";

const CopyLink = ({ shortLinkData }) => {
  const { originalLink, shortLink } = shortLinkData;
  const [copyState, setCopyState] = useState(false);
  const copyLink = () => {
    if (copyState) return;
    navigator.clipboard.writeText(shortLink);
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 2000);
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full">
        <div
          id="toast-undo"
          className="flex items-center justify-between w-full p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert">
          <div className="flex-1 md:flex justify-between items-center">
            <div className="text-sm font-normal mr-4 whitespace-pre-wrap break-all mb-2 md:mb-0">{originalLink}</div>
            <a
              href={shortLink}
              target="_blank"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              {shortLink}
            </a>
          </div>
          <div className="flex items-center ml-4">
            <button
              onClick={copyLink}
              title="Copy"
              data-tooltip-target="button-icon-example-copy-clipboard-tooltip"
              data-tooltip-placement="bottom"
              type="button"
              data-copy-state="copy"
              className="flex items-center px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white copy-to-clipboard-button">
              <svg
                className="w-3.5 h-3.5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20">
                <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"></path>
                <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"></path>
              </svg>
              <span className="copy-text">{copyState ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyLink;
