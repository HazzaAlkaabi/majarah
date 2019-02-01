import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Grid from 'react-css-grid'

const StyledLink = styled(Link)`
  padding: 4px;
  font-weight: 100 !important;
  border: 3px solid #f4f4f4;
  &:hover {
    border: 3px solid black;
    transition: border 0.1s ease-in-out;
    -webkit-transition: border 0.1s ease-in-out;
    -moz-transition: border 0.1s ease-in-out;
    text-decoration: none !important;
  }
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
    <h1>
      Welcome to <b>Hazza Alkaabi</b>'s web home, Majarah.
    </h1>
    <div style={{ marginBottom: `70px`, marginTop: `80px` }}>
      <div
        style={{
          display: `block`,
          background: `#04080F`,
          color: `white`,
          width: `118px`,
          height: `34px`,
          textAlign: `center`,
          fontWeight: `bold`,
          marginBottom: `35px`,
          fontSize: `22px`,
        }}
      >
        Originals
      </div>
      <Grid width={200} gap={24}>
        <div>
          <StyledLink to="/SaguarCraft">SaguarCraft</StyledLink>
        </div>
        <div>
          <StyledLink to="/Aetheryte">Aetheryte</StyledLink>
        </div>
        <div>
          <StyledLink to="/OfftheRails">Off the Rails</StyledLink>
        </div>
        <div>
          <StyledLink to="/RCR3K">RCR3K</StyledLink>
        </div>
        <div>
          <StyledLink to="/Sibyl">Sibyl</StyledLink>
        </div>
      </Grid>
    </div>
    <div style={{ marginTop: `20px` }}>
      <div
        style={{
          display: `block`,
          background: `#04080F`,
          color: `white`,
          width: `172px`,
          height: `32px`,
          textAlign: `center`,
          fontWeight: `bold`,
          marginBottom: `35px`,
          fontSize: `22px`,
        }}
      >
        Contributions
      </div>
      <Grid width={200} gap={24}>
        <div>
          <StyledLink to="/ThousandRoomsTranslation">
            Thousand rooms (Arabic translation)
          </StyledLink>
        </div>
      </Grid>
    </div>
  </Layout>
)
