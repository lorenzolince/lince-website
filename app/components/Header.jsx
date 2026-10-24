"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/home", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
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
          <a
            className="whatsapp-btn"
            href="https://wa.me/50763910681?text=Hola%20Lince%20Technology%2C%20estoy%20interesado%20en%20sus%20servicios"
            rel="noopener noreferrer"
            target="_blank"
          >
            WhatsApp
          </a>
          <a
            className="instagram-btn"
            href="https://instagram.com/lincetechnology"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}
