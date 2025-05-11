import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import espaco46_1 from "../../assets/images/projects/BA1.png";
import espaco46_2 from "../../assets/images/projects/BA1.png";
import betting1 from "../../assets/images/projects/BA1.png";
import betting2 from "../../assets/images/projects/BA2.png";
import betting3 from "../../assets/images/projects/BA3.png";
import fortequip1 from "../../assets/images/projects/F1.png";
import fortequip2 from "../../assets/images/projects/F2.png";
import fortequip3 from "../../assets/images/projects/F3.png";
import pdvU1 from "../../assets/images/projects/pdvunivisa1.png";
import pdvU2 from "../../assets/images/projects/pdvunivisa2.png";
import pdvU3 from "../../assets/images/projects/pdvunivisa3.png";
import pdvU4 from "../../assets/images/projects/pdvunivisa4.png";
import ModalImage from "../common/ModalImage";

// Dados mockados para projetos - o usuário substituirá pelos seus dados reais
const mockProjects = [
  // {
  //   id: 1,
  //   title: "Projeto Comercial: Espaço 46",
  //   category: "Aplicação Web",
  //   images: [espaco46_1, espaco46_2],
  //   description:
  //     "Plataforma para gerenciamento de lojas, onde os administradores verificam o crescimento, fluxo de pessoas e de vendas em determinados horários, gerenciam e validam metas para os lojistas, gerando pontuações e recompesnas, além disso há também uma parte no código aberta para usuários externos cadastrarem seus currículos e lojas. Os lojistas podem ver seu próprio crescimento, além de avisos e um carrosel de eventos criado e gerenciado pelos adminstradores. Desenvolvido com React, Node.js, TailwindCSS, e várias bibliotecas externas do react.",
  //   tech: ["React", "Node.js", "TailwindCSS", "PostgreSQL", "Swiper"],
  //   liveLink: "#",
  //   repoLink: "#",
  // },
  {
    id: 2,
    title: "Blog: Betting Academy",
    category: "Aplicação Web",
    images: [betting1, betting2, betting3],
    description:
      "Uma plataforma de blogs com as principais notícias sobre apostas esportivas. Continha também um chat em tempo real com os usuários logados no sistema, utilizando websockets. E tinha ainda uma parte de aulas com vários módulos e vídeo-aulas de como ser um gestor de operações esportivas (o famoso tipster).",
    tech: [
      "React",
      "Node.js",
      "TailwindCSS",
      "PostgreSQL",
      "Swiper",
      "WebSockets",
    ],
    liveLink: "https://bettingacademy.app/",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Fortequip: Gestão de Vendas",
    category: "Aplicação Web",
    images: [fortequip1, fortequip2, fortequip3],
    description:
      "Um sistema com separação de usuários por cargo que permite o acompanhamento de vendas, controle de estoque, e gerenciamento de clientes. Os usuários podem realizar vendas, ancaminha-las para aprovacao do gestor, emitir e imprimir o recibo para o cliente. Desenvolvido com React.js, Chart.js, Google Charts",
    tech: ["React.js", "Chart.js", "Google Charts"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 4,
    title: "Colégio univisa: Ponto de Vendas",
    category: "Aplicação Web",
    images: [pdvU1, pdvU2, pdvU3, pdvU4],
    description:
      "Um pequeno sistema de ponto de vendas, onde os usuários podem registrar as vendas dos produtos relacionados ao colégio, como livros, fardamentos, apostilas, etc. Ao final de cada venda é gerado um recibo em pdf para o cliente, e ao final do dia o usuário pode realizar o fechamento do caixa com o resumo e total das vendas. Os adminstradores conseguem gerenciar os produtos, meios de pagamento e usuários, além de ver o resumo do dia. Desenvolvido com React.js, TailwindCSS.",
    tech: ["React.js", "TailwindCSS"],
    liveLink: "#",
    repoLink: "#",
  },
];

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(null);

  useEffect(() => {
    // Simula o carregamento de dados de projetos
    // Em um cenário real, isso viria de uma API ou de um arquivo JSON/JS local
    setProjects(mockProjects);
  }, []);

  const uniqueCategories = [
    "Todos",
    ...new Set(mockProjects.map((p) => p.category)),
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "Todos" || project.category === filter
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const openModal = (image) => {
    // Lógica para abrir o modal com os detalhes do projeto
    setIsModalOpen(true);
    setImageSelected(image);
  };

  return (
    <motion.section
      id="projetos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6">
          Meus Projetos
        </motion.h2>

        <div className="flex justify-center mb-10 space-x-2 md:space-x-4">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm md:text-base rounded-lg font-medium transition-all duration-200 ease-in-out 
                ${
                  filter === category
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600"
                }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-out">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-56 md:h-64">
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onClick={() => openModal(image)}
                    />
                  </SwiperSlide>
                ))}
                {/* Adicionar mais SwiperSlides se houver múltiplas imagens por projeto */}
              </Swiper>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {project.category}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 h-20 overflow-y-auto">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                    Tecnologias:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 text-xs rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                      Ver Online
                    </a>
                  )}
                  {project.repoLink !== "#" && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
                      Ver Repositório
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
            Nenhum projeto encontrado para esta categoria.
          </p>
        )}
        <ModalImage
          image={imageSelected}
          open={isModalOpen}
          setOpen={setIsModalOpen}
        />
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
