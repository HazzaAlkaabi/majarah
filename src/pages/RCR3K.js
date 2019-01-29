import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import RCR3KScreenshot from '../images/RCR3KScreenshot.png'

export default () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | RCR3K</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>Robot Room Cleaner 3K (RCR3K)</h1>
    <h4>A 2017 cross-platform desktop top-down video game built using Unity.</h4>
    <p>This game was made during Ludum Dare 39 with a friend of mine. This was my first ever Ludum Dare.</p>
    <iframe src="https://itch.io/embed/162753" height="167" width="552" frameborder="0" title="itch.io's RCR3K"></iframe>
    <img src={RCR3KScreenshot} alt="RCR3K Screenshot" style={{display: `block`, width: `700px`}}/>
  </Layout>
)