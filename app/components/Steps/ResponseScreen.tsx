import { useWizard } from "react-use-wizard";
import { useEffect } from "react";
import { observer } from 'mobx-react-lite';
import { evalationStore } from "@/app/stores/evaluation.store";

const ResponseScreen = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  var responses = evalationStore.responses;
  useEffect(() => {
    evalationStore.loadResponses();
  }, []);

  const onSelected = (modelId: string) => {
    evalationStore.updateSelectedResponseModel(modelId);
    nextStep();
  }

  /*const isSelected = (questionId: string) => {
    return evalationStore.selectedQuestion === questionId;
  }
*/
  // const canProceed = () => {
  //   return !!evalationStore.selectedQuestion;
  // }

  return (
    <>
      <div className="consent-container">
        <div className="lg:ml-6 lg:col-start-2 lg:max-w-5xl">
          <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
            Response Evaluation
          </h4>

          <p className="mt-10 text-xl tracking-tight text-gray-900">
            Please read each response carefully and provide feedback:</p>
        </div>

        <div className="grid grid-cols-1 gap-2 py-5">
          {responses.map((c) => (

            <div className={`response-item ${!!c.rating ? 'submitted' : '' }`}
              key={c.modelID}>
              <div className="grid grid-cols-4 gap-4 response-title justify-center items-center">
                <span className="col-span-3">{c.modelID}</span>
                <a href="#"
                  onClick={() => onSelected(c.modelID)}
                  className=" text-xs font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Rate</a>
              </div>
              <p className="response-text"> {c.manswer}</p>
              <p className="response-rating"> {evalationStore.getRatingText(c.rating)}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="app-footer py-3">
      {evalationStore.hasSubmittedAll() &&  <div className="flex items-end text-right float-left">
          <button onClick={previousStep}
            className="btn-green rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clip-rule="evenodd"></path>
            </svg>
            <span className="font-bold">Try another question?</span>
          </button></div> }
        {!evalationStore.hasSubmittedAll() && <div className="flex items-end text-center justify-center items-center">
          <span 
            className="btn-green rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clip-rule="evenodd"></path>
            </svg>
            <span className="font-bold">{evalationStore.responseProgressText()}</span>
          </span>
        </div>}
      </footer>
    </>
  );
};

export default observer(ResponseScreen);