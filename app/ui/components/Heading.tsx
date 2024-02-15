interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({ tag, children, ...rest }) => {
  const TagName = tag;
  return <TagName {...rest}>{children}</TagName>;
};

export default Heading;
