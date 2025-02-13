import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductBox({ product }) {
	return (
		<>
			<div className='card'>
				<h3>{product.name}</h3>
				<p>{product.price}</p>
				<p>{product.description}</p>
				<img src={product.imageURL} alt='shoes images' />
				<Link id='edit-product' to={`/admin/product/${product.id}`}>
					Edit
				</Link>
			</div>
		</>
	);
}
