import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProduct({ products, categories }) {
	const [description, setDescription] = useState('');
	const [imageURL, setImageUrl] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [categoryId, setCategoryId] = useState(1);
	//const formData = { categoryId, description, imageURL, name, price };
	const { id } = useParams();

	useEffect(() => {
		if (!products || products.length === 0) return; // Ensure categories exist

		const foundCategory = products.find(
			(category) => category.id === parseInt(id)
		); // Find category by ID
		console.log('foundCategory', foundCategory);
		if (foundCategory) {
			setCategoryId(foundCategory.setCategoryId);
			setDescription(foundCategory.description);
			setImageUrl(foundCategory.imageURL);
			setName(foundCategory.name);
			setPrice(foundCategory.price);
		}
	}, [id, products]);

	const updateProduct = async (e) => {
		e.preventDefault();
		const updatedProduct = { categoryId, description, imageURL, name, price };
		console.log('updatedProduct', updatedProduct);
		try {
			const response = await axios.post(
				`http://localhost:8089/product/update/${id}`,
				updatedProduct,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);

			if (response.status === 200) {
				alert('Category has been updated');
				console.log('successfully updated');
			}
		} catch (error) {
			console.error('Error updating category:', error);
		}
	};
	return (
		<div className='container'>
			<div className='form-wrapper'>
				<form onSubmit={updateProduct}>
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
					<button onClick={updateProduct} type='submit'>
						Add Product
					</button>
				</form>
			</div>
		</div>
	);
}
