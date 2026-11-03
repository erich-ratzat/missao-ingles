"""Roteiro das lições. Fonte única: gera os áudios (audio/*.mp3) e as legendas (lines.js).

Uso:  python tools/roteiro.py          (grava só o que falta)
      python tools/roteiro.py --all    (regrava tudo)
"""
import asyncio, json, pathlib, sys
import edge_tts

ROOT = pathlib.Path(__file__).resolve().parent.parent

# personagem -> (voz, velocidade, tom)
CAST = {
    'nova':  ('en-US-AvaNeural',        '-8%',  '+0Hz'),   # Capitã Nova (só fala inglês)
    'bip':   ('pt-BR-FranciscaNeural',  '+6%',  '+30Hz'),  # Bip, robô ajudante (português)
    'coach': ('en-US-GuyNeural',        '-5%',  '+0Hz'),   # Coach Max (só fala inglês)
    'narr':  ('pt-BR-AntonioNeural',    '+10%', '+0Hz'),   # narrador do jogo (português)
}
# palavras-modelo: faladas devagar e claras
WORD_RATE = '-25%'

LINES = {
    # ---------------- LUCAS · Esquadrão Estelar · Missão 1 ----------------
    'L01': ('bip',  'Lucas! Lucas! Alerta vermelho! Eu sou o Bip, seu robô ajudante.'),
    'L02': ('bip',  'O Lorde Vortex e os drones dele estão vindo atacar a nossa base estelar!'),
    'L03': ('nova', 'Pilot Lucas! We need you! Build a ship!'),
    'L04': ('bip',  'Essa é a Capitã Nova. Ela disse: piloto Lucas, precisamos de você! Construa uma nave!'),
    'L05': ('bip',  'Mas tem um problema. O computador da nave só entende inglês. Cada peça só aparece se você falar o nome dela em inglês. Vamos lá?'),
    'L10': ('bip',  'Primeiro, as asas! Escute a Capitã. Asa, em inglês, é...'),
    'L11': ('bip',  'Agora o foguete, para a nave voar bem rápido! Foguete, em inglês, é...'),
    'L12': ('bip',  'Agora os canhões de laser! Essa é fácil, em inglês é quase igual...'),
    'L13': ('bip',  'O espaço é muito escuro. A nave precisa de luzes! Luz, em inglês, é...'),
    'L14': ('bip',  'Agora a parte mais legal: a cor da sua nave! Toque nas cores para ouvir, depois aperte o microfone e fale a cor que você quer.'),
    'L15': ('nova', 'Wow! Your ship is ready, pilot!'),
    'L16': ('bip',  'Uau, sua nave ficou incrível! Para decolar, repita a contagem da Capitã!'),
    'L17': ('bip',  'Decolamos! Os drones do Vortex estão chegando! A Capitã vai dizer para onde ir. Up é para cima. Down é para baixo. Escute e toque na seta certa!'),
    'L18': ('bip',  'Agora atire! Aperte o microfone e fale o que a Capitã disser!'),
    'L19': ('bip',  'Drone destruído! Lá vem outro!'),
    'L20': ('nova', 'You did it, Lucas! The base is safe. You are a real pilot!'),
    'L21': ('bip',  'Você conseguiu! Salvou a base estelar e ganhou suas asas de piloto!'),
    'L22': ('bip',  'Amanhã tem missão nova: construir a sua espada de luz! Até amanhã, piloto!'),
    'LB_say':    ('bip', 'Aperte o microfone e repita!'),
    'LB_retry':  ('bip', 'Quase! Escute de novo e tente mais uma vez.'),
    'LB_louder': ('bip', 'Não escutei. Fale bem alto, pertinho do tablet!'),
    'LB_help':   ('bip', 'Boa tentativa! Eu ajudo você nessa. Peça instalada!'),
    'LB_part':   ('bip', 'Isso! A peça apareceu!'),
    'LB_wrongdir': ('bip', 'Opa, essa não. Escute de novo!'),
    'LN_great':  ('nova', 'Great job!'),
    'LN_awesome':('nova', 'Awesome, pilot!'),
    'LN_perfect':('nova', 'Yes! Perfect!'),
    'LN_shot':   ('nova', 'Nice shot!'),
    'LN_color':  ('nova', 'Choose a color: red, blue, or green.'),

    # ---------------- HENRIQUE · A Grande Final · Missão 1 ----------------
    'H01': ('narr', 'Olá, olá, torcida! Hoje é dia de grande final!'),
    'H02': ('narr', 'De um lado, o time dos Tubarões. Do outro lado, o time do craque Henrique!'),
    'H03': ('narr', 'Mas atenção: o técnico do time é o Coach Max. Ele veio dos Estados Unidos e só fala inglês!'),
    'H04': ('coach','Hey, champ! Are you ready?'),
    'H05': ('narr', 'Ele perguntou se você está pronto! Para dizer sim, em inglês, a gente fala...'),
    'H06': ('coach','Great! Now choose your shirt.'),
    'H07': ('narr', 'Escolha a cor da sua camisa! Toque nas cores para ouvir, depois aperte o microfone e fale a cor.'),
    'H08': ('coach','Take the ball!'),
    'H09': ('narr', 'O Coach quer a bola! Bola, em inglês, é...'),
    'H10': ('narr', 'Acabou o jogo. Empate! A final vai ser decidida nos pênaltis! E quem vai bater é... Henrique!'),
    'H11': ('narr', 'Escolha um canto do gol. Depois aperte o microfone e repita o que o Coach falar!'),
    'H12': ('narr', 'Goooool! Que golaço! Agora grita com a torcida!'),
    'H13': ('narr', 'Defendeu o goleiro dos Tubarões! Calma, ainda dá!'),
    'H14': ('coach','It is okay, champ! You can do it!'),
    'H15': ('narr', 'Última cobrança! Se fizer o gol, é campeão!'),
    'H16': ('narr', 'É campeão! É campeão! Henrique fez o gol do título!'),
    'H17': ('coach','You win! You are a champion!'),
    'H18': ('narr', 'Você ganhou a taça e a figurinha de Craque da Final! Amanhã tem treino novo com o Coach Max. Até amanhã, campeão!'),
    'HN_say':    ('narr', 'Aperte o microfone e fale bem alto!'),
    'HN_retry':  ('narr', 'Quase! Escute o Coach de novo e tente outra vez.'),
    'HN_louder': ('narr', 'Não escutei! Fala mais alto, pertinho do tablet!'),
    'HN_help':   ('narr', 'Boa tentativa! Vamos falar juntos da próxima vez.'),
    'HC_great':  ('coach','Great job!'),
    'HC_yes':    ('coach','Yes! Perfect!'),
    'HC_awesome':('coach','Awesome!'),
    'HC_again':  ('coach','Again! Kick!'),
    'HC_color':  ('coach','Red, blue, or yellow?'),
    'HC_saygoal':('coach','Goal! Say it! Goal!'),
}

# palavras que a criança precisa falar (voz do personagem que ensina, devagar)
WORDS = {
    'nova':  ['wing', 'rocket', 'laser', 'light', 'red', 'blue', 'green', 'up', 'down', 'fire'],
    'coach': ['yes', 'red', 'blue', 'yellow', 'ball', 'kick', 'goal'],
}
EXTRA = {
    'W_nova_countdown': ('nova', 'Three... two... one... Go!'),
}


def jobs():
    for key, (who, text) in LINES.items():
        v, rate, pitch = CAST[who]
        yield key, who, text, v, rate, pitch
    for who, words in WORDS.items():
        v, _, pitch = CAST[who]
        for w in words:
            yield f'W_{who}_{w}', who, w.capitalize() + '.', v, WORD_RATE, pitch
    for key, (who, text) in EXTRA.items():
        v, _, pitch = CAST[who]
        yield key, who, text, v, '-15%', pitch


async def main(force):
    out = ROOT / 'audio'
    out.mkdir(exist_ok=True)
    subs = {}
    for key, who, text, v, rate, pitch in jobs():
        subs[key] = {'who': who, 'text': text}
        f = out / f'{key}.mp3'
        if f.exists() and not force:
            continue
        await edge_tts.Communicate(text, v, rate=rate, pitch=pitch).save(str(f))
        print('gravado', key)
    (ROOT / 'lines.js').write_text('// gerado por tools/roteiro.py — não editar à mão\nconst LINES = '
                                    + json.dumps(subs, ensure_ascii=False, indent=1) + ';\n', encoding='utf-8')
    print(len(subs), 'falas')


if __name__ == '__main__':
    asyncio.run(main('--all' in sys.argv))
