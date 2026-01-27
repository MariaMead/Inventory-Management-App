
export const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
        <div className="navbar-left">
            <a href="/" className="logo">
                Home
            </a>
        </div>
        <div className="navbar-center">
            <ul className="nav-links">
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/lowstock">Low Stock Alerts</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className="navbar-right">
        </div>
    </nav>
  );
}
    