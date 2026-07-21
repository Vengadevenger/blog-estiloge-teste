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
  {
    id: 6,
    slug: "bola-murchando-sozinha",
    title: "Bola murchando sozinha: como achar o vazamento e resolver de vez",
    excerpt: "A bola do seu filho amanhece murcha e ninguém acha o furo. São três suspeitos possíveis. Dois testes caseiros identificam o culpado em cinco minutos.",
    category: "Conserto de bola",
    date: "2026-07-11",
    author: "Cola Bola",
    readTime: "3 min",
    metaTitle: "Bola Murchando Sozinha: O Que Fazer | Cola Bola",
    metaDescription: "Bola perdendo ar sem furo aparente tem três causas possíveis. Veja os dois testes caseiros que acham o vazamento e como resolver cada caso.",
    content: `
<p>A cena se repete em casa toda semana. Seu filho pega a bola pra ir pro treino e ela está murcha de novo. Você calibrou na quarta, no sábado ela já não quica. Você já rodou a bola inteira procurando furo e não achou nada.</p>

<p>Bola que murcha sozinha tem diagnóstico com nome: vazamento lento. O ar está saindo por algum lugar, devagar demais pra você ouvir e pequeno demais pra você ver. E os lugares possíveis são só três.</p>

<p>Com dois testes de cozinha, balde e detergente, você descobre qual dos três é o culpado em cinco minutos. A solução muda conforme a resposta, então vale fazer o diagnóstico antes de gastar qualquer real.</p>

<h2>Os três suspeitos do vazamento lento</h2>

<ul>
<li><strong>A válvula (o bico).</strong> A borracha interna do bico resseca com o tempo e com calibradas de agulha seca, e para de fechar completamente. É a causa mais comum de bola que murcha sem furo visível.</li>
<li><strong>Um microfuro no corpo.</strong> Espinho, farpa de alambrado, caco de vidro na quadra. Um furo de menos de um milímetro não aparece a olho nu, mas esvazia a bola em um ou dois dias.</li>
<li><strong>Material ressecado.</strong> Bola antiga, ou guardada no sol e no porta-malas, pode rachar de leve no revestimento e na câmara. Nesse caso o vazamento costuma ser por vários pontos.</li>
</ul>

<h2>Teste 1: detergente no bico</h2>

<p>Comece pelo suspeito mais provável. Calibre a bola com bastante pressão, misture água e detergente e pingue a espuma na boca da válvula. Se uma bolha crescer ali, achou: o vazamento é no bico.</p>

<p>Esse conserto é o mais simples. Com a bola bem cheia, aplica-se 1 a 2 ml de uma cola própria pra bola na entrada do bico, sem enfiar a agulha até o fundo, e a válvula veda por dentro. Não precisa trocar a peça.</p>

<h2>Teste 2: o balde</h2>

<p>Se o bico passou no teste, o suspeito vira o corpo da bola. Encha um balde ou tanque, calibre a bola no máximo e mergulhe uma parte de cada vez, girando devagar. Fileira de bolhas subindo é o endereço do microfuro. Marque com caneta.</p>

<p>Achou um ponto só, o conserto vale a pena e resolve. A cola própria é injetada pela válvula, espalha por dentro da câmara e veda o furo pelo lado de dentro, onde o conserto não sofre impacto. O processo leva cerca de 2 minutos e a bola descansa meia hora antes de voltar ao jogo.</p>

<h2>E se a bola estiver vazando por todo lado</h2>

<p>Se o teste do balde mostrar bolhas em vários pontos diferentes, ou o revestimento estiver visivelmente rachado e descascando, a bola chegou no fim da vida útil do material. Vedação interna ajuda em furos, não em borracha que perdeu a elasticidade por inteiro. Nesse caso, a troca é a decisão certa, e a lição que fica é de armazenamento: bola dura mais longe do sol, do calor do carro e calibrada na pressão indicada, sem excesso.</p>

<p>Perder um pouco de pressão ao longo de semanas é normal em qualquer bola. O problema é perder de um dia pro outro.</p>

<h2>O conserto que evita a terceira bola do ano</h2>

<p>Pra pai de atleta, a conta do vazamento lento costuma ser assim: a bola de R$ 100 do treino murcha, ninguém acha o furo, compra-se outra, e três meses depois a história se repete. Duas bolas viram três, e o gasto do ano passa de R$ 300 sem ninguém decidir gastar isso.</p>

<p>O Cola Bola resolve os dois vazamentos consertáveis, bico e microfuro, com o mesmo kit de R$ 36,90. É uma cola brasileira desenvolvida pra material esportivo, funciona em bola de campo, society, futsal, vôlei, basquete e futevôlei.</p>

<p>Antes da próxima bola nova, gaste cinco minutos com o balde e o detergente. Na maioria das vezes, a bola murcha está a 2 minutos de conserto. O passo a passo completo está em <strong>colabola.com.br</strong>.</p>
    `,
  },
  {
    id: 7,
    slug: "vale-a-pena-consertar-bola",
    title: "Vale a pena consertar bola furada ou é melhor comprar outra?",
    excerpt: "A resposta depende de uma conta que quase ninguém faz e de um diagnóstico de dois minutos. Veja quando o conserto compensa e quando a troca é a decisão certa.",
    category: "Conserto de bola",
    date: "2026-07-10",
    author: "Cola Bola",
    readTime: "3 min",
    metaTitle: "Vale a Pena Consertar Bola Furada? | Cola Bola",
    metaDescription: "Consertar bola furada custa R$ 36,90 e leva 2 minutos. Comprar outra custa a partir de R$ 100. Veja quando cada decisão compensa, com a conta na mesa.",
    content: `
<p>Uma bola decente de futebol custa hoje a partir de R$ 100, e os modelos de gente grande passam fácil de R$ 200. Quando ela fura, a maioria das pessoas nem considera conserto. Vai direto pra loja, porque aprendeu que bola furada é bola perdida.</p>

<p>Essa crença nasceu de tentativas reais: quem tentou super cola viu descolar, quem levou na borracharia ouviu que não aceitam bola, quem tentou remendo jogou com quique torto. A conclusão coletiva virou regra, e a regra custa caro.</p>

<p>A decisão certa entre consertar e trocar é uma conta com três variáveis: quanto vale a bola, o que exatamente furou e quanto custa o conserto que funciona.</p>

<h2>A conta que ninguém faz</h2>

<p>Comece pelo lado do conserto. Um kit de cola própria pra bola custa R$ 36,90 e conserta furo de espinho, vidro, prego fino e vazamento de bico, que são a grande maioria dos casos. O trabalho é seu, leva cerca de 2 minutos, e a bola volta ao jogo no mesmo dia.</p>

<p>Agora o lado da troca. A bola nova equivalente à que furou custa R$ 100 ou mais. E a bola nova fura igual, porque a quadra continua com o mesmo alambrado, a grama com o mesmo espinho e o asfalto com o mesmo caco de vidro.</p>

<p>Em números diretos: o conserto custa cerca de um quarto de uma bola de entrada. Se a sua bola custou R$ 150, a conta fica melhor ainda.</p>

<h2>Quando o conserto vale a pena</h2>

<ul>
<li><strong>Furo pequeno no corpo.</strong> Espinho, agulha, farpa, vidro. É o caso clássico e o que o conserto interno resolve melhor.</li>
<li><strong>Vazamento no bico.</strong> Válvula ressecada que não fecha direito. Conserto ainda mais simples, sem trocar a peça.</li>
<li><strong>Bola de R$ 80 pra cima.</strong> Quanto melhor a bola, mais óbvia a conta. Recuperar uma bola de R$ 200 por R$ 36,90 dispensa argumento.</li>
<li><strong>Bola com valor de uso.</strong> A bola oficial do time, a bola que o time inteiro já conhece o quique, a bola que foi presente. Valor não é só preço de etiqueta.</li>
</ul>

<h2>Quando é melhor trocar</h2>

<p>Honestidade na conta funciona pros dois lados. Existem casos em que o conserto não compensa:</p>

<ul>
<li><strong>Rasgo ou corte aberto.</strong> Se o revestimento abriu, a estrutura da bola foi comprometida. Vedação interna resolve furo, não rasgo.</li>
<li><strong>Material ressecado por inteiro.</strong> Bola antiga que racha em vários pontos ao mesmo tempo já deu o que tinha que dar.</li>
<li><strong>Bola de R$ 20 de mercado.</strong> A conta aperta quando o conserto custa mais que a bola. Ainda pode valer pra quem conserta várias, mas aí a lógica é outra, de volume.</li>
</ul>

<h2>O custo invisível de ir levando</h2>

<p>Existe uma terceira opção que muita gente escolhe sem perceber: continuar jogando com a bola que murcha, calibrando antes de cada pelada. Esse caminho parece de graça e não é. Bola com pressão errada quica menos, pesa mais no pé e trabalha mal, e a válvula sofre com a calibrada constante. A pelada inteira joga pior por causa de uma bola que ninguém decidiu consertar nem trocar.</p>

<h2>O conserto que faz a conta fechar</h2>

<p>O Cola Bola é uma cola brasileira desenvolvida pra material esportivo, com o kit a R$ 36,90. A aplicação é pela válvula, com a seringa do kit, e veda o furo por dentro da câmara, onde o conserto não sofre o impacto do jogo. Funciona em bola de campo, society, futsal, vôlei, basquete e futevôlei.</p>

<p>Na próxima bola furada, faça a conta antes de ir pra loja: R$ 36,90 e 2 minutos de um lado, R$ 100 ou mais do outro. O passo a passo do conserto está em <strong>colabola.com.br</strong>.</p>
    `,
  },
  {
    id: 8,
    slug: "camara-de-ar-na-bola",
    title: "Colocar câmara de ar na bola: por que o conserto de borracharia não compensa",
    excerpt: "Enfiar uma câmara de bicicleta dentro da bola é o conserto improvisado mais famoso do Brasil. Entenda o que ele faz com o peso e o quique da bola.",
    category: "Conserto de bola",
    date: "2026-07-09",
    author: "Cola Bola",
    readTime: "3 min",
    metaTitle: "Câmara de Ar em Bola Furada Vale a Pena? | Cola Bola",
    metaDescription: "Colocar câmara de ar em bola furada muda peso, quique e equilíbrio. Veja por que o improviso não compensa e qual conserto preserva a bola original.",
    content: `
<p>O conserto improvisado mais famoso do futebol de várzea é enfiar uma câmara de ar dentro da bola furada. O improviso tem lógica: se a câmara original fura, coloca-se outra câmara por dentro, geralmente de bicicleta, e a bola volta a segurar ar.</p>

<p>Quem cresceu em quadra de bairro conhece o resultado. A bola volta a encher, e volta diferente. Mais pesada, com quique estranho e um lado que trabalha diferente do outro. Segura ar, mas já não é a mesma bola.</p>

<p>Antes de levar sua bola pra esse caminho, vale entender o que exatamente esse conserto faz com ela, e o que existe de melhor hoje.</p>

<h2>O que acontece quando a bola ganha uma câmara extra</h2>

<p>A bola de futebol é construída em camadas balanceadas: câmara, forro e revestimento, com peso distribuído pra quicar igual em qualquer ponto. Quando uma câmara de bicicleta entra nessa estrutura, três coisas mudam de uma vez:</p>

<ul>
<li><strong>O peso sobe.</strong> A câmara nova se soma a tudo que já existe dentro da bola. O peso extra aparece no pé, no toque longo e na cabeçada.</li>
<li><strong>O equilíbrio muda.</strong> A câmara improvisada não foi moldada pro formato da bola, então assenta de forma irregular. O centro de massa desloca e o quique fica imprevisível.</li>
<li><strong>A válvula vira gambiarra.</strong> O bico da câmara de bicicleta precisa de adaptação pra funcionar no lugar do bico original, e essa adaptação costuma ser o próximo ponto de vazamento.</li>
</ul>

<h2>A abertura que a bola não pede</h2>

<p>Tem ainda o detalhe do procedimento: pra câmara entrar, é preciso abrir a bola. Corta-se o revestimento, geralmente na costura ou perto da válvula, enfia-se a câmara e fecha-se de volta. A bola sai do conserto com uma cicatriz estrutural que ela não tinha, e cada abertura dessas é um convite pro revestimento começar a soltar ali.</p>

<p>Resumindo o pacote: pra vedar um furo de um milímetro, o improviso adiciona peso, desequilibra o quique, troca a válvula por uma adaptação e corta o revestimento. O furo era o menor dos problemas.</p>

<h2>Por que esse improviso ficou famoso</h2>

<p>A câmara de ar dominou porque durante décadas era isso ou nada. Cola comum descola da bola, borracharia de carro não aceita bola, e conserto de fábrica nunca existiu por aqui. O improviso da câmara era o único caminho que segurava ar por meses, e pra bola de pelada sem compromisso, quebrava o galho.</p>

<p>O ponto é que a tecnologia do conserto mudou e a fama do improviso ficou parada no tempo.</p>

<h2>O conserto que preserva a bola original</h2>

<p>Hoje existe vedação interna líquida própria pra bola: uma cola desenvolvida pra câmara esportiva, injetada pela válvula com seringa, sem abrir nada. A cola se espalha por dentro da câmara original e veda o furo pelo lado de dentro, onde a pressão da bola firma o conserto em vez de empurrá-lo pra fora.</p>

<p>A diferença de resultado está no que não muda: a câmara continua a original, o peso continua o de fábrica, o quique continua o que o time conhece e a válvula continua a mesma. A bola consertada volta pro jogo sendo a mesma bola.</p>

<h2>A conta entre o improviso e o conserto</h2>

<p>O Cola Bola faz essa vedação interna em cerca de 2 minutos. O kit custa R$ 36,90 e funciona em bola de campo, society, futsal, vôlei, basquete e futevôlei. Sem cortar revestimento, sem peso extra, sem quique torto.</p>

<p>A câmara de bicicleta teve seu tempo de herói da várzea. Pra bola de hoje, existe conserto que devolve a bola de ontem. Veja como funciona em <strong>colabola.com.br</strong>.</p>
    `,
  },
  {
    id: 9,
    slug: "cola-para-bola-funciona-em-qualquer-bola",
    title: "Cola pra bola funciona em qualquer bola? Campo, vôlei, basquete e futevôlei",
    excerpt: "Antes de comprar qualquer cola de conserto, a pergunta certa é sobre a sua bola: qual o material dela e onde está o furo. Este guia responde caso a caso.",
    category: "Conserto de bola",
    date: "2026-07-08",
    author: "Cola Bola",
    readTime: "3 min",
    metaTitle: "Cola para Bola Funciona em Qualquer Bola? | Cola Bola",
    metaDescription: "Cola de conserto funciona em bola de campo, society, futsal, vôlei, basquete e futevôlei. Veja em quais materiais funciona e os limites do conserto.",
    content: `
<p>Quem pesquisa cola pra consertar bola esbarra sempre na mesma dúvida antes de fechar a compra. A bola de campo do fim de semana, a de vôlei da esposa, a de basquete do filho e a de futevôlei da praia são bolas bem diferentes entre si. A cola que veda uma funciona nas outras?</p>

<p>A dúvida é legítima, e a resposta honesta não é um sim genérico. Depende de duas coisas: do material da bola e do tipo de furo. A parte boa é que os dois critérios são fáceis de verificar em casa, antes de gastar qualquer real.</p>

<p>Este guia responde caso a caso, incluindo os casos em que o conserto não funciona.</p>

<h2>O critério que importa: câmara e revestimento</h2>

<p>A vedação interna líquida funciona em bolas com câmara de borracha e revestimento de PVC, couro sintético ou material híbrido. A cola é injetada pela válvula, se espalha por dentro da câmara e veda o furo pelo lado de dentro.</p>

<p>Essa construção, câmara de borracha mais revestimento sintético, é o padrão da indústria de bolas infláveis hoje. Na prática, a lista de compatibilidade cobre:</p>

<ul>
<li><strong>Bola de campo:</strong> o caso mais comum, incluindo as bolas de pelada e as de time.</li>
<li><strong>Bola de society:</strong> revestimento mais grosso, e com uma vantagem: furos podem receber aplicação direto pelo próprio vazamento, além da válvula.</li>
<li><strong>Bola de futsal:</strong> mesma lógica do society, quique baixo não muda o conserto.</li>
<li><strong>Bola de vôlei:</strong> funciona, com atenção à pressão menor da calibragem no final.</li>
<li><strong>Bola de basquete:</strong> a câmara é de borracha e o conserto segue o padrão.</li>
<li><strong>Bola de futevôlei:</strong> mesma construção da bola de campo, com o cuidado extra de limpar a areia do bico antes de aplicar.</li>
</ul>

<h2>Onde o conserto funciona: furo e bico</h2>

<p>Dentro das bolas compatíveis, a vedação resolve dois problemas distintos:</p>

<ul>
<li><strong>Furo pequeno no corpo:</strong> espinho, vidro, prego fino, agulha. A cola é injetada na bola vazia, a bola é calibrada com pressão máxima e girada devagar com o furo pra baixo, pra cola escorrer até o vazamento, e descansa 30 minutos nessa posição.</li>
<li><strong>Vazamento no bico:</strong> a válvula ressecada é vedada por dentro com 1 a 2 ml, com a bola bem cheia. Sem trocar a peça.</li>
</ul>

<h2>Onde o conserto não funciona</h2>

<p>Um produto que promete tudo perde a confiança de quem lê. Então aqui vai a lista dos limites, tão importante quanto a de compatibilidade:</p>

<ul>
<li><strong>Rasgo ou corte aberto no revestimento.</strong> A vedação interna resolve furo de perfuração. Se o material abriu, a estrutura da bola foi comprometida e cola nenhuma devolve isso.</li>
<li><strong>Bola sem câmara inflável.</strong> Bola de couro maciço, bola de borracha maciça de criança e bolas que não calibram não têm câmara pra vedar.</li>
<li><strong>Bola ressecada rachando em vários pontos.</strong> Se o teste do balde mostra bolhas por todo lado, o material chegou ao fim, e o diagnóstico honesto é troca.</li>
</ul>

<h2>Uma cola, todas as bolas da casa</h2>

<p>Aí está o motivo de a resposta caso a caso terminar simples: como a construção das bolas infláveis é padronizada, o mesmo kit conserta a bola de campo do pai, a de vôlei da mãe, a de basquete do filho e a de futevôlei do domingo.</p>

<p>O Cola Bola foi desenvolvido no Brasil com viscosidade e composição calibradas pra PVC, borracha sintética e couro sintético. O kit custa R$ 36,90 e o conserto leva cerca de 2 minutos por bola. Pra quem tem muitas bolas em uso, existem os frascos de 500 ml por R$ 165 e de 1 litro por R$ 225.</p>

<p>Antes de comprar, olhe a sua bola com os dois critérios deste guia: câmara inflável e furo de perfuração. Batendo os dois, o conserto está a 2 minutos de distância, em <strong>colabola.com.br</strong>.</p>
    `,
  },
  {
    id: 10,
    slug: "como-consertar-bola-de-volei",
    title: "Como consertar bola de vôlei furada sem estragar o toque",
    excerpt: "Bola de vôlei furada tem um agravante: qualquer remendo externo aparece no toque e na manchete. Veja o conserto que preserva a superfície original.",
    category: "Conserto de bola",
    date: "2026-07-07",
    author: "Cola Bola",
    readTime: "3 min",
    metaTitle: "Como Consertar Bola de Vôlei Furada | Cola Bola",
    metaDescription: "Conserto de bola de vôlei furada por dentro, sem remendo na superfície. Passo a passo em casa, com atenção à calibragem certa do vôlei.",
    content: `
<p>No vôlei, a bola conversa com o corpo o tempo inteiro. Toque, manchete, saque, defesa de braço. Qualquer irregularidade na superfície aparece na hora, e é por isso que remendo em bola de vôlei tem fama pior que em bola de futebol: o calombo que no pé passa despercebido, no antebraço vira incômodo a cada recepção.</p>

<p>Quando a bola de vôlei fura, o dono dela costuma concluir mais rápido que o jogador de futebol que não tem conserto. E as bolas de vôlei boas, as que o grupo da quadra ou da areia se acostumou a jogar, custam caro o suficiente pra essa conclusão doer.</p>

<p>Existe conserto que não toca na superfície. Ele acontece inteiro por dentro da bola, e é isso que o torna adequado justamente pro vôlei.</p>

<h2>Primeiro, confirme onde está o furo</h2>

<p>Bola de vôlei murcha por dois caminhos, e cada um tem seu teste:</p>

<ul>
<li><strong>Bico:</strong> calibre a bola, passe espuma de detergente na boca da válvula e observe. Bolha crescendo é vazamento de válvula, comum em bola calibrada com agulha seca.</li>
<li><strong>Corpo:</strong> mergulhe a bola calibrada num balde, girando aos poucos. A fileira de bolhas marca o furo. Em bola de areia, atenção redobrada perto das costuras coladas, onde espinhos e objetos pontiagudos costumam pegar.</li>
</ul>

<h2>O conserto por dentro, passo a passo</h2>

<p>O conserto usa uma cola líquida própria pra bolas, injetada pela válvula. Nada encosta na superfície externa:</p>

<ul>
<li><strong>1.</strong> Puxe a cola com a seringa do kit. Ela já vem pronta pra usar, sem diluir.</li>
<li><strong>2.</strong> Com a bola vazia, injete a cola pelo bico.</li>
<li><strong>3.</strong> Calibre a bola e gire devagar, com o furo virado pra baixo, pra cola escorrer até o vazamento.</li>
<li><strong>4.</strong> Deixe descansar 30 minutos com o furo virado pra baixo. Pra um conserto reforçado, 3 horas.</li>
</ul>

<p>Se o vazamento for no bico, o caminho é ainda mais curto: com a bola bem cheia, aplique 1 a 2 ml da cola na entrada da válvula, sem enfiar a agulha até o fundo, e deixe curar com o bico pra baixo.</p>

<h2>O detalhe do vôlei: a calibragem final</h2>

<p>Aqui mora a diferença real entre consertar bola de vôlei e bola de futebol. Durante o conserto, a bola é calibrada com pressão alta pra espalhar a cola e firmar a vedação. Depois da cura, volte a bola pra pressão de jogo do vôlei, que é menor que a do futebol. Bola de vôlei dura demais muda o jogo inteiro: a recepção dói, o toque foge do controle e a bola sai queimando do braço.</p>

<p>A pressão indicada costuma vir impressa perto da válvula, e vale conferir a da sua. Calibrar certo, com agulha molhada, é também o que faz a válvula durar mais.</p>

<h2>Vale pro futevôlei também</h2>

<p>A bola de futevôlei tem a mesma construção de câmara de borracha e revestimento sintético, então o conserto é idêntico. O cuidado extra da areia é um só: limpe bem o bico antes de injetar qualquer coisa, porque grão de areia dentro da válvula é vazamento futuro garantido.</p>

<h2>A conta da bola de vôlei recuperada</h2>

<p>O Cola Bola é uma cola brasileira desenvolvida pra material esportivo, compatível com bola de vôlei, futevôlei, campo, society, futsal e basquete. O kit custa R$ 36,90 e o conserto leva cerca de 2 minutos.</p>

<p>Uma bola de vôlei de mais de R$ 200, com o toque que o grupo inteiro já conhece, volta pro jogo por R$ 36,90. Antes de aposentar a sua, veja o conserto em <strong>colabola.com.br</strong>.</p>
    `,
  },
  {
    id: 11,
    slug: "conserto-de-bola-escolinha",
    title: "Bolas de escolinha furando toda semana: como cortar o maior custo invisível do treino",
    excerpt: "Numa escolinha, bola é insumo que vai embora todo mês. Veja a conta real desse custo e o sistema simples que devolve bola furada ao treino no mesmo dia.",
    category: "Escolinhas e projetos",
    date: "2026-07-06",
    author: "Cola Bola",
    readTime: "3 min",
    metaTitle: "Conserto de Bola para Escolinha de Futebol | Cola Bola",
    metaDescription: "Bola furada é custo recorrente de escolinha e projeto social. Veja a conta anual desse buraco e como montar um sistema de conserto no mesmo dia.",
    content: `
<p>Quem administra escolinha de futebol conhece a planilha de cabeça: aluguel de quadra, seguro, colete, uniforme e a linha que nunca para de crescer, reposição de bola. Treino de base é o ambiente mais hostil que existe pra uma bola. Piso áspero, alambrado com farpa, cem chutes por hora e criança que acerta tudo que não devia.</p>

<p>O resultado é que bola, na escolinha, virou insumo. Fura uma por semana, o professor separa no canto, e todo mês sai pedido novo de reposição. Cada bola de treino decente custa R$ 100 ou mais, e a conta anual passa despercebida justamente porque sai picada, uma bola de cada vez.</p>

<p>Colocando no papel: uma escolinha que perde uma bola por semana gasta na casa de R$ 400 por mês só repondo bola. No ano, passa de R$ 4.800.</p>

<h2>Por que bola de treino fura tanto</h2>

<p>Entender o padrão dos furos ajuda a atacar o problema dos dois lados:</p>

<ul>
<li><strong>O piso.</strong> Quadra de cimento áspero e saibro com pedrisco lixam o revestimento e abrem caminho pra perfurações pequenas.</li>
<li><strong>O alambrado.</strong> Farpa de arame na altura da bola é o assassino silencioso número um. Vale a inspeção mensal com um pano: onde o pano prender, a bola fura.</li>
<li><strong>O entorno.</strong> Mato com espinho, caco de vidro e prego atrás do gol furam a bola que sai da quadra.</li>
<li><strong>A calibragem.</strong> Bola calibrada demais fica tensa e mais vulnerável a perfuração, além de sofrer mais nas costuras. A pressão indicada vem impressa perto da válvula.</li>
</ul>

<h2>O destino das bolas do canto</h2>

<p>Toda escolinha tem o saco ou o canto das bolas furadas. Elas ficam ali porque jogar fora dói, e consertar, até hoje, não era um caminho real: super cola descola no primeiro treino, remendo muda o quique e mandar consertar fora não existe como serviço.</p>

<p>É esse canto que esconde o dinheiro. Cada bola ali custou R$ 100 ou mais, e a imensa maioria tem só um furo de milímetro na câmara.</p>

<h2>O sistema de conserto no mesmo dia</h2>

<p>A vedação interna líquida muda a lógica do canto de bolas. O conserto é injetado pela válvula com seringa, leva cerca de 2 minutos por bola e não exige habilidade especial: qualquer professor ou monitor executa entre um treino e outro.</p>

<p>O fluxo que funciona em escolinha é simples:</p>

<ul>
<li><strong>1.</strong> Bola furou no treino, vai pro balde de teste no mesmo dia, com o furo marcado de caneta.</li>
<li><strong>2.</strong> Aplica-se a cola pela válvula, calibra, gira a bola devagar com o furo pra baixo e ela descansa nessa posição.</li>
<li><strong>3.</strong> Em 30 minutos a bola está vedada. No treino seguinte, ela está de volta ao carrinho.</li>
</ul>

<p>Com esse fluxo, a bola furada deixa de ser baixa de estoque e vira manutenção de rotina, como calibrar.</p>

<h2>A conta em escala</h2>

<p>Pra uso individual existe o kit de R$ 36,90. Escolinha, projeto social e professor com muitas turmas fazem conta melhor nos frascos: 500 ml por R$ 165 e 1 litro por R$ 225. Como cada conserto usa uma dose pequena de cola, o frasco atende a temporada inteira de furos da rotina.</p>

<p>Contra os R$ 400 mensais de reposição, o frasco de 500 ml se paga com duas bolas recuperadas. E as bolas recuperadas voltam com o peso e o quique originais, porque a vedação acontece por dentro da câmara, sem remendo externo.</p>

<h2>Bola no jogo é aluno treinando</h2>

<p>O Cola Bola é uma cola brasileira desenvolvida pra material esportivo. Funciona nas bolas de campo, society, futsal, vôlei e basquete que circulam pelos treinos da base.</p>

<p>Antes do próximo pedido de reposição, faça o inventário do canto das bolas furadas. É provável que tenha um mês de treino parado ali, esperando 2 minutos de conserto cada. Os frascos e o passo a passo estão em <strong>colabola.com.br</strong>.</p>
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
