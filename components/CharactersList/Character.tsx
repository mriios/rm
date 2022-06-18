import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  imgSrc: string;
}

const Character = (props: Props) => {
  let id = props.id,
    name = props.name,
    imgSrc = props.imgSrc;

  return (
    <div>
      <Link href="/characters/[id]" as={`/characters/${id}`}>
        <a>
          <div className="aspect-square relative">
            <Image
              src={imgSrc}
              alt={name}
              layout="fill"
              objectFit="contain"
              className="hover:scale-150 ease-in-out duration-300"
            />
          </div>
          {name}
        </a>
      </Link>
    </div>
  );
};

export default Character;
