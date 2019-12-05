/**
 * @author Emmanuel Nativel
 * 
 * Premier composant avec States en React
 */

import React from 'react';
import './../css/StateCompo.css';

class StateCompo extends React.Component {
    constructor(props){
        super(props);
        this.state = {nom: ""}
        //this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({nom : event.target.value });
        this.props.onInputChange(event.target.value);
    }

    render(){
        return(
            <div className="bordered">
                <h1 className="stateH1" >{this.props.label}</h1>
                <input type="text" value={this.state.nom} onChange={this.handleChange} />
            </div>
        );
    }
}

export default StateCompo;
