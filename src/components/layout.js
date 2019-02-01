import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/majarah.svg'

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 1500, padding: `0 1rem` }}>
    <header>
      <Link to="/">
        <img src={logo} alt="Website logo" />
      </Link>
    </header>
    <div style={{marginBottom: `250px`, maxWidth: `750px`}}>
    {children}
    </div>
    <footer><Link to="/about">Hazza Alkaabi</Link> © 2015-2019 | Majarah 3.0</footer>
  </div>
)
