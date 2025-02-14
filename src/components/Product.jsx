import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductBox from './ProductBox';

export default function Product({ products }) {
	const location = useLocation();
	return (
		<div>
			<div className='heading-wrapper'>
				<h1>Our Products</h1>
				{location.pathname === '/admin/category/add' && (
					<Link id='add-category' to='/admin/category/add'>
						<button>Add a new product</button>
					</Link>
				)}
			</div>
			<div className='card-wrapper'>
				{products.map((productData) => {
					return <ProductBox product={productData} />;
				})}
			</div>
		</div>
	);
}
