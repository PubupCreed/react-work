import logo from "../../assets/icons/logo.svg";
import photo from "../../assets/photo.png";
import dashboard from "../../assets/icons/navigation/dashboard.svg";
import { navigation } from "./navigation";

// Sidebar.scss

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div className="sidebar__container">
				<a href="/" className="sidebar__logo">
					<img src={logo} alt="Logo" loading='lazy' />
					<h1>Dashboard</h1>
					<p>v.01</p>
				</a>
				<nav className="sidebar__nav">
					<ul className="sidebar__nav-list">
						<li className="sidebar__nav-list-item">
							<a href="/">
								<img src={dashboard} alt="Dashboard" loading='lazy' />
								Dashboard
							</a>
						</li>
                        {navigation}
					</ul>
				</nav>
				<div className="sidebar__account">
					<img src={photo} alt="" className="sidebar__account-photo" />
					<div className="sidebar__account-info">
						<p className="sidebar__account-name">Evano</p>
						<p className="sidebar__account-position">Project Manager</p>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
