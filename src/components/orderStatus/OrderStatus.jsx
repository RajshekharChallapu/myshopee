import React, { useState, useEffect } from 'react';
import Order from './Order.jsx'

export default function OrderStatus (props) {

  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/mockdata/order.json")
      .then(response => response.json())
      .then(data => setOrders(data));
  });

  return (
    <div className="card container">
      <h3>Your Orders</h3>
      <div className="card-body">
        {Orders.map((order)=>
          <Order data={order} key={order.id} routeProps={props} />
        )}  
      </div>
    </div>      
  );
}