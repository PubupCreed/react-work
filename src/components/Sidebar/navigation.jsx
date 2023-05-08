import arrow from '../../assets/icons/arrow-right.svg';
import arrowWhite from '../../assets/icons/arrow-right-white.svg';

const path = "/src/assets/icons/navigation/";

const navigationList = [
	{
		icon: path + "product.svg",
		title: "Product",
	},
	{
		icon: path + "customers.svg",
		title: "Customers",
	},
	{
		icon: path + "Income.svg",
		title: "Income",
	},
	{
		icon: path + "Promote.svg",
		title: "Promote",
	},
	{
		icon: path + "Help.svg",
		title: "Help",
	},
];

const setActiveClass = (title) => title === 'Customers' ? 'sidebar__nav-list-item active' : 'sidebar__nav-list-item';

export const navigation = navigationList.map(({icon, title}) => (
	<li key={title} className={setActiveClass(title)}>
		<a href="#">
			<img src={icon} alt={title} loading='lazy' />
			{title}
			<img className='sidebar__nav-list-item-arrow' src={title === 'Customers' ? arrowWhite : arrow} alt="Arrow right" loading='lazy' />
		</a>
	</li>
));
