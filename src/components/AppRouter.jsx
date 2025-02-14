import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AddCategory from './AddCategory';
import { Suspense } from 'react';
import Category from './Category';
import EditCategory from './EditCategory';
import AddProduct from './AddProduct';
import Product from './Product';
import EditProduct from './EditProduct';

function AppRouter() {
	const baseURL = 'http://localhost:8089/';
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const fetchData = async () => {
		try {
			const productRes = await axios.get(`${baseURL}product/`);
			setProducts(productRes.data);
			const categoriesRes = await axios.get(`${baseURL}category/`);
			setCategories(categoriesRes.data);
		} catch (error) {
			console.error('Error fetching data', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Router>
			<Suspense fallback={<div>Loading</div>}></Suspense>
			<Routes>
				<Route
					path='/'
					element={<Home categories={categories} products={products} />}
				/>
				<Route path='/admin/category/add' element={<AddCategory />} />
				<Route
					path='/admin/category'
					element={<Category categories={categories} />}
				/>
				<Route
					path='/admin/category/:id'
					element={<EditCategory categories={categories} />}
				/>
				<Route
					path='/admin/product/add'
					element={<AddProduct categories={categories} products={products} />}
				/>
				<Route
					path='/admin/product'
					element={<Product products={products} />}
				/>

				<Route
					path='/admin/product/:id'
					element={<EditProduct products={products} categories={categories} />}
				/>
				<Route
					path='/admin/product'
					element={<Product products={products} categories={categories} />}
				/>
			</Routes>
		</Router>
	);
}

export default AppRouter;
