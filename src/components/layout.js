import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/majarah.svg'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 1500, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/">
        <img src={logo} alt="Website logo" />
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/log/">Log</ListLink>
      </ul>
    </header>
    {children}
    <footer><Link to="/about">Hazza Alkaabi</Link> © 2015-2019</footer>
  </div>
)
