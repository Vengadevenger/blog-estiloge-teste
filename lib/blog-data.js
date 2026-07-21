/**
 * Fonte de dados do blog Cola Bola.
 *
 * Hoje os posts vivem neste array (mock). Quando a integração com o Notion
 * entrar, troque apenas `getAllPostsRaw()` por uma chamada à API do Notion
 * que devolva objetos no mesmo formato — nenhuma página/componente precisa
 * mudar, pois todos consomem os helpers abaixo (getAllPosts, getPostBySlug, etc).
 *
 * Formato de cada post (equivalente a uma linha/página do banco no Notion):
 * {
 *   id: number,
 *   slug: string,            // usado na URL /blog/[slug]
 *   title: string,
 *   excerpt: string,         // resumo curto exibido no card e usado como meta description
 *   content: string,         // HTML do corpo do post (no Notion viria via rich text -> HTML)
 *   category: string,        // "Futebol" | "Seleção" | "Vôlei" | "Basquete" | ...
 *   date: string,            // ISO "YYYY-MM-DD"
 *   image: string,           // imagem do card na listagem (300x200, proporção 3:2)
 *   heroImage: string,       // opcional — imagem do banner no post individual (800x400). Se ausente, usa `image`.
 *   author: string,
 *   readTime: string,        // ex: "5 min"
 *   metaTitle: string,       // opcional, sobrepõe o <title> de SEO
 *   metaDescription: string, // opcional, sobrepõe a meta description
 * }
 */

const POSTS = [
  {
    id: 1,
    slug: "por-que-bola-murcha-rapido",
    title: "5 Motivos Pelos Quais Sua Bola de Futebol Murcha Rápido",
    excerpt:
      "Descubra os 5 motivos principais que fazem uma bola de futebol perder pressão rápido demais e como evitar esse problema que rouba o seu jogo.",
    category: "Futebol",
    date: "2026-07-06",
    image: "/images/blog/criancas-bola.avif",
    heroImage: "/images/blog/bola-murcha.jpg",
    author: "Cola Bola",
    readTime: "5 min",
    metaTitle: "5 Motivos Pelos Quais Sua Bola de Futebol Murcha Rápido | Cola Bola",
    metaDescription:
      "Sua bola de futebol fura ou murcha toda semana? Veja os 5 motivos mais comuns e como consertar em casa em menos de 2 minutos com Cola Bola.",
    content: `
      <p>Se você já perdeu a conta de quantas bolas comprou este ano só porque furaram ou murcharam rápido demais, esse post é para você. A maioria das pessoas acha que bola furada é sinônimo de bola perdida — mas na maior parte dos casos, dá para recuperar em casa, sem borracharia e sem gastar de novo.</p>

      <h2>1. Micro furos causados pelo próprio piso</h2>
      <p>Jogar em asfalto, cimento ou piso rústico desgasta a superfície da bola aos poucos. Cada chute cria um micro atrito que, com o tempo, abre um furo pequeno demais para ser visto a olho nu — mas grande o suficiente para a bola murchar em um ou dois dias.</p>

      <h2>2. Válvula ressecada ou mal vedada</h2>
      <p>A válvula é o ponto mais frágil da bola. Com o uso, o material resseca e perde a vedação, deixando o ar escapar lentamente. É por isso que muita gente enche a bola à noite e de manhã ela já está murcha, sem nenhum furo visível no corpo.</p>

      <h2>3. Calor e variação de temperatura</h2>
      <p>Deixar a bola no porta-malas do carro ou exposta ao sol forte dilata o ar interno e força pontos frágeis da costura e do revestimento. Esse estresse térmico repetido é uma das causas mais ignoradas de bola murchando sem motivo aparente.</p>

      <h2>4. Costuras e emendas com desgaste</h2>
      <p>Bolas com costura (e não termocoladas) têm pontos de emenda que se abrem com o tempo e o uso intenso. É um desgaste natural, mas que muita gente confunde com "bola de má qualidade" quando na verdade é só falta de manutenção.</p>

      <h2>5. Conserto malfeito com produto errado</h2>
      <p>Super bonder e cola de sapateiro secam rígidos. A bola dobra, estica e comprime a cada toque — e uma cola rígida racha nesse movimento, abrindo o furo de novo em poucos dias. O problema não é tentar consertar, é tentar consertar com o produto errado.</p>

      <h2>Como evitar comprar bola nova toda vez</h2>
      <p>Antes de jogar a bola fora, vale testar um conserto de verdade. O Cola Bola foi desenvolvido especificamente para vedar furos em bolas esportivas: a fórmula fica flexível depois de curada, acompanha a deformação da bola durante o jogo e segura a pressão do ar — diferente de colas genéricas.</p>
      <p>O processo leva menos de 2 minutos: localizar o furo, limpar a área, aplicar o produto e esperar a cura. Sem sair de casa, sem depender de borracharia (que na maioria das vezes nem aceita consertar bola).</p>
    `,
  },
  {
    id: 2,
    slug: "selecao-brasil-amistosos-setembro-2026",
    title: "Depois da Eliminação: O Que Esperar da Seleção Brasileira em Setembro",
    excerpt:
      "Com a Data Fifa de setembro se aproximando, veja o que costuma mudar na Seleção Brasileira depois de uma Copa do Mundo abaixo do esperado.",
    category: "Seleção",
    date: "2026-07-06",
    image: "/images/blog/neymar-chora.jpg",
    heroImage: "/images/blog/Selecao-fim-de-jogo.webp",
    author: "Cola Bola",
    readTime: "4 min",
    metaTitle: "O Que Esperar da Seleção Brasileira em Setembro | Cola Bola",
    metaDescription:
      "Depois de uma Copa do Mundo abaixo do esperado, veja o que costuma mudar na Seleção Brasileira nos amistosos de setembro e por que o torcedor segue na expectativa.",
    content: `
      <p><em>Nota: este post é um exemplo de estrutura de conteúdo para a categoria "Seleção". Atualize os parágrafos abaixo com o resultado real da Copa e a convocação oficial assim que forem divulgados.</em></p>

      <p>Toda vez que a Seleção Brasileira fecha um ciclo de Copa do Mundo abaixo da expectativa, o mesmo roteiro se repete: debate sobre o técnico, pressão por renovação do elenco e a torcida dividida entre acreditar no próximo ciclo ou já cobrar mudanças imediatas.</p>

      <h2>A Data Fifa de setembro como primeiro termômetro</h2>
      <p>Os amistosos da Data Fifa de setembro costumam ser o primeiro momento em que a comissão técnica testa nomes fora da lista "fixa", aproveitando a ausência de pressão de resultado imediato para observar jogadores que vinham em boa fase nos clubes.</p>

      <h2>Renovação de elenco: o que costuma mudar</h2>
      <p>Historicamente, depois de eliminações precoces, é comum ver: entrada de jogadores mais jovens, reavaliação de quem estava marcado como titular absoluto e mudança de esquema tático para se adequar às características do elenco disponível.</p>

      <h2>O papel da torcida nesse momento</h2>
      <p>Independente do resultado da Copa, setembro é o mês em que o torcedor volta a acompanhar de perto os jogos da Seleção — muitas vezes reunindo a galera para assistir junto, seja em casa, no bar ou organizando a própria pelada no mesmo fim de semana.</p>

      <h2>E por falar em pelada organizada para assistir ao jogo...</h2>
      <p>Se a resenha do jogo da Seleção também incluir uma bola rolando entre os amigos antes ou depois da partida, vale checar se a bola do grupo está furada ou murchando rápido demais. Não precisa comprar outra: dá para consertar em casa em menos de 2 minutos com o Cola Bola e garantir que ninguém fica de fora da pelada por causa de bola vazia.</p>
    `,
  },
  {
    id: 3,
    slug: "como-consertar-bola-furada",
    title: "Como consertar bola furada em casa, sem remendo e sem desmontar nada",
    excerpt: "O furo que aposentou sua bola provavelmente tem menos de um milímetro. Aprenda a encontrar o vazamento e a resolver por dentro, em casa, sem remendo.",
    category: "Conserto de bola",
    date: "2026-07-14",
    author: "Cola Bola",
    readTime: "4 min",
    metaTitle: "Como Consertar Bola Furada em Casa | Cola Bola",
    metaDescription: "Aprenda a achar o furo, entenda por que remendo e super cola falham e veja o passo a passo pra consertar bola furada em casa, por dentro, em 2 minutos.",
    content: `
<p>Toda pelada tem uma bola aposentada no canto. Ela custou mais de R$ 100, tem pouco tempo de uso e murcha entre um fim de semana e outro. Ninguém joga com ela e ninguém tem coragem de jogar fora.</p>

<p>O que quase ninguém sabe é que a maioria dessas bolas morre por um furo de menos de um milímetro. Um espinho na grama, um pedaço de vidro na quadra, uma agulha de calibrar usada a seco. O estrago é minúsculo, mas o suficiente pra bola não segurar pressão até o próximo jogo.</p>

<p>A boa notícia: furo pequeno tem conserto em casa. Sem costura, sem desmontar a bola e sem levar em borracharia. O que você precisa é saber onde está o vazamento e aplicar o conserto no lugar certo, que é por dentro.</p>

<h2>Primeiro passo: encontrar o furo</h2>

<p>Antes de qualquer conserto, você precisa saber por onde o ar sai. Existem dois testes simples:</p>

<ul>
<li><strong>Teste do balde:</strong> encha a bola com o máximo de pressão que conseguir e mergulhe uma parte de cada vez num balde ou tanque com água. Onde saírem bolhas, está o furo. Marque o ponto com uma caneta.</li>
<li><strong>Teste do detergente:</strong> misture água com detergente e passe a espuma na superfície da bola, com atenção especial ao bico. Bolha crescendo é ar escapando.</li>
</ul>

<p>Se as bolhas saírem do bico, o problema é na válvula e o conserto é outro, mais simples ainda. Se saírem do corpo da bola, siga o passo a passo abaixo.</p>

<h2>Por que remendo e super cola não resolvem</h2>

<p>O instinto de todo mundo é tentar tampar o furo por fora. Super cola, cola de sapateiro, remendo de câmara de bicicleta. O problema é que nenhum desses materiais foi feito pra superfície de bola.</p>

<p>Uma bola de futebol sofre impactos que deformam a superfície inteira a cada chute. A super cola seca dura e não acompanha essa deformação, então racha no primeiro jogo. A cola de sapateiro é flexível, mas cola por fora, exatamente onde a bola bate no chão, na trave e no pé. Todo conserto feito por fora fica na zona de impacto. É por isso que ele descola.</p>

<p>O conserto que dura funciona ao contrário: age por dentro, na câmara de borracha, onde não existe atrito nem impacto direto. A pressão interna da bola, que antes empurrava o ar pra fora do furo, passa a trabalhar a favor, pressionando a vedação contra a parede da câmara.</p>

<h2>Passo a passo: o conserto por dentro</h2>

<p>Pra esse conserto você usa uma cola própria pra bolas, aplicada pela válvula com uma seringa. O processo leva cerca de 2 minutos:</p>

<ul>
<li><strong>1.</strong> Puxe a cola com a seringa direto do frasco. Ela já vem pronta pra usar, sem diluir nem misturar nada.</li>
<li><strong>2.</strong> Injete a cola dentro da bola vazia, pelo bico.</li>
<li><strong>3.</strong> Calibre a bola com o máximo de pressão possível.</li>
<li><strong>4.</strong> Gire a bola devagar, deixando o furo virado pra baixo, pra cola escorrer até o vazamento e vedar por dentro.</li>
<li><strong>5.</strong> Deixe a bola descansar com o furo virado pra baixo. Em 30 minutos ela está pronta. Pra um conserto mais forte, espere 3 horas nessa posição.</li>
</ul>

<p>Em bolas de society e futsal, que têm o revestimento mais grosso, você também pode aplicar a cola direto pelo furo, com o vazamento virado pra baixo na hora de calibrar.</p>

<h2>Funciona em qualquer bola?</h2>

<p>O conserto por dentro funciona em bolas com câmara de borracha e revestimento de PVC, couro sintético ou material híbrido. Na prática, isso cobre bola de campo, society, futsal, vôlei, basquete e futevôlei, que são as bolas de praticamente toda quadra e pelada do Brasil.</p>

<p>O que ele não resolve é rasgo aberto ou corte grande no revestimento. Nesses casos a câmara até pode vedar, mas a estrutura da bola já foi comprometida. Furo de espinho, prego fino, vidro e agulha, que são a imensa maioria dos casos, entram na conta do conserto.</p>

<h2>Quanto custa recuperar uma bola</h2>

<p>É aqui que a conta fica interessante. O kit do Cola Bola custa R$ 36,90 e recupera uma bola que custou R$ 100, R$ 150, às vezes mais. A cola foi desenvolvida no Brasil especificamente pra material esportivo, com viscosidade calibrada pra câmara de borracha, e vem com seringa e dosagem prontas.</p>

<p>O conserto leva 2 minutos de trabalho seu e a bola volta pro jogo no mesmo dia.</p>

<p>Sua bola aposentada no canto da área de serviço provavelmente está a um furo de um milímetro de voltar pra pelada. Veja como funciona em <strong>colabola.com.br</strong>.</p>
    `,
  },
  {
    id: 4,
    slug: "vazamento-no-bico-da-bola",
    title: "Vazamento no bico da bola: como resolver sem trocar a válvula",
    excerpt: "Se a bola murcha e o corpo está intacto, o suspeito número um é o bico. Aprenda a confirmar o vazamento na válvula e a resolver sem desmontar nada.",
    category: "Conserto de bola",
    date: "2026-07-13",
    author: "Cola Bola",
    readTime: "3 min",
    metaTitle: "Vazamento no Bico da Bola: Como Resolver | Cola Bola",
    metaDescription: "Bola vazando pelo bico tem solução sem trocar a válvula. Veja como confirmar o vazamento com detergente e vedar a válvula em 2 minutos, em casa.",
    content: `
<p>Sua bola não tem um furo sequer no corpo, você já procurou, e mesmo assim ela amanhece murcha. Calibra no sábado, no domingo já perdeu pressão. O corpo está perfeito, o revestimento está inteiro, e a bola continua esvaziando.</p>

<p>Quando isso acontece, o suspeito número um é o bico. A válvula da bola é uma peça de borracha que abre pra agulha entrar e fecha sozinha quando ela sai. Com o tempo e o uso, essa borracha resseca, resseca mais rápido ainda quando a agulha entra seca, e para de vedar direito. O resultado é um vazamento lento, invisível e constante.</p>

<p>A parte boa: vazamento de bico é o conserto mais simples que existe em bola. Dá pra resolver em casa, sem trocar a válvula e sem desmontar nada.</p>

<h2>Como confirmar que o vazamento é no bico</h2>

<p>O teste leva um minuto. Calibre a bola com bastante pressão, misture água com detergente e pingue a espuma na boca do bico. Se uma bolha começar a crescer ali, está confirmado: o ar está saindo pela válvula.</p>

<p>Se a bolha não aparecer, vale repetir o teste no corpo da bola, mergulhando ela num balde de água, porque aí o problema é um microfuro e o conserto é outro.</p>

<h2>Por que o bico começa a vazar</h2>

<p>Três causas cobrem quase todos os casos:</p>

<ul>
<li><strong>Agulha usada a seco.</strong> A instrução que quase ninguém segue: a agulha deve entrar molhada ou lubrificada. Seca, ela arranha e rasga a borracha interna da válvula um pouquinho a cada calibrada.</li>
<li><strong>Borracha ressecada pelo tempo.</strong> Bola guardada no sol, no porta-malas ou perto de calor perde a elasticidade da válvula antes do resto.</li>
<li><strong>Sujeira dentro do bico.</strong> Areia e poeira entram com a agulha e impedem a válvula de fechar completamente. Comum em bola de futevôlei e de quadra de areia.</li>
</ul>

<h2>Trocar a válvula vale a pena?</h2>

<p>Existe quem troque a válvula inteira. O procedimento exige arrancar a válvula antiga, encaixar uma nova por dentro do revestimento e torcer pra vedação da peça nova ficar perfeita. Em bola colada, isso significa abrir caminho no revestimento. É trabalhoso, exige peça de reposição certa pro modelo e o risco de a bola sair pior do que entrou é real.</p>

<p>Pra vazamento lento de válvula ressecada, é matar mosca com marreta. Existe um caminho que não desmonta nada.</p>

<h2>Como vedar o bico sem trocar nada</h2>

<p>O princípio é simples: em vez de trocar a peça que não veda, você veda a peça por dentro, com uma cola própria pra bola. O detalhe que faz o conserto funcionar é a ordem dos passos:</p>

<ul>
<li><strong>1.</strong> Encha a bola com bastante pressão antes de começar. Esse passo é essencial: a pressão interna é o que empurra a vedação pro lugar certo.</li>
<li><strong>2.</strong> Aplique 1 a 2 ml da cola na entrada do bico, sem enfiar a agulha até o fundo. O objetivo é entupir o canal da válvula com a bola cheia e funcionando.</li>
<li><strong>3.</strong> Deixe a bola descansar com o bico virado pra baixo até a vedação curar.</li>
</ul>

<p>A válvula continua funcionando pra calibragens futuras, porque a agulha abre caminho na vedação nova do mesmo jeito que abria na borracha original.</p>

<h2>O que usar pra vedar</h2>

<p>Aqui vale o mesmo aviso do conserto de furo: super cola endurece, racha e ainda pode entupir a válvula de vez, inutilizando o bico. O material precisa ser flexível e feito pra borracha de bola.</p>

<p>O Cola Bola foi desenvolvido no Brasil pra isso: o kit custa R$ 36,90, veda vazamento de bico e furo de corpo em bolas de campo, society, futsal, vôlei, basquete e futevôlei, e o conserto leva cerca de 2 minutos. Uma bola de R$ 100 ou mais volta pro jogo por menos de um terço do preço de uma bola nova de entrada.</p>

<p>Antes de aposentar a bola que murcha sozinha, faça o teste do detergente no bico. Se a bolha crescer, o conserto está a 2 minutos de distância. Veja como funciona em <strong>colabola.com.br</strong>.</p>
    `,
  },
  {
    id: 5,
    slug: "super-bonder-bola-furada",
    title: "Super Bonder na bola furada: por que descola no primeiro chute",
    excerpt: "Super cola, cola de sapateiro e remendo de câmara são as três tentativas clássicas de salvar uma bola. Entenda por que as três falham no mesmo lugar.",
    category: "Conserto de bola",
    date: "2026-07-12",
    author: "Cola Bola",
    readTime: "3 min",
    metaTitle: "Super Bonder em Bola Furada Funciona? | Cola Bola",
    metaDescription: "Super Bonder e cola de sapateiro descolam da bola no primeiro jogo. Entenda por que o conserto por fora falha e o que segura pressão de verdade.",
    content: `
<p>Todo dono de bola furada passa pelo mesmo ritual. Primeiro tenta a super cola que tem na gaveta. A bola segura ar por um dia, às vezes nem isso, e volta a murchar. Depois vem a cola de sapateiro, que promete mais porque gruda solado de tênis. Dura um pouco mais e solta do mesmo jeito. Aí a bola vai pro canto e a conclusão vira sentença: bola furada não tem conserto.</p>

<p>A conclusão está errada, mas o raciocínio faz sentido. Se as colas mais fortes da casa não seguraram, o que seguraria?</p>

<p>O detalhe que muda tudo: essas colas falharam pelo lugar onde o conserto foi feito, não pela força que elas têm.</p>

<h2>O que acontece quando você passa Super Bonder na bola</h2>

<p>A super cola é feita de cianoacrilato, um adesivo que seca em segundos formando uma película rígida. Em superfície que não se mexe, funciona. Numa bola, é a receita da falha: cada chute deforma a superfície inteira e a película dura não acompanha o movimento. Ela racha, descasca e o furo reabre, às vezes maior do que era, porque a cola rígida repuxa o material em volta.</p>

<p>Super Bonder, cola de sapateiro e adesivo genérico têm o mesmo destino na bola: grudam na hora e soltam no primeiro jogo, porque nenhum deles foi feito pra material esportivo que flexiona a cada impacto.</p>

<h2>Cola de sapateiro segura mais, e falha do mesmo jeito</h2>

<p>A cola de contato usada por sapateiro é flexível, e por isso dura mais que a super cola. O método clássico é recortar um pedaço de câmara de bicicleta e colar sobre o furo, como remendo.</p>

<p>O remendo até veda. O problema é onde ele mora: do lado de fora da bola, exatamente na superfície que bate no chão, raspa na quadra, acerta a trave e recebe o chute. Todo conserto externo vive na zona de impacto. É atrito e pancada o jogo inteiro, até a borda do remendo levantar e o ar achar caminho de novo.</p>

<p>Fora o efeito colateral: um remendo de borracha muda o peso e o quique naquele ponto da bola. Quem já jogou com bola remendada conhece o quique torto.</p>

<h2>O conserto que dura mora do lado de dentro</h2>

<p>Agora inverta o cenário. Em vez de tampar o furo por fora, na zona de impacto, a vedação acontece por dentro, na câmara de borracha, onde não existe atrito com o chão nem pancada direta.</p>

<p>Por dentro, a física trabalha a favor. A pressão interna da bola, aquela mesma que empurrava o ar pra fora pelo furo, agora pressiona a vedação contra a parede da câmara, firmando o conserto a cada calibrada. Por fora, a mesma pressão trabalhava contra, empurrando o remendo pra longe.</p>

<p>É por isso que a comparação entre colas domésticas nunca teve vencedor. Super cola contra cola de sapateiro é discussão sobre qual conserto externo falha mais devagar.</p>

<h2>Como aplicar o conserto por dentro</h2>

<p>O conserto interno usa uma cola líquida própria pra bolas, aplicada pela válvula:</p>

<ul>
<li><strong>1.</strong> Puxe a cola com a seringa do kit. Ela já vem pronta pra usar, sem diluir.</li>
<li><strong>2.</strong> Injete a cola na bola vazia, pelo bico.</li>
<li><strong>3.</strong> Calibre com pressão máxima e gire a bola devagar, com o furo virado pra baixo, pra cola escorrer até o vazamento.</li>
<li><strong>4.</strong> Deixe descansar com o furo pra baixo por 30 minutos. Pra reforçar, 3 horas.</li>
</ul>

<p>Nada de lixar, recortar remendo ou esperar secagem de um dia. E o quique continua o mesmo, porque a vedação é uma película fina distribuída por dentro da câmara, não um calombo de borracha colado por fora.</p>

<h2>A conta entre a gaveta e o conserto certo</h2>

<p>O Cola Bola foi desenvolvido no Brasil pra esse conserto interno, com viscosidade calibrada pra câmara de borracha e revestimento de PVC e couro sintético. O kit custa R$ 36,90 e recupera bola de campo, society, futsal, vôlei, basquete e futevôlei em cerca de 2 minutos.</p>

<p>A super cola da gaveta é de graça, e custa uma bola de R$ 100 quando convence você de que furo não tem conserto. Antes de aposentar a sua, veja o conserto por dentro em <strong>colabola.com.br</strong>.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// Helpers — todas as páginas/componentes devem consumir estas funções,
// nunca o array POSTS diretamente. Isso mantém a troca para Notion isolada aqui.
// ---------------------------------------------------------------------------

/** Retorna todos os posts, mais recentes primeiro. */
export function getAllPosts() {
  return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/** Retorna a lista de categorias únicas presentes nos posts, com contagem. */
export function getAllCategories() {
  const posts = getAllPosts();
  const counts = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

/** Busca um post pelo slug. Retorna undefined se não existir. */
export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

/** Filtra posts por categoria (case-insensitive). Se category for null/"todas", retorna todos. */
export function getPostsByCategory(category) {
  const posts = getAllPosts();
  if (!category || category.toLowerCase() === "todas") return posts;
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export const POSTS_PER_PAGE = 6;

/**
 * Retorna a página solicitada de posts (já filtrados por categoria/busca),
 * junto com metadados de paginação.
 */
export function getPaginatedPosts({ page = 1, category = null, query = null, perPage = POSTS_PER_PAGE } = {}) {
  let posts = getPostsByCategory(category);

  if (query) {
    const q = query.trim().toLowerCase();
    posts = posts.filter(
      (post) => post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)
    );
  }

  const totalPosts = posts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);

  const start = (currentPage - 1) * perPage;
  const paginatedPosts = posts.slice(start, start + perPage);

  return {
    posts: paginatedPosts,
    currentPage,
    totalPages,
    totalPosts,
  };
}

/** Retorna até `count` posts relacionados (mesma categoria, excluindo o próprio post). */
export function getRelatedPosts(post, count = 3) {
  if (!post) return [];
  const sameCategory = getAllPosts().filter(
    (p) => p.category === post.category && p.slug !== post.slug
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);

  const fallback = getAllPosts().filter(
    (p) => p.slug !== post.slug && !sameCategory.includes(p)
  );
  return [...sameCategory, ...fallback].slice(0, count);
}

/** Retorna o post anterior e o próximo (ordem cronológica) em relação ao slug informado. */
export function getAdjacentPosts(slug) {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}

/** Formata "2026-07-06" como "6 de julho de 2026". */
export function formatPostDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}

/** Monta a URL de uma página de listagem preservando categoria/busca ativas. */
export function buildBlogPageHref(page, params) {
  const query = new URLSearchParams(params);
  query.delete("page");
  const queryString = query.toString();
  const base = page <= 1 ? "/blog" : `/blog/page/${page}`;
  return queryString ? `${base}?${queryString}` : base;
}

// ---------------------------------------------------------------------------
// Ponto de extensão futuro: quando a integração com o Notion for implementada,
// crie uma função como a abaixo e troque a implementação de getAllPosts() por
// ela (mantendo a mesma assinatura/retorno para não quebrar o restante do blog).
//
// export async function getAllPostsFromNotion() {
//   const response = await notion.databases.query({ database_id: process.env.NOTION_BLOG_DB_ID });
//   return response.results.map(mapNotionPageToPost);
// }
// ---------------------------------------------------------------------------
