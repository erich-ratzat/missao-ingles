// gerado por tools/roteiro.py — não editar à mão
const LINES = {
 "L01": {
  "who": "bip",
  "text": "Lucas! Lucas! Alerta vermelho! Eu sou o Bip, seu robô ajudante."
 },
 "L02": {
  "who": "bip",
  "text": "O Lorde Vortex e os drones dele estão vindo atacar a nossa base estelar!"
 },
 "L03": {
  "who": "nova",
  "text": "Pilot Lucas! We need you! Build a ship!"
 },
 "L04": {
  "who": "bip",
  "text": "Essa é a Capitã Nova. Ela disse: piloto Lucas, precisamos de você! Construa uma nave!"
 },
 "L05": {
  "who": "bip",
  "text": "Mas tem um problema. O computador da nave só entende inglês. Cada peça só aparece se você falar o nome dela em inglês. Vamos lá?"
 },
 "L10": {
  "who": "bip",
  "text": "Primeiro, as asas! Escute a Capitã. Asa, em inglês, é..."
 },
 "L11": {
  "who": "bip",
  "text": "Agora o foguete, para a nave voar bem rápido! Foguete, em inglês, é..."
 },
 "L12": {
  "who": "bip",
  "text": "Agora os canhões de laser! Essa é fácil, em inglês é quase igual..."
 },
 "L13": {
  "who": "bip",
  "text": "O espaço é muito escuro. A nave precisa de luzes! Luz, em inglês, é..."
 },
 "L14": {
  "who": "bip",
  "text": "Agora a parte mais legal: a cor da sua nave! Toque nas cores para ouvir, depois aperte o microfone e fale a cor que você quer."
 },
 "L15": {
  "who": "nova",
  "text": "Wow! Your ship is ready, pilot!"
 },
 "L16": {
  "who": "bip",
  "text": "Uau, sua nave ficou incrível! Para decolar, repita a contagem da Capitã!"
 },
 "L17": {
  "who": "bip",
  "text": "Decolamos! Os drones do Vortex estão chegando! A Capitã vai dizer para onde ir. Up é para cima. Down é para baixo. Escute e toque na seta certa!"
 },
 "L18": {
  "who": "bip",
  "text": "Agora atire! Aperte o microfone e fale o que a Capitã disser!"
 },
 "L19": {
  "who": "bip",
  "text": "Drone destruído! Lá vem outro!"
 },
 "L20": {
  "who": "nova",
  "text": "You did it, Lucas! The base is safe. You are a real pilot!"
 },
 "L21": {
  "who": "bip",
  "text": "Você conseguiu! Salvou a base estelar e ganhou suas asas de piloto!"
 },
 "L22": {
  "who": "bip",
  "text": "Amanhã tem missão nova: construir a sua espada de luz! Até amanhã, piloto!"
 },
 "LB_say": {
  "who": "bip",
  "text": "Aperte o microfone e repita!"
 },
 "LB_retry": {
  "who": "bip",
  "text": "Quase! Escute de novo e tente mais uma vez."
 },
 "LB_louder": {
  "who": "bip",
  "text": "Não escutei. Fale bem alto, pertinho do tablet!"
 },
 "LB_help": {
  "who": "bip",
  "text": "Boa tentativa! Eu ajudo você nessa. Peça instalada!"
 },
 "LB_part": {
  "who": "bip",
  "text": "Isso! A peça apareceu!"
 },
 "LB_wrongdir": {
  "who": "bip",
  "text": "Opa, essa não. Escute de novo!"
 },
 "LN_great": {
  "who": "nova",
  "text": "Great job!"
 },
 "LN_awesome": {
  "who": "nova",
  "text": "Awesome, pilot!"
 },
 "LN_perfect": {
  "who": "nova",
  "text": "Yes! Perfect!"
 },
 "LN_shot": {
  "who": "nova",
  "text": "Nice shot!"
 },
 "LN_color": {
  "who": "nova",
  "text": "Choose a color: red, blue, or green."
 },
 "H01": {
  "who": "narr",
  "text": "Olá, olá, torcida! Hoje é dia de grande final!"
 },
 "H02": {
  "who": "narr",
  "text": "De um lado, o time dos Tubarões. Do outro lado, o time do craque Henrique!"
 },
 "H03": {
  "who": "narr",
  "text": "Mas atenção: o técnico do time é o Coach Max. Ele veio dos Estados Unidos e só fala inglês!"
 },
 "H04": {
  "who": "coach",
  "text": "Hey, champ! Are you ready?"
 },
 "H05": {
  "who": "narr",
  "text": "Ele perguntou se você está pronto! Para dizer sim, em inglês, a gente fala..."
 },
 "H06": {
  "who": "coach",
  "text": "Great! Now choose your shirt."
 },
 "H07": {
  "who": "narr",
  "text": "Escolha a cor da sua camisa! Toque nas cores para ouvir, depois aperte o microfone e fale a cor."
 },
 "H08": {
  "who": "coach",
  "text": "Take the ball!"
 },
 "H09": {
  "who": "narr",
  "text": "O Coach quer a bola! Bola, em inglês, é..."
 },
 "H10": {
  "who": "narr",
  "text": "Acabou o jogo. Empate! A final vai ser decidida nos pênaltis! E quem vai bater é... Henrique!"
 },
 "H11": {
  "who": "narr",
  "text": "Escolha um canto do gol. Depois aperte o microfone e repita o que o Coach falar!"
 },
 "H12": {
  "who": "narr",
  "text": "Goooool! Que golaço! Agora grita com a torcida!"
 },
 "H13": {
  "who": "narr",
  "text": "Defendeu o goleiro dos Tubarões! Calma, ainda dá!"
 },
 "H14": {
  "who": "coach",
  "text": "It is okay, champ! You can do it!"
 },
 "H15": {
  "who": "narr",
  "text": "Última cobrança! Se fizer o gol, é campeão!"
 },
 "H16": {
  "who": "narr",
  "text": "É campeão! É campeão! Henrique fez o gol do título!"
 },
 "H17": {
  "who": "coach",
  "text": "You win! You are a champion!"
 },
 "H18": {
  "who": "narr",
  "text": "Você ganhou a taça e a figurinha de Craque da Final! Amanhã tem treino novo com o Coach Max. Até amanhã, campeão!"
 },
 "HN_say": {
  "who": "narr",
  "text": "Aperte o microfone e fale bem alto!"
 },
 "HN_retry": {
  "who": "narr",
  "text": "Quase! Escute o Coach de novo e tente outra vez."
 },
 "HN_louder": {
  "who": "narr",
  "text": "Não escutei! Fala mais alto, pertinho do tablet!"
 },
 "HN_help": {
  "who": "narr",
  "text": "Boa tentativa! Vamos falar juntos da próxima vez."
 },
 "HC_great": {
  "who": "coach",
  "text": "Great job!"
 },
 "HC_yes": {
  "who": "coach",
  "text": "Yes! Perfect!"
 },
 "HC_awesome": {
  "who": "coach",
  "text": "Awesome!"
 },
 "HC_again": {
  "who": "coach",
  "text": "Again! Kick!"
 },
 "HC_color": {
  "who": "coach",
  "text": "Red, blue, or yellow?"
 },
 "HC_saygoal": {
  "who": "coach",
  "text": "Goal! Say it! Goal!"
 },
 "W_nova_wing": {
  "who": "nova",
  "text": "Wing."
 },
 "W_nova_rocket": {
  "who": "nova",
  "text": "Rocket."
 },
 "W_nova_laser": {
  "who": "nova",
  "text": "Laser."
 },
 "W_nova_light": {
  "who": "nova",
  "text": "Light."
 },
 "W_nova_red": {
  "who": "nova",
  "text": "Red."
 },
 "W_nova_blue": {
  "who": "nova",
  "text": "Blue."
 },
 "W_nova_green": {
  "who": "nova",
  "text": "Green."
 },
 "W_nova_up": {
  "who": "nova",
  "text": "Up."
 },
 "W_nova_down": {
  "who": "nova",
  "text": "Down."
 },
 "W_nova_fire": {
  "who": "nova",
  "text": "Fire."
 },
 "W_coach_yes": {
  "who": "coach",
  "text": "Yes."
 },
 "W_coach_red": {
  "who": "coach",
  "text": "Red."
 },
 "W_coach_blue": {
  "who": "coach",
  "text": "Blue."
 },
 "W_coach_yellow": {
  "who": "coach",
  "text": "Yellow."
 },
 "W_coach_ball": {
  "who": "coach",
  "text": "Ball."
 },
 "W_coach_kick": {
  "who": "coach",
  "text": "Kick."
 },
 "W_coach_goal": {
  "who": "coach",
  "text": "Goal."
 },
 "W_nova_countdown": {
  "who": "nova",
  "text": "Three... two... one... Go!"
 }
};
