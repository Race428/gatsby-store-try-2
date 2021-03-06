import React from 'react'

import Checkout from './Checkout'

const Cart = class extends React.Component {
  state = {
    cart: [],
  }

  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checkout_items')
    )
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }
  }

  getCart() {
    return this.state.cart
  }



  removeItemFromCart(newItem) {
    // console.log(this.state.cart)
    // // console.log(newItem.quantity)

    
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        
        return { sku: item.sku, quantity: --item.quantity }
        
      }
      
      else {
        return item
      }
      
    })
    this.setState({ cart: updatedCart })
    
    let cart = [...this.state.cart]

    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i].quantity)
      if (cart[i].quantity <= 0) {
        cart.splice(i, 1)
      }
      this.setState({ cart: cart })
      console.log(this.state)
    }


    // Store the cart in the localStorage.
    // localStorage.removeItem('stripe_checkout_items', JSON.stringify(cart))




  }

  // make it so taht if the quantity = 0, splice that sku out of the array before sending it to the stripe API.



  addToCart(newItem) {
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: ++item.quantity }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }]
    }
    this.setState({ cart: updatedCart })
    // Store the cart in the localStorage.
    // localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart))
  }

  render() {
    console.log(this.props.children)
    return (
      <div>
        <Checkout cart={this.state.cart} />
        {React.cloneElement(this.props.children, {
          addToCart: this.addToCart.bind(this),
          cart: this.state.cart,
          removeItemFromCart: this.removeItemFromCart.bind(this)
        })}
        <button onClick={e => console.log(this.state.cart)}>Click me</button>
      </div>
    )
  }
}

export default Cart