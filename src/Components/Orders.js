import React, { useEffect, useState } from 'react'
import './Orders.css'
import { useStateValue } from '../Pages/StateProvider';
import { db } from '../firebase';
import Order from './Order';


function Orders() {

const [{basket, user}, dispatch] = useStateValue();
const [orders, serOrders] = useState([]);

useEffect(()=>{
    if(user){
        db 
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot =>(
            serOrders(snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()
            })

            ))
        ))
    }
    else {
        serOrders([])
    }
},[user])

  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__order'>
            {orders?.map(order =>(
                <Order order ={order} />
            ))}
        </div>
    </div>
  )
}

export default Orders