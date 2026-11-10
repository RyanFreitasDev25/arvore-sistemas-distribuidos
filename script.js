const NI="Não identificado nas fontes consultadas";
// col/row = posição na grade; parent = origem; tipo: "d" derivação, "i" influência; prec = precursor histórico (não é SO distribuído)
const S=[
{id:"unix",nome:"Unix",ano:"1969–1974",org:"Bell Labs",col:1,row:2,cor:"#90a4ae",prec:1,
 origem:"Precursor histórico, não distribuído. Sistema de tempo compartilhado que serve de base ou referência para LOCUS, Sprite, Plan 9 e Mach.",
 hist:"Descrito por Ritchie e Thompson (1974) como sistema de tempo compartilhado simples, com sistema de arquivos hierárquico.",
 mu:"Sim (tempo compartilhado).",mp:NI,k:"Monolítico (classificação usual).",fs:"Sistema de arquivos hierárquico único.",cp:"Não é um sistema distribuído: sem compartilhamento em rede no sistema descrito.",
 refs:[["Ritchie & Thompson, The UNIX Time-Sharing System, CACM, 1974 (DOI não conferido por busca)","https://doi.org/10.1145/361011.361061"]]},
{id:"locus",nome:"LOCUS",ano:"1980–1983",org:"UCLA (Popek, Walker et al.)",col:2,row:1,cor:"#4fc3f7",parent:"unix",tipo:"i",
 origem:"Influência/compatibilidade: as fontes descrevem o LOCUS como compatível com Unix; não afirmam derivação de código, então a ligação é tracejada.",
 hist:"Em 1983 rodava em 17 VAX-11/750 ligados por Ethernet, apresentando a rede como um único computador.",
 mu:"Sim (ambiente compatível com Unix).",mp:NI,k:NI,
 fs:"Sistema de arquivos distribuído com uma única árvore de nomes.",cp:"Árvore de nomes única e transparente à localização, com replicação de arquivos entre máquinas.",
 refs:[["Walker et al., The LOCUS Distributed Operating System, SOSP, 1983","https://doi.org/10.1145/800217.806615"]]},
{id:"sprite",nome:"Sprite",ano:"anos 1980",org:"UC Berkeley (Ousterhout et al.)",col:2,row:2,cor:"#81c784",parent:"unix",tipo:"i",
 origem:"Influência: implementa chamadas de kernel parecidas com as do 4.3BSD, mas foi construído como um novo sistema operacional.",
 hist:"Sistema experimental para estações de trabalho em rede com grandes memórias. Inclui migração de processos.",
 mu:"Sim: oferece a visão de uma única máquina de tempo compartilhado sobre uma rede de estações.",mp:"Projetado para estações uniprocessadas e multiprocessadas.",k:"Kernel multithread com RPC entre kernels. Rótulo formal (monolítico/micro) não identificado nas fontes.",
 fs:"Sistema de arquivos em rede, visto pelos usuários como uma hierarquia única.",cp:"Tabelas de prefixos localizam o servidor de cada domínio; RPC entre kernels; cache de blocos em clientes e servidores.",
 refs:[["Ousterhout et al., The Sprite Network Operating System, IEEE Computer, 1988","https://doi.org/10.1109/2.16"]]},
{id:"plan9",nome:"Plan 9",ano:"final dos anos 1980 em diante",org:"Bell Labs",col:2,row:3,cor:"#ffb74d",parent:"unix",tipo:"i",
 origem:"Influência: nascido no mesmo laboratório do Unix, que os autores julgam difícil de adaptar; algumas ideias do Unix foram mantidas. É um sistema novo, sem compatibilidade obrigatória.",
 hist:"Pretendia construir um sistema de tempo compartilhado a partir de estações, com servidores de CPU e de arquivos. O artigo compara sua filosofia à do Cambridge Distributed System.",
 mu:"Sim (usuários acessam recursos compartilhados da rede).",mp:"Sim: servidores multiprocessados compartilhados fornecem CPU.",k:"Kernel \"relativamente convencional\" segundo os autores; não há rótulo formal.",
 fs:"Servidor de arquivos central exportando uma única árvore via protocolo 9P.",cp:"Protocolo 9P e espaços de nomes por processo: servidores exportam hierarquias de arquivos que clientes montam.",
 refs:[["Pike et al., Plan 9 from Bell Labs, Computing Systems, 1995","https://www.read.seas.harvard.edu/~kohler/class/aosref/pike95plan9.pdf"]]},
{id:"rig",nome:"RIG",ano:"c. 1975–1976",org:"Univ. de Rochester",col:1,row:4,cor:"#b39ddb",prec:1,
 origem:"Precursor histórico: sistema gateway (acesso uniforme a recursos locais e remotos), não um SO distribuído completo. Sua experiência levou ao Accent.",
 hist:"Rodava em um Data General Eclipse e usava troca de mensagens entre processos.",
 mu:NI,mp:NI,k:NI,fs:NI,cp:NI,
 refs:[["Ball et al., RIG, Rochester's Intelligent Gateway: System Overview (relatório técnico TR5, Univ. de Rochester)","https://typeset.io/pdf/rig-rochester-s-intelligent-gateway-system-overview-1i49m5iggo.pdf"],["Rashid & Robertson, Accent (relata a ligação com o RIG), SOSP, 1981","https://cseweb.ucsd.edu/classes/wi19/cse221-a/papers/rashid81.pdf"]]},
{id:"accent",nome:"Accent",ano:"1981 em diante",org:"Carnegie Mellon (Rashid, Robertson)",col:2,row:4,cor:"#ba68c8",parent:"rig",tipo:"d",
 origem:"Derivação: as decisões de projeto evoluíram da experiência com o RIG (segundo o próprio autor).",
 hist:"Criado para o projeto Spice (rede de computadores pessoais) e para uma rede de sensores tolerante a falhas.",
 mu:NI,mp:NI,k:"Kernel orientado à comunicação: processos e funções do kernel acessados por troca de mensagens.",fs:NI,
 cp:"Comunicação entre processos estendida pela rede, de forma transparente, por processos chamados network servers.",
 refs:[["Rashid & Robertson, Accent: A Communication Oriented Network Operating System Kernel, SOSP, 1981","https://doi.org/10.1145/800216.806593"]]},
{id:"mach",nome:"Mach",ano:"meados dos anos 1980",org:"Carnegie Mellon",col:3,row:4,cor:"#f06292",parent:"accent",tipo:"d",
 origem:"Derivação: sucessor do Accent (material de curso do HPI), com compatibilidade completa com o 4.3BSD.",
 hist:"Acrescenta threads, melhor comunicação entre processos e suporte a multiprocessadores.",
 mu:"Sim, pela compatibilidade com o 4.3BSD.",mp:"Sim: projetado para uniprocessadores e multiprocessadores.",
 k:"Núcleo pequeno e extensível, baseado em mensagens. Versões com código BSD integrado tinham núcleo grande.",fs:NI,
 cp:"Troca de mensagens permite posicionar objetos em qualquer ponto da rede; detalhes do compartilhamento de arquivos: "+NI+".",
 refs:[["Rashid et al., Machine-Independent Virtual Memory Management…, IEEE Trans. Computers, 1988","https://doi.org/10.1109/12.2242"],["HPI, Mach Concepts (slides: histórico RIG, Accent e Mach)","https://osm.hpi.de/bs2/2019/slides/Microkernel/01a_mach-concepts.pdf"]]},
{id:"cds",nome:"Cambridge Distributed Computing System",ano:"1976–1982",org:"Univ. de Cambridge (Needham, Herbert)",col:1,row:6,cor:"#4db6ac",
 origem:"Independente. Surgiu do Cambridge Ring (rede local, em operação em 1976–77). Aparece nas fontes como um dos primeiros sistemas distribuídos; é um sistema de computação distribuído mais do que um único SO.",
 hist:"Terminais acessavam um \"banco de processadores\"; as máquinas do banco executavam o sistema TRIPOS.",
 mu:"Sim: ao entrar, o usuário recebe uma máquina do banco para a sessão.",mp:NI,k:NI+" (cada máquina do banco executa o TRIPOS).",
 fs:"Servidores de arquivos especializados na rede (inclui o TRIPOS Filing Machine).",cp:"Servidores de arquivos acessados pelo Cambridge Ring; mecanismo detalhado: "+NI+".",
 refs:[["Needham & Herbert, The Cambridge Distributed Computing System (livro, 1982)","https://www.microsoft.com/en-us/research/publication/the-cambridge-distributed-computing-system/"],["Tanenbaum & van Renesse, Distributed Operating Systems, ACM Computing Surveys, 1985","https://doi.org/10.1145/6041.6074"]]},
{id:"eden",nome:"Eden",ano:"1980–1985",org:"Univ. de Washington (Lazowska, Levy et al.)",col:2,row:6,cor:"#ff8a65",
 origem:"Projeto de pesquisa da Univ. de Washington. Segundo Black (1985), é descendente do Hydra (sistema de objetos não distribuído, fora desta árvore).",
 hist:"Sistema orientado a objetos para um \"computador do tamanho de um prédio\" em rede Ethernet. Operou em VAX-11/750 e em Sun.",
 mu:"Sim: ambiente de compartilhamento entre uma comunidade de usuários.",mp:NI,k:NI,
 fs:"Espaço de nomes único de objetos, abrangendo várias máquinas.",cp:"Objetos acessados por invocação remota (RPC) e podem mudar de máquina; mecanismo de arquivos específico: "+NI+".",
 refs:[["Lazowska et al., The Architecture of the Eden System, SOSP, 1981","https://doi.org/10.1145/800216.806603"],["Black, Supporting Distributed Applications: Experience with Eden, SOSP, 1985","https://static.aminer.org/pdf/20170130/pdfs/sosp/poy08tavzpag9fbhiwsh5d3nlwfoxrj2.pdf"]]},
{id:"v",nome:"V System",ano:"1981–1988",org:"Stanford (Cheriton, Lantz)",col:3,row:6,cor:"#aed581",
 origem:"Independente nesta árvore: nenhuma relação genealógica foi confirmada nas fontes consultadas.",
 hist:"Sistema para clusters de estações de trabalho em rede de alto desempenho; comunicação rápida entre processos é o núcleo do projeto.",
 mu:NI,mp:NI,k:"Kernel relativamente pequeno e \"distribuído\", com serviços em módulos fora do kernel (descrição de Cheriton).",
 fs:"Servidor de arquivos próprio (estilo UNIX) sobre o acesso a disco do kernel.",cp:"Mensagens entre processos (IPC), incluindo grupos, e interface de E/S uniforme (UIO) para acessar arquivos e dispositivos.",
 refs:[["Cheriton, The V Distributed System, CACM, 1988","https://doi.org/10.1145/42392.42400"]]},
{id:"amoeba",nome:"Amoeba",ano:"anos 1980–1990",org:"Vrije Universiteit e CWI, Amsterdã",col:1,row:7,cor:"#fff176",
 origem:"Independente: projeto próprio, com emulação de chamadas Unix (sem derivar do Unix).",
 hist:"Visa fazer um conjunto de máquinas parecer um único sistema de tempo compartilhado; a versão 4.0 saiu em 1990.",
 mu:"Sim: aparece aos usuários como um sistema centralizado único.",mp:"Usa um conjunto (pool) de processadores atribuídos dinamicamente; multiprocessamento em um único computador: "+NI+".",
 k:"Arquitetura cliente/servidor com RPC e objetos protegidos por capacidades. Rótulo formal de kernel: "+NI+".",
 fs:"Bullet Service (arquivos imutáveis) e serviço de diretórios.",cp:"Arquivos acessados por RPC e capacidades; o serviço de diretórios cuida de nomes, replicação e atomicidade.",
 refs:[["Mullender et al., Amoeba: A Distributed Operating System for the 1990s, IEEE Computer, 1990","https://doi.org/10.1109/2.53354"]]},
{id:"chorus",nome:"Chorus",ano:"1979–1988",org:"INRIA e Chorus Systèmes (França)",col:2,row:7,cor:"#7986cb",
 origem:"Independente. Projeto do INRIA iniciado em 1979, que aproveitou a experiência dos projetos Cyclades (redes) e Esope (tempo compartilhado); Chorus Systèmes continuou o desenvolvimento.",
 hist:"Pretendia construir sistemas distribuídos abertos e escaláveis; inclui subsistema Unix distribuído.",
 mu:"Sim, por meio do subsistema Unix distribuído.",mp:"Sim: roda em uniprocessadores e multiprocessadores em rede.",
 k:"Microkernel (Nucleus) com subsistemas em servidores; arquitetura parecida com a do Mach.",fs:"Fornecido por subsistemas (ex.: Unix) e servidores de segmentos.",
 cp:"O Nucleus troca mensagens entre portas de atores; o Unix distribuído é um conjunto de servidores. Detalhes de arquivos: "+NI+".",
 refs:[["Rozier et al., CHORUS Distributed Operating Systems, Computing Systems, 1988","https://d211t52k77xvz.cloudfront.net/publications/compsystems/1988/fall_rozier.pdf"],["Coulouris et al., Distributed Systems, 2ª ed., cap. Chorus","https://www.coulouris.net/cdk3/oss/Ed2/Chorus.pdf"]]}
];
const tree=document.getElementById("tree"),svg=document.getElementById("lines"),panel=document.getElementById("panel");
const lab=document.createElement("div");lab.className="grp";lab.style.gridRow=5;lab.textContent="Sistemas sem relação genealógica documentada nas fontes";tree.appendChild(lab);
S.forEach(s=>{const b=document.createElement("button");b.className="node"+(s.prec?" prec":"");b.id="n-"+s.id;
 b.style.cssText=`grid-column:${s.col};grid-row:${s.row};--c:${s.cor}`;
 b.innerHTML=`<b>${s.nome}</b><span>${s.ano}</span>`;b.onclick=()=>show(s.id);tree.appendChild(b);});
function lines(){svg.innerHTML="";const t=tree.getBoundingClientRect();
 S.filter(s=>s.parent).forEach(s=>{const a=document.getElementById("n-"+s.parent).getBoundingClientRect(),
  c=document.getElementById("n-"+s.id).getBoundingClientRect();
  const x1=a.right-t.left,y1=a.top+a.height/2-t.top,x2=c.left-t.left,y2=c.top+c.height/2-t.top,m=(x1+x2)/2;
  const p=document.createElementNS("http://www.w3.org/2000/svg","path");
  p.setAttribute("d",`M${x1},${y1} H${m} V${y2} H${x2}`);p.setAttribute("fill","none");
  p.setAttribute("stroke",s.cor);p.setAttribute("stroke-width","2");
  if(s.tipo==="i")p.setAttribute("stroke-dasharray","6 4");svg.appendChild(p);});}
function show(id){const s=S.find(x=>x.id===id);
 document.querySelectorAll(".node").forEach(n=>n.classList.toggle("sel",n.id==="n-"+id));
 const par=s.parent?S.find(x=>x.id===s.parent).nome:"Nenhum sistema ancestral representado";
 panel.hidden=false;
 panel.innerHTML=`<button id="close" onclick="closeP()">Fechar ✕</button><h2>${s.nome}</h2>
 <p>${s.ano} · ${s.org}</p>${s.prec?"<p><i>Precursor histórico (não é um SO distribuído)</i></p>":""}
 <h3>Origem e relação</h3><p><b>Origem:</b> ${par}</p><p>${s.origem}</p><p>${s.hist}</p>
 <h3>Características técnicas</h3><ul>
 <li><b>Multiusuário:</b> ${s.mu}</li><li><b>Multiprocessamento:</b> ${s.mp}</li>
 <li><b>Kernel:</b> ${s.k}</li><li><b>Sistema de arquivos:</b> ${s.fs}</li>
 <li><b>Compartilhamento de arquivos:</b> ${s.cp}</li></ul>
 <h3>Referências</h3><ul>${s.refs.map(r=>`<li><a href="${r[1]}" target="_blank" rel="noopener">${r[0]}</a></li>`).join("")}</ul>`;
 panel.scrollIntoView({behavior:"smooth",block:"nearest"});}
function closeP(){panel.hidden=true;document.querySelectorAll(".node").forEach(n=>n.classList.remove("sel"));}
addEventListener("resize",lines);addEventListener("load",lines);lines();
