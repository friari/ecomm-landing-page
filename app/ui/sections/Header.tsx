import Link from "next/link";
import Logo from "@/app/ui/assets/logo";
import Icon from "@/app/ui/components/Icon";
import NavBar from "@/app/ui/components/Navbar";
import Button from "@/app/ui/components/Button";
import { ShoppingCart } from "@/app/ui/assets/icons";
import { fetchHeaderData } from "@/app/lib/data/fetchData";

async function Header({}) {
  const data = await fetchHeaderData();

  return (
    <header className="bg-primary gutters-full grid w-full grid-cols-12 items-center justify-between gap-5 py-[3.4375rem]">
      <div className="col-span-2">
        <Link href="/">
          <Logo className={"logo text-everglade"} />
        </Link>
      </div>
      <div className="col-span-6 col-start-4 flex justify-end xl:col-span-6 xl:col-start-4">
        <NavBar navItems={data} className="w-full max-w-[41.25rem]" />
      </div>
      <div className="col-span-3 col-start-10 flex items-center gap-6 justify-self-end xl:gap-10 2xl:gap-14">
        <Icon SvgIcon={ShoppingCart} isLarge />
        <Button
          text="login"
          href="/"
          type="secondary"
          size="sm"
          className="text-link"
        />
      </div>
    </header>
  );
}

export default Header;
