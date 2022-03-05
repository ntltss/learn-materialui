import React from "react";
import { Grid } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Basic from "./Basic";
import Optional from "./Optional";
import Confirm from "./Confirm";

export const UserInputData = React.createContext();

function getSteps() {
  return ["基本項目", "任意項目", "入力確認"];
}

function StepContent() {
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Basic handleNext={handleNext} />;
      case 1:
        return <Optional handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <Confirm handleBack={handleBack} />;
      default:
        return "Unknown stepIndex";
    }
  }
  const [currentState, setCurrentState] = React.useState({});
  const value = {
    currentState,
    setCurrentState,
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Grid container>
      <Grid sm={2} />
      <Grid lg={8} sm={8} spacing={10}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <UserInputData.Provider value={value}>
          {getStepContent(activeStep, handleNext, handleBack)}
        </UserInputData.Provider>
      </Grid>
    </Grid>
  );
}

export default StepContent;
