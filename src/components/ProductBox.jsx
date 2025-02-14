import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductBox({ product }) {
	const handleDelete = async () => {
		try {
			const response = await fetch(
				`http://localhost:8089/product/deleteByid/${product.id}`,
				{
					method: 'DELETE'
				}
			);

			if (response.ok) {
				alert('Product deleted successfully.');
				// Add any additional logic here, e.g., refreshing the product list
			} else {
				alert('Failed to delete the product.');
			}
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred while deleting the product.');
		}
	};

	return (
		<>
			<div className='card'>
				<h3>{product.name}</h3>
				<p>{product.price}</p>
				<p>{product.description}</p>
				<img src={product.imageURL} alt='shoes images' />
				<div className=''>
					<Link id='edit-product' to={`/admin/product/${product.id}`}>
						Edit
					</Link>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<Link id='delete-product' onClick={handleDelete}>
						Delete
					</Link>
				</div>
			</div>
		</>
	);
}
