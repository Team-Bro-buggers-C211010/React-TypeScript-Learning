type ChildrenProps = {
  children: React.ReactNode;
};
const Card = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

export default Card;
