import React, { useState } from 'react';
import axios from 'axios';
export default function AddProduct({ categories }) {
	// const [categoryName, setCategoryName] = useState('');
	const [description, setDescription] = useState('');
	const [imageURL, setImageUrl] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const formData = { categoryId, description, imageURL, name, price };
	console.log('formData', formData);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:8089/product/add',
				formData
			);
			console.log('Product added successfuly', response.data);
		} catch (error) {
			console.error('Error submitting product form data:', error);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Category</label>
				<select
					className='form-control'
					value={categoryId}
					onChange={(e) => {
						setCategoryId(e.target.value);
					}} // Update state when selection changes
					required
				>
					<option value=''>Select a category</option>{' '}
					{/* Default empty option */}
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.categoryName}
						</option>
					))}
				</select>
				<input
					type='text'
					name='name'
					placeholder='Name'
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<br />
				<textarea
					type='text'
					name='description'
					placeholder='Description'
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				/>
				<br />
				<input
					type='url'
					name='imageUrl'
					placeholder='Image URL'
					value={imageURL}
					onChange={(e) => {
						setImageUrl(e.target.value);
					}}
				/>
				<input
					type='number'
					name='price'
					placeholder='Price'
					value={price}
					onChange={(e) => {
						setPrice(e.target.value);
					}}
				/>
				<br />
				<button onClick={handleSubmit} type='submit'>
					Add Product
				</button>
			</form>
		</div>
	);
}
