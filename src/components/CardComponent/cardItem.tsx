import Image from "next/image";

interface CardItemProps {
  srcImage: string;
  alt: string;
  title: string;
}
export function CardItem({ alt, srcImage, title }: CardItemProps) {
  return (
    <div className="w-72 h-96 relative">
      <div className=" flex h-full ">
        <Image
          src={srcImage}
          width={288}
          height={384}
          alt="imagem da ferramenta"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-full z-10 flex items-end p-4">
        <div className="w-full">
          <strong className="text-white">ReactJS</strong>
          <p className="text-white  overflow-hidden whitespace-nowrap text-ellipsis w-full hover:cursor-pointer hover:overflow-visible hover:whitespace-normal">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure,
            consequatur labore earum, voluptatum illo assumenda, magni quod
            veniam expedita dolorem beatae laborum ipsa quidem aperiam ad.
            Maxime, minima! Harum.
          </p>
        </div>
      </div>
    </div>
  );
}
