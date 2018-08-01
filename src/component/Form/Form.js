import React, { Component } from 'react';
import { connect } from 'react-redux';


class Form extends Component {
  constructor(props) {
    super(props)

    this.state ={
      newElement: {
          Element: '',
          Atomic: ''
      }
    }
  }

  
  handleElementChange =(propertName)=> (event) => {
    //setState of React Local State to what is typed
    this.setState({
      newElement : {
          ...this.state.newElement,
          [propertName]: event.target.value
      }
    })
  }

  
  render() {

    return (
      <div>
        <input type="text" onChange={this.handleElementChange('Element')} />
        <input type="text" onChange={this.handleElementChange('Atomic')} />
        <button onClick={() => this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.newElement})}>Add Element</button>
        <button onClick={() => this.props.dispatch({type: 'CLEAR_ELEMENTS'})}>Clear Elements</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {elements : state.elementList,
        first : state.firstReducer}
}
// snacks: reduxState.handleSubmit

export default connect(mapStateToProps)(Form);