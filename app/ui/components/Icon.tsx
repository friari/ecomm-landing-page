import clsx from "clsx";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  SvgIcon: React.ComponentType<React.SVGAttributes<SVGElement>>;
  isLarge?: boolean;
}

function Icon({ SvgIcon, className, isLarge = false }: IconProps) {
  return (
    <span className={clsx("relative h-6 w-6", isLarge && "h-8 w-8", className)}>
      <SvgIcon className="position-center !h-auto !w-full" />
    </span>
  );
}

export default Icon;
