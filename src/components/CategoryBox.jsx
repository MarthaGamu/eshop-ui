import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure to import the CSS file

export default function CategoryBox({ categoryData }) {
	return (
		<div className='card'>
			<h5>{categoryData.categoryName}</h5>
			<p>{categoryData.description}</p>
			<img src={categoryData.imageUrl} alt='shoes images' />
			<br />
			<Link id='edit-category' to={`/admin/category/${categoryData.id}`}>
				Edit
			</Link>
		</div>
	);
}
