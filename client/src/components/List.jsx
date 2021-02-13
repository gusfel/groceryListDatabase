import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({groceries}) => {
  console.log(groceries)
  return (
    <ul className="groceries">
      {groceries.map((grocery, index) => <ListItem key={grocery.id} grocery={grocery}/>)}
    </ul>
  )
}

export default List;