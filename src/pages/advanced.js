
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Cart from '../components/Cart'
import Skus from '../components/Products/Skus'

const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Advanced Example" />
    <h1>This is the advanced example</h1>
    <h2>With multiple variants and easy cart functionality</h2>
    <Cart>
      {/* {console.log(this.props)} */}
      <Skus />
    </Cart>
    <Link to="/">Go back to the easy example</Link>
  </Layout>
)

export default AdvancedExamplePage