import React from "react";
import { useCart } from "react-use-cart";
import { Image } from 'react-bootstrap';
import '../styles/tab-style.css';

export default function OrderCart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return(
    <div>
    <h1 className="text-center ">Your Order is Empty</h1>
    <Image id="Bin" src="https://cdn-icons-png.flaticon.com/512/5499/5499405.png" alt="Example Image" fluid />
    </div>
    )

  if (isEmpty) return
    <div>
    <h1 className="text-center ">Your Order is Empty</h1>
    <Image src="../images/empty-cart.png" alt="Example Image" fluid />
    </div>

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total Items:({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>
                      
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}€</td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                            <button 
                            className="btn btn-info ms-2 btn-sm text-center"  style={{ width: "1.7rem", height: "1.8rem" }} 
                            onClick={()=> updateItemQuantity(item.id, item.quantity -1)}
                            >-</button>
                            <button
                             className="btn btn-info ms-2 btn-sm"  style={{ width: "1.7rem", height: "1.8rem" }}  
                             onClick={()=> updateItemQuantity(item.id, item.quantity +1) }
                             >+</button>
                            <button
                             className="btn btn-danger ms-2 btn-sm text-center"  style={{ width: "4.1rem", height: "1.6rem" }} 
                             onClick={()=> removeItem(item.id)}
                             >Remove</button>

                        </td>
                    </tr>
                );
              })}
              
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
            <h2>Total Price: {cartTotal}€</h2>
        </div>
        <div className="col-auto">
              <button
              className="btn btn-danger m-2"
              onClick={()=> emptyCart()}
              >Clear Cart</button>
              <button className="btn btn-primary">Buy now</button>
        </div>
      </div>
    </section>
  )
}
