import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import styled from 'styled-components'

const ProjectItem = styled.div`
  display: inline;
  margin-right: 20px;
`

export default () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | Home</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>Welcome to Hazza Alkaabi's web home, Majarah.</h1>
    <div
      style={{ marginLeft: `80px`, marginBottom: `70px`, marginTop: `150px` }}
    >
      <div
        style={{
          display: `block`,
          background: `black`,
          color: `white`,
          width: `95px`,
          height: `28px`,
          textAlign: `center`,
          fontWeight: `bold`,
          marginBottom: `35px`,
        }}
      >
        Originals
      </div>
      <ProjectItem>SaguarCraft</ProjectItem>
      <ProjectItem>Aetheryte</ProjectItem>
      <ProjectItem>Off the Rails</ProjectItem>
      <ProjectItem>RCR3K</ProjectItem>
      <ProjectItem>Sibyl</ProjectItem>
    </div>
    <div style={{ marginLeft: `80px`, marginTop: `20px` }}>
      <div
        style={{
          display: `block`,
          background: `black`,
          color: `white`,
          width: `135px`,
          height: `28px`,
          textAlign: `center`,
          fontWeight: `bold`,
          marginBottom: `35px`,
        }}
      >
        Contributions
      </div>
      <ProjectItem>Thousand rooms (Arabic translation)</ProjectItem>
    </div>
  </Layout>
)
