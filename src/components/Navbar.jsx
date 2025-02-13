import React from 'react';
import '../App.css';

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='logo'>Toe Trends.</div>
			<div>
				<a id='add-category' href='/admin/category/add'>
					Add Category
				</a>
				<a id='add-product' href='/admin/product/add'>
					Add Product
				</a>
				<a id='product-page' href='/admin/product'>
					Product
				</a>
				<a id='categories-page' href='/admin/category'>
					Categories
				</a>
			</div>
		</div>
	);
}
