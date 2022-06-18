interface Props {
  header: string;
  children: JSX.Element[];
}

const Card = (props: Props) => {
  let header = props.header,
    children = props.children;

  return (
    <div>
      {header && (
        <>
          <p>{header}</p>
          <hr />
        </>
      )}
      {children}
    </div>
  );
};

export default Card;
