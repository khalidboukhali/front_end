import FirstStep from '../Steps/FirstStep'
import SecondStep from '../Steps/SecondStep'
import ThirdStep from '../Steps/ThirdStep'
import ForthStep from '../Steps/FourthStep'
import FinalStep from '../Steps/FinalStep'

import {Stepper,StepLabel,Step} from '@material-ui/core';
import  { multiStepContext } from '../Context/StepContext';
import { useContext } from 'react';

function CreateProjectBody() {

  const {currentStep,finalData}= useContext(multiStepContext);
  
  function showStep(step) {
    switch(step) {
      case 1 : 
        return <FirstStep />
      case 2 : 
        return <SecondStep />
      case 3 : 
        return <ThirdStep /> 
      case 4 : 
        return <ForthStep />
      case 5 : 
        return <FinalStep />  
    }
  }
  return (
    <div className="App">
      <div>
      <Stepper activeStep={currentStep-1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
      </Stepper>
      </div>
      {showStep(currentStep)}
    </div>
  );
}

export default CreateProjectBody ;