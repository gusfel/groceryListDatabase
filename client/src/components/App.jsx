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

  // postGrocery(grocery, callback){
  //   axios.post('/groceries', grocery)
  //     .then(callback)
  //     .catch(callback)
  // }


  addGrocery(grocery) {
    // this.postGrocery(grocery, console.log)
    axios.post('/groceries', grocery)
      .then(response => {
        // console.log(response.data)
        this.setState({groceryList: [...this.state.groceryList, response.data]})

      })
    // .then(callback)
    // .catch(callback)
    // this.setState({groceryList: [...this.state.groceryList, grocery]})

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


// COMMENTED OUT THE START OF THE REFACTOR TO HOOKS DUE TO INCOMPATIBLE REACT VERSION FOR BOTH CODE SETS TO WORK

// const App = () => {
//   const [groceryList, setGroceries] = useState([])

//   const addGrocery = grocery => setGroceries([...groceryList, grocery])

//   useEffect(() => {
//     setGroceries([...DummyData])
//   })



//   return (
//     <div>
//       <GroceryProvider>
//         <Form addGrocery={addGrocery.bind(this)}/>
//         <List groceries={groceryList}/>
//       </GroceryProvider>
//     </div>
//   )
// }