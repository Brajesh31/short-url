import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "react-query";
import LinkIcon from "components/icons/short-link";
import CopyLink from "components/copy-link";
import CopyLinkSkeleton from "components/copy-link-skeleton";
import CreateLinkError from "components/create-link-error";
import useLocalStorage from "hooks/use-local-storage";
import ArrowAnimation from "./arrow-animation";

const CreateLink = () => {
  const [, dispatch] = useLocalStorage("shortLinks", []);
  const [shortLinkData, setShortLinkData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  const urlRef = useRef(null);
  const mutation = useMutation({
    mutationFn: async (url) => {
      return fetch(url).then((res) => res.json());
    },
    onMutate: (variables) => {
      // A mutation is about to happen!
      // Optionally return a context containing data to use when for example rolling back
      setHasError(false);
      return shortLinkData;
    },
    onError: (error, variables, context) => {
      console.error(error);
    },
    onSuccess: (data, variables, context) => {
      createUrlItem(data);
    },
  });

  const createShortUrl = async (event) => {
    const longLink = urlRef.current.value.trim();
    if (!longLink) return (urlRef.current.value = "");
    try {
      const url = `https://api.shrtco.de/v2/shorten?url=${longLink}`;
      mutation.mutate(url);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const createUrlItem = (data) => {
    if (data.ok) {
      urlRef.current.value = "";
      let newItem = {
        id: uuidv4(),
        code: data.result.code,
        originalLink: data.result.original_link,
        shortLink: data.result.full_short_link,
      };
      dispatch((prevState) => [...prevState, newItem]);
      setShortLinkData(newItem);
    } else {
      setHasError(true);
      setError(data.error);
    }
  };
  const resetMutation = () => {
    mutation.reset();
    setHasError(false);
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <form>
          <label
            htmlFor="create-short-link"
            className="mb-2 text-sm font-medium  sr-only text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <div className="flex justify-center items-center w-6 h-6 text-gray-400">
                <LinkIcon />
              </div>
            </div>
            <input
              ref={urlRef}
              type="text"
              id="create-short-link"
              className="block w-full p-4 pl-12 text-sm  border  rounded-lg   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste your link here"
            />
            <button
              onClick={createShortUrl}
              type="button"
              className="text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              Short It
            </button>
          </div>
        </form>
      </div>
      <div>
        {mutation.isLoading ? <CopyLinkSkeleton /> : null}
        {mutation.isSuccess && !hasError ? (
          <>
            <ArrowAnimation />
            <CopyLink shortLinkData={shortLinkData} />
          </>
        ) : null}
        {mutation.isError || hasError ? (
          <CreateLinkError error={error} onReset={resetMutation} />
        ) : null}
      </div>
    </div>
  );
};

export default CreateLink;
