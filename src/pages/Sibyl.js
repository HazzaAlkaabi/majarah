import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | Sibyl</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>Sibyl</h1>
    <h4>Yet another web framework for making webapps/websites.</h4>
    <p>This is a research project. Not meant to be used publicly. Watch this space for news on this.</p>
  </Layout>
)