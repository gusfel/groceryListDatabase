import React from 'react';

const ListItem = (props) => <li>{props.grocery.item + " " + props.grocery.quantity}</li>

export default ListItem;