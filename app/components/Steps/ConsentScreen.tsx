import { useEffect } from "react";
import { useWizard } from "react-use-wizard";
import { evalationStore } from "@/app/stores/evaluation.store";
import { observer } from "mobx-react-lite";


const ConsentScreen = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  var consentItems = evalationStore.consentItems;
  useEffect(() => {
    evalationStore.loadConsentItems();
  }, []);

  var checked = evalationStore.hasConsented;
  const handleClick = () => evalationStore.updateConsent(!evalationStore.hasConsented)

  return (
    <>
      <div className="consent-container lg:col-start-2">
        {/* <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
            Securing your API
        </p> */}
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
          Privacy Consent
        </h4>

        <ul className="mt-8 space-y-3 font-medium">
        {consentItems.map((text, index) => (
          <li key={index} className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
            {text}
            </p>
          </li>
        ))}
        </ul>
      </div>
      <footer className="app-footer py-3">
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" onClick={handleClick} checked={checked}  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I have read and understood the terms of using the service.</label>
        </div>
        <div className="flex items-end text-right float-right">

        <button disabled={!checked} onClick={nextStep}
          className="btn-green rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
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

export default observer(ConsentScreen);