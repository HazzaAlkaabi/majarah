import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import OffTheRailsScreenshot from '../images/OffTheRailsScreenshot.png'

export default () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | Off the Rails</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>Off the Rails</h1>
    <h4>A 2016 cross-platform desktop side-scrolling shooter video game built using Love2D.</h4>
    <p>This game was made during a game with three other people. This was my first ever gamejam game I helped create.</p>
    <p>The game will be uploaded to something like itch.io for free download at a future date.</p>
    <img src={OffTheRailsScreenshot} alt="Off the Rails Screenshot" style={{display: `block`, width: `700px`}}/>
  </Layout>
)