import React from 'react';

const ListItem = ({ grocery }) =>
  <li>
    {grocery.name + " " + grocery.quantity}
  </li>

export default ListItem;
