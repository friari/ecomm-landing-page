import clsx from "clsx";
import TitleContainer from "@/app/ui/sections/TitleContainer";
import Button, { ButtonProps } from "@/app/ui/components/Button";
import Countdown, {
  CountdownProps,
} from "@/app/ui/components/Countdown/Countdown";
import Image, { StaticImageData } from "next/image";

export interface TextAndImageProps {
  title: string;
  subtitle?: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  reversed?: boolean;
  hasGutter?: boolean;
  hasH1?: boolean;
  className?: string;
  headingClassName?: string;
  isFeaturedSection?: boolean;
  cta?: Omit<ButtonProps, "className">;
  countdown?: Omit<CountdownProps, "className">;
}

const TextAndImage: React.FC<TextAndImageProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  reversed = false,
  hasGutter = true,
  hasH1,
  className,
  headingClassName = "",
  isFeaturedSection,
  cta,
  countdown,
}) => {
  const paragraphClassName = isFeaturedSection ? "text-light" : "";
  const imageContainerClass = isFeaturedSection
    ? "aspect-[1/1.26]"
    : "h-full aspect-[4/5]";
  return (
    <div
      className={clsx(
        "gutters-full",
        hasGutter ? "" : "bg-primary",
        isFeaturedSection
          ? "pb-28 md:pt-10 lg:pb-[10.375rem] lg:pt-[4.6875rem]"
          : "pb-20 md:pt-32 xl:pb-[5.625rem] xl:pt-[8.875rem]",
        className,
      )}
    >
      <div
        className={clsx(
          "flex items-stretch gap-6 md:gap-y-0",
          reversed
            ? "flex-col md:flex-row-reverse"
            : "flex-col-reverse md:flex-row",
          hasGutter ? "bg-primary drop-shadow-sm" : "gap-x-[11.619%]",
        )}
      >
        <div
          className={`flex-1 ${hasGutter ? "min-w-[60%] py-16 pl-20 pr-24 xl:py-[4.625rem] xl:pl-[6.5rem] xl:pr-[7.563rem]" : "max-w-2xl md:py-7 lg:py-[1.375rem]"}`}
        >
          <TitleContainer
            title={title}
            alignment="left"
            titleTag={hasH1 ? "h1" : "h3"}
            subtitle={subtitle}
            headingClassName={headingClassName}
            paragraphClassName={paragraphClassName}
          />
          {countdown && <Countdown className="mt-8 xl:mt-10" {...countdown} />}
          {cta && (
            <Button
              {...cta}
              className={
                isFeaturedSection ? "mt-12 xl:mt-[3.375rem]" : "mt-8 xl:mt-10"
              }
            />
          )}
        </div>
        <div className={clsx("min-h-0 flex-1", hasGutter && "2xl:pl-20")}>
          <div className={clsx("relative", imageContainerClass)}>
            <Image
              src={imageSrc}
              alt={imageAlt || "default alt text"}
              fill={true}
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 40vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAndImage;
