import Image from "next/image";

const Header = () => {
  return (
    // <header className="bg-white shadow">
    //   <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    //     <h1 className="text-3xl font-bold tracking-tight text-gray-900">Generative AI for Mental Health | Models Evaluation</h1>
    //   </div>
    //   <Image
    //         src="/uwe_logo.svg"
    //         alt="UWE Logo"
    //         className="fixed top-0 left-0 height-10"
    //         width={100}
    //         height={12}
    //         priority
    //       />
    // </header>
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src="/uwe_logo.svg" className="mr-3 h-6 sm:h-9" alt="UWE Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Generative AI for Mental Health </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Models Evaluation</a>
          </div>
        </div>
      </nav>
    </header>

  );
};

export default Header;