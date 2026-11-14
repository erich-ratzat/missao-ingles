// gerado por tools/roteiro.py — não editar à mão
const LINES = {
 "L01": {
  "who": "bip",
  "text": "Lucas! Lucas! Alerta vermelho! Eu sou o Bip, seu robô ajudante."
 },
 "L02": {
  "who": "bip",
  "text": "Uma nave gigante apareceu no radar. É o Lorde Vortex!"
 },
 "V01": {
  "who": "vortex",
  "text": "Ha ha ha! I'm Lord Vortex! Your base is mine!"
 },
 "L03": {
  "who": "bip",
  "text": "Ele disse que a nossa base agora é dele. Nem pensar! Vou chamar a Capitã Nova."
 },
 "L04": {
  "who": "nova",
  "text": "Pilot Lucas! We need you! Build a ship!"
 },
 "L05": {
  "who": "bip",
  "text": "A Capitã disse: piloto Lucas, precisamos de você! Construa uma nave!"
 },
 "L06": {
  "who": "bip",
  "text": "Só que o computador da nave só entende inglês. Cada peça só aparece quando você fala o nome dela em inglês. Escute a Capitã, aperte o microfone e repita."
 },
 "L10": {
  "who": "bip",
  "text": "Primeiro, as asas! Asa, em inglês, é..."
 },
 "L11": {
  "who": "bip",
  "text": "Agora o foguete, pra nave voar bem rápido! Foguete, em inglês, é..."
 },
 "L12": {
  "who": "bip",
  "text": "Agora o canhão de laser! Em inglês o nome é parecido, mas o som é diferente. Escute..."
 },
 "L13": {
  "who": "bip",
  "text": "O espaço é muito escuro. A nave precisa de luz! Luz, em inglês, é..."
 },
 "L14": {
  "who": "bip",
  "text": "A nave está quase pronta! Agora a Capitã vai testar as peças. Ela fala o nome em inglês e você toca na peça certa."
 },
 "L15": {
  "who": "bip",
  "text": "Agora a parte mais legal: a cor da sua nave! Toque nas cores pra ouvir. Depois aperte o microfone e fale a cor que você quer."
 },
 "L16": {
  "who": "nova",
  "text": "Wow! Your ship is ready, pilot!"
 },
 "L17": {
  "who": "bip",
  "text": "Pra decolar, a Capitã conta até três. No final, você grita: Go! Quer dizer: vai!"
 },
 "L18": {
  "who": "bip",
  "text": "Decolamos! Cuidado, asteroides! A Capitã vai dizer pra onde ir: up é pra cima, down é pra baixo. Escute e toque na seta!"
 },
 "L19": {
  "who": "bip",
  "text": "Ufa! Passamos pelos asteroides!"
 },
 "L20": {
  "who": "bip",
  "text": "Ih! Um drone do Vortex atirou e apagou as nossas luzes! Não dá pra ver nada!"
 },
 "L21": {
  "who": "bip",
  "text": "Fala o nome da peça que acende a nave!"
 },
 "L22": {
  "who": "bip",
  "text": "São os drones do Vortex! Qual peça a gente usa pra acertar os drones?"
 },
 "L23": {
  "who": "bip",
  "text": "Opa! Um drone acertou a nossa asa! A nave está rodando! Qual peça a gente precisa consertar?"
 },
 "V02": {
  "who": "vortex",
  "text": "You can't escape me! Ha ha ha!"
 },
 "L24": {
  "who": "bip",
  "text": "O Vortex está puxando a gente com um raio! Precisamos de força total! Qual peça faz a nave correr?"
 },
 "V03": {
  "who": "vortex",
  "text": "Nooo! I'll be back!"
 },
 "L25": {
  "who": "nova",
  "text": "You did it, Lucas! The base is safe. You're a real pilot!"
 },
 "L26": {
  "who": "bip",
  "text": "Você salvou a base estelar e ganhou suas asas de piloto!"
 },
 "L27": {
  "who": "bip",
  "text": "Mas o Vortex disse que vai voltar... Amanhã você vai precisar de uma espada de luz. Até amanhã, piloto!"
 },
 "LN_color": {
  "who": "nova",
  "text": "Choose a color: red, blue, or green."
 },
 "LN_count": {
  "who": "nova",
  "text": "Three... two... one..."
 },
 "LN_countgo": {
  "who": "nova",
  "text": "Three... two... one... Go!"
 },
 "LN_touch_wing": {
  "who": "nova",
  "text": "Touch the wing!"
 },
 "LN_touch_rocket": {
  "who": "nova",
  "text": "Touch the rocket!"
 },
 "LN_touch_laser": {
  "who": "nova",
  "text": "Touch the laser!"
 },
 "LN_touch_light": {
  "who": "nova",
  "text": "Touch the light!"
 },
 "LN_yes": {
  "who": "nova",
  "text": "Yes!"
 },
 "LN_yes__2": {
  "who": "nova",
  "text": "Great!"
 },
 "LN_yes__3": {
  "who": "nova",
  "text": "Awesome!"
 },
 "LN_yes__4": {
  "who": "nova",
  "text": "Good job!"
 },
 "LN_check": {
  "who": "nova",
  "text": "All systems go!"
 },
 "LN_q_light": {
  "who": "nova",
  "text": "It's dark! What do we need?"
 },
 "LN_q_laser": {
  "who": "nova",
  "text": "Drones! What do we use?"
 },
 "LN_q_wing": {
  "who": "nova",
  "text": "Our wing is broken! Fix it!"
 },
 "LN_q_rocket": {
  "who": "nova",
  "text": "Pilot! Full power! Now!"
 },
 "E_wing": {
  "who": "nova",
  "text": "Yes! Big wings!"
 },
 "E_rocket": {
  "who": "nova",
  "text": "A fast rocket! Whoosh!"
 },
 "E_laser": {
  "who": "nova",
  "text": "A laser! Pew, pew!"
 },
 "E_light": {
  "who": "nova",
  "text": "Light! Now we can see!"
 },
 "E_go": {
  "who": "nova",
  "text": "Go, go, go!"
 },
 "E2_light": {
  "who": "nova",
  "text": "Light! I can see the drones!"
 },
 "E2_laser": {
  "who": "nova",
  "text": "Pew, pew! Great shot!"
 },
 "E2_wing": {
  "who": "nova",
  "text": "The wing is okay! Good job!"
 },
 "E2_rocket": {
  "who": "nova",
  "text": "Full power! Whoosh!"
 },
 "E_ship_red": {
  "who": "nova",
  "text": "A red ship! Cool!"
 },
 "E_ship_blue": {
  "who": "nova",
  "text": "A blue ship! Cool!"
 },
 "E_ship_green": {
  "who": "nova",
  "text": "A green ship! Cool!"
 },
 "LB_say": {
  "who": "bip",
  "text": "Aperte o microfone e repita!"
 },
 "LB_part": {
  "who": "bip",
  "text": "A peça apareceu!"
 },
 "LB_fixed": {
  "who": "bip",
  "text": "Agora sim! Você corrigiu!"
 },
 "LB_fixed__2": {
  "who": "bip",
  "text": "Isso! Agora ficou certinho!"
 },
 "LB_fixed__3": {
  "who": "bip",
  "text": "Mandou bem! Corrigiu rapidinho!"
 },
 "LB_close": {
  "who": "bip",
  "text": "Quase!"
 },
 "LB_remember": {
  "who": "bip",
  "text": "Lembra? É esta palavra aqui. Escute a Capitã:"
 },
 "LB_slow": {
  "who": "bip",
  "text": "Vamos bem devagar, pedacinho por pedacinho. Escute e repita igualzinho."
 },
 "LB_help": {
  "who": "bip",
  "text": "Essa palavra é difícil mesmo! Desta vez eu ajudo. Amanhã a gente treina ela de novo."
 },
 "LB_louder": {
  "who": "bip",
  "text": "Ops, não peguei. Aperte o microfone, espere ele ficar verde e fale."
 },
 "LB_louder__2": {
  "who": "bip",
  "text": "Hmm, não deu pra entender. Vamos de novo? Quando o microfone ficar verde, fala."
 },
 "LB_wrong": {
  "who": "bip",
  "text": "Opa, essa não. Escute de novo!"
 },
 "LB_wrong__2": {
  "who": "bip",
  "text": "Hmm, não é essa. Presta atenção!"
 },
 "LB_wrong__3": {
  "who": "bip",
  "text": "Quase! Escute mais uma vez."
 },
 "LB_pick": {
  "who": "bip",
  "text": "Tudo bem! Agora é só tocar no que você quer."
 },
 "L2_01": {
  "who": "bip",
  "text": "Lucas! Alerta! O Lorde Vortex voltou, como prometeu!"
 },
 "V04": {
  "who": "vortex",
  "text": "Ha ha ha! I've got the Light Crystal! Your base has no power!"
 },
 "L2_02": {
  "who": "bip",
  "text": "Ele roubou o Cristal de Luz! É ele que dá energia pra base inteira. Sem ele, tudo vai apagar!"
 },
 "L2_03": {
  "who": "bip",
  "text": "Antes de sair, vistoria da nave! Eu mostro a peça e você fala o nome em inglês. Desta vez a Capitã não fala antes. Você lembra!"
 },
 "L2_04": {
  "who": "bip",
  "text": "Nave pronta! O Vortex fugiu para o planeta roxo. Vamos atrás dele!"
 },
 "L2_05": {
  "who": "bip",
  "text": "Pra decolar, o que a gente grita? Fala quando a Capitã terminar de contar!"
 },
 "L2_06": {
  "who": "bip",
  "text": "Pousamos no planeta roxo! Olha lá: é o Vortex, com o cristal!"
 },
 "V05": {
  "who": "vortex",
  "text": "You again? Go home, little pilot!"
 },
 "L2_07": {
  "who": "nova",
  "text": "Lucas, you need a sword. Take this!"
 },
 "L2_08": {
  "who": "bip",
  "text": "A Capitã te mandou uma espada de luz! Espada, em inglês, é..."
 },
 "L2_09": {
  "who": "bip",
  "text": "Escolha a cor da sua espada! Toque nas cores pra ouvir, e fale a cor que você quer."
 },
 "L2_10": {
  "who": "bip",
  "text": "E eu fiz um presente pra você: um escudo de energia, pra te proteger! Escudo, em inglês, é..."
 },
 "L2_11": {
  "who": "bip",
  "text": "Cuidado! Os drones do Vortex estão atirando bolas de energia! A Capitã vai gritar pra onde pular: left é esquerda, right é direita. Escute e toque na seta! Se quiser, pula de verdade!"
 },
 "L2_12": {
  "who": "bip",
  "text": "Ufa! Nenhuma bola acertou você!"
 },
 "L2_13": {
  "who": "bip",
  "text": "Agora a Capitã vai treinar você. Quando ela falar sword, toque na espada. Quando falar shield, toque no escudo."
 },
 "V06": {
  "who": "vortex",
  "text": "Drones! Attack!"
 },
 "L2_14": {
  "who": "bip",
  "text": "Muitos drones atirando ao mesmo tempo! Não dá pra pular de todos! O que te protege?"
 },
 "L2_15": {
  "who": "bip",
  "text": "Os drones fugiram! Agora é você contra o Vortex. O que você usa pra lutar?"
 },
 "V07": {
  "who": "vortex",
  "text": "My crystal! Nooo!"
 },
 "L2_16": {
  "who": "bip",
  "text": "O Vortex derrubou o cristal! Mas ele apagou... Fala a palavra que acende tudo!"
 },
 "V08": {
  "who": "vortex",
  "text": "This isn't over! I'll be back!"
 },
 "L2_17": {
  "who": "nova",
  "text": "You did it, Lucas! You're a space knight!"
 },
 "L2_18": {
  "who": "bip",
  "text": "O cristal voltou pra base e tudo acendeu de novo! Você virou Cavaleiro Estelar!"
 },
 "L2_19": {
  "who": "bip",
  "text": "Agora uma missão fora da tela! Chama o papai. Ele fala left ou right, e você pula pro lado certo. Depois troca: você é a Capitã e o papai pula!"
 },
 "LN2_color": {
  "who": "nova",
  "text": "What color is your sword? Red, blue, green, yellow, or purple?"
 },
 "LN2_left": {
  "who": "nova",
  "text": "Left!"
 },
 "LN2_right": {
  "who": "nova",
  "text": "Right!"
 },
 "LN2_sword": {
  "who": "nova",
  "text": "Sword!"
 },
 "LN2_shield": {
  "who": "nova",
  "text": "Shield!"
 },
 "E_sword": {
  "who": "nova",
  "text": "A sword! Zoom, zoom!"
 },
 "E_shield": {
  "who": "nova",
  "text": "A shield! You're safe!"
 },
 "E2_shield": {
  "who": "nova",
  "text": "Shield up! Nothing can hit you!"
 },
 "E2_sword": {
  "who": "nova",
  "text": "Zoom! Great move!"
 },
 "E3_light": {
  "who": "nova",
  "text": "Light! The crystal is back!"
 },
 "E_sword_red": {
  "who": "nova",
  "text": "A red sword! Awesome!"
 },
 "E_sword_blue": {
  "who": "nova",
  "text": "A blue sword! Awesome!"
 },
 "E_sword_green": {
  "who": "nova",
  "text": "A green sword! Awesome!"
 },
 "E_sword_yellow": {
  "who": "nova",
  "text": "A yellow sword! Awesome!"
 },
 "E_sword_purple": {
  "who": "nova",
  "text": "A purple sword! Awesome!"
 },
 "L3_01": {
  "who": "nova",
  "text": "Lucas! Bip is gone!"
 },
 "L3_02": {
  "who": "bip",
  "text": "Lucas! Lucas! Aqui é o Bip, falando pelo rádio! O Lorde Vortex me pegou!"
 },
 "V09": {
  "who": "vortex",
  "text": "Ha ha ha! Your little robot is in my castle!"
 },
 "L3_03": {
  "who": "bip",
  "text": "Ele me prendeu numa gaiola, no castelo dele, na lua escura! Vem me salvar, Lucas!"
 },
 "L3_04": {
  "who": "bip",
  "text": "Antes de sair, olha: uma peça da nave está piscando! Fala o nome dela em inglês pra consertar."
 },
 "L3_05": {
  "who": "bip",
  "text": "Nave consertada! Fala a palavra de decolar quando a Capitã terminar de contar!"
 },
 "L3_06": {
  "who": "bip",
  "text": "Chegamos na lua escura! Olha o castelo do Vortex! A porta é gigante, e está trancada."
 },
 "L3_07": {
  "who": "nova",
  "text": "This is a magic door. Say: open!"
 },
 "L3_08": {
  "who": "bip",
  "text": "A porta é mágica! Ela só abre quando alguém fala abrir em inglês. Abrir, em inglês, é..."
 },
 "L3_09": {
  "who": "bip",
  "text": "Entramos! Mas aqui dentro está tudo escuro. Fala a palavra que acende as tochas!"
 },
 "L3_10": {
  "who": "bip",
  "text": "Três portas! Uma delas leva até mim. A Capitã vai falar um número em inglês: one é um, two é dois, three é três. Escute e toque na porta certa!"
 },
 "L3_bat": {
  "who": "bip",
  "text": "Um morcego! Ai, que susto! Não é essa porta."
 },
 "L3_ghost": {
  "who": "bip",
  "text": "Um fantasma! Buuu! Também não é essa."
 },
 "L3_found": {
  "who": "bip",
  "text": "Achou! Essa porta leva pro labirinto!"
 },
 "L3_11": {
  "who": "bip",
  "text": "Um labirinto escuro! A Capitã vai guiar você: up é pra cima, down é pra baixo, left é esquerda, right é direita. Escute e toque na seta!"
 },
 "L3_12": {
  "who": "bip",
  "text": "Você saiu do labirinto! Estou te vendo, Lucas! Estou aqui em cima, na gaiola!"
 },
 "L3_13": {
  "who": "bip",
  "text": "Cuidado, tem um buraco no chão! Pra passar, você precisa pular. Se quiser, pula de verdade junto! Pular, em inglês, é..."
 },
 "V10": {
  "who": "vortex",
  "text": "You again? Drones, get him!"
 },
 "L3_14": {
  "who": "bip",
  "text": "Os drones vão atirar! O que te protege?"
 },
 "L3_15": {
  "who": "bip",
  "text": "Agora o Vortex vem com a espada vermelha dele! O que você usa pra lutar?"
 },
 "L3_16": {
  "who": "bip",
  "text": "O Vortex fugiu! Agora a gaiola. Ela também é mágica. Qual é a palavra que abre?"
 },
 "L3_17": {
  "who": "bip",
  "text": "Eba! Estou livre! Obrigado, Lucas! Mas o Vortex estragou a minha pintura. Escolhe uma cor nova pra mim! Toque nas cores pra ver, e fale a cor que você quer."
 },
 "L3_18": {
  "who": "nova",
  "text": "You did it, Lucas! You saved Bip! You're a hero!"
 },
 "L3_19": {
  "who": "bip",
  "text": "Você ganhou a chave do castelo! Agora você é o Herói do Castelo!"
 },
 "L3_20": {
  "who": "bip",
  "text": "Missão fora da tela! Chama o papai. Ele fala open, jump ou um número em inglês. Open: você abre as mãos. Jump: você pula. One, two, three: você mostra os dedos. Depois troca!"
 },
 "LN3_door_one": {
  "who": "nova",
  "text": "Door number one!"
 },
 "LN3_door_two": {
  "who": "nova",
  "text": "Door number two!"
 },
 "LN3_door_three": {
  "who": "nova",
  "text": "Door number three!"
 },
 "LN3_color": {
  "who": "nova",
  "text": "What color is Bip? Red, blue, green, yellow, or purple?"
 },
 "E_open": {
  "who": "nova",
  "text": "Open! The door is open!"
 },
 "E2_open": {
  "who": "nova",
  "text": "Open! Bip is free!"
 },
 "E_jump": {
  "who": "nova",
  "text": "Jump! Great jump!"
 },
 "E4_light": {
  "who": "nova",
  "text": "Light! Look at the castle!"
 },
 "E_bip_red": {
  "who": "nova",
  "text": "A red robot! I love it!"
 },
 "E_bip_blue": {
  "who": "nova",
  "text": "A blue robot! I love it!"
 },
 "E_bip_green": {
  "who": "nova",
  "text": "A green robot! I love it!"
 },
 "E_bip_yellow": {
  "who": "nova",
  "text": "A yellow robot! I love it!"
 },
 "E_bip_purple": {
  "who": "nova",
  "text": "A purple robot! I love it!"
 },
 "L4_01": {
  "who": "bip",
  "text": "Lucas, olha que noite linda! O céu está cheio de estrelas."
 },
 "L4_02": {
  "who": "bip",
  "text": "Ué... As estrelas estão sumindo! Uma, duas, três... Alguma coisa está puxando as estrelas!"
 },
 "V11": {
  "who": "vortex",
  "text": "Ha ha ha! Look at the sky! The stars are mine!"
 },
 "V11_pt": {
  "who": "bip",
  "text": "Olhem o céu! As estrelas são minhas!"
 },
 "V12": {
  "who": "vortex",
  "text": "My big machine eats the stars. No more light!"
 },
 "V12_pt": {
  "who": "bip",
  "text": "Minha máquina gigante come as estrelas. Acabou a luz!"
 },
 "L4_03": {
  "who": "bip",
  "text": "Uma máquina que come estrelas? Sem estrelas, a noite vai ficar escura pra sempre!"
 },
 "L4_04": {
  "who": "bip",
  "text": "Olha! Uma estrela caiu bem aqui do nosso lado!"
 },
 "L4_05": {
  "who": "lumi",
  "text": "Hello! I'm Lumi. I'm a little star."
 },
 "L4_05_pt": {
  "who": "bip",
  "text": "Olá! Eu sou a Lumi. Eu sou uma estrelinha."
 },
 "L4_06": {
  "who": "lumi",
  "text": "Vortex took my family. Help! Help me, please!"
 },
 "L4_06_pt": {
  "who": "bip",
  "text": "O Vortex levou a minha família. Socorro! Me ajuda, por favor!"
 },
 "L4_07": {
  "who": "bip",
  "text": "A Lumi pediu ajuda! Quando a gente precisa de alguém, a gente grita bem forte. Ajuda, em inglês, é..."
 },
 "E_help": {
  "who": "lumi",
  "text": "Help! Yes! Thank you, Lucas!"
 },
 "L4_08": {
  "who": "bip",
  "text": "A Lumi sabe onde fica a máquina: perto do Buraco Negro! Vamos pra nave, rápido!"
 },
 "L4_09": {
  "who": "bip",
  "text": "Antes de decolar, vistoria! Uma peça está piscando. Fala o nome dela em inglês!"
 },
 "L4_10": {
  "who": "bip",
  "text": "Tudo pronto! Desta vez a gente vai na velocidade da luz! Fala a palavra de decolar quando a Capitã terminar de contar!"
 },
 "L4_11": {
  "who": "lumi",
  "text": "Fly, Lucas! Fly to the black hole!"
 },
 "L4_11_pt": {
  "who": "bip",
  "text": "Voa, Lucas! Voa até o buraco negro!"
 },
 "L4_12": {
  "who": "bip",
  "text": "Abre os braços, como asas de passarinho! Voar, em inglês, é..."
 },
 "E_fly": {
  "who": "lumi",
  "text": "Fly, fly, fly! Wheee!"
 },
 "L4_13": {
  "who": "bip",
  "text": "Olha lá na frente: o Buraco Negro! Ele puxa tudo pra dentro. Se a gente chegar muito perto, ele puxa a nave!"
 },
 "L4_14": {
  "who": "nova",
  "text": "Stop, Lucas! Stop the ship!"
 },
 "L4_14_pt": {
  "who": "bip",
  "text": "Para, Lucas! Para a nave!"
 },
 "L4_15": {
  "who": "bip",
  "text": "Põe a mão pra frente, assim, igual guarda de trânsito! Parar, em inglês, é..."
 },
 "E_stop": {
  "who": "nova",
  "text": "Stop! Good! The ship is safe."
 },
 "L4_16": {
  "who": "bip",
  "text": "Agora vem uma chuva de meteoros! Quando a Capitã falar fly, toque na nave. Quando ela falar stop, toque na mão. Se quiser, voa e congela de verdade!"
 },
 "LN4_fly": {
  "who": "nova",
  "text": "Fly!"
 },
 "LN4_stop": {
  "who": "nova",
  "text": "Stop!"
 },
 "L4_17": {
  "who": "bip",
  "text": "Passamos pelos meteoros! Que piloto!"
 },
 "L4_18": {
  "who": "lumi",
  "text": "Look! My family! Big stars and small stars!"
 },
 "L4_18_pt": {
  "who": "bip",
  "text": "Olha! Minha família! Estrelas grandes e estrelas pequenas!"
 },
 "L4_19": {
  "who": "bip",
  "text": "As estrelas estão presas em bolhas! Big é grande. Small é pequena. A Capitã vai falar qual estrela salvar. Toque nela!"
 },
 "LN4_big": {
  "who": "nova",
  "text": "A big star!"
 },
 "LN4_small": {
  "who": "nova",
  "text": "A small star!"
 },
 "LN4_n1": {
  "who": "nova",
  "text": "One star!"
 },
 "LN4_n2": {
  "who": "nova",
  "text": "Two stars!"
 },
 "LN4_n3": {
  "who": "nova",
  "text": "Three stars!"
 },
 "LN4_n4": {
  "who": "nova",
  "text": "Four stars!"
 },
 "L4_20": {
  "who": "bip",
  "text": "A família da Lumi está salva! Mas ainda tem muitas estrelas presas na máquina do Vortex. Olha ela ali!"
 },
 "V13": {
  "who": "vortex",
  "text": "You again? Stop! This is my machine!"
 },
 "V13_pt": {
  "who": "bip",
  "text": "Você de novo? Pare! Esta máquina é minha!"
 },
 "L4_21": {
  "who": "bip",
  "text": "A máquina ligou! Ela está puxando você, Lucas! Grita pedindo ajuda, em inglês!"
 },
 "E2_help": {
  "who": "lumi",
  "text": "We can help! Hold on, Lucas!"
 },
 "L4_22": {
  "who": "bip",
  "text": "Ufa! A Lumi e a família dela seguraram você! Agora, as estrelas presas estão fraquinhas. Fala a palavra que deixa tudo brilhando!"
 },
 "E5_light": {
  "who": "nova",
  "text": "Light! The stars are free!"
 },
 "V14": {
  "who": "vortex",
  "text": "My machine! Nooo! I'll be back!"
 },
 "V14_pt": {
  "who": "bip",
  "text": "Minha máquina! Nããão! Eu vou voltar!"
 },
 "L4_23": {
  "who": "lumi",
  "text": "Look! The stars are back! Thank you, Lucas!"
 },
 "L4_23_pt": {
  "who": "bip",
  "text": "Olha! As estrelas voltaram! Obrigada, Lucas!"
 },
 "L4_24": {
  "who": "lumi",
  "text": "This is for you. A star of light!"
 },
 "L4_24_pt": {
  "who": "bip",
  "text": "Isto é pra você. Uma estrela de luz!"
 },
 "L4_25": {
  "who": "bip",
  "text": "Um presente! Quando alguém te dá um presente, ou te ajuda, a gente agradece. Obrigado, em inglês, é..."
 },
 "E_thanks": {
  "who": "lumi",
  "text": "You're welcome, Lucas!"
 },
 "L4_26": {
  "who": "nova",
  "text": "You did it, Lucas! You saved the stars! You're a star guardian!"
 },
 "L4_27": {
  "who": "bip",
  "text": "Você ganhou a Estrela de Luz! Agora você é o Guardião das Estrelas!"
 },
 "L4_28": {
  "who": "bip",
  "text": "Missão fora da tela! Chama o papai pra brincar de estátua. Ele fala fly: você voa pela sala. Ele fala stop: você congela! Depois troca!"
 },
 "L4_29": {
  "who": "lumi",
  "text": "Bye, Lucas! See you soon!"
 },
 "L5_01": {
  "who": "bip",
  "text": "Lucas! A Lumi chegou voando, bem rápido. Ela tem uma notícia!"
 },
 "L5_02": {
  "who": "lumi",
  "text": "Lucas! Vortex is back! He is on the ice planet."
 },
 "L5_02_pt": {
  "who": "bip",
  "text": "Lucas! O Vortex voltou! Ele está no planeta de gelo."
 },
 "V15": {
  "who": "vortex",
  "text": "Ha ha ha! My ice cannon is ready! Everything will freeze!"
 },
 "V15_pt": {
  "who": "bip",
  "text": "Meu canhão de gelo está pronto! Tudo vai congelar!"
 },
 "L5_03": {
  "who": "bip",
  "text": "Um canhão de gelo! Ele quer congelar o planeta inteiro. E lá moram os amigos da Lumi!"
 },
 "L5_04": {
  "who": "bip",
  "text": "Pra nave! Fala a palavra de decolar quando a Capitã terminar de contar!"
 },
 "L5_05": {
  "who": "bip",
  "text": "Chegamos no Planeta de Gelo! Olha a neve caindo, e as luzes coloridas no céu! Brrr... Tá muito frio!"
 },
 "L5_06": {
  "who": "nova",
  "text": "Brrr! It's cold! Very, very cold!"
 },
 "L5_06_pt": {
  "who": "bip",
  "text": "Brrr! Está frio! Muito, muito frio!"
 },
 "L5_07": {
  "who": "bip",
  "text": "Abraça o corpo e treme, assim: brrr! Frio, em inglês, é..."
 },
 "E_cold": {
  "who": "lumi",
  "text": "Cold, cold, cold! Brrr!"
 },
 "L5_08": {
  "who": "bip",
  "text": "Olha ali! Tem alguém preso dentro de um bloco de gelo!"
 },
 "L5_09": {
  "who": "lumi",
  "text": "It's Puff! My friend! He is frozen!"
 },
 "L5_09_pt": {
  "who": "bip",
  "text": "É o Puff! Meu amigo! Ele está congelado!"
 },
 "L5_10": {
  "who": "nova",
  "text": "Lucas, your sword can make fire!"
 },
 "L5_10_pt": {
  "who": "bip",
  "text": "Lucas, a sua espada pode fazer fogo!"
 },
 "L5_11": {
  "who": "bip",
  "text": "Levanta a espada bem alto! Fogo, em inglês, é..."
 },
 "E_fire": {
  "who": "nova",
  "text": "Fire! Hot, hot, hot!"
 },
 "L5_12": {
  "who": "puff",
  "text": "Hello! I'm Puff. Hello, hello!"
 },
 "L5_12_pt": {
  "who": "bip",
  "text": "Olá! Eu sou o Puff. Olá, olá!"
 },
 "L5_13": {
  "who": "bip",
  "text": "O Puff está dizendo oi! Acena com a mão pra ele e responde. Oi, em inglês, é..."
 },
 "E_hello": {
  "who": "puff",
  "text": "Hello, Lucas! Thank you!"
 },
 "L5_14": {
  "who": "puff",
  "text": "You're my friend! Friend!"
 },
 "L5_14_pt": {
  "who": "bip",
  "text": "Você é meu amigo! Amigo!"
 },
 "L5_15": {
  "who": "bip",
  "text": "Ele disse que você é amigo dele! Dá um abraço bem apertado. Amigo, em inglês, é..."
 },
 "E_friend": {
  "who": "puff",
  "text": "Friends! Yay!"
 },
 "L5_16": {
  "who": "puff",
  "text": "Look! The ice bridge! It needs crystals."
 },
 "L5_16_pt": {
  "who": "bip",
  "text": "Olha! A ponte de gelo! Ela precisa de cristais."
 },
 "L5_17": {
  "who": "bip",
  "text": "A ponte só acende com cristais mágicos. A Capitã vai falar quantos. Você já sabe one, two e three. Agora tem mais dois: four é quatro, five é cinco. Escute e toque no número certo!"
 },
 "LN5_three": {
  "who": "nova",
  "text": "Three crystals!"
 },
 "LN5_four": {
  "who": "nova",
  "text": "Four crystals!"
 },
 "LN5_five": {
  "who": "nova",
  "text": "Five crystals!"
 },
 "L5_18": {
  "who": "bip",
  "text": "A ponte acendeu inteirinha! Vamos atravessar!"
 },
 "L5_19": {
  "who": "bip",
  "text": "Ih, tem um buraco no meio da ponte! O que você fala pra passar?"
 },
 "V16": {
  "who": "vortex",
  "text": "You again? Snowballs! Get him!"
 },
 "V16_pt": {
  "who": "bip",
  "text": "Você de novo? Bolas de neve! Peguem ele!"
 },
 "L5_20": {
  "who": "bip",
  "text": "Uma avalanche de bolas de neve! Fala a palavra que faz tudo parar!"
 },
 "E2_stop": {
  "who": "puff",
  "text": "Stop! Wow! The snowballs stopped!"
 },
 "L5_21": {
  "who": "bip",
  "text": "O canhão vai atirar gelo em você! O que te protege?"
 },
 "L5_22": {
  "who": "bip",
  "text": "Agora é a hora! Derrete o canhão de gelo! Qual é a palavra do fogo?"
 },
 "E2_fire": {
  "who": "nova",
  "text": "Fire! The cannon is melting!"
 },
 "V17": {
  "who": "vortex",
  "text": "My cannon! Nooo! I'm cold! Brrr!"
 },
 "V17_pt": {
  "who": "bip",
  "text": "Meu canhão! Nããão! Estou com frio! Brrr!"
 },
 "L5_23": {
  "who": "puff",
  "text": "Thank you, Lucas! You're my best friend!"
 },
 "L5_23_pt": {
  "who": "bip",
  "text": "Obrigado, Lucas! Você é o meu melhor amigo!"
 },
 "L5_24": {
  "who": "nova",
  "text": "You did it, Lucas! The ice planet is safe! You're a fire knight!"
 },
 "L5_25": {
  "who": "bip",
  "text": "Você ganhou a medalha de Cavaleiro do Fogo!"
 },
 "L5_26": {
  "who": "bip",
  "text": "Missão fora da tela! Chama o papai. Ele fala cold: você treme, brrr! Ele fala fire: você pula com os braços pra cima! E contem juntos nos dedos: one, two, three, four, five!"
 },
 "L5_27": {
  "who": "puff",
  "text": "Bye, friend! See you soon!"
 },
 "H01": {
  "who": "narr",
  "text": "Olá, olá, torcida! Hoje é dia de grande final!"
 },
 "H02": {
  "who": "narr",
  "text": "De um lado, os Tubarões. Do outro, o time do craque Henrique!"
 },
 "H03": {
  "who": "narr",
  "text": "O técnico do time é o Coach Max. Ele veio dos Estados Unidos e só fala inglês. Escute bem!"
 },
 "H04": {
  "who": "coach",
  "text": "Hey champ! Are you ready?"
 },
 "H05": {
  "who": "narr",
  "text": "Ele perguntou se você está pronto! Pra dizer sim, em inglês, a gente fala..."
 },
 "H06": {
  "who": "coach",
  "text": "Now choose your shirt! Red, blue, or yellow?"
 },
 "H07": {
  "who": "narr",
  "text": "Shirt é camisa! Toque nas cores pra ouvir. Depois aperte o microfone e fale a cor que você quer."
 },
 "H08": {
  "who": "narr",
  "text": "Agora a chuteira! Em inglês, a gente fala shoes. Escute o Coach."
 },
 "H09": {
  "who": "coach",
  "text": "Take the ball!"
 },
 "H10": {
  "who": "narr",
  "text": "O Coach quer a bola! Bola, em inglês, é..."
 },
 "H11": {
  "who": "narr",
  "text": "Entrando em campo! Começa a grande final!"
 },
 "H12": {
  "who": "narr",
  "text": "Ih, os Tubarões fizeram um gol! Um a zero pra eles."
 },
 "H13": {
  "who": "narr",
  "text": "Agora o Coach vai gritar o que fazer. Run é correr. Kick é chutar. Escute e toque no botão certo! Se quiser, corre no lugar de verdade!"
 },
 "H14": {
  "who": "narr",
  "text": "Goool! Empatou! Um a um!"
 },
 "H15": {
  "who": "narr",
  "text": "Fim de jogo! Empate! A final vai ser decidida nos pênaltis!"
 },
 "H16": {
  "who": "narr",
  "text": "E no gol dos Tubarões está o goleiro mais bravo do campeonato: Big Tony!"
 },
 "T01": {
  "who": "tony",
  "text": "I'm Big Tony! No goals today!"
 },
 "H17": {
  "who": "narr",
  "text": "Ele disse que hoje não vai ter gol. Vamos ver! Pra escolher onde chutar, fale a cor do alvo em inglês."
 },
 "H18": {
  "who": "narr",
  "text": "Gooool! Que golaço!"
 },
 "T02": {
  "who": "tony",
  "text": "What? No!"
 },
 "H19": {
  "who": "narr",
  "text": "Defendeu o Big Tony! Calma, ainda dá!"
 },
 "T03": {
  "who": "tony",
  "text": "Ha! My ball!"
 },
 "H20": {
  "who": "narr",
  "text": "Última cobrança! Se fizer, é campeão!"
 },
 "H21": {
  "who": "narr",
  "text": "Entrouuu! Agora grita gol em inglês, bem alto!"
 },
 "H22": {
  "who": "narr",
  "text": "É campeão! É campeão! Henrique fez o gol do título!"
 },
 "T04": {
  "who": "tony",
  "text": "Okay... good kick champ."
 },
 "H23": {
  "who": "narr",
  "text": "Você ganhou a taça e a figurinha de Craque da Final! Amanhã tem treino novo com o Coach Max. Até amanhã, campeão!"
 },
 "HC_run": {
  "who": "coach",
  "text": "Run! Run!"
 },
 "HC_kick": {
  "who": "coach",
  "text": "Kick!"
 },
 "HC_goal": {
  "who": "coach",
  "text": "Goal! Great kick!"
 },
 "HC_where": {
  "who": "coach",
  "text": "Where? Red, blue, or yellow?"
 },
 "HC_okay": {
  "who": "coach",
  "text": "It's okay champ! You can do it!"
 },
 "HC_ready": {
  "who": "coach",
  "text": "Champ! Are you ready?"
 },
 "HC_yes": {
  "who": "coach",
  "text": "Yes!"
 },
 "HC_yes__2": {
  "who": "coach",
  "text": "Great!"
 },
 "HC_yes__3": {
  "who": "coach",
  "text": "Nice!"
 },
 "E_yes": {
  "who": "coach",
  "text": "Yes! Let's play!"
 },
 "E_shoes": {
  "who": "coach",
  "text": "Cool shoes! Fast feet!"
 },
 "E_ball": {
  "who": "coach",
  "text": "Yes! The ball! Let's go!"
 },
 "E2_yes": {
  "who": "coach",
  "text": "Yes! You can do it!"
 },
 "E_goal": {
  "who": "coach",
  "text": "Goal! You're a champion!"
 },
 "E_shirt_red": {
  "who": "coach",
  "text": "A red shirt! Nice!"
 },
 "E_shirt_blue": {
  "who": "coach",
  "text": "A blue shirt! Nice!"
 },
 "E_shirt_yellow": {
  "who": "coach",
  "text": "A yellow shirt! Nice!"
 },
 "HN_say": {
  "who": "narr",
  "text": "Aperte o microfone e fale!"
 },
 "HN_fixed": {
  "who": "narr",
  "text": "Agora sim! Você corrigiu!"
 },
 "HN_fixed__2": {
  "who": "narr",
  "text": "Isso! Agora ficou certinho!"
 },
 "HN_close": {
  "who": "narr",
  "text": "Quase!"
 },
 "HN_remember": {
  "who": "narr",
  "text": "Lembra? É esta palavra aqui. Escute o Coach:"
 },
 "HN_slow": {
  "who": "narr",
  "text": "Vamos bem devagar, pedacinho por pedacinho. Escute e repita igualzinho."
 },
 "HN_help": {
  "who": "narr",
  "text": "Essa palavra é difícil mesmo! Desta vez eu ajudo. Amanhã a gente treina ela de novo."
 },
 "HN_louder": {
  "who": "narr",
  "text": "Ops, não peguei! Aperte o microfone, espere ele ficar verde e fale."
 },
 "HN_louder__2": {
  "who": "narr",
  "text": "Não deu pra entender. Vamos de novo? Quando o microfone ficar verde, fala."
 },
 "HN_wrong": {
  "who": "narr",
  "text": "Opa, essa não. Escute o Coach de novo!"
 },
 "HN_wrong__2": {
  "who": "narr",
  "text": "Hmm, não é essa. Presta atenção no Coach!"
 },
 "HN_pick": {
  "who": "narr",
  "text": "Tudo bem! Agora é só tocar no que você quer."
 },
 "H2_01": {
  "who": "narr",
  "text": "Bom dia, campeão! Depois da final, o Coach Max preparou um treino especial."
 },
 "H2_02": {
  "who": "narr",
  "text": "E tem novidade: no sábado tem revanche contra os Tubarões. O Big Tony mandou um recado!"
 },
 "T05": {
  "who": "tony",
  "text": "Champ! Saturday, no goals! Ha ha!"
 },
 "H2_03": {
  "who": "narr",
  "text": "Ele disse que no sábado não vai ter gol. Vamos treinar! Primeiro o Coach confere a mochila. Desta vez ele não fala a palavra antes: você lembra!"
 },
 "H2_04": {
  "who": "narr",
  "text": "Mochila pronta! Vamos pro campo!"
 },
 "H2_05": {
  "who": "narr",
  "text": "Olha quem veio treinar com você: o seu irmão Lucas! Ele joga no seu time."
 },
 "H2_06": {
  "who": "narr",
  "text": "Pass é passar a bola pro amigo. Escute o Coach e repita!"
 },
 "H2_07": {
  "who": "narr",
  "text": "Agora o Lucas vai cruzar a bola pro alto. Pra cabecear, você bate com a cabeça. Cabeça, em inglês, é..."
 },
 "H2_08": {
  "who": "narr",
  "text": "Agora o drible! Tem um zagueiro na frente. O Coach grita left, esquerda, ou right, direita. Toque na seta pro lado certo. Se quiser, dá um pulinho pro lado de verdade!"
 },
 "H2_09": {
  "who": "narr",
  "text": "Driblou! Agora o treino final: o Coach grita e você toca no que ele mandou. Passar, cabecear ou chutar!"
 },
 "H2_10": {
  "who": "narr",
  "text": "Chegou o sábado! Revanche contra os Tubarões! E o Big Tony está no gol."
 },
 "T06": {
  "who": "tony",
  "text": "No goals today champ!"
 },
 "H2_11": {
  "who": "narr",
  "text": "Henrique está com a bola, mas tem um Tubarão na frente! O Lucas está livre. O que você faz?"
 },
 "H2_12": {
  "who": "narr",
  "text": "O Lucas cruzou! A bola vem alta! Com o que você bate nela?"
 },
 "H2_13": {
  "who": "narr",
  "text": "Goool de cabeça! Um a zero!"
 },
 "T07": {
  "who": "tony",
  "text": "What? A header?"
 },
 "H2_14": {
  "who": "narr",
  "text": "Falta pra nós! Você escolhe o canto. Fala em inglês: left ou right?"
 },
 "H2_15": {
  "who": "narr",
  "text": "Goool! Dois a zero! É vitória!"
 },
 "T08": {
  "who": "tony",
  "text": "Okay, okay... You're good champ."
 },
 "H2_16": {
  "who": "narr",
  "text": "Você ganhou a medalha de Craque do Time!"
 },
 "H2_17": {
  "who": "narr",
  "text": "Agora um treino fora da tela! Chama o papai e pega uma bolinha de meia. O papai grita pass, head, left ou right, e você faz. Depois troca: você é o Coach!"
 },
 "HC2_what": {
  "who": "coach",
  "text": "What's this?"
 },
 "HC2_pass": {
  "who": "coach",
  "text": "Pass! Pass the ball!"
 },
 "HC2_head": {
  "who": "coach",
  "text": "Head! Head!"
 },
 "HC2_left": {
  "who": "coach",
  "text": "Left!"
 },
 "HC2_right": {
  "who": "coach",
  "text": "Right!"
 },
 "HC2_where": {
  "who": "coach",
  "text": "Left or right?"
 },
 "HC2_end": {
  "who": "coach",
  "text": "Great game champ! You're a team player!"
 },
 "E_pass": {
  "who": "coach",
  "text": "Nice pass! Teamwork!"
 },
 "E_head": {
  "who": "coach",
  "text": "Head! Great header!"
 },
 "E2_pass": {
  "who": "coach",
  "text": "Yes! Good pass!"
 },
 "E2_head": {
  "who": "coach",
  "text": "Header! Goal!"
 },
 "H3_01": {
  "who": "narr",
  "text": "Boa noite, campeão! Hoje é a Copa da Cidade, à noite, com fogos de artifício!"
 },
 "H3_02": {
  "who": "narr",
  "text": "Mas o Coach Max está preocupado. Escute."
 },
 "HC3_01": {
  "who": "coach",
  "text": "Oh no! Our goalkeeper is sick."
 },
 "HC3_01_pt": {
  "who": "narr",
  "text": "Ah, não! O nosso goleiro está doente."
 },
 "HC3_02": {
  "who": "coach",
  "text": "Henrique, you are the goalkeeper today!"
 },
 "HC3_02_pt": {
  "who": "narr",
  "text": "Henrique, você é o goleiro hoje!"
 },
 "H3_03": {
  "who": "narr",
  "text": "Goleiro é quem fica no gol e não deixa a bola entrar. E adivinha quem joga no ataque dos Tubarões?"
 },
 "T3_01": {
  "who": "tony",
  "text": "I'm Big Tony! Today I'm a striker. I kick very hard!"
 },
 "T3_01_pt": {
  "who": "narr",
  "text": "Eu sou o Big Tony! Hoje eu sou atacante. Eu chuto muito forte!"
 },
 "H3_04": {
  "who": "narr",
  "text": "Calma! O Coach vai te ensinar a ser goleiro. Primeiro, a mochila. Você lembra o nome?"
 },
 "H3_05": {
  "who": "narr",
  "text": "Muito bem! E tem uma coisa nova na mochila: luvas de goleiro!"
 },
 "HC3_03": {
  "who": "coach",
  "text": "Goalkeepers use their hands. Show me your hands!"
 },
 "HC3_03_pt": {
  "who": "narr",
  "text": "Goleiro usa as mãos. Me mostra as suas mãos!"
 },
 "H3_06": {
  "who": "narr",
  "text": "Mostra as mãos de verdade, bem abertas! Mãos, em inglês, é..."
 },
 "H3_07": {
  "who": "narr",
  "text": "Agora o treino no campo! O seu irmão Lucas vai chutar a bola pra você."
 },
 "HC3_04": {
  "who": "coach",
  "text": "Catch! Catch the ball!"
 },
 "HC3_04_pt": {
  "who": "narr",
  "text": "Agarra! Agarra a bola!"
 },
 "H3_08": {
  "who": "narr",
  "text": "O goleiro agarra a bola com as duas mãos. Agarrar, em inglês, é..."
 },
 "HC3_05": {
  "who": "coach",
  "text": "The ball is high! Jump!"
 },
 "HC3_05_pt": {
  "who": "narr",
  "text": "A bola está alta! Pula!"
 },
 "H3_09": {
  "who": "narr",
  "text": "Pular, em inglês, é... Escute, fale e pule de verdade!"
 },
 "H3_10": {
  "who": "narr",
  "text": "Agora o Coach grita pra onde a bola vai. Up é pra cima. Left, esquerda. Right, direita. Toque na seta e pule pro lado de verdade!"
 },
 "H3_11": {
  "who": "narr",
  "text": "Começa a Copa da Cidade! Henrique no gol!"
 },
 "T3_02": {
  "who": "tony",
  "text": "Here I come! Boom!"
 },
 "T3_02_pt": {
  "who": "narr",
  "text": "Lá vou eu! Bum!"
 },
 "H3_12": {
  "who": "narr",
  "text": "Que defesas! O Big Tony está ficando bravo!"
 },
 "T3_03": {
  "who": "tony",
  "text": "My super kick! The fire ball!"
 },
 "T3_03_pt": {
  "who": "narr",
  "text": "O meu superchute! A bola de fogo!"
 },
 "H3_13": {
  "who": "narr",
  "text": "A bola de fogo vem bem alta! O que você faz?"
 },
 "H3_14": {
  "who": "narr",
  "text": "Pulou! E agora, com as mãos, o que você faz com a bola?"
 },
 "T3_04": {
  "who": "tony",
  "text": "What? He caught my fire ball!"
 },
 "T3_04_pt": {
  "who": "narr",
  "text": "O quê? Ele pegou a minha bola de fogo!"
 },
 "H3_15": {
  "who": "narr",
  "text": "Mas está zero a zero, e falta só um minuto!"
 },
 "HC3_06": {
  "who": "coach",
  "text": "Henrique! Go! Go to the other goal!"
 },
 "HC3_06_pt": {
  "who": "narr",
  "text": "Henrique! Vai! Vai pro gol deles!"
 },
 "H3_16": {
  "who": "narr",
  "text": "Escanteio! O goleiro Henrique correu pra área deles! O Lucas cruzou a bola pro alto! Com o que você bate nela?"
 },
 "H3_17": {
  "who": "narr",
  "text": "Goool! Gol do goleiro! No último minuto! Grita gol em inglês, bem alto!"
 },
 "H3_18": {
  "who": "narr",
  "text": "Apita o juiz! Fim de jogo! Um a zero!"
 },
 "HC3_07": {
  "who": "coach",
  "text": "We win! We win the cup!"
 },
 "HC3_07_pt": {
  "who": "narr",
  "text": "A gente ganhou! A gente ganhou a copa!"
 },
 "H3_19": {
  "who": "narr",
  "text": "Ganhar, em inglês, é... Grita junto com o Coach!"
 },
 "T3_05": {
  "who": "tony",
  "text": "Okay... You are a super goalkeeper."
 },
 "T3_05_pt": {
  "who": "narr",
  "text": "Tá bom... Você é um supergoleiro."
 },
 "H3_20": {
  "who": "narr",
  "text": "Você ganhou a luva de ouro de Goleiro Paredão!"
 },
 "H3_21": {
  "who": "narr",
  "text": "Agora um treino fora da tela! Chama o papai e pega uma bolinha de meia. O papai joga e grita catch, jump, up, left ou right. Você defende! Depois troca: você chuta!"
 },
 "HC3_up": {
  "who": "coach",
  "text": "Up!"
 },
 "HC3_save": {
  "who": "coach",
  "text": "Great save!"
 },
 "HC3_save__2": {
  "who": "coach",
  "text": "Safe hands!"
 },
 "HC3_save__3": {
  "who": "coach",
  "text": "What a save!"
 },
 "E_hands": {
  "who": "coach",
  "text": "Big hands! Strong hands!"
 },
 "E_catch": {
  "who": "coach",
  "text": "Great catch! Safe hands!"
 },
 "E3_jump": {
  "who": "coach",
  "text": "Jump! What a jump!"
 },
 "E2_catch": {
  "who": "coach",
  "text": "Catch! The fire ball is safe!"
 },
 "E3_head": {
  "who": "coach",
  "text": "Header! Goal! Goal!"
 },
 "E3_goal": {
  "who": "coach",
  "text": "Goal! You're a super goalkeeper!"
 },
 "E_win": {
  "who": "coach",
  "text": "Yes! We win! Champions!"
 },
 "H4_01": {
  "who": "narr",
  "text": "Bom dia, campeão! Hoje o time tem uma surpresa. Escute o Coach."
 },
 "HC4_01": {
  "who": "coach",
  "text": "Look! We have a new friend!"
 },
 "HC4_01_pt": {
  "who": "narr",
  "text": "Olha! A gente tem um amigo novo!"
 },
 "HC4_02": {
  "who": "coach",
  "text": "This is Bolt. Bolt is a dog!"
 },
 "HC4_02_pt": {
  "who": "narr",
  "text": "Este é o Bolt. O Bolt é um cachorro!"
 },
 "H4_02": {
  "who": "narr",
  "text": "Cachorro, em inglês, é... Fala bem alto pro Bolt ouvir!"
 },
 "H4_03": {
  "who": "narr",
  "text": "Antes do treino, o Coach confere a mochila. Ele não fala a palavra: você lembra!"
 },
 "H4_04": {
  "who": "narr",
  "text": "Tudo pronto! Vamos pro campo. O Bolt vai junto!"
 },
 "H4_05": {
  "who": "narr",
  "text": "Ih! O Bolt pegou a bola e saiu correndo!"
 },
 "HC4_03": {
  "who": "coach",
  "text": "Stop! Stop, Bolt!"
 },
 "HC4_03_pt": {
  "who": "narr",
  "text": "Para! Para, Bolt!"
 },
 "H4_06": {
  "who": "narr",
  "text": "Parar, em inglês, é... Fala e faz assim: a mão aberta pra frente, bem forte!"
 },
 "H4_07": {
  "who": "narr",
  "text": "Agora o Bolt vai aprender truques! O Coach fala e você toca no desenho certo. Sit é senta. Come é vem cá."
 },
 "HC4_04": {
  "who": "coach",
  "text": "Bolt is a good dog!"
 },
 "HC4_04_pt": {
  "who": "narr",
  "text": "O Bolt é um cachorro bonzinho!"
 },
 "H4_08": {
  "who": "narr",
  "text": "Bom, em inglês, é... Fala pro Bolt e faz um carinho nele!"
 },
 "H4_09": {
  "who": "narr",
  "text": "Agora a corrida! Quem chega primeiro: você ou o Bolt?"
 },
 "HC4_05": {
  "who": "coach",
  "text": "Bolt is fast! Run fast!"
 },
 "HC4_05_pt": {
  "who": "narr",
  "text": "O Bolt é rápido! Corre rápido!"
 },
 "H4_10": {
  "who": "narr",
  "text": "Rápido, em inglês, é... Fala e corre no lugar, bem rapidinho!"
 },
 "H4_11": {
  "who": "narr",
  "text": "Empatou! Os dois são muito rápidos. Agora é hora do jogo contra os Tubarões!"
 },
 "T4_01": {
  "who": "tony",
  "text": "A dog? Ha ha! Dogs can't play soccer!"
 },
 "T4_01_pt": {
  "who": "narr",
  "text": "Um cachorro? Rá rá! Cachorro não joga futebol!"
 },
 "H4_12": {
  "who": "narr",
  "text": "Começou! O Henrique pegou a bola. Como você corre? Fala em inglês!"
 },
 "H4_13": {
  "who": "narr",
  "text": "Ih! O Bolt entrou no campo e pegou a bola de novo! O que você fala pra ele?"
 },
 "H4_14": {
  "who": "narr",
  "text": "O Bolt sentou e devolveu a bola, bonitinho. Ele foi bonzinho! Fala pra ele!"
 },
 "H4_15": {
  "who": "narr",
  "text": "Agora a bola é sua, na frente do gol! Escute o Coach!"
 },
 "H4_16": {
  "who": "narr",
  "text": "Goool! Grita gol em inglês, bem alto!"
 },
 "H4_17": {
  "who": "narr",
  "text": "Apita o juiz! Fim de jogo! Um a zero! O Bolt pula de alegria!"
 },
 "T4_02": {
  "who": "tony",
  "text": "Okay... Bolt is a good dog."
 },
 "T4_02_pt": {
  "who": "narr",
  "text": "Tá bom... O Bolt é um cachorro bonzinho."
 },
 "HC4_06": {
  "who": "coach",
  "text": "Great game! Bolt is our lucky dog!"
 },
 "HC4_06_pt": {
  "who": "narr",
  "text": "Grande jogo! O Bolt é o nosso cachorro da sorte!"
 },
 "H4_18": {
  "who": "narr",
  "text": "Você ganhou a medalha de Amigo do Bolt!"
 },
 "H4_19": {
  "who": "narr",
  "text": "Agora uma brincadeira fora da tela! Chama o papai. Ele grita fast, e você corre no lugar. Stop, você para tudo. Sit, você senta. Come, você vai até ele. Depois troca: você é o Coach!"
 },
 "HC4_sit": {
  "who": "coach",
  "text": "Sit!"
 },
 "HC4_come": {
  "who": "coach",
  "text": "Come!"
 },
 "HC4_good": {
  "who": "coach",
  "text": "Good dog!"
 },
 "HC4_good__2": {
  "who": "coach",
  "text": "Good boy!"
 },
 "HC4_good__3": {
  "who": "coach",
  "text": "Good job, Bolt!"
 },
 "HE4_dog": {
  "who": "coach",
  "text": "A dog! A happy dog!"
 },
 "HE4_stop": {
  "who": "coach",
  "text": "Stop! Bolt stops. Good boy!"
 },
 "HE4_good": {
  "who": "coach",
  "text": "Good! Good dog, Bolt!"
 },
 "HE4_fast": {
  "who": "coach",
  "text": "Fast! Super fast!"
 },
 "HE4_fast2": {
  "who": "coach",
  "text": "Fast! Go, go, go!"
 },
 "HE4_stop2": {
  "who": "coach",
  "text": "Stop! Thank you, Bolt!"
 },
 "HE4_good2": {
  "who": "coach",
  "text": "Good dog! You are the best, Bolt!"
 },
 "H5_01": {
  "who": "narr",
  "text": "Bom dia, campeão! Hoje tem futebol na praia! Areia, mar e muito sol. E o Bolt veio junto!"
 },
 "H5_qgood": {
  "who": "narr",
  "text": "O Bolt sentou bonitinho do seu lado. O que você fala pra ele?"
 },
 "H5_qstop": {
  "who": "narr",
  "text": "Opa! O Bolt está correndo pro mar! O que você fala?"
 },
 "H5_02": {
  "who": "narr",
  "text": "Agora olha pro céu. Escute o Coach."
 },
 "HC5_01": {
  "who": "coach",
  "text": "Look at the sun! It's very hot!"
 },
 "HC5_01_pt": {
  "who": "narr",
  "text": "Olha o sol! Está muito quente!"
 },
 "H5_03": {
  "who": "narr",
  "text": "Sol, em inglês, é... Fala e aponta pro céu!"
 },
 "H5_04": {
  "who": "narr",
  "text": "A areia está quente e o mar está frio! O Coach grita e você toca: hot é quente, cold é frio. Se quiser, pula como se o chão queimasse, ou treme de frio!"
 },
 "H5_05": {
  "who": "narr",
  "text": "Ufa! Com tanto calor, dá uma sede..."
 },
 "HC5_02": {
  "who": "coach",
  "text": "Drink water! Water is good!"
 },
 "HC5_02_pt": {
  "who": "narr",
  "text": "Bebe água! Água faz bem!"
 },
 "H5_06": {
  "who": "narr",
  "text": "Água, em inglês, é... Fala e faz que está bebendo!"
 },
 "H5_07": {
  "who": "narr",
  "text": "Olha quem apareceu na praia: o Big Tony! Mas ele está sozinho e triste."
 },
 "T5_01": {
  "who": "tony",
  "text": "My team is not here. I have no team..."
 },
 "T5_01_pt": {
  "who": "narr",
  "text": "O meu time não veio. Eu estou sem time..."
 },
 "HC5_03": {
  "who": "coach",
  "text": "Big Tony can play with us! He is our friend!"
 },
 "HC5_03_pt": {
  "who": "narr",
  "text": "O Big Tony pode jogar com a gente! Ele é nosso amigo!"
 },
 "H5_08": {
  "who": "narr",
  "text": "Amigo, em inglês, é... Chama o Big Tony e abre os braços!"
 },
 "T5_02": {
  "who": "tony",
  "text": "Thank you, Henrique!"
 },
 "T5_02_pt": {
  "who": "narr",
  "text": "Obrigado, Henrique!"
 },
 "H5_09": {
  "who": "narr",
  "text": "Começa o jogo na areia! Henrique, Lucas e Big Tony contra os Siris!"
 },
 "H5_10": {
  "who": "narr",
  "text": "O Henrique está com a bola, mas tem um Siri na frente! O Big Tony está livre. O que você faz?"
 },
 "H5_11": {
  "who": "narr",
  "text": "O Big Tony cruzou pro alto! Com o que você bate na bola?"
 },
 "T5_03": {
  "who": "tony",
  "text": "What a goal! Great header, my friend!"
 },
 "T5_03_pt": {
  "who": "narr",
  "text": "Que gol! Bela cabeçada, meu amigo!"
 },
 "H5_12": {
  "who": "narr",
  "text": "O Big Tony te elogiou. Quando alguém é legal com a gente, a gente agradece. Obrigado, em inglês, é... Fala e põe a mão no coração!"
 },
 "H5_13": {
  "who": "narr",
  "text": "Apita o juiz! Fim de jogo! Um a zero pros amigos!"
 },
 "H5_14": {
  "who": "narr",
  "text": "Grita bem alto em inglês: a gente ganhou!"
 },
 "H5_15": {
  "who": "narr",
  "text": "O sol está indo embora. O Big Tony quer dizer uma coisa."
 },
 "T5_04": {
  "who": "tony",
  "text": "You are my best friend!"
 },
 "T5_04_pt": {
  "who": "narr",
  "text": "Você é o meu melhor amigo!"
 },
 "H5_16": {
  "who": "narr",
  "text": "Responde pra ele: amigo, em inglês!"
 },
 "HC5_04": {
  "who": "coach",
  "text": "Friends play together. Great game!"
 },
 "HC5_04_pt": {
  "who": "narr",
  "text": "Amigos jogam juntos. Grande jogo!"
 },
 "H5_17": {
  "who": "narr",
  "text": "Você ganhou a concha de ouro de Amigo da Praia!"
 },
 "H5_18": {
  "who": "narr",
  "text": "Agora uma brincadeira fora da tela! O papai grita hot, e você pula como se o chão queimasse. Cold, você treme de frio. E no lanche, pede water e diz thank you!"
 },
 "HC5_hot": {
  "who": "coach",
  "text": "Hot!"
 },
 "HC5_cold": {
  "who": "coach",
  "text": "Cold!"
 },
 "HC5_hot2": {
  "who": "coach",
  "text": "Ouch! Hot sand!"
 },
 "HC5_cold2": {
  "who": "coach",
  "text": "Brrr! Cold water!"
 },
 "HE5_sun": {
  "who": "coach",
  "text": "The sun! Big and yellow!"
 },
 "HE5_water": {
  "who": "coach",
  "text": "Water! Glug, glug, glug!"
 },
 "HE5_friend": {
  "who": "tony",
  "text": "Friend? Yes! Friends!"
 },
 "HE5_thanks": {
  "who": "tony",
  "text": "You're welcome, friend!"
 },
 "HE5_friend2": {
  "who": "tony",
  "text": "Friends forever!"
 },
 "W_nova_wing": {
  "who": "nova",
  "text": "Wing."
 },
 "S_nova_wing": {
  "who": "nova",
  "text": "Wing... Wing."
 },
 "T_bip_wing_0": {
  "who": "bip",
  "text": "Wing começa fazendo biquinho, como se fosse falar u. Escute de novo:"
 },
 "T_bip_wing_1": {
  "who": "bip",
  "text": "Quase! No final, o som sai pelo nariz, sem fechar a boca. Escute de novo:"
 },
 "W_nova_rocket": {
  "who": "nova",
  "text": "Rocket."
 },
 "S_nova_rocket": {
  "who": "nova",
  "text": "Rocket... Rocket."
 },
 "T_bip_rocket_0": {
  "who": "bip",
  "text": "Rocket começa com o R do inglês: a língua fica enroladinha lá atrás, sem encostar em nada. E abre bem a boca. Escute:"
 },
 "T_bip_rocket_1": {
  "who": "bip",
  "text": "Quase! São dois pedacinhos: rá e quet. Fala os dois, sem pular o final. Escute:"
 },
 "W_nova_laser": {
  "who": "nova",
  "text": "Laser."
 },
 "S_nova_laser": {
  "who": "nova",
  "text": "Laser... Laser."
 },
 "T_bip_laser_0": {
  "who": "bip",
  "text": "Laser começa com lêi, bem aberto, como em lei. Escute:"
 },
 "T_bip_laser_1": {
  "who": "bip",
  "text": "Quase! No final vem zer, com o R enroladinho. Escute:"
 },
 "T_bip_laser_2": {
  "who": "bip",
  "text": "Começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes. Escute:"
 },
 "W_nova_light": {
  "who": "nova",
  "text": "Light."
 },
 "S_nova_light": {
  "who": "nova",
  "text": "Light... Light."
 },
 "T_bip_light_0": {
  "who": "bip",
  "text": "Light começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes de cima. Escute:"
 },
 "T_bip_light_1": {
  "who": "bip",
  "text": "Quase! No final tem um tê bem curtinho, quase mudo, sem i no final. Escute:"
 },
 "W_nova_red": {
  "who": "nova",
  "text": "Red."
 },
 "S_nova_red": {
  "who": "nova",
  "text": "Red... Red."
 },
 "T_bip_red_0": {
  "who": "bip",
  "text": "Red começa com o R do inglês: a língua fica enroladinha, sem encostar em nada. Escute:"
 },
 "W_nova_blue": {
  "who": "nova",
  "text": "Blue."
 },
 "S_nova_blue": {
  "who": "nova",
  "text": "Blue... Blue."
 },
 "T_bip_blue_0": {
  "who": "bip",
  "text": "Blue é rapidinho: junta o B com o L e termina fazendo biquinho. Escute:"
 },
 "W_nova_green": {
  "who": "nova",
  "text": "Green."
 },
 "S_nova_green": {
  "who": "nova",
  "text": "Green... Green."
 },
 "T_bip_green_0": {
  "who": "bip",
  "text": "Green tem um i bem comprido no meio, e o R enroladinho. Escute:"
 },
 "W_nova_go": {
  "who": "nova",
  "text": "Go."
 },
 "S_nova_go": {
  "who": "nova",
  "text": "Go... Go."
 },
 "T_bip_go_0": {
  "who": "bip",
  "text": "Go é curtinho e forte: começa com gô e termina fazendo biquinho. Escute:"
 },
 "W_nova_up": {
  "who": "nova",
  "text": "Up."
 },
 "W_nova_down": {
  "who": "nova",
  "text": "Down."
 },
 "W_nova_sword": {
  "who": "nova",
  "text": "Sword."
 },
 "S_nova_sword": {
  "who": "nova",
  "text": "Sword... Sword."
 },
 "T_bip_sword_0": {
  "who": "bip",
  "text": "Sword não fala o W! É só sórd, com o R enroladinho. Escute:"
 },
 "T_bip_sword_1": {
  "who": "bip",
  "text": "Quase! No final tem um d curtinho: sórd. Escute:"
 },
 "W_nova_shield": {
  "who": "nova",
  "text": "Shield."
 },
 "S_nova_shield": {
  "who": "nova",
  "text": "Shield... Shield."
 },
 "T_bip_shield_0": {
  "who": "bip",
  "text": "Shield começa com xis, como em xícara, e tem um i bem comprido. Escute:"
 },
 "T_bip_shield_1": {
  "who": "bip",
  "text": "Quase! No final a língua encosta atrás dos dentes, e vem um d curtinho: xíild. Escute:"
 },
 "W_nova_left": {
  "who": "nova",
  "text": "Left."
 },
 "S_nova_left": {
  "who": "nova",
  "text": "Left... Left."
 },
 "T_bip_left_0": {
  "who": "bip",
  "text": "Left tem o é bem aberto, e termina com f e t curtinhos. Escute:"
 },
 "T_bip_left_1": {
  "who": "bip",
  "text": "Left começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes. Escute:"
 },
 "W_nova_right": {
  "who": "nova",
  "text": "Right."
 },
 "S_nova_right": {
  "who": "nova",
  "text": "Right... Right."
 },
 "T_bip_right_0": {
  "who": "bip",
  "text": "Right começa com o R do inglês: a língua fica enroladinha lá atrás, sem encostar em nada. Escute:"
 },
 "T_bip_right_1": {
  "who": "bip",
  "text": "Quase! No final tem um t curtinho, quase mudo: ráit. Escute:"
 },
 "W_nova_yellow": {
  "who": "nova",
  "text": "Yellow."
 },
 "S_nova_yellow": {
  "who": "nova",
  "text": "Yellow... Yellow."
 },
 "T_bip_yellow_0": {
  "who": "bip",
  "text": "Yellow começa com iê, como em ioiô. Não é rélou, é iélou. Escute:"
 },
 "W_nova_purple": {
  "who": "nova",
  "text": "Purple."
 },
 "S_nova_purple": {
  "who": "nova",
  "text": "Purple... Purple."
 },
 "T_bip_purple_0": {
  "who": "bip",
  "text": "Purple tem um R enroladinho no meio: pâr-pou. Escute:"
 },
 "W_nova_open": {
  "who": "nova",
  "text": "Open."
 },
 "S_nova_open": {
  "who": "nova",
  "text": "Open... Open."
 },
 "T_bip_open_0": {
  "who": "bip",
  "text": "Open começa com ôu, fazendo biquinho no final do ô. Escute:"
 },
 "T_bip_open_1": {
  "who": "bip",
  "text": "Quase! São dois pedacinhos: ôu e pen. Escute:"
 },
 "W_nova_jump": {
  "who": "nova",
  "text": "Jump."
 },
 "S_nova_jump": {
  "who": "nova",
  "text": "Jump... Jump."
 },
 "T_bip_jump_0": {
  "who": "bip",
  "text": "Jump começa com dj, juntinho, como em djembê. Escute:"
 },
 "T_bip_jump_1": {
  "who": "bip",
  "text": "Quase! No final a boca fecha: mp. Escute:"
 },
 "W_nova_help": {
  "who": "nova",
  "text": "Help."
 },
 "S_nova_help": {
  "who": "nova",
  "text": "Help... Help."
 },
 "T_bip_help_0": {
  "who": "bip",
  "text": "Help começa com um sopro, como uma risadinha: rrr. Não é o R enrolado, é só o ar. Escute:"
 },
 "T_bip_help_1": {
  "who": "bip",
  "text": "Quase! No final a boca fecha: p. Escute:"
 },
 "W_nova_fly": {
  "who": "nova",
  "text": "Fly."
 },
 "S_nova_fly": {
  "who": "nova",
  "text": "Fly... Fly."
 },
 "T_bip_fly_0": {
  "who": "bip",
  "text": "Fly tem o L, não o R: depois do f, a pontinha da língua encosta atrás dos dentes. Escute:"
 },
 "T_bip_fly_1": {
  "who": "bip",
  "text": "Quase! Começa com f e l juntinhos: flái. Escute:"
 },
 "W_nova_stop": {
  "who": "nova",
  "text": "Stop."
 },
 "S_nova_stop": {
  "who": "nova",
  "text": "Stop... Stop."
 },
 "T_bip_stop_0": {
  "who": "bip",
  "text": "Stop começa com um sss de cobra, colado no t: sss-tóp. Escute:"
 },
 "T_bip_stop_1": {
  "who": "bip",
  "text": "Quase! No final a boca fecha: p. Escute:"
 },
 "W_nova_thanks": {
  "who": "nova",
  "text": "Thank you."
 },
 "S_nova_thanks": {
  "who": "nova",
  "text": "Thank you... Thank you."
 },
 "T_bip_thanks_0": {
  "who": "bip",
  "text": "Thank you começa com a pontinha da língua entre os dentes, soprando um ventinho: th. Escute:"
 },
 "T_bip_thanks_1": {
  "who": "bip",
  "text": "Quase! Fala as duas partes: thank... you. Escute:"
 },
 "W_nova_cold": {
  "who": "nova",
  "text": "Cold."
 },
 "S_nova_cold": {
  "who": "nova",
  "text": "Cold... Cold."
 },
 "T_bip_cold_0": {
  "who": "bip",
  "text": "Cold começa com k, e o ô termina num biquinho: kôu. Escute:"
 },
 "T_bip_cold_1": {
  "who": "bip",
  "text": "Quase! No final tem um L e um d curtinho: kôuld. Escute:"
 },
 "W_nova_fire": {
  "who": "nova",
  "text": "Fire."
 },
 "S_nova_fire": {
  "who": "nova",
  "text": "Fire... Fire."
 },
 "T_bip_fire_0": {
  "who": "bip",
  "text": "Fire começa com f: os dentes de cima encostam no lábio de baixo e sai um ventinho. Escute:"
 },
 "T_bip_fire_1": {
  "who": "bip",
  "text": "Quase! No final tem um R enroladinho: fáier. Escute:"
 },
 "W_nova_hello": {
  "who": "nova",
  "text": "Hello."
 },
 "S_nova_hello": {
  "who": "nova",
  "text": "Hello... Hello."
 },
 "T_bip_hello_0": {
  "who": "bip",
  "text": "Hello começa com um sopro, como uma risadinha: rrr. Não é iê, é rre. Escute:"
 },
 "T_bip_hello_1": {
  "who": "bip",
  "text": "Quase! São dois pedacinhos: rre e lôu. Escute:"
 },
 "W_nova_friend": {
  "who": "nova",
  "text": "Friend."
 },
 "S_nova_friend": {
  "who": "nova",
  "text": "Friend... Friend."
 },
 "T_bip_friend_0": {
  "who": "bip",
  "text": "Friend começa com f e o R enroladinho, juntinhos: fr. Escute:"
 },
 "T_bip_friend_1": {
  "who": "bip",
  "text": "Quase! No final tem n e d: frénd. Escute:"
 },
 "W_coach_yes": {
  "who": "coach",
  "text": "Yes."
 },
 "S_coach_yes": {
  "who": "coach",
  "text": "Yes... Yes."
 },
 "T_narr_yes_0": {
  "who": "narr",
  "text": "Yes começa com iê e termina com um sss de cobra. Escute:"
 },
 "W_coach_red": {
  "who": "coach",
  "text": "Red."
 },
 "S_coach_red": {
  "who": "coach",
  "text": "Red... Red."
 },
 "T_narr_red_0": {
  "who": "narr",
  "text": "Red começa com o R do inglês: a língua fica enroladinha, sem encostar em nada. Escute:"
 },
 "W_coach_blue": {
  "who": "coach",
  "text": "Blue."
 },
 "S_coach_blue": {
  "who": "coach",
  "text": "Blue... Blue."
 },
 "T_narr_blue_0": {
  "who": "narr",
  "text": "Blue é rapidinho: junta o B com o L e termina fazendo biquinho. Escute:"
 },
 "W_coach_yellow": {
  "who": "coach",
  "text": "Yellow."
 },
 "S_coach_yellow": {
  "who": "coach",
  "text": "Yellow... Yellow."
 },
 "T_narr_yellow_0": {
  "who": "narr",
  "text": "Yellow começa com iê, como em ioiô. Não é rélou, é iélou. Escute:"
 },
 "W_coach_shoes": {
  "who": "coach",
  "text": "Shoes."
 },
 "S_coach_shoes": {
  "who": "coach",
  "text": "Shoes... Shoes."
 },
 "T_narr_shoes_0": {
  "who": "narr",
  "text": "Shoes começa com xis, como em xícara, faz biquinho, e termina zumbindo como abelha: zzz. Escute:"
 },
 "W_coach_ball": {
  "who": "coach",
  "text": "Ball."
 },
 "S_coach_ball": {
  "who": "coach",
  "text": "Ball... Ball."
 },
 "T_narr_ball_0": {
  "who": "narr",
  "text": "Ball tem um ó bem aberto, com a boca grande. E no final a língua encosta atrás dos dentes. Escute:"
 },
 "W_coach_goal": {
  "who": "coach",
  "text": "Goal."
 },
 "S_coach_goal": {
  "who": "coach",
  "text": "Goal... Goal."
 },
 "T_narr_goal_0": {
  "who": "narr",
  "text": "Goal começa com gôu e termina com a língua encostando atrás dos dentes, como um L. Escute:"
 },
 "W_coach_run": {
  "who": "coach",
  "text": "Run."
 },
 "W_coach_kick": {
  "who": "coach",
  "text": "Kick."
 },
 "W_coach_pass": {
  "who": "coach",
  "text": "Pass."
 },
 "S_coach_pass": {
  "who": "coach",
  "text": "Pass... Pass."
 },
 "T_narr_pass_0": {
  "who": "narr",
  "text": "Pass começa com P, soprando, sem voz. E termina com sss de cobra. Escute:"
 },
 "T_narr_pass_1": {
  "who": "narr",
  "text": "Quase! A boca abre bem no meio, péss, e termina com sss de cobra. Escute:"
 },
 "W_coach_head": {
  "who": "coach",
  "text": "Head."
 },
 "S_coach_head": {
  "who": "coach",
  "text": "Head... Head."
 },
 "T_narr_head_0": {
  "who": "narr",
  "text": "Head começa com um sopro, como uma risadinha: rrr. E não é o R enrolado, é só o ar. Escute:"
 },
 "T_narr_head_1": {
  "who": "narr",
  "text": "Quase! No final tem um d curtinho: rréd. Escute:"
 },
 "W_coach_left": {
  "who": "coach",
  "text": "Left."
 },
 "S_coach_left": {
  "who": "coach",
  "text": "Left... Left."
 },
 "T_narr_left_0": {
  "who": "narr",
  "text": "Left tem o é bem aberto, e termina com f e t curtinhos. Escute:"
 },
 "T_narr_left_1": {
  "who": "narr",
  "text": "Left começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes. Escute:"
 },
 "W_coach_right": {
  "who": "coach",
  "text": "Right."
 },
 "S_coach_right": {
  "who": "coach",
  "text": "Right... Right."
 },
 "T_narr_right_0": {
  "who": "narr",
  "text": "Right começa com o R do inglês: a língua fica enroladinha lá atrás, sem encostar em nada. Escute:"
 },
 "T_narr_right_1": {
  "who": "narr",
  "text": "Quase! No final tem um t curtinho, quase mudo: ráit. Escute:"
 },
 "W_coach_hands": {
  "who": "coach",
  "text": "Hands."
 },
 "S_coach_hands": {
  "who": "coach",
  "text": "Hands... Hands."
 },
 "T_narr_hands_0": {
  "who": "narr",
  "text": "Hands começa com um sopro, como uma risadinha: rrr. Não é o R enrolado, é só o ar. Escute:"
 },
 "T_narr_hands_1": {
  "who": "narr",
  "text": "Quase! No final tem n, d e um zzz de abelha: rrénds. Escute:"
 },
 "W_coach_catch": {
  "who": "coach",
  "text": "Catch."
 },
 "S_coach_catch": {
  "who": "coach",
  "text": "Catch... Catch."
 },
 "T_narr_catch_0": {
  "who": "narr",
  "text": "Catch começa com k e termina com tch, como em tchau: kétch. Escute:"
 },
 "T_narr_catch_1": {
  "who": "narr",
  "text": "Quase! No final tem um tch, como em tchau: kétch. Escute:"
 },
 "W_coach_jump": {
  "who": "coach",
  "text": "Jump."
 },
 "S_coach_jump": {
  "who": "coach",
  "text": "Jump... Jump."
 },
 "T_narr_jump_0": {
  "who": "narr",
  "text": "Jump começa com dj, juntinho, como em djembê. Escute:"
 },
 "T_narr_jump_1": {
  "who": "narr",
  "text": "Quase! No final a boca fecha: mp. Escute:"
 },
 "W_coach_win": {
  "who": "coach",
  "text": "Win."
 },
 "S_coach_win": {
  "who": "coach",
  "text": "Win... Win."
 },
 "T_narr_win_0": {
  "who": "narr",
  "text": "Win começa com biquinho, como um u rapidinho, e o i é curtinho: uín. Escute:"
 },
 "T_narr_win_1": {
  "who": "narr",
  "text": "Quase! No final tem um n, que sai pelo nariz: uín. Escute:"
 },
 "W_coach_dog": {
  "who": "coach",
  "text": "Dog."
 },
 "S_coach_dog": {
  "who": "coach",
  "text": "Dog... Dog."
 },
 "T_narr_dog_0": {
  "who": "narr",
  "text": "Dog começa com d, e o ó é bem aberto, de boca grande: dóg. Escute:"
 },
 "T_narr_dog_1": {
  "who": "narr",
  "text": "Quase! No final tem um g, que sai lá do fundo da garganta: dóg. Escute:"
 },
 "W_coach_stop": {
  "who": "coach",
  "text": "Stop."
 },
 "S_coach_stop": {
  "who": "coach",
  "text": "Stop... Stop."
 },
 "T_narr_stop_0": {
  "who": "narr",
  "text": "Stop começa com um sss de cobra, colado no t: sss-tóp. Escute:"
 },
 "T_narr_stop_1": {
  "who": "narr",
  "text": "Quase! No final a boca fecha: p. Escute:"
 },
 "W_coach_good": {
  "who": "coach",
  "text": "Good."
 },
 "S_coach_good": {
  "who": "coach",
  "text": "Good... Good."
 },
 "T_narr_good_0": {
  "who": "narr",
  "text": "Good começa com g, e o u é curtinho, quase um ô: gúd. Escute:"
 },
 "T_narr_good_1": {
  "who": "narr",
  "text": "Quase! No final tem um d: a língua bate atrás dos dentes. Escute:"
 },
 "W_coach_fast": {
  "who": "coach",
  "text": "Fast."
 },
 "S_coach_fast": {
  "who": "coach",
  "text": "Fast... Fast."
 },
 "T_narr_fast_0": {
  "who": "narr",
  "text": "Fast começa com f, de ventinho: os dentes de cima no lábio de baixo. E o a é bem aberto: fést. Escute:"
 },
 "T_narr_fast_1": {
  "who": "narr",
  "text": "Quase! No final tem s e t juntinhos: fést. Escute:"
 },
 "W_coach_sun": {
  "who": "coach",
  "text": "Sun."
 },
 "S_coach_sun": {
  "who": "coach",
  "text": "Sun... Sun."
 },
 "T_narr_sun_0": {
  "who": "narr",
  "text": "Sun começa com sss de cobra, e o u soa como â, curtinho: sân. Escute:"
 },
 "T_narr_sun_1": {
  "who": "narr",
  "text": "Quase! No final tem um n, que sai pelo nariz: sân. Escute:"
 },
 "W_coach_water": {
  "who": "coach",
  "text": "Water."
 },
 "S_coach_water": {
  "who": "coach",
  "text": "Water... Water."
 },
 "T_narr_water_0": {
  "who": "narr",
  "text": "Water começa com biquinho, como um u rapidinho: uó. Escute:"
 },
 "T_narr_water_1": {
  "who": "narr",
  "text": "Quase! No final tem um ter, com a língua batendo atrás dos dentes: uóter. Escute:"
 },
 "W_coach_friend": {
  "who": "coach",
  "text": "Friend."
 },
 "S_coach_friend": {
  "who": "coach",
  "text": "Friend... Friend."
 },
 "T_narr_friend_0": {
  "who": "narr",
  "text": "Friend começa com f e o R enroladinho, juntinhos: fr. Escute:"
 },
 "T_narr_friend_1": {
  "who": "narr",
  "text": "Quase! No final tem n e d: frénd. Escute:"
 },
 "W_coach_thanks": {
  "who": "coach",
  "text": "Thank you."
 },
 "S_coach_thanks": {
  "who": "coach",
  "text": "Thank you... Thank you."
 },
 "T_narr_thanks_0": {
  "who": "narr",
  "text": "Thank you começa com a pontinha da língua entre os dentes, soprando um ventinho: th. Escute:"
 },
 "T_narr_thanks_1": {
  "who": "narr",
  "text": "Quase! Fala as duas partes: thank... you. Escute:"
 }
};
const VOCAB = {
 "wing": {
  "pt": "asa",
  "say": "uíng",
  "icon": "✈️",
  "ok": [
   "wing",
   "wings",
   "wink",
   "wig",
   "ween",
   "weeing"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "ring",
    "being",
    "king",
    "thing",
    "sing",
    "bing",
    "ding",
    "swing"
   ],
   [
    "win",
    "when",
    "wind",
    "wig",
    "wink",
    "wit",
    "we",
    "winner",
    "wean",
    "ween",
    "wine"
   ]
  ],
  "tips": [
   "Wing começa fazendo biquinho, como se fosse falar u. Escute de novo:",
   "Quase! No final, o som sai pelo nariz, sem fechar a boca. Escute de novo:"
  ]
 },
 "rocket": {
  "pt": "foguete",
  "say": "rá-quet",
  "icon": "🚀",
  "ok": [
   "rocket",
   "rockets",
   "rock it",
   "rocked it",
   "rockit",
   "racket",
   "rocking"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "pocket",
    "locket",
    "socket",
    "racket",
    "raquet",
    "rack it",
    "jacket",
    "hockey"
   ],
   [
    "rock",
    "rocky",
    "rocked",
    "rocks",
    "rockin",
    "rok",
    "rocco"
   ]
  ],
  "tips": [
   "Rocket começa com o R do inglês: a língua fica enroladinha lá atrás, sem encostar em nada. E abre bem a boca. Escute:",
   "Quase! São dois pedacinhos: rá e quet. Fala os dois, sem pular o final. Escute:"
  ]
 },
 "laser": {
  "pt": "laser",
  "say": "lêi-zer",
  "icon": "⚡",
  "ok": [
   "laser",
   "lasers",
   "lazer",
   "lazers",
   "lacer",
   "laze her",
   "lays her"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "loser",
    "lesser",
    "leisure",
    "lousy",
    "looser",
    "user",
    "lasagna"
   ],
   [
    "lazy",
    "lady",
    "lacy",
    "layer",
    "later",
    "lace",
    "laces",
    "lay",
    "lays"
   ],
   [
    "razor",
    "racer",
    "raiser",
    "raser",
    "riser"
   ]
  ],
  "tips": [
   "Laser começa com lêi, bem aberto, como em lei. Escute:",
   "Quase! No final vem zer, com o R enroladinho. Escute:",
   "Começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes. Escute:"
  ]
 },
 "light": {
  "pt": "luz",
  "say": "lái-t",
  "icon": "💡",
  "ok": [
   "light",
   "lights",
   "lite",
   "lighty",
   "lighter",
   "lighting",
   "light it",
   "lie it"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "white",
    "right",
    "write",
    "night",
    "bright",
    "fight",
    "might",
    "wide",
    "ride",
    "height",
    "kite",
    "quite",
    "rite",
    "wright",
    "why",
    "wait",
    "eight",
    "ight",
    "hi",
    "high"
   ],
   [
    "like",
    "life",
    "line",
    "lie",
    "lied",
    "lies",
    "lime",
    "lighty",
    "lighter",
    "lighting",
    "lightning",
    "alike",
    "lion",
    "lay"
   ]
  ],
  "tips": [
   "Light começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes de cima. Escute:",
   "Quase! No final tem um tê bem curtinho, quase mudo, sem i no final. Escute:"
  ]
 },
 "red": {
  "pt": "vermelho",
  "say": "réd",
  "icon": "🔴",
  "ok": [
   "red",
   "reds",
   "rad",
   "read",
   "redd",
   "rid",
   "reddit"
  ],
  "near": [
   [
    "wed",
    "bed",
    "head",
    "fed",
    "had",
    "rad",
    "rat",
    "ret",
    "rent",
    "ready",
    "raid",
    "rid",
    "bread",
    "dread",
    "hey",
    "ed",
    "head"
   ]
  ],
  "tips": [
   "Red começa com o R do inglês: a língua fica enroladinha, sem encostar em nada. Escute:"
  ]
 },
 "blue": {
  "pt": "azul",
  "say": "blu",
  "icon": "🔵",
  "ok": [
   "blue",
   "blew",
   "blues",
   "bleu",
   "blu",
   "bluey",
   "balloo"
  ],
  "near": [
   [
    "blow",
    "below",
    "glue",
    "boo",
    "bloom",
    "blur",
    "bleu",
    "plu",
    "pool",
    "bull",
    "balloon",
    "bluey",
    "flu",
    "blood"
   ]
  ],
  "tips": [
   "Blue é rapidinho: junta o B com o L e termina fazendo biquinho. Escute:"
  ]
 },
 "green": {
  "pt": "verde",
  "say": "griin",
  "icon": "🟢",
  "ok": [
   "green",
   "greens",
   "grin",
   "gree",
   "greeny",
   "greene"
  ],
  "near": [
   [
    "grin",
    "queen",
    "cream",
    "grain",
    "screen",
    "greet",
    "grim",
    "gringo",
    "clean",
    "gree",
    "grey",
    "gray",
    "grand",
    "brin",
    "cringe"
   ]
  ],
  "tips": [
   "Green tem um i bem comprido no meio, e o R enroladinho. Escute:"
  ]
 },
 "yellow": {
  "pt": "amarelo",
  "say": "iélou",
  "icon": "🟡",
  "ok": [
   "yellow",
   "yellows",
   "yelo",
   "yello",
   "hello",
   "jello",
   "ello"
  ],
  "near": [
   [
    "hello",
    "jello",
    "fellow",
    "mellow",
    "yell",
    "yelo",
    "hallo",
    "hollow",
    "halo",
    "ello",
    "allo",
    "below",
    "hey low",
    "yo"
   ]
  ],
  "tips": [
   "Yellow começa com iê, como em ioiô. Não é rélou, é iélou. Escute:"
  ]
 },
 "go": {
  "pt": "vai!",
  "say": "gôu",
  "icon": "🏁",
  "ok": [
   "go",
   "goes",
   "gogo",
   "go go",
   "gone",
   "gol"
  ],
  "near": [
   [
    "no",
    "oh",
    "so",
    "ho",
    "good",
    "gone",
    "goal",
    "girl",
    "cold",
    "got",
    "know",
    "dough",
    "toe",
    "coal",
    "cool",
    "call"
   ]
  ],
  "tips": [
   "Go é curtinho e forte: começa com gô e termina fazendo biquinho. Escute:"
  ]
 },
 "yes": {
  "pt": "sim",
  "say": "iés",
  "icon": "👍",
  "ok": [
   "yes",
   "yeah",
   "yep",
   "yup",
   "yea"
  ],
  "near": [
   [
    "jess",
    "chess",
    "guess",
    "yet",
    "this",
    "is",
    "ice",
    "s",
    "say",
    "yas",
    "jazz",
    "dress",
    "less",
    "east",
    "jesus",
    "his"
   ]
  ],
  "tips": [
   "Yes começa com iê e termina com um sss de cobra. Escute:"
  ]
 },
 "shoes": {
  "pt": "chuteiras",
  "say": "xúz",
  "icon": "👟",
  "ok": [
   "shoes",
   "shoe",
   "choose",
   "shoos",
   "chews"
  ],
  "near": [
   [
    "juice",
    "shows",
    "sues",
    "shoot",
    "shoots",
    "sushi",
    "suits",
    "zoos",
    "soup",
    "sure",
    "shush",
    "shoo",
    "jews",
    "news",
    "suit",
    "shorts",
    "show"
   ]
  ],
  "tips": [
   "Shoes começa com xis, como em xícara, faz biquinho, e termina zumbindo como abelha: zzz. Escute:"
  ]
 },
 "ball": {
  "pt": "bola",
  "say": "bóol",
  "icon": "⚽",
  "ok": [
   "ball",
   "balls"
  ],
  "near": [
   [
    "bowl",
    "bull",
    "bow",
    "bill",
    "bell",
    "paul",
    "boo",
    "bo",
    "bol",
    "bowel",
    "boll",
    "bold",
    "both",
    "bro",
    "pole",
    "poll",
    "boat",
    "bob",
    "bowls",
    "all"
   ]
  ],
  "tips": [
   "Ball tem um ó bem aberto, com a boca grande. E no final a língua encosta atrás dos dentes. Escute:"
  ]
 },
 "goal": {
  "pt": "gol",
  "say": "gôul",
  "icon": "🥅",
  "ok": [
   "goal",
   "goals"
  ],
  "near": [
   [
    "go",
    "gold",
    "call",
    "cool",
    "girl",
    "ghoul",
    "coal",
    "gone",
    "golf",
    "good",
    "gol",
    "cold",
    "gall",
    "goat",
    "col",
    "cole",
    "gull",
    "ball"
   ]
  ],
  "tips": [
   "Goal começa com gôu e termina com a língua encostando atrás dos dentes, como um L. Escute:"
  ]
 },
 "sword": {
  "pt": "espada",
  "say": "sórd",
  "icon": "🗡️",
  "ok": [
   "sword",
   "swords",
   "soared",
   "sord",
   "sward",
   "swore",
   "sored",
   "swored",
   "sorde",
   "sort"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "word",
    "words",
    "swore",
    "swear",
    "sward",
    "swat",
    "sweet",
    "sweat",
    "squad",
    "swirl",
    "world"
   ],
   [
    "sore",
    "saw",
    "soar",
    "sorry",
    "sort",
    "short",
    "store",
    "sauce",
    "sort of",
    "source",
    "so"
   ]
  ],
  "tips": [
   "Sword não fala o W! É só sórd, com o R enroladinho. Escute:",
   "Quase! No final tem um d curtinho: sórd. Escute:"
  ]
 },
 "shield": {
  "pt": "escudo",
  "say": "xíild",
  "icon": "🛡️",
  "ok": [
   "shield",
   "shields",
   "sheild",
   "shielded",
   "she ll",
   "sheeld",
   "shealed",
   "shilled",
   "shild"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "field",
    "sealed",
    "yield",
    "steel",
    "feel",
    "seal",
    "filled",
    "fields",
    "build"
   ],
   [
    "she",
    "sheet",
    "sheep",
    "cheese",
    "chill",
    "shell",
    "shill",
    "she will",
    "shelled",
    "child",
    "chilled",
    "cheap"
   ]
  ],
  "tips": [
   "Shield começa com xis, como em xícara, e tem um i bem comprido. Escute:",
   "Quase! No final a língua encosta atrás dos dentes, e vem um d curtinho: xíild. Escute:"
  ]
 },
 "pass": {
  "pt": "passar",
  "say": "péss",
  "icon": "🤝",
  "ok": [
   "pass",
   "passed",
   "past",
   "passes",
   "pas",
   "pasta",
   "passy"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "bus",
    "bass",
    "bath",
    "bats",
    "buzz",
    "boss",
    "bess"
   ],
   [
    "pus",
    "push",
    "posh",
    "puss",
    "pause",
    "paws",
    "pose",
    "pace",
    "piece",
    "peace",
    "path",
    "pat",
    "pack",
    "pa",
    "pop",
    "perhaps"
   ]
  ],
  "tips": [
   "Pass começa com P, soprando, sem voz. E termina com sss de cobra. Escute:",
   "Quase! A boca abre bem no meio, péss, e termina com sss de cobra. Escute:"
  ]
 },
 "head": {
  "pt": "cabeça",
  "say": "rréd",
  "icon": "🙆",
  "ok": [
   "head",
   "heads",
   "headed",
   "hed"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "red",
    "bed",
    "dead",
    "said",
    "fed",
    "led",
    "wed",
    "ed",
    "ted",
    "and",
    "add",
    "edge",
    "bread"
   ],
   [
    "hey",
    "hay",
    "hair",
    "heat",
    "hit",
    "hid",
    "hide",
    "hood",
    "hat",
    "hen",
    "her",
    "help",
    "hell",
    "had"
   ]
  ],
  "tips": [
   "Head começa com um sopro, como uma risadinha: rrr. E não é o R enrolado, é só o ar. Escute:",
   "Quase! No final tem um d curtinho: rréd. Escute:"
  ]
 },
 "left": {
  "pt": "esquerda",
  "say": "léft",
  "icon": "⬅️",
  "ok": [
   "left",
   "lefts",
   "lefty",
   "lift",
   "laughed"
  ],
  "almost": [
   0
  ],
  "near": [
   [
    "lift",
    "laughed",
    "let",
    "less",
    "lest",
    "leaf",
    "loft",
    "list",
    "lap",
    "lev",
    "lef",
    "lifts"
   ],
   [
    "rift",
    "raft",
    "west",
    "wept",
    "theft",
    "deft",
    "after",
    "death",
    "net",
    "next"
   ]
  ],
  "tips": [
   "Left tem o é bem aberto, e termina com f e t curtinhos. Escute:",
   "Left começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes. Escute:"
  ]
 },
 "right": {
  "pt": "direita",
  "say": "ráit",
  "icon": "➡️",
  "ok": [
   "right",
   "rights",
   "write",
   "rite",
   "wright",
   "alright",
   "all right",
   "righty",
   "writ"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "light",
    "white",
    "bright",
    "night",
    "like",
    "lite",
    "height",
    "why",
    "wait",
    "fight",
    "quite",
    "kite",
    "hi",
    "high",
    "hide",
    "wide"
   ],
   [
    "rye",
    "rider",
    "ride",
    "rise",
    "ripe",
    "rice",
    "ryan",
    "rain",
    "rhyme",
    "riot",
    "rival"
   ]
  ],
  "tips": [
   "Right começa com o R do inglês: a língua fica enroladinha lá atrás, sem encostar em nada. Escute:",
   "Quase! No final tem um t curtinho, quase mudo: ráit. Escute:"
  ]
 },
 "purple": {
  "pt": "roxo",
  "say": "pârpou",
  "icon": "🟣",
  "ok": [
   "purple",
   "purples",
   "purpo",
   "purpel",
   "perple"
  ],
  "near": [
   [
    "people",
    "paper",
    "maple",
    "pupil",
    "apple",
    "popple",
    "bubble",
    "pebble",
    "purse",
    "purr",
    "pepper",
    "puppy"
   ]
  ],
  "tips": [
   "Purple tem um R enroladinho no meio: pâr-pou. Escute:"
  ]
 },
 "open": {
  "pt": "abrir",
  "say": "ôu-pen",
  "icon": "🚪",
  "ok": [
   "open",
   "opened",
   "opens",
   "opening",
   "oppen",
   "opan",
   "o pen",
   "oh pen",
   "hopen"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "hoping",
    "hope",
    "oak",
    "oven",
    "often",
    "apple",
    "happen",
    "up and",
    "opal",
    "upon",
    "pen"
   ],
   [
    "ope",
    "oh",
    "oppa",
    "opa",
    "hope in",
    "ocean",
    "olive"
   ]
  ],
  "tips": [
   "Open começa com ôu, fazendo biquinho no final do ô. Escute:",
   "Quase! São dois pedacinhos: ôu e pen. Escute:"
  ]
 },
 "jump": {
  "pt": "pular",
  "say": "djâmp",
  "icon": "🦘",
  "ok": [
   "jump",
   "jumps",
   "jumped",
   "jumping",
   "jumpy",
   "jumper",
   "champ",
   "chump"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "dump",
    "jam",
    "john",
    "junk",
    "gum",
    "jungle",
    "jim",
    "joe",
    "pump",
    "bump",
    "lump",
    "yum"
   ],
   [
    "jum",
    "jun",
    "june",
    "jumble",
    "jumbo",
    "just",
    "jug"
   ]
  ],
  "tips": [
   "Jump começa com dj, juntinho, como em djembê. Escute:",
   "Quase! No final a boca fecha: mp. Escute:"
  ]
 },
 "help": {
  "pt": "ajuda",
  "say": "rrélp",
  "icon": "🆘",
  "ok": [
   "help",
   "helps",
   "helped",
   "helping",
   "helper",
   "help me",
   "elp"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "yelp",
    "kelp",
    "elf",
    "self",
    "shelf",
    "well",
    "fell",
    "tell",
    "bell",
    "yell",
    "health",
    "hope",
    "hip",
    "hop"
   ],
   [
    "hell",
    "held",
    "hel",
    "helm",
    "hells"
   ]
  ],
  "tips": [
   "Help começa com um sopro, como uma risadinha: rrr. Não é o R enrolado, é só o ar. Escute:",
   "Quase! No final a boca fecha: p. Escute:"
  ]
 },
 "fly": {
  "pt": "voar",
  "say": "flái",
  "icon": "🕊️",
  "ok": [
   "fly",
   "flies",
   "flying",
   "flight",
   "fli",
   "flai",
   "fly fly"
  ],
  "near": [
   [
    "fry",
    "fried",
    "fries",
    "free",
    "pry",
    "frye",
    "cry",
    "try",
    "dry"
   ],
   [
    "five",
    "fine",
    "fight",
    "fi",
    "fai",
    "hi",
    "high",
    "why",
    "buy",
    "bye",
    "pie",
    "sky",
    "lie",
    "flip",
    "flat"
   ]
  ],
  "tips": [
   "Fly tem o L, não o R: depois do f, a pontinha da língua encosta atrás dos dentes. Escute:",
   "Quase! Começa com f e l juntinhos: flái. Escute:"
  ]
 },
 "stop": {
  "pt": "parar",
  "say": "stóp",
  "icon": "✋",
  "ok": [
   "stop",
   "stops",
   "stopped",
   "stopping",
   "stoppe",
   "is top",
   "es top"
  ],
  "near": [
   [
    "top",
    "tops",
    "stuff",
    "step",
    "stock",
    "shop",
    "spot",
    "chop",
    "pop",
    "stomp",
    "dop"
   ],
   [
    "stuck",
    "store",
    "storm",
    "start",
    "star",
    "stone",
    "stall",
    "stall",
    "stole"
   ]
  ],
  "tips": [
   "Stop começa com um sss de cobra, colado no t: sss-tóp. Escute:",
   "Quase! No final a boca fecha: p. Escute:"
  ]
 },
 "thanks": {
  "pt": "obrigado",
  "label": "thank you",
  "say": "tênk-iú",
  "icon": "🙏",
  "ok": [
   "thank you",
   "thanks",
   "thank",
   "thankyou",
   "thank ya",
   "thanks you",
   "thank u",
   "think you"
  ],
  "near": [
   [
    "tank",
    "tanks",
    "sink",
    "sank",
    "sing",
    "thing",
    "think",
    "dank",
    "bank",
    "pink",
    "tango",
    "fank"
   ],
   [
    "you",
    "chiu",
    "q",
    "cue"
   ]
  ],
  "tips": [
   "Thank you começa com a pontinha da língua entre os dentes, soprando um ventinho: th. Escute:",
   "Quase! Fala as duas partes: thank... you. Escute:"
  ]
 },
 "cold": {
  "pt": "frio",
  "say": "kôuld",
  "icon": "🥶",
  "ok": [
   "cold",
   "colds",
   "colder",
   "called",
   "cold cold"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "gold",
    "goal",
    "go",
    "code",
    "coat",
    "could",
    "call",
    "cool",
    "cola",
    "told",
    "hold",
    "sold"
   ],
   [
    "old",
    "cole",
    "coal",
    "col",
    "co",
    "colt",
    "coke"
   ]
  ],
  "tips": [
   "Cold começa com k, e o ô termina num biquinho: kôu. Escute:",
   "Quase! No final tem um L e um d curtinho: kôuld. Escute:"
  ]
 },
 "fire": {
  "pt": "fogo",
  "say": "fáier",
  "icon": "🔥",
  "ok": [
   "fire",
   "fires",
   "fired",
   "fyre",
   "fiery",
   "fireball",
   "fire fire"
  ],
  "near": [
   [
    "tire",
    "hire",
    "wire",
    "liar",
    "tyre",
    "pie",
    "buyer",
    "higher",
    "dryer"
   ],
   [
    "fine",
    "five",
    "fi",
    "fai",
    "far",
    "fair",
    "fear",
    "for",
    "fight",
    "file",
    "find"
   ]
  ],
  "tips": [
   "Fire começa com f: os dentes de cima encostam no lábio de baixo e sai um ventinho. Escute:",
   "Quase! No final tem um R enroladinho: fáier. Escute:"
  ]
 },
 "hello": {
  "pt": "oi, olá",
  "say": "rrelôu",
  "icon": "👋",
  "ok": [
   "hello",
   "hallo",
   "hullo",
   "helo",
   "hello hello",
   "hi hello"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "yellow",
    "fellow",
    "jello",
    "mellow",
    "yello",
    "ello",
    "allo",
    "below"
   ],
   [
    "hell",
    "halo",
    "hollow",
    "hello w",
    "helen",
    "hey low",
    "hey"
   ]
  ],
  "tips": [
   "Hello começa com um sopro, como uma risadinha: rrr. Não é iê, é rre. Escute:",
   "Quase! São dois pedacinhos: rre e lôu. Escute:"
  ]
 },
 "friend": {
  "pt": "amigo",
  "say": "frénd",
  "icon": "🤝",
  "ok": [
   "friend",
   "friends",
   "friendly",
   "frend",
   "frien",
   "my friend"
  ],
  "near": [
   [
    "brand",
    "bread",
    "fred",
    "french",
    "fried",
    "frame",
    "free",
    "fresh",
    "freon",
    "print",
    "prince"
   ],
   [
    "fan",
    "fun",
    "find",
    "fin",
    "fen",
    "fend",
    "fiend",
    "end",
    "fence",
    "and"
   ]
  ],
  "tips": [
   "Friend começa com f e o R enroladinho, juntinhos: fr. Escute:",
   "Quase! No final tem n e d: frénd. Escute:"
  ]
 },
 "hands": {
  "pt": "mãos",
  "say": "rrénds",
  "icon": "🙌",
  "ok": [
   "hands",
   "hand",
   "handz",
   "hans",
   "hands up",
   "handed",
   "hanz"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "and",
    "ands",
    "ends",
    "sands",
    "bands",
    "pans",
    "fans",
    "dance",
    "ants",
    "end",
    "an",
    "ann",
    "aunts",
    "once"
   ],
   [
    "hen",
    "ham",
    "hat",
    "has",
    "hens",
    "hang",
    "hug",
    "hut",
    "han",
    "hun"
   ]
  ],
  "tips": [
   "Hands começa com um sopro, como uma risadinha: rrr. Não é o R enrolado, é só o ar. Escute:",
   "Quase! No final tem n, d e um zzz de abelha: rrénds. Escute:"
  ]
 },
 "catch": {
  "pt": "agarrar",
  "say": "kétch",
  "icon": "🧤",
  "ok": [
   "catch",
   "catches",
   "caught",
   "ketch",
   "kitch",
   "catching",
   "catcher",
   "cetch"
  ],
  "near": [
   [
    "cash",
    "cats",
    "cat",
    "cut",
    "kitchen",
    "cap",
    "cab",
    "kept",
    "get",
    "gets",
    "gas",
    "cars",
    "cast",
    "kids",
    "cake"
   ],
   [
    "ca",
    "ka",
    "cah",
    "que",
    "ket",
    "keh",
    "catty",
    "kat"
   ]
  ],
  "tips": [
   "Catch começa com k e termina com tch, como em tchau: kétch. Escute:",
   "Quase! No final tem um tch, como em tchau: kétch. Escute:"
  ]
 },
 "win": {
  "pt": "ganhar",
  "say": "uín",
  "icon": "🏆",
  "ok": [
   "win",
   "wins",
   "winner",
   "winning",
   "won",
   "wynn",
   "wyn",
   "we win",
   "win win",
   "weeny"
  ],
  "near": [
   [
    "when",
    "wind",
    "windy",
    "wine",
    "one",
    "van",
    "fin",
    "bin",
    "pin",
    "tin",
    "been",
    "queen",
    "in",
    "wing",
    "went",
    "ben",
    "gwen"
   ],
   [
    "we",
    "wee",
    "will",
    "wit",
    "wish",
    "with",
    "wi",
    "whip",
    "wheat",
    "weed"
   ]
  ],
  "tips": [
   "Win começa com biquinho, como um u rapidinho, e o i é curtinho: uín. Escute:",
   "Quase! No final tem um n, que sai pelo nariz: uín. Escute:"
  ]
 },
 "dog": {
  "pt": "cachorro",
  "say": "dóg",
  "icon": "🐶",
  "ok": [
   "dog",
   "dogs",
   "doggy",
   "doggie",
   "dawg",
   "dug",
   "doug",
   "good dog"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "duck",
    "dark",
    "talk",
    "dot",
    "top",
    "dad",
    "doll",
    "door",
    "box",
    "fog",
    "frog",
    "hog",
    "log",
    "jog",
    "the",
    "that"
   ],
   [
    "dough",
    "dogo",
    "dah",
    "daw",
    "dawn",
    "don"
   ]
  ],
  "tips": [
   "Dog começa com d, e o ó é bem aberto, de boca grande: dóg. Escute:",
   "Quase! No final tem um g, que sai lá do fundo da garganta: dóg. Escute:"
  ]
 },
 "good": {
  "pt": "bom, bonzinho",
  "say": "gúd",
  "icon": "👍",
  "ok": [
   "good",
   "goods",
   "goody",
   "gud",
   "good good",
   "good boy",
   "good job",
   "goodie"
  ],
  "near": [
   [
    "could",
    "would",
    "wood",
    "hood",
    "food",
    "foot",
    "put",
    "gold",
    "goat",
    "got",
    "god",
    "gut",
    "book",
    "look",
    "cook"
   ],
   [
    "goo",
    "gu",
    "gooo",
    "goose",
    "gum"
   ]
  ],
  "tips": [
   "Good começa com g, e o u é curtinho, quase um ô: gúd. Escute:",
   "Quase! No final tem um d: a língua bate atrás dos dentes. Escute:"
  ]
 },
 "fast": {
  "pt": "rápido",
  "say": "fést",
  "icon": "💨",
  "ok": [
   "fast",
   "faster",
   "fastest",
   "fest",
   "fasting",
   "fast fast"
  ],
  "almost": [
   1
  ],
  "near": [
   [
    "past",
    "last",
    "cast",
    "vast",
    "pass",
    "that",
    "bus",
    "boss",
    "face",
    "fish",
    "fix",
    "first",
    "fact",
    "best"
   ],
   [
    "fas",
    "fass",
    "fes",
    "fess"
   ]
  ],
  "tips": [
   "Fast começa com f, de ventinho: os dentes de cima no lábio de baixo. E o a é bem aberto: fést. Escute:",
   "Quase! No final tem s e t juntinhos: fést. Escute:"
  ]
 },
 "sun": {
  "pt": "sol",
  "say": "sân",
  "icon": "☀️",
  "ok": [
   "sun",
   "son",
   "suns",
   "sunny",
   "sum",
   "some",
   "sunshine",
   "the sun"
  ],
  "near": [
   [
    "fun",
    "one",
    "bun",
    "done",
    "gun",
    "none",
    "ton",
    "soon",
    "song",
    "sing",
    "sign",
    "sound",
    "sean",
    "shawn",
    "sam",
    "sand"
   ],
   [
    "saw",
    "sa",
    "so",
    "sub",
    "sup",
    "such"
   ]
  ],
  "tips": [
   "Sun começa com sss de cobra, e o u soa como â, curtinho: sân. Escute:",
   "Quase! No final tem um n, que sai pelo nariz: sân. Escute:"
  ]
 },
 "water": {
  "pt": "água",
  "say": "uóter",
  "icon": "💧",
  "ok": [
   "water",
   "waters",
   "wata",
   "watter",
   "wader",
   "walter",
   "warter",
   "waiter",
   "water water"
  ],
  "near": [
   [
    "what",
    "want",
    "wait",
    "word",
    "work",
    "war",
    "wall",
    "wash",
    "watch",
    "waffle",
    "order",
    "otter",
    "auto",
    "daughter",
    "quarter"
   ],
   [
    "wat",
    "wah",
    "wa",
    "woah",
    "whoa",
    "wort"
   ]
  ],
  "tips": [
   "Water começa com biquinho, como um u rapidinho: uó. Escute:",
   "Quase! No final tem um ter, com a língua batendo atrás dos dentes: uóter. Escute:"
  ]
 },
 "up": {
  "pt": "para cima",
  "say": "âp",
  "icon": "⬆️"
 },
 "down": {
  "pt": "para baixo",
  "say": "dáun",
  "icon": "⬇️"
 },
 "run": {
  "pt": "correr",
  "say": "rân",
  "icon": "🏃"
 },
 "kick": {
  "pt": "chutar",
  "say": "quic",
  "icon": "🦶"
 }
};
