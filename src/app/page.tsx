import { CardItem } from "@/components/CardComponent/cardItem";
import { CarouselComponent } from "@/components/Carousel/CarouselComponent";
import BackgroundContainer from "@/components/background";
import { Container } from "@/components/container";
import { GroupIconContainer } from "@/components/layoutContainer/groupIconContainer";
import { LayoutContainer } from "@/components/layoutContainer/layoutContainer";
// import { toolsListItem } from "@/utils/listCardItem";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <BackgroundContainer>
        <LayoutContainer className="flex flex-col h-full items-center justify-center max-w-container sm:max-w-full sm:m-5 ">
          <section className="md:flex md:flex-row md:justify-between items-center justify-center flex flex-col-reverse">
            <div className="flex flex-col gap-5  w-1/2">
              <div className="bg-bg-wht px-3 py-3 w-fit">
                <h1 className="font-bold md:text-4xl  sm:text-xl">Hello!</h1>
              </div>
              <div className="text-white">
                <h1 className="font-bold md:text-4xl text-white sm:text-base">
                  {" "}
                  Eu sou Rudinei Costa
                </h1>
                <p className="md:text-xl flex-nowrap mt-3 sm:text-base ">
                  Software Engineer | Front End | Back End | JavaScript |
                  TypeScript | NextJs | ReactJS | TailwindCSS | NodeJS
                </p>
                <GroupIconContainer />
              </div>
            </div>
            <Image
              src="/model1.jpg"
              alt="imagem de perfil"
              width={350}
              height={510}
              className="md:rounded-full w-32 h-44 rounded-rounded md:w-96 md:h-auto md:m-auto mb-8"
            />
          </section>
          <div className="w-2"></div>
        </LayoutContainer>
      </BackgroundContainer>
      <LayoutContainer className="md:grid md:grid-cols-2 max-w-container sm:flex sm:items-center sm:justify-center text-center w-2/3 md:w-full">
        <div className="hidden md:flex ">
          <Image
            src={"/model2bgr.png"}
            width={350}
            alt="imagem do perfil"
            height={200}
          />
        </div>
        <div className=" flex flex-col gap-3 w-full text-bg-wht">
          <h1 className="text-bg-wht md:text-4xl text-2xl">Sobre Mim!</h1>
          <p className=" flex flex-nowrap sm:text-base">
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
          <h1 className=" md:text-4xl sm:text-2xl text-center">Ferramentas</h1>
          <p className="text-center sm:text-base mx-5 md:mx-auto">
            {" "}
            Ferramentas que utilzo no meu dia a dia, para estudos e trabalhos.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 my-10 w-3/5 md:w-full place-items-center mx-auto">
          <CardItem srcImage="/react.webp" alt="" title="React"  description="O React é uma biblioteca JavaScript usada para criar interfaces de usuário (UI) de forma eficiente."/>
          <CardItem srcImage="/node.webp" alt="" title="Node" description="O Node.js é uma plataforma JavaScript que permite executar código fora do navegador, no servidor."/>
          <CardItem srcImage="/next.webp" alt="" title="Next" description="O Next.js é um framework React usado para construir aplicações web modernas e otimizadas. Ele oferece funcionalidades como renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e suporte a rotas automáticas, tornando mais fácil criar sites rápidos e SEO-friendly. "/>
        </div>
        {/* <CarouselComponent 
            list={toolsListItem}
         /> */}
      </LayoutContainer>
      <LayoutContainer className="flex items-center justify-center text-bg-wht max-w-container w-full flex-col">
        <div className=" flex flex-col justify-center items-center gap-5">
          <h1 className=" mb-9  md:text-4xl sm:text-2xl text-center">Projetos</h1>
          <p className="text-base text-center md:m-auto m-9">
          Peço desculpas, este portfólio ainda está em desenvolvimento e, por isso, ainda não tive tempo de subir os projetos da API do GitHub. Preciso selecionar alguns projetos para listar aqui!
          </p>
          <Image
            alt="icone de construção"
            width={250}
            height={250}
            src="/building.webp"
          ></Image>
        </div>
      </LayoutContainer>
    </Container>
  );
}
