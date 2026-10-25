"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/home", label: "Inicio" },
  { href: "/servicios", label: "Producto" },
  { href: "/pruebas", label: "Pruebas" },
  { href: "/nosotros", label: "Empresa" },
  { href: "/contactos", label: "Contacto", contact: true },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="logo" href="/home" onClick={closeMenu}>
          <Image src="/logo.png" alt="Lince Technology" className="logo-img" width={42} height={42} priority />
          <span className="logo-text">Lince Technology</span>
        </Link>

        <button
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className={`menu ${menuOpen ? "menu-open" : ""}`} id="main-navigation">
          {navigation.map(({ href, label, contact }) => (
            <Link
              aria-current={pathname === href ? "page" : undefined}
              className={contact ? "btn-cta" : undefined}
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="social-links" aria-label="Redes sociales">
          <a
            aria-label="WhatsApp"
            href="https://wa.me/50763910681?text=Hola%20Lince%20Technology%2C%20estoy%20interesado%20en%20sus%20servicios"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M16.75 13.96c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.74-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.73 4.33 3.83.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"/><path d="M12.04 2a9.9 9.9 0 0 0-8.49 15.01L2 22l5.13-1.5A9.98 9.98 0 1 0 12.04 2Zm0 18.14a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.04.89.91-2.96-.2-.31A8.14 8.14 0 1 1 12.04 20.14Z"/></svg>
          </a>
          <a aria-label="Instagram" href="https://instagram.com/lincetechnology" rel="noopener noreferrer" target="_blank">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.17 1.8A3.23 3.23 0 0 0 3.8 7.03v9.94a3.23 3.23 0 0 0 3.23 3.23h9.94a3.23 3.23 0 0 0 3.23-3.23V7.03a3.23 3.23 0 0 0-3.23-3.23H7.03Zm10.82 1.35a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16ZM12 6.86A5.14 5.14 0 1 1 12 17.14 5.14 5.14 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 12 15.34 3.34 3.34 0 0 0 12 8.66Z"/></svg>
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/lorenzo-lince" rel="noopener noreferrer" target="_blank">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5.37 3.5A1.87 1.87 0 1 1 5.36 7.24 1.87 1.87 0 0 1 5.37 3.5ZM3.75 8.7h3.24V20.5H3.75V8.7Zm5.27 0h3.1v1.61h.04c.43-.82 1.49-1.69 3.07-1.69 3.28 0 3.89 2.16 3.89 4.97v6.61h-3.23v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v5.96H8.96V8.7Z"/></svg>
          </a>
          <a aria-label="X" href="https://x.com/lorenzolince" rel="noopener noreferrer" target="_blank">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.24l-4.89-7.2L5.76 22H2.65l7.24-8.27L2.25 2h6.4l4.42 6.58L18.9 2Zm-1.09 18h1.72L7.71 3.9H5.87L17.81 20Z"/></svg>
          </a>
        </div>
      </div>
    </header>
  );
}
