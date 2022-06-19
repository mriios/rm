import Card from "../Card/Card";

interface BackdropProps {
  onClick: () => void;
}
interface Props {
  modalTitle: string;
  backdropOnClick: () => void;
  children: JSX.Element[];
}

const Backdrop = (props: BackdropProps) => {
  return (
    <div
      onClick={props.onClick}
      className="bg-black opacity-50 w-screen h-screen absolute top-0 left-0"
    ></div>
  );
};

const Modal = (props: Props) => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0">
      <Card
        header={props.modalTitle}
        className="absolute z-10 max-w-[80%] md:max-w-[50%] -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2"
      >
        {props.children}
      </Card>
      <Backdrop onClick={props.backdropOnClick} />
    </div>
  );
};

export default Modal;
