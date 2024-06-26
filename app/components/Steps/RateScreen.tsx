import { useWizard } from "react-use-wizard";
import { useEffect, useState } from "react";
import { observer } from 'mobx-react-lite';
import { evalationStore } from "@/app/stores/evaluation.store";
import AnimatedStep from "../Shared/AnimatedStep";

const RateScreen = () => {
  const { handleStep, previousStep, nextStep, goToStep } = useWizard();
  const [selected, setSelected ] = useState<number | undefined>(undefined)
  const [isReloading, setIsReloading ] = useState<boolean>(false)

  var ratings = evalationStore.ratings;
  var responses = evalationStore.responses;
  var selectedModel = evalationStore.responses.find(x => x.modelID == evalationStore.selectedResponseModel);

  const onSelected = (ratingId: number) => {
      setSelected(ratingId);
    //evalationStore.updateModelRating(ratingId);
  }

  const onOptionChange = (e: any) => {
    onSelected(Number(e.target.value))
  }

  const isSelected = (itemRating: number) => {
    var value = selected === itemRating;
    
    return value;
  }

  const canProceed = () => {
    return !!selected;
  }

  const saveModelRating = async () => {
    if(evalationStore.isLoading)
      return;
    evalationStore.updateModelRating(selected!);
    return evalationStore.saveModelRating()
      .then(res => {
        var nextModel = evalationStore.responses.find(x => !x.rating);
        if(nextModel) {
          setIsReloading(true)
          setTimeout(() => {
            setSelected(undefined);
            evalationStore.updateSelectedResponseModel(nextModel!.modelID);
            setIsReloading(false)
          }, 100);
        }
        else {
          nextStep();
        }
      })
  }

  return (
    <>
      {!isReloading && <AnimatedStep> <div className="consent-container">
        <div className="lg:ml-6 lg:col-start-2 lg:max-w-5xl">
          <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
            Rate Model Response
          </h4>
        </div>

        <div className="grid grid-cols-1gap-4 px-1 py-5 md:px-5">
          <div className={'response-item p-6 bg-white border border-gray-200 rounded-lg dark:text-white shadow dark:bg-gray-800 dark:border-gray-700'}
            key={selectedModel!.modelID}>
            <div className="grid grid-cols-4 gap-4 response-title justify-center items-center">
              <span className="col-span-3">{selectedModel!.displayName}</span>
            </div>
            <p className="response-text"> {selectedModel!.manswer}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 px-1 py-5 md:px-5">
          <div 
          className={`response-item p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${canProceed() ? 'border-green-500/20 bg-green-500/40' : 'border-gray-200 bg-white'}`}>
            <div className="grid grid-cols-4 gap-4 response-title justify-center items-center">
              <span className="col-span-4">Please choose from provided options and submit:</span>
            </div>
            <div className="px-5 py-5">
              {ratings.map((c) => (
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="radio"
                    name="rating"
                    id={c.id.toString()}
                    value={c.id}
                    checked={isSelected(c.id)}
                    onChange={onOptionChange}
                  />
                  <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor={c.id.toString()}
                  >
                    {c.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></AnimatedStep>}

      <footer className="app-footer py-3">
        <div className="flex items-end text-right float-right">
          <button disabled={!canProceed()} onClick={saveModelRating}
            className="btn-green rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2">
              {!evalationStore.isLoading ? <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clip-rule="evenodd"></path>
            </svg> :
            <div
    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"></div>}
            <span className="font-bold">Submit Feedback ({evalationStore.responseProgressText()})</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default observer(RateScreen);