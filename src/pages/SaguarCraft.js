import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
// import styled from 'styled-components'
// import { Link } from 'gatsby'
import SaguarCraftScreenshot from '../images/SaguarCraftScreenshot.png'
import SaguarCraftGIF from '../images/SaguarCraftGIF.gif'

export default () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | SaguarCraft</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>SaguarCraft</h1>
    <h4>Made during a gamejam in April 2018</h4>
    <p>
      SaguarCraft is an online multiplayer real-time strategy game. Well it was
      made in a weekend; so do not expect anything from it.
    </p>
    <p>I worked on it part of the gamejam task force,{' '}
      <a href="https://mistful.itch.io/" target="Mistful" rel="noopener">Mistful</a>.
    </p>
    <img src={SaguarCraftScreenshot} alt="SaguarCraft Screenshot" style={{display: `block`, width: `700px`}}/>
    <p>This goal behind is project to see where stubbornness can get our team of three people through a weekend to make an RTS game.</p>
    <img src={SaguarCraftGIF} alt="SaguarCraft GIF" style={{display: `block`, width: `685px`}}/>
    <p>We have ended creating and demoing an online RTS (tested with four people). It worked but not a fun game. The game will be soon avaible for free to download soon.</p>
  </Layout>
)
