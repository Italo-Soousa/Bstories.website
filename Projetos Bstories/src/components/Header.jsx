import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-menu">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
      </nav>

      <div className="logo">
        <img src={logo} alt="Logo B.stories" className="logo-img" />
      </div>
    </header>
  );
}