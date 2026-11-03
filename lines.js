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
  "text": "Ha ha ha! I am Lord Vortex! Your base is mine!"
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
  "text": "You cannot escape me! Ha ha ha!"
 },
 "L24": {
  "who": "bip",
  "text": "O Vortex está puxando a gente com um raio! Precisamos de força total! Qual peça faz a nave correr?"
 },
 "V03": {
  "who": "vortex",
  "text": "Nooo! I will be back!"
 },
 "L25": {
  "who": "nova",
  "text": "You did it, Lucas! The base is safe. You are a real pilot!"
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
 "LN_check": {
  "who": "nova",
  "text": "All systems go!"
 },
 "LN_q_light": {
  "who": "nova",
  "text": "It is dark! What do we need?"
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
  "text": "Não escutei. Aperte o microfone e fale bem alto, pertinho."
 },
 "LB_wrong": {
  "who": "bip",
  "text": "Opa, essa não. Escute de novo!"
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
  "text": "Hey, champ! Are you ready?"
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
  "text": "I am Big Tony! No goals today!"
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
  "text": "Okay... good kick, champ."
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
  "text": "It is okay, champ! You can do it!"
 },
 "HC_ready": {
  "who": "coach",
  "text": "Champ! Are you ready?"
 },
 "HC_yes": {
  "who": "coach",
  "text": "Yes!"
 },
 "E_yes": {
  "who": "coach",
  "text": "Yes! Let us play!"
 },
 "E_shoes": {
  "who": "coach",
  "text": "Cool shoes! Fast feet!"
 },
 "E_ball": {
  "who": "coach",
  "text": "Yes! The ball! Let us go!"
 },
 "E2_yes": {
  "who": "coach",
  "text": "Yes! You can do it!"
 },
 "E_goal": {
  "who": "coach",
  "text": "Goal! You are a champion!"
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
  "text": "Não escutei! Aperte o microfone e fala bem alto, pertinho."
 },
 "HN_wrong": {
  "who": "narr",
  "text": "Opa, essa não. Escute o Coach de novo!"
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
 }
};
const VOCAB = {
 "wing": {
  "pt": "asa",
  "say": "uíng",
  "icon": "✈️",
  "ok": [
   "wing",
   "wings"
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
   "rockets"
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
   "lazer"
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
   "lite"
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
   "reds"
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
   "blues"
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
   "greens"
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
   "yellows"
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
   "goes"
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
