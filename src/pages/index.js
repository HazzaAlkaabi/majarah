import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const ProjectItem = styled.div`
  display: inline;
  margin: 20px;
`

export default () => (
  <Layout>
    <h1>Welcome to Hazza Alkaabi's web home, Majarah.</h1>
    <div style={{ marginLeft: `80px`, marginBottom: `40px`}}>
      <div
        style={{
          display: `block`,
          background: `black`,
          color: `white`,
          width: `95px`,
          height: `28px`,
          textAlign: `center`,
          fontWeight: `bold`,
          marginBottom: `10px`
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
    <div style={{ marginLeft: `80px`, marginTop: `20px`}}>
      <div
        style={{
          display: `block`,
          background: `black`,
          color: `white`,
          width: `135px`,
          height: `28px`,
          textAlign: `center`,
          fontWeight: `bold`,
          marginBottom: `10px`
        }}
      >
        Contributions
      </div>
      <ProjectItem>Thousand rooms (Arabic translation)</ProjectItem>
    </div>
  </Layout>
)
