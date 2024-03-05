import { useWizard } from "react-use-wizard";

const ConsentScreen = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <>
      <div className="lg:ml-6 lg:col-start-2 lg:max-w-2xl">
        {/* <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
            Securing your API
        </p> */}
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
          Privacy Consent
        </h4>

        <ul className="mt-8 space-y-3 font-medium">
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
              This study is designed to evaluate Generative AI models in the context of Mental Health support problems.
            </p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
              As a user, you will have the opportunity to ask questions related a specific mental health problem context. The system will potentially provide one of more responses which must be carefully read and evaluated via a brief questionnaire.
            </p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
              The system will not ask for any personally identifiable information and entire evaluation will be done anonymously.
            </p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
              .......
            </p>
          </li>
        </ul>
      </div>
      <footer className=" mt-20 bg-gray-200 py-8 px-4 shadow-md z-10 flex justify-content-center align-items-center dark:bg-slate-900 dark:text-white">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <div>
            <label className="inline-flex items-center" >
              <input id="indigoCheckBox" type="checkbox" className="w-4 h-4 accent-indigo-700" checked></input>
              <span className="ml-2">I have read and understood the terms of using the service.</span>
            </label>
          </div>
        </div>
        <div className="flex ml-auto gap-4">
          <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">
          </a>
          {/* <button className=" px-4 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"

            onClick={nextStep}>Accept and Proceed...</button> */}
          <button onClick={nextStep}
          className="rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path fill-rule="evenodd"
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
              clip-rule="evenodd"></path>
          </svg>
          <span className="font-bold">Accept and Proceed...</span>
        </button>
        </div>
      </footer>
    </>
  );
};

export default ConsentScreen;