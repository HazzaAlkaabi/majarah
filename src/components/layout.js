import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/majarah.svg'

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 1500, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/">
        <img src={logo} alt="Website logo" />
      </Link>
    </header>
    {children}
    <footer style={{position: `absolute`, bottom: `0`, marginBottom: `50px`}}><Link to="/about">Hazza Alkaabi</Link> © 2015-2019</footer>
  </div>
)
