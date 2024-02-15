import Button from "@/app/ui/components/Button";

interface NavItem {
  title: string;
  url: string;
}

interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  navItems: NavItem[];
}

function NavBar({ navItems, ...props }: NavBarProps) {
  return (
    <nav {...props}>
      <ul className="flex items-center justify-around">
        {navItems.map((item, index) => (
          <li key={index} className="inline-flex justify-center">
            <Button
              text={item.title}
              href={item.url}
              unstyledLink={true}
              className="text-link"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
