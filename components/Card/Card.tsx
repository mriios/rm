interface Props {
  header: string;
  className: string;
  children: JSX.Element[];
}

const Card = (props: Props) => {
  let header = props.header,
    children = props.children;

  return (
    <div
      className={`bg-white border border-gray-200 m-2 rounded-xl shadow-lg p-5 w-full ${props.className}`}
    >
      {header && (
        <>
          <h4>{header}</h4>
          <hr className="my-3" />
        </>
      )}
      {children}
    </div>
  );
};

export default Card;
