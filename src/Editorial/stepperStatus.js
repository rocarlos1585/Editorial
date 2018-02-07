import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class StepperStatus extends Component {
  constructor(props){
    super()
    this.state={
      indexDB: props.stepIndex,

    }
  }
  state = {
    finished: false,
    stepIndex: props.stepIndex,
  };

/*
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 6,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };*/

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Enviado';
      case 1:
        return 'Recibido';
      case 2:
        return 'Procesando....';
      case 3:
          return 'Imprimiendo....';
      case 4:
          return 'Encuardenando....';
      case 5:
          return 'empaquetando....';
      case 6:
          return 'Enviado';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>

          <Step>
            <StepLabel>Enviado</StepLabel>
          </Step>

          <Step>
            <StepLabel>Recibido</StepLabel>
          </Step>

          <Step>
            <StepLabel >Procesando</StepLabel>
          </Step>

          <Step>
            <StepLabel >Imprimiendo</StepLabel>
          </Step>

          <Step>
            <StepLabel>Encuadernando</StepLabel>
          </Step>

          <Step>
            <StepLabel>empaquetando</StepLabel>
          </Step>

          <Step>
            <StepLabel>Enviado</StepLabel>
          </Step>

        </Stepper>

        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>

              </div>
            </div>
          )}
        </div>



      </div>
    );
  }
}

export default StepperStatus;
