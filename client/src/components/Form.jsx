import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addGrocery(this.state);
    this.setState({item: '', quantity: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Item
          <input name="item" value={this.state.item} onChange={this.handleChange}/>
        </label>
        <label> Quantity
          <input name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        </label>
        <button>Add Grocery</button>
      </form>
    )
  }
}

export default Form;