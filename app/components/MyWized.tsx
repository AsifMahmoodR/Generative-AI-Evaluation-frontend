import * as React from 'react';
import { Wizard, useWizard } from 'react-use-wizard';
import WelcomeScreen from './Steps/WelcomeScreen';
import ConsentScreen from './Steps/ConsentScreen';
import ResponseScreen from './Steps/ResponseScreen';
import CategorySelection from './Steps/CategorySelection';
import QuestionsSelection from './Steps/QuestionsSelection';
import RateScreen from './Steps/RateScreen';
import AnimatedStep from './Shared/AnimatedStep';


const MyWizard = () => (
  <div className='wizard-container py-4 px-4 rounded-lg border'>
    <Wizard>
      <WelcomeScreen />
      <AnimatedStep><ConsentScreen /></AnimatedStep>
      <AnimatedStep><CategorySelection /></AnimatedStep>
      <AnimatedStep><QuestionsSelection /> </AnimatedStep>
      <AnimatedStep><ResponseScreen /></AnimatedStep>
      <AnimatedStep><RateScreen /></AnimatedStep>
    </Wizard>
  </div>
);

export default MyWizard;
