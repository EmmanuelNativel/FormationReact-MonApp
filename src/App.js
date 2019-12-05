import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import {PureCompo, PureCompoProps} from './components/PureCompo';
import StateCompo from './components/StateCompo';
import CycleDeVieCompo from './components/CycleDeVieCompo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {inputValue : ""}
  }

  onInputChange = (value) => {
    this.setState({ inputValue : value});
  }

  render(){
    const labels = [1,2,3,4,5];

    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {this.state.inputValue ? 
          <PureCompoProps label={this.state.inputValue}/>
          :
          <PureCompo/>
        }

        <StateCompo label={"Mon compo avec States"} onInputChange={this.onInputChange}/>

        <div className="spaceV">
          <p> Je vais boucler sur un composant :</p>

          {
            labels.map( (label) =>
              <div key={label}>
                <div>J'affiche l'élément : {label}</div>
                <span role="img" aria-label="emoji" >✅</span>
              </div>
            )
          }
        </div>

        <CycleDeVieCompo/>

      </header>
    </div>
    );
  }
}

export default App;
