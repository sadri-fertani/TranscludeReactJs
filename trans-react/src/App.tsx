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
        </CustomComponent>
      </div>
    );
  }
}
