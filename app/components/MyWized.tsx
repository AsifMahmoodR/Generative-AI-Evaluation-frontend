import * as React from 'react';
import { Wizard, useWizard } from 'react-use-wizard';
import WelcomeScreen from './Steps/WelcomeScreen';
import ConsentScreen from './Steps/ConsentScreen';
import QuestionScreen from './Steps/QuestionScreen';
import ResponseScreen from './Steps/ResponseScreen';


const MyWizard = () => (
  <div className=' py-6 rounded-lg border'>
    <Wizard>
      <WelcomeScreen />
      <ConsentScreen />
      <QuestionScreen />
      <ResponseScreen />
    </Wizard>
    </div>
  );

  export default MyWizard;
  