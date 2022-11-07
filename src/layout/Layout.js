import React from 'react'
import { AnalyticsWrapper } from '../components/Analytics/analytics'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
     <AnalyticsWrapper />
    </Container>
  )
}
