import Image from "next/image";

interface CardItemProps {
  srcImage: string;
  alt: string;
  title: string;
  description: string;
}
export function CardItem({ alt, srcImage, title, description }: CardItemProps) {
  return (
    <div className="md:w-72 md:h-96 relative">
      <div className=" flex h-full ">
        <Image
          src={srcImage}
          width={288}
          height={384}
          alt="imagem da ferramenta"
          style={{ objectFit: "cover" }}
          className="rounded-rounded md:rounded-none size-24 md:w-full md:h-full"
        />
      </div>
      <div className=" hidden md:absolute top-0 left-0 bg-gradient-to-t from-black to-transparent md:w-full md:h-full z-10 md:flex items-end p-4 rounded-rounded md:rounded-none">
        <div className="w-full hidden md:flex md:flex-col">
          <strong className="text-white">{title}</strong>
          <p className="text-white  overflow-hidden whitespace-nowrap text-ellipsis w-full hover:cursor-pointer hover:overflow-visible hover:whitespace-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
