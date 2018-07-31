import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newElement : ''
    }
  }

  handleElementChange = (event) => {
    //setState of React Local State to what is typed
    this.setState({
      newElement : event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Redux Intro</p>
        {/* When We click, make redux happen! */}
        <button onClick={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button One</button>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}>Button Two</button>
        <input type="text" onChange={this.handleElementChange} />
        <button onClick={() => this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.newElement})}>Add Element</button>
        {JSON.stringify(this.props.elements)}
        {JSON.stringify(this.props.first)}

      </div>
    );
  }
}
//Currying!
//Connect gives us dispatch on props

//how we will be interacting with props and redux
const mapReduxStateToProps = (reduxState) => {
  //What this returns appears on this components props
  return {elements : reduxState.elementReducer,
          first : reduxState.firstReducer}
}

//connect can take in our mapReduxStateToProps, which gives us the data
export default connect(mapReduxStateToProps)(App);

// let connectedComponent = connect();
// let connectedApp = connectedComponent(App);
