interface PriceProps {
  price: number | string;
  currency?: string;
  className?: string;
}

const Price: React.FC<PriceProps> = ({
  price,
  currency = "AUD",
  className,
}) => {
  const formattedPrice = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(Number(price));
  return <span className={className}>{formattedPrice}</span>;
};

export default Price;
