import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from './header.module.css'



const Header = ({ siteTitle }) => (

  <header className={headerStyles.header}>
      <img  className ={headerStyles.logo} src ='https://instagram.faus1-1.fna.fbcdn.net/vp/0b716e9f8f967cd5da10cdd11bacc7dd/5D8B5BEB/t51.2885-19/s320x320/49526036_575579409536576_4519784176538353664_n.jpg?_nc_ht=instagram.faus1-1.fna.fbcdn.net'
      alt='logo' /> 
    <nav className={headerStyles.nav}>
   
          <Link className={headerStyles.link} to='/'>
            Home
        </Link>
     
          <Link 
          className={headerStyles.link} 
          to='/about'>
            About
        </Link>
    
          <Link 
          className={headerStyles.link} 
          to='/products'>
            Products
        </Link>
    
    </nav>



  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
