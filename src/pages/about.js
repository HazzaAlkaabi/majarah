import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | About</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>About me</h1>
    <p>
      Computer Scientist. University of Arizona Alumni. Advisor at{' '}
      <a href="https://hackarizona.org/">Hack Arizona</a>. Developer. Writer.
    </p>
  </Layout>
)
