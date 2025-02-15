import Link from "next/link";

export interface NavItemInterface {
  url: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export default function NavItem({ url, label, icon, isActive }: NavItemInterface) {
  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
      <Link href={url} className="nav-link">
        {icon}
        {label}
      </Link>
    </li>
  );
}
