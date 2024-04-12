import { useWizard } from "react-use-wizard";
import { useEffect } from "react";
import { observer } from 'mobx-react-lite';
import { evalationStore } from "@/app/stores/evaluation.store";

const SelectionIcon = () => (<div className='question-icon'>
  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"></path>
  </svg></div>)

const QuestionsSelection = () => {
  const { handleStep, previousStep, nextStep } = useWizard();


  var questions = evalationStore.questions.filter(x => !!x.isEvaluated === false);
  useEffect(() => {
    evalationStore.loadQuestions();
  }, []);

  const onSelected = (questionId: number) => {
    evalationStore.updateSelectedQuestion(questionId);
  }

  const isSelected = (questionId: number) => {
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
          <div id="alert-border-1" className="flex items-center p-4 mb-1 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800" role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div className="ms-3 text-sm font-medium">
              Please select a question to view relevant responses:             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 px-1 py-5 md:px-5">
          {questions.map((c) => (

            <div className={`question-item p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
${isSelected(c.id) ? 'selected' : ''}`}

              onClick={() => onSelected(c.id)}

              key={c.id}>{c.question} <SelectionIcon /></div>
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