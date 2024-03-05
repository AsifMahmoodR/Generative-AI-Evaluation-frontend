import Image from "next/image";

const Header = () => {
    return (
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Generative AI Models Evaluation</h1>
        </div>
        <Image
              src="/uwe_logo.svg"
              alt="UWE Logo"
              className="fixed top-0 left-0 height-10"
              width={100}
              height={12}
              priority
            />
      </header>
      
    );
  };

  export default Header;