import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from '../Form/Form'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newElement : ''
    }
  }

  render() {
    return (
      <div>
        <p>Redux Intro</p>
        <Form />
        {JSON.stringify(this.props.elements)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {elements : state.elementList,}
}

export default connect(mapStateToProps)(App);


