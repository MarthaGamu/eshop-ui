import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryBox({ categoryData }) {
	return (
		<div>
			<h5>{categoryData.categoryName}</h5>
			<p>{categoryData.description}</p>
			<Link id='edit-category' to={`/admin/category/${categoryData.id}`}>
				Edit
			</Link>
		</div>
	);
}
