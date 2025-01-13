import { RepositoryType } from "@/utils/repositoryType";
import Image from "next/image";
import Link from "next/link";

interface CardHorizontalDto {
  repository: RepositoryType
}
export function CardHorizontal({repository}: CardHorizontalDto) {
  return (
  <div className="w-full h-48 flex p-10 items-center bg-bg-wht gap-4 mb-4">
    <Image
        src='/building.webp'
        width={80}
        height={80}
        alt={'imagem do repositorio'}
    />
    <div className="flex flex-col gap-2  ml-7">
    <h1 className="font-bold md:text-2xl text-black sm:text-base">
       {repository.name}
    </h1>
    <span className="font-bold  text-black sm:text-base">{repository.full_name}</span>
    <Link
      href={repository.html_url}
      className=" text-black sm:text-base mt-4"
      target="_blank"
    >
      Click aqui para ser redirecionado 
    </Link>
    </div>

  </div>
  )
}
