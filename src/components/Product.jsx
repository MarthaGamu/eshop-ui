import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductBox from './ProductBox';

export default function Product({ products }) {
	const location = useLocation();
	return (
		<div>
			{location.pathname === '/admin/product/' && (
				<Link id='add-product' to='/admin/product/add'>
					<button>Add a new Product</button>
				</Link>
			)}

			<div>
				{products.map((productData) => {
					return <ProductBox product={productData} />;
				})}
			</div>
		</div>
	);
}
