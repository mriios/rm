import Image from "next/image";

interface Props {
  name: string;
  imgSrc: string;
}

const Character = (props: Props) => {
  let name = props.name,
    imgSrc = props.imgSrc;

  return (
    <div>
      <div className="aspect-square relative">
        <Image src={imgSrc} alt={name} layout="fill" objectFit="contain" />
      </div>
      {name}
    </div>
  );
};

export default Character;
