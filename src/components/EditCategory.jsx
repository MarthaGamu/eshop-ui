import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditCategory({ categories }) {
	const { id } = useParams();

	const [categoryName, setCategoryName] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		if (!categories || categories.length === 0) return; // Ensure categories exist

		const foundCategory = categories.find(
			(category) => category.id === parseInt(id)
		); // Find category by ID
		console.log('foundCategory', foundCategory);
		if (foundCategory) {
			setCategoryName(foundCategory.categoryName);
			setDescription(foundCategory.description);
			setImageUrl(foundCategory.imageUrl);
		}
	}, [id, categories]);

	const updateCategory = async (e) => {
		e.preventDefault();
		const updatedCategory = { categoryName, description, imageUrl };
		console.log('updatedCategory', updatedCategory);
		try {
			const response = await axios.post(
				`http://localhost:8089/category/update/${id}`,
				updatedCategory,
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
				<h2>Edit Category</h2>
				<form onSubmit={updateCategory}>
					<input
						className='input-field'
						type='text'
						name='categoryName'
						placeholder='Category Name'
						value={categoryName}
						onChange={(e) => {
							setCategoryName(e.target.value);
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
						placeholder='Image Url'
						value={imageUrl}
						onChange={(e) => {
							setImageUrl(e.target.value);
						}}
					/>
					<br />
					<button type='submit' onClick={updateCategory}>
						Update Category
					</button>
				</form>
			</div>
		</div>
	);
}
