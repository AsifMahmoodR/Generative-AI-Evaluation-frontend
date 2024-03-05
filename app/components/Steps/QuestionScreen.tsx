import { useWizard } from "react-use-wizard";

const QuestionScreen = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <>
      <div className="lg:ml-6 lg:col-start-2 lg:max-w-5xl">
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
          Evaluation
        </h4>

        <p className="mt-10 text-xl tracking-tight text-gray-900">
          Please ask your question in the text input provided below and click "Submit Question" button once ready. For your reference we have provided some examples of questions below.</p>
      </div>

      <div className="flex justify-left px-20">
        <ul className="bg-white rounded-lg w-96 text-gray-900">
          <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
            1. I have been struggling..........
          </li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">
            2. How could I manage............
          </li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">
            3. .............................................
          </li>
          <li className="px-6 py-2 border-b border-gray-200 w-full">A fourth item</li>
          <li className="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
        </ul>
      </div>

      <div className="mt-10 p-10">
        <form className="flex flex-col mx-auto gap-2 max-w-3lg">
          <fieldset className="contents">
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Enter your question here...
              </label>
              <textarea name="input" id="input" rows={5} required
                placeholder="Eg. I have been struggling... [Max 256 chars]"
                className="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm"></textarea>
            </div>
            <button type="submit"
              className="rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path fill-rule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clip-rule="evenodd"></path>
              </svg>
              <span className="font-bold">Submit Question now!</span>
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default QuestionScreen;