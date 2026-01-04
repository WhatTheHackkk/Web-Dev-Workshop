import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">DevPortfolio</div>

            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Support</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
