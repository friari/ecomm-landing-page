import Card, { CardProps } from "@/app/ui/components/Card";
import TitleContainer, {
  TitleContainerProps,
} from "@/app/ui/sections/TitleContainer";
import Button from "@/app/ui/components/Button";

export interface CardGridProps {
  title?: TitleContainerProps;
  cards: CardProps[];
  variant?: "product" | "collection";
  columns?: 3 | 4;
  ctaText?: string;
  ctaURL?: string;
  className?: string;
}

const CardGrid: React.FC<CardGridProps> = ({
  title,
  cards,
  columns = 3,
  ctaText,
  ctaURL,
  className,
  variant = "product",
}) => {
  const cardSize = columns === 3 ? "large" : "regular";
  const colSpanClass =
    columns === 3 ? "col-span-12 lg:col-span-4" : "col-span-6 lg:col-span-3";
  const gapClass = columns === 3 ? "gap-x-11" : "gap-x-9";
  return (
    <div className={className ? className : ""}>
      {title && (
        <TitleContainer className="py-16 xl:py-[4.8125rem]" {...title} />
      )}
      <div className="gutters-full">
        <div className={`grid grid-cols-12 gap-y-[5.125rem] ${gapClass}`}>
          {cards.map((card, index) => (
            <div key={card.title + index} className={colSpanClass}>
              <Card cardSize={cardSize} variant={variant} {...card} />
            </div>
          ))}
        </div>
        {ctaText && ctaURL && (
          <div className="mt-9 flex justify-center">
            <Button text={ctaText} href={ctaURL} type="secondary" hasArrow />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGrid;
