import React, {Component, Fragment} from 'react'
import {useHistory} from "react-router-dom";

// component
import {Header} from '../components/Header'

// container
import {CompaniesIndex} from '../containers/companies/CompaniesIndex'
import {ReviewsShow} from '../containers/reviews/ReviewsShow'

export const Home = () => {
	return (
		<div>
			<Header />
			<h1>Home</h1>
			<CompaniesIndex />
			<ReviewsShow />
		</div>
	)
}