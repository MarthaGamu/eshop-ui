import React, { useState, useEffect } from 'react';
import ProductBox from '../components/ProductBox';
import CategoryBox from '../components/CategoryBox';
import '../App.css';

export default function Home({ products, categories }) {
	const [categorySize, setCategorySize] = useState(0);
	const [productSize, setProductSize] = useState(0);

	useEffect(() => {
		if (categories) {
			setCategorySize(Math.min(6, categories.length));
		}
		if (products) {
			setProductSize(Math.min(8, products.length));
		}
	}, [categories, products]);
	return (
		<div>
			<h2>Categories</h2>
			<div className='row'>
				{categories.slice(0, categorySize).map((category, index) => (
					<div
						key={index}
						className='col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex'
					>
						<CategoryBox categoryData={category} />
					</div>
				))}
			</div>
			<h2>Products</h2>
			<div className='row'>
				{products.slice(0, productSize).map((product, index) => (
					<div
						key={index}
						className='col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex'
					>
						<ProductBox product={product} />
					</div>
				))}
			</div>
		</div>
	);
}
