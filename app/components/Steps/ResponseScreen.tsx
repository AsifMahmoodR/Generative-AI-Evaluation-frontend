const ResponseScreen = ({ previousStep }: any) => {
    return (
      <div>
        <h3>Step 4</h3>
        <button onClick={previousStep}>Previous</button>
      </div>
    );
  };

  export default ResponseScreen;