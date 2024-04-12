import * as React from 'react';
import { Wizard, useWizard } from 'react-use-wizard';
import WelcomeScreen from './Steps/WelcomeScreen';
import ConsentScreen from './Steps/ConsentScreen';
import ResponseScreen from './Steps/ResponseScreen';
import CategorySelection from './Steps/CategorySelection';
import QuestionsSelection from './Steps/QuestionsSelection';
import RateScreen from './Steps/RateScreen';


const MyWizard = () => (
  <div className='wizard-container py-4 px-4 rounded-lg border'>
    <Wizard>
      <WelcomeScreen />
      <ConsentScreen />
      <CategorySelection />
      <QuestionsSelection /> 
      <ResponseScreen />
      <RateScreen />
    </Wizard>
  </div>
);

export default MyWizard;
