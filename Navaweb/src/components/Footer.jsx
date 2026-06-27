import '../styles/Footer.css';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo size="32px" variant="icon" />
      </div>
      <p className="footer-copy">
        © 2025 NavaWeb · Hecho con 💜 por <a href="https://github.com/santinavarrete" target="_blank" rel="noopener noreferrer">Santiago Navarrete</a>
      </p>
    </footer>
  );
}
