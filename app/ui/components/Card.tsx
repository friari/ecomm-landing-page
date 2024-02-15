import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Price from "@/app/ui/components/Price";
import Icon from "@/app/ui/components/Icon";
import { Star } from "@/app/ui/assets/icons";

export interface CardProps {
  variant?: "product" | "collection";
  image: string | StaticImageData;
  imageAlt?: string;
  title: string;
  description?: string;
  price?: number | string;
  rating?: number | string;
  cardSize?: "regular" | "large";
  href?: string;
}

const Card: React.FC<CardProps> = ({
  variant = "product",
  image,
  imageAlt,
  title,
  description,
  price,
  rating,
  cardSize = "regular",
  href = "/",
}) => {
  const isCollection = variant === "collection";
  const aspectClass =
    cardSize === "regular" ? "aspect-[1/1.1863]" : "aspect-[1/1.3163]";

  const gapClass = isCollection
    ? "gap-y-[1.5625rem]"
    : cardSize === "regular"
      ? "gap-y-9"
      : "gap-y-[3.1875rem]";

  return (
    <Link href={href} className={`flex flex-col ${gapClass}`}>
      <div className="w-full">
        <div className={`relative ${aspectClass}`}>
          <Image
            src={image}
            alt={imageAlt || "default alt text"}
            fill={true}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 40vw, 33vw"
          />
        </div>
      </div>
      <div className="text-dark text-center">
        <h5
          className={`p mb-[0.6875rem]	font-semibold ${isCollection ? "text-xl xl:text-2xl" : ""}`}
        >
          {title}
        </h5>
        {isCollection && description && <p>{description}</p>}
        {!isCollection && (
          <div className="flex justify-center gap-x-2 lg:gap-x-9 xl:gap-x-11">
            {price && (
              <>
                <p>
                  <Price price={price} />
                </p>
                <div className="divider"></div>
              </>
            )}
            {rating && (
              <p className="inline-flex gap-x-[0.5625rem]">
                {rating} <Icon SvgIcon={Star} />
              </p>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
