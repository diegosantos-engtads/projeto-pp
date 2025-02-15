"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuHouse , LuLayers, LuWalletCards } from "react-icons/lu";
import NavItem, { NavItemInterface } from "../NavItem";
import "./index.css";

const SideMenu = () => {
  const pathname = usePathname();

  const items: NavItemInterface[] = [
    { url: "/home", label: "Home", icon: <LuHouse  size={24} /> },
    { url: "/estoque", label: "Estoque", icon: <LuLayers size={24} /> },
    { url: "/financeiro", label: "Financeiro", icon: <LuWalletCards size={24} /> },
  ];

  return (
    <div className="SideMenu">
      <div>
        <Link href="/home" className="logo">
          Meu PDV
        </Link>
      </div>

      <nav className="navBar">
        <ul>
          {items.map((item) => (
            <NavItem
              key={item.url}
              url={item.url}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.url || pathname.startsWith(item.url + "/")}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
