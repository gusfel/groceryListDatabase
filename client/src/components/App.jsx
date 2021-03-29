import React from 'react';
import Form from './Form.jsx';
import List from './List.jsx';
import DummyData from './DummyData.js';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryList: []
    }
    this.addGrocery = this.addGrocery.bind(this);
  }

  componentDidMount() {
    axios.get('/groceries')
      .then(response => {
        this.setState({
          groceryList: response.data
        })
      })
  }

  addGrocery(grocery) {
    axios.post('/groceries', grocery)
      .then(response => {
        this.setState({groceryList: [...this.state.groceryList, response.data]})
      })
  }

  render() {
    return (
      <div>
        <Form addGrocery={this.addGrocery}/>
        <List groceries={this.state.groceryList}/>
      </div>
    )
  }
}

export default App;
