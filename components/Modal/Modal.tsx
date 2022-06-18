import Card from "../Card/Card";

interface Props {
  modalTitle: string;
  children: JSX.Element[];
}

const Backdrop = () => {
  return <div className="bg-black opacity-50 w-100 h-100 absolute"></div>;
};

const Modal = (props: Props) => {
  return (
    <>
      <Card header={props.modalTitle}>{props.children}</Card>
      <Backdrop />
    </>
  );
};

export default Modal;
