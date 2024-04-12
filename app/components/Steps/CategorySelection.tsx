import { useWizard } from "react-use-wizard";
import { useEffect } from "react";
import { observer } from 'mobx-react-lite';
import { evalationStore } from "@/app/stores/evaluation.store";

const CategorySelection = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  var categories = evalationStore.categories;
  useEffect(() => {
    evalationStore.loadCategories();
  }, []);

  const onSelected = (catId: number) => {
    evalationStore.updateSelectedTopic(catId);
  }

  const isSelected = (catId: number) => {
    return evalationStore.selectedTopic === catId
  }

  const canProceed = () => {
    return !!evalationStore.selectedTopic;
  }

  return (
    <>
    <div className="consent-container">
      <div className="lg:ml-6 lg:col-start-2 lg:max-w-5xl">
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
          Category Selection
        </h4>

        <p className="mt-10 text-xl tracking-tight text-gray-900">
          Please select a category to view relevant questions:</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 px-5 py-5">
        {categories.map((c) => (
          <div onClick={() => onSelected(c.id)} 
 
          className={isSelected(c.id) ? 'category-item selected' : 'category-item'}
          key={c.id}>{c.topic_name}</div>
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
          <span className="font-bold">Proceed with selected category...</span>
        </button>
        </div>
      </footer>
    </>
  );
};

export default observer(CategorySelection);