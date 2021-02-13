import React from 'react';

const ListItem = (props) => <li>{props.grocery.name + " " + props.grocery.quantity}</li>

export default ListItem;
