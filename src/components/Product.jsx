import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductBox from './ProductBox';

export default function Product({ products }) {
	const location = useLocation();
	return (
		<div>
			<div className='heading-wrapper'>
				{location.pathname === '/admin/product/' && (
					<Link id='add-product' to='/admin/product/add'>
						<button>Add a new Product</button>
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
