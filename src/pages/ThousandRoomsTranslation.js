import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ThousandRoomsTranslation from '../images/ThousandRoomsTranslation.png'

export default () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | Thousand Rooms (Arabic translation)</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>Thousand Rooms (Arabic translation)</h1>
    <h4>An Arabic translation of <a href="https://100r.co/" target="Mistful" rel="noopener">Hundred Rabbits'</a> Thousand Rooms book</h4>
    <p>I have helped translate the book from English to Arabic. You could buy the book off from <a href="https://hundredrabbits.itch.io/" target="Mistful" rel="noopener">Hundred Rabbits'</a> itch.io page or from the embded link below:</p>
    <iframe src="https://itch.io/embed/146658" height="167" width="552" frameborder="0" title="itch.io's Thousand Rooms"></iframe>
    <img src={ThousandRoomsTranslation} alt="Thousand Rooms translation" style={{display: `block`, width: `700px`}}/>
  </Layout>
)