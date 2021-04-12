import React from 'react'

// component
import { Header } from '../components/Header'

// container
import { CompaniesIndex } from './companies/CompaniesIndex'
import { ReviewsShow } from './reviews/ReviewsShow'

export const Home = () => (
  <>
    <Header />
    <h1>Home</h1>
    <CompaniesIndex />
    <ReviewsShow />
  </>
)
