import Heading from "@/app/ui/components/Heading";
import { alignmentClasses } from "@/app/lib/alignmentClasses";

export interface TitleContainerProps {
  alignment?: "left" | "center" | "right";
  title: string;
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subtitle?: string;
  className?: string;
  headingClassName?: string;
  paragraphClassName?: string;
}

const TitleContainer: React.FC<TitleContainerProps> = ({
  alignment = "center",
  title,
  titleTag = "h3",
  subtitle,
  className,
  headingClassName,
  paragraphClassName,
}) => {
  const alignmentClass = alignmentClasses[alignment];

  return (
    <div className={`${alignmentClass} ${className ? className : ""}`}>
      <Heading
        tag={titleTag}
        className={headingClassName ? headingClassName : ""}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={`${paragraphClassName ? paragraphClassName : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleContainer;
