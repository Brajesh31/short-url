import CreateLink from "components/create-link";
import LinkIcon from "components/icons/short-link";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <div className="mt-20 mb-20 sm:mt-48 sm:mb-36">
        <h1 className="text-4xl sm:text-6xl text-white text-center font-bold  items-center justify-center gap-4">
          <span className="mr-4">Unleash the Power of Short</span>
          <span className="w-8 h-8 sm:w-10 sm:h-10 inline-block">
            <LinkIcon color={"text-blue-600"} />
          </span>
          <span className="text-blue-600 underline underline-offset-4 ml-1">
            Links
          </span>
        </h1>
        <div className="flex justify-center my-3">
          <p className="text-gray-400 text-lg text-center">
            Discover the potential of brevity with our short link generator!{" "}
            <br />
            Unleash the power of concise, memorable URLs and boost your online
            presence today
          </p>
        </div>
      </div>
      <CreateLink />
    </div>
  );
};

export default HomePage;
