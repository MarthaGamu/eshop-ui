import { Link, useLocation } from 'react-router-dom';
import CategoryBox from './CategoryBox';

export default function Category({ categories }) {
	const location = useLocation();

	return (
		<>
			<div className='heading-wrapper'>
				<h2>Our categories of Brands</h2>
				{location.pathname === '/admin/category/add' && (
					<Link id='add-category' to='/admin/category/add'>
						<button>Add a new Category</button>
					</Link>
				)}
			</div>

			<div className='card-wrapper'>
				{categories.map((categoryData) => {
					return <CategoryBox categoryData={categoryData} />;
				})}
			</div>
		</>
	);
}
