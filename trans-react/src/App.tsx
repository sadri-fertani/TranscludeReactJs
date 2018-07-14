import * as React from 'react';
import './App.css';
import { CustomComponent } from './Components/CustomComponent';
import { CustomFisrtChildComponent } from './Components/CustomFisrtChildComponent';
import { CustomSecondChildComponent } from './Components/CustomSecondChildComponent';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sadri FERTANI : Transclude with ReactJs</h1>
        </header>
        <CustomComponent message="Hello world...">
          <h1>Nothing special</h1>
          <CustomFisrtChildComponent message="Yes the first" />
          <span>I'm alive</span>
          <CustomSecondChildComponent message="Maybe the second..." />
          <p>
            Hi Sadri FERTANI
          </p>
          <div onClick={this.handlerClick}>
            Just for test
          </div>
        </CustomComponent>
      </div>
    );
  }

  private handlerClick = (e: any) => {
    alert("Div Click");
  }
}
