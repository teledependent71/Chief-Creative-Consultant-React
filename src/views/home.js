import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chief Creative Consultant</title>
        <meta property="og:title" content="Chief Creative Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
