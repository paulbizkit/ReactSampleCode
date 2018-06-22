import React, { Component } from 'react';

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    return (
     <label>
       <select className="widefat" name={this.props.name} onChange={this.handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    </label>
    );
  }
}

export default Select;
