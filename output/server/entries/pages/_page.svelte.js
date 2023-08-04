import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categoria } = $$props;
  let { descricao } = $$props;
  let { codigo } = $$props;
  let { imgSrc } = $$props;
  if ($$props.categoria === void 0 && $$bindings.categoria && categoria !== void 0)
    $$bindings.categoria(categoria);
  if ($$props.descricao === void 0 && $$bindings.descricao && descricao !== void 0)
    $$bindings.descricao(descricao);
  if ($$props.codigo === void 0 && $$bindings.codigo && codigo !== void 0)
    $$bindings.codigo(codigo);
  if ($$props.imgSrc === void 0 && $$bindings.imgSrc && imgSrc !== void 0)
    $$bindings.imgSrc(imgSrc);
  return `<button class="w-full sm:w-1/3 lg:w-1/4"><div class="card w-full min-h-full glass "><figure class="bg-blue-700 h-48"><img class="p-10 w-full h-full"${add_attribute("src", imgSrc, 0)}${add_attribute("alt", codigo, 0)}></figure> <div class="card-body items-center text-center"><h2 class="card-title">${escape(categoria)}</h2> <kbd class="kbd w-fit">${escape(codigo)}</kbd> <p>${escape(descricao)}</p></div></div> </button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let emojisData = [
    {
      categoria: "Melhoria Geral",
      descricao: "Para ajustes, pequenas mudanças, melhorias de desempenho, etc.",
      codigo: ":wrench:",
      imgSrc: "/src/assets/Icons/wrench.svg"
    },
    {
      categoria: "Correção de Bugs",
      descricao: "Para correção de bugs, erros, etc.",
      codigo: ":bug:",
      imgSrc: "/src/assets/Icons/bug.svg"
    },
    {
      categoria: "Remoção",
      descricao: "Quando você exclui arquivos, dependências, recursos desnecessários ou código obsoleto.",
      codigo: ":fire:",
      imgSrc: "/src/assets/Icons/fire.svg"
    },
    {
      categoria: "Trabalho em Andamento",
      descricao: "Para protótipos iniciais não funcionais e rascunhos.",
      codigo: ":construction:",
      imgSrc: "/src/assets/Icons/construction.svg"
    },
    {
      categoria: "Recursos",
      descricao: "Para adicionar arquivos de dados, imagens, ícones e outros itens similares.",
      codigo: ":bento:",
      imgSrc: "/src/assets/Icons/bento.svg"
    },
    {
      categoria: "Documentação",
      descricao: "Para documentos, licenças, arquivos README e todos os outros itens importantes.",
      codigo: ":pencil:",
      imgSrc: "/src/assets/Icons/pencil.svg"
    },
    {
      categoria: "Nova Funcionalidade",
      descricao: "Quando você adiciona algo realmente novo.",
      codigo: ":sparkles:",
      imgSrc: "/src/assets/Icons/sparkles.svg"
    },
    {
      categoria: "Lançamento",
      descricao: "Quando você implanta, cria uma tag ou lança seus projetos.",
      codigo: ":rocket:",
      imgSrc: "/src/assets/Icons/rocket.svg"
    },
    {
      categoria: "Rollback",
      descricao: "Quando algo dá errado. (Quando ocorre um problema ou uma falha e é necessário retornar ao estado anterior do sistema ou do projeto.)",
      codigo: ":rewind:",
      imgSrc: "/src/assets/Icons/rewind.svg"
    }
  ];
  return `<header class="p-5" data-svelte-h="svelte-1xx94v8"><div class="hero min-h-96 bg-[#011B49] text-slate-200 rounded-xl shadow-3xl"><div class="hero-content flex-col lg:flex-row"><img src="/src/assets/logo.png" class="w-28 lg:w-full lg:max-w-sm" alt="Previnity logo."> <div><h1 class="text-5xl font-bold">Gitemogi Previnity Style</h1> <p class="py-6">Aprimore o processo de commit com um guia eficiente, tornando suas contribuições claras e
					ágeis.</p> <a class="btn btn-primary" href="https://previnity.atlassian.net/wiki/spaces/~5fc1154cd670b8006ed55b02/pages/4325377/Previnity+Code+Patterns">Mais informações</a></div></div></div></header> <div class="px-5 lg:px-20 flex flex-wrap gap-4 justify-center">${each(emojisData, (data) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        imgSrc: data.imgSrc,
        categoria: data.categoria,
        descricao: data.descricao,
        codigo: data.codigo
      },
      {},
      {}
    )}`;
  })}</div> <footer class="p-5" data-svelte-h="svelte-1n17hmp"><div class="hero min-h-96 py-10 bg-[#011B49] text-slate-200 rounded-xl shadow-3xl"><div><h2 class="text-4xl font-bold">Exemplos:</h2> <div class="mockup-code"><pre><code> 
		:wrench: Texturas: Otimizar o processo de carregamento da importação de imagens
		:bug: Salas: Corrigir texturas deslocadas em salas aninhadas
		:briefcase: Tutoriais: Fornecer texturas adicionais para &quot;Criando um jogo de tiro no espaço&quot;
			</code></pre></div></div></div> </footer>`;
});
export {
  Page as default
};
