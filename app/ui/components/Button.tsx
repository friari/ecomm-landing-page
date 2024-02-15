import clsx from "clsx";
import Link from "next/link";
import Icon from "@/app/ui/components/Icon";
import { Arrow } from "@/app/ui/assets/icons";

export interface ButtonProps {
  text: string;
  href?: string;
  type?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  capitalize?: boolean;
  hasArrow?: boolean;
  unstyledLink?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  type = "primary",
  size = "md",
  capitalize = true,
  hasArrow = false,
  unstyledLink = false,
  className,
}) => {
  const renderedClassName = clsx(
    !unstyledLink && {
      btn: true,
      "btn-primary": type === "primary",
      "btn-secondary": type === "secondary",
      "btn-sm": size === "sm",
      "btn-md": size === "md",
      "btn-lg": size === "lg",
      "drop-shadow-sm": (size === "sm" || size === "md") && type === "primary",
      "drop-shadow-lg": size === "lg" && type === "primary",
    },
    {
      uppercase: capitalize,
    },
    hasArrow && "inline-flex gap-[0.5625rem] items-center",
    className,
  );

  return (
    <>
      {href ? (
        <Link href={href} className={renderedClassName}>
          {text} {hasArrow && <Icon SvgIcon={Arrow} />}
        </Link>
      ) : (
        <button className={renderedClassName}>{text}</button>
      )}
    </>
  );
};

export default Button;
