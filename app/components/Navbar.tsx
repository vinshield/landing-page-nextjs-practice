import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import User from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function Navbar() {
  return (
    <nav className="padding-container container mx-auto flex justify-between py-4">
      <div className="flex items-center gap-[74px]">
        <Image src={Logo} alt="logo" />
        <ul className="hidden gap-14 lg:flex">
          {navLinks.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-14">
          <p className="hidden lg:block">Open an Account</p>
          <div className="flex items-center gap-3">
            <Image src={User} alt="user" />
            <span className="hidden font-medium lg:block">Sign in</span>
          </div>
        </div>
        <Image className="lg:hidden" src={Menu} alt="menu" />
      </div>
    </nav>
  );
}
