type ChildrenProps = {
  children: React.ReactNode;
};
const Button = ({ children }: ChildrenProps) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default Button;
