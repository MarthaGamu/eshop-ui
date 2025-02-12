import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = () => {
	const [formData, setFormData] = useState({
		categoryName: '',
		description: '',
		imageUrl: ''
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'http://localhost:8089/category/create',
				formData
			);
			console.log('Form data submitted successfuly', response.data);
		} catch (error) {
			console.error('Error submitting form data:', error);
		}

		setFormData({ categoryName: '', description: '', imageUrl: '' });
	};

	return (
		<div>
			<h2>Add Category</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='categoryName'
					placeholder='Category Name'
					value={formData.categoryName}
					onChange={handleChange}
				/>
				<br />
				<textarea
					type='text'
					name='description'
					placeholder='Description'
					value={formData.description}
					onChange={handleChange}
				/>
				<br />
				<input
					type='text'
					name='imageUrl'
					placeholder='Image URL'
					value={formData.imageUrl}
					onChange={handleChange}
				/>
				<br />
				<button onClick={handleSubmit} type='submit'>
					Add Category
				</button>
			</form>
		</div>
	);
};

export default AddCategory;
