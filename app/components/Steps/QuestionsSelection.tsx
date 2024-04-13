import { useWizard } from "react-use-wizard";
import { useEffect } from "react";
import { observer } from 'mobx-react-lite';
import { evalationStore } from "@/app/stores/evaluation.store";
import SelectionIcon from "../Shared/SelectionIcon";
import AppLoader from "../Shared/App-Loader";

const QuestionsSelection = () => {
  const { handleStep, previousStep, nextStep } = useWizard();


  var questions = evalationStore.questions.filter(x => !!x.isEvaluated === false);
  useEffect(() => {
    evalationStore.loadQuestions();
  }, []);

  const onSelected = (questionId: string) => {
    evalationStore.updateSelectedQuestion(questionId);
  }

  const isSelected = (questionId: string) => {
    return evalationStore.selectedQuestion === questionId;
  }

  const canProceed = () => {
    return !!evalationStore.selectedQuestion;
  }

  return (
    <>
      <div className="consent-container">
        <div className="lg:ml-6 lg:col-start-2">
          <h4 className="mb-5 mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
            Question Selection
          </h4>
          <h3 className="mb-5 mt-2 text-xl font-extrabold leading-8 text-gray-500 dark:text-white sm:text-3xl sm:leading-9"
          >{evalationStore.getTopicName()}</h3>
          <div id="alert-border-1" className="flex items-center p-4 mb-1 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800" role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ms-3 text-sm font-medium">
              Please select a question to view relevant responses:             </div>
          </div>
        </div>
        <AppLoader />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 px-1 py-5 md:px-5">
          {questions.map((c) => (

            <div className={`question-item p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
${isSelected(c.q_id) ? 'selected' : ''}`}

              onClick={() => onSelected(c.q_id)}

              key={c.q_id}>{c.question} <SelectionIcon isSelected={isSelected(c.q_id) } /></div>
          ))}
        </div>
      </div>

      <footer className="app-footer py-3">
        <div className="flex items-end text-right float-right">
          <button disabled={!canProceed()} onClick={nextStep}
            className="btn-green rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clip-rule="evenodd"></path>
            </svg>
            <span className="font-bold">Proceed with selected Question...</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default observer(QuestionsSelection);