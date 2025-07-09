import React from 'react';
import '../assets/styles/footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Accounting Project Companies. Todos los derechos reservados.</p>
    </footer>
  );
}
