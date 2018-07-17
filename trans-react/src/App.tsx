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
          <CustomFisrtChildComponent message="Yes the first" />
          <CustomSecondChildComponent message="Maybe the second..." />
          <div className="alert alert-warning" role="alert">
            <h3>Hi Sadri</h3>
            <br />
            <p>Just for test.</p>
          </div>
          <div className="alert alert-info" role="alert">
            <h4>FERTANI</h4>
          </div>
        </CustomComponent>
      </div>
    );
  }
}
