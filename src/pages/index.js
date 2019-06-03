import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Checkout from '../components/Checkout'
import SEO from "../components/seo"
import indexStyles from '../components/index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
  
 <div className={indexStyles.view}>
  <div className={indexStyles.hero}></div>
  <Checkout /> 
    <Link to="/products/">See our products!</Link>
 </div>
 
   
 
  </Layout>
)

export default IndexPage
