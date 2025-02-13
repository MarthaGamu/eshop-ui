import React, { use, useState } from 'react';
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
	const [data, setData] = useState();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:8089/product/add',
				formData
			);
			console.log('Product added successfuly', response.data);
			setData(response.data);
		} catch (error) {
			console.error('Error submitting product form data:', error);
		}
	};
	return (
		<div className='container'>
			<div className='form-wrapper'>
				<h2>Add Product</h2>
				<form className='form' onSubmit={handleSubmit}>
					<select
						className='input-field'
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
					<br />
					<input
						className='input-field'
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
						className='input-field'
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
						className='input-field'
						type='url'
						name='imageUrl'
						placeholder='Image URL'
						value={imageURL}
						onChange={(e) => {
							setImageUrl(e.target.value);
						}}
					/>
					<br />
					<input
						className='input-field'
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
		</div>
	);
}
