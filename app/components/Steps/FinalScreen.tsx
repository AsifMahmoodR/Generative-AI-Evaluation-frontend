import { useWizard } from "react-use-wizard";
import { observer } from 'mobx-react-lite';
import { evalationStore } from "@/app/stores/evaluation.store";
import EmailSubscribe from "../Shared/EmailSubscribe";

const FinalScreen = () => {
  const { goToStep, nextStep } = useWizard();

  const restartEvaluation = () => {
    evalationStore.resetEvaluation();
    goToStep(2)
  }

  var responses = evalationStore.responses;


  return (
    <>
      <div className="consent-container">
        <div className="lg:ml-6 lg:col-start-2">
          <h4 className="mb-5 mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
            Response Evaluation Completed
          </h4>
          {<div id="alert-border-3" className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ms-3 text-sm font-medium">
              <strong className="font-bold">Feedback received!</strong> Thank you for your support!
            </div>
          </div>}
        </div>

        <EmailSubscribe />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 px-1 py-5 md:px-5">
          {responses.map((c, index) => (

            <div className={`response-item max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${!!c.rating ? 'submitted' : ''}`}
              key={c.modelID}>
              <div className="grid grid-cols-4 gap-4 response-title justify-center items-center">
                <span className="col-span-3">{c.displayName}</span>
              </div>
              <p className="response-text"> {c.manswer}</p>
              <p className="response-rating"> {evalationStore.getRatingText(c.rating!)}</p>
            </div>
          ))}
        </div>
        
      </div>

      {!evalationStore.isLoading && <footer className="app-footer py-3">
        {evalationStore.hasSubmittedAll() && <div className="flex items-end text-right float-left">
          <button onClick={restartEvaluation}
            className="btn-green rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clip-rule="evenodd"></path>
            </svg>
            <span className="font-bold">Try another question?</span>
          </button></div>}
      </footer>}
    </>
  );
};

export default observer(FinalScreen);