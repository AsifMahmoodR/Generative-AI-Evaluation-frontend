import { useWizard } from "react-use-wizard";

const WelcomeScreen = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <div className="lg:col-start-2 w-full">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white " >Welcome</h1>
      <p className="mt-10 text-xl tracking-tight text-gray-900 dark:text-white ">
        Thank you for choosing to participate in our study. Please click the button below to begin:</p>

      <footer className="app-footer py-3">
        <div className="flex items-end text-right float-right">
          <button onClick={nextStep}
            className="rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clip-rule="evenodd"></path>
            </svg>
            <span className="font-bold">Click here to begin...</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeScreen;