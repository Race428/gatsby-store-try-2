import React from "react"

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_dICxWYQx3NRbPptPRPahmf7i00cTfeTSiJ", {
      betas: ["checkout_beta_4"],
    })
  }



  
  async redirectToCheckout(event) {
    event.preventDefault()
    console.log(this.props.cart)
    const { error } = await this.stripe.redirectToCheckout({
    
      items: this.props.cart,
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
        disabled={!this.props.cart.length}
      >
        {this.props.cart.length ? 'GO TO CHECKOUT' : 'CART IS EMPTY'}
      </button>
    )
  }
}

export default Checkout