import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import AetheryteScreenshot from '../images/AetheryteScreenshot.png'

export default () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | Aetheryte</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>Aetheryte</h1>
    <h4>A cross-platform desktop app for Final Fantasy 14 Online [ON PAUSE. NOT CURRENTLY DEVELOPED]</h4>
    <p>Aetheryte is a fan passion project for Square Enix's Final Fantasy XIV (FFXIV) (ファイナルファンタジーXIV Fainaru Fantajī Fōtīn), also known as Final Fantasy XIV Online, video game.</p>
    <p>Aetheryte is a cross-platform desktop app built using GitHub's Electron framework. Electron lets developers write cross-platform desktop applications using JavaScript, HTML and CSS.</p>
    <p>It is based on Node.js and Chromium and is used by Discord, Slack, and many other apps.</p>
    <p>With Aetheryte the user will be:</p>
    <ul>
        <li>Read the FFXIV's website offical blog posts</li>
        <li>More features to come! Please send suggestions and feedback for more features you would like to see!</li>
    </ul>
    <img src={AetheryteScreenshot} alt="Aetheryte Screenshot" style={{display: `block`, width: `700px`}}/>
  </Layout>
)