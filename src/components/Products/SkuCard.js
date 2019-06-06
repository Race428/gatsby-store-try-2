import React from "react"
import { element } from "prop-types";

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
}
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
  state = {
    added: false,
    buttonText: 'ADD TO CART',
    paymentMessage: '',
    skuNum:this.props.sku.id,
    cartNum: [],
    skuNumber:[]
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: 'Remove Item from cart!' })
  }













  removeItemFromCart(event, skuId, quantity = 1) {
    console.log(this.props)
    // event.preventDefault()
    this.setState({ added: false, buttonText: 'ADD TO CART' })
    this.props.removeItemFromCart(skuId)
    // setTimeout(this.addToCart.bind(this), 500) //this is causing an issue
  }


  addToCart(event, skuId, quantity = 1) {
    console.log(skuId)
    event.preventDefault()
    this.setState({ added: true, buttonText: 'Remove From Cart' })
    this.props.addToCart(skuId)
    this.state.cartNum.push({skuId})
    // setTimeout(this.removeItemFromCart.bind(this), 500)
  }


  // async redirectToCheckout(event, sku, quantity = 1) {
  //   event.preventDefault()
  //   const { error } = await this.props.stripe.redirectToCheckout({
  //     items: [{ sku, quantity }],
  //     successUrl: `http://localhost:8000/page-2/`,
  //     cancelUrl: `http://localhost:8000/advanced`,
  //   })

  //   if (error) {
  //     console.warn("Error:", error)
  //   }
  // }

  render() {
  
    const sku = this.props.sku
    // console.log(this.props.sku.id)
    // console.log(this.props)


    for(let i = 0; i <this.props.cart.length; i++){
     this.setState({skuNumber : this.props.cart[i].sku})
    }
 
   



return (
      <div style={cardStyles}>
        <img src={`${sku.image}`} alt='product' />
        <h4>{sku.attributes.name}</h4>
        <p>Price: {formatPrice(sku.price, sku.currency)}</p>

        {/* for loop goes over props and checks if sku is eqal other sku, then render the added button  */}
        {


          

          this.state.added?



         
          <button
          style={buttonStyles}
          onClick={event => this.removeItemFromCart(event, sku.id)} >
          {this.state.buttonText}
        </button>

           

            :

            <button
            style={buttonStyles}
            onClick={event => this.addToCart(event, sku.id)} >
            {this.state.buttonText}
          </button>

        }










        {this.state.paymentMessage}
      </div>
    )
  }
}

export default SkuCard