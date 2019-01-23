import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Majarah | ERROR</title>
        <link rel="canonical" href="https://majarah.net/" />
      </Helmet>
    </div>
    <h1>There is nothing to see here. Sorry.</h1>
    <p>You just hit a route that doesn&#39;t exist :(</p>
  </Layout>
)

export default NotFoundPage
