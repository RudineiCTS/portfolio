import BackgroundContainer from "@/components/background";
import { Container } from "@/components/container";
import { GroupIconContainer } from "@/components/layoutContainer/groupIconContainer";
import { LayoutContainer } from "@/components/layoutContainer/layoutContainer";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <BackgroundContainer>
        <LayoutContainer className="flex flex-col h-full items-center justify-center max-w-container">
          <section className="flex justify-between items-center ">
            <div className="flex flex-col gap-5  w-1/2">
              <div className="bg-bg-wht px-3 py-3 w-fit">
                <h1 className="font-bold text-4xl">Hello!</h1>
              </div>
              <div className="text-white">
                <h1 className="font-bold text-4xl text-white">
                  {" "}
                  Eu sou Rudinei Costa
                </h1>
                <p className="text-xl flex-nowrap mt-3">
                  Software Engineer | Front End | Back End | JavaScript |
                  TypeScript | NextJs | ReactJS | TailwindCSS | NodeJS
                </p>
                <GroupIconContainer />
              </div>
            </div>

            <Image
              src="/profile.png"
              alt="imagem de perfil"
              width={400}
              height={510}
            />
          </section>
          <div className="w-2"></div>
        </LayoutContainer>
      </BackgroundContainer>
      <LayoutContainer className="w-full flex justify-between max-w-container mt-8">
        <Image
          src={"/modelo.png"}
          width={350}
          alt="imagem do perfil"
          height={200}
        />
        <div className="flex flex-col gap-3   w-full text-bg-wht w-2/4">
          <h1 className="text-bg-wht text-4xl">Sobre Mim!</h1>
          <p className=" flex flex-nowrap">
            Opa! Eai, meu nome é Rudinei sou um profissional de tecnologia com
            ampla experiência em desenvolvimento web, análise de dados e suporte
            técnico. Tenho sólido conhecimento em desenvolvimento front-end com
            React e TypeScript, incluindo projetos como a criação de um ERP do
            zero e sistemas dinâmicos. Além disso, possuo habilidades no
            back-end com Node.js, React Native, C# e bancos de dados como SQL
            Server, MySQL e MongoDB. Minhas experiências incluem suporte técnico
            para hardware e software, além de desenvolvimento de soluções
            robustas e escaláveis. Também estou em constante evolução na área de
            análise de dados, com formação em Power BI e aprendizado avançado de
            análise de dados com Google Advanced Data Analytics Capstone. Com
            uma abordagem orientada a resultados, busco aplicar minha
            versatilidade em projetos desafiadores, entregando soluções
            criativas e eficazes. Estou aberto a atuar em diferentes áreas, seja
            como desenvolvedor, analista de dados, ou outras funções
            relacionadas à tecnologia e inovação.
          </p>
        </div>
      </LayoutContainer>
      <LayoutContainer className="w-full flex flex-col justify-center  max-w-container mt-8">
        <div className="text-bg-wht flex flex-col gap-16">
          <h1 className=" text-4xl text-center">Ferramentas</h1>
          <p className="text-center"> Ferramentas que utilzo no meu dia a dia, para estudos e trabalhos.</p>
        </div>

        <div className="grid grid-cols-3 gap-8 my-10">

        <div className="w-60 border-slate-500 border-2">
          <div className="bg-red-400 flex items-center justify-center">
            <Image src="/vsicon.png" width={100} height={100} alt="imagem da ferramenta" style={{objectFit: "fill"}}/>
          </div>
          <span  className="text-bg-wht">
            <strong className="text-xl">VSCODE</strong>
            <p className="text-gray-500">Editor de Texto</p>
          </span>
        </div>
        <div className="w-60 border-slate-500 border-2">
          <div className="bg-red-400 flex items-center justify-center">
            <Image src="/vsicon.png" width={100} height={100} alt="imagem da ferramenta" style={{objectFit: "fill"}}/>
          </div>
          <span  className="text-bg-wht">
            <strong className="text-xl">VSCODE</strong>
            <p className="text-gray-500">Editor de Texto</p>
          </span>
        </div>
        <div className="w-60 border-slate-500 border-2">
          <div className="bg-red-400 flex items-center justify-center">
            <Image src="/vsicon.png" width={100} height={100} alt="imagem da ferramenta" style={{objectFit: "fill"}}/>
          </div>
          <span  className="text-bg-wht">
            <strong className="text-xl">VSCODE</strong>
            <p className="text-gray-500">Editor de Texto</p>
          </span>
        </div>
        <div className="w-60 border-slate-500 border-2">
          <div className="bg-red-400 flex items-center justify-center">
            <Image src="/vsicon.png" width={100} height={100} alt="imagem da ferramenta" style={{objectFit: "fill"}}/>
          </div>
          <span  className="text-bg-wht">
            <strong className="text-xl">VSCODE</strong>
            <p className="text-gray-500">Editor de Texto</p>
          </span>
        </div>
        <div className="w-60 border-slate-500 border-2">
          <div className="bg-red-400 flex items-center justify-center">
            <Image src="/vsicon.png" width={100} height={100} alt="imagem da ferramenta" style={{objectFit: "fill"}}/>
          </div>
          <span  className="text-bg-wht">
            <strong className="text-xl">VSCODE</strong>
            <p className="text-gray-500">Editor de Texto</p>
          </span>
        </div>
        <div className="w-60 border-slate-500 border-2">
          <div className="bg-red-400 flex items-center justify-center">
            <Image src="/vsicon.png" width={100} height={100} alt="imagem da ferramenta" style={{objectFit: "fill"}}/>
          </div>
          <span  className="text-bg-wht">
            <strong className="text-xl">VSCODE</strong>
            <p className="text-gray-500">Editor de Texto</p>
          </span>
        </div>

        </div>
      </LayoutContainer>
    </Container>
  );
}
