"""Roteiro das lições. Fonte única: gera os áudios (audio/*.mp3) e lines.js (legendas + vocabulário).

Uso:  python tools/roteiro.py          (grava só o que falta)
      python tools/roteiro.py --all    (regrava tudo)
"""
import asyncio, json, pathlib, sys
import edge_tts

ROOT = pathlib.Path(__file__).resolve().parent.parent

# personagem -> (voz, velocidade, tom)
CAST = {
    'nova':   ('en-US-AvaNeural',         '-8%',  '+0Hz'),   # Capitã Nova (só fala inglês)
    'vortex': ('en-GB-RyanNeural',        '-12%', '-22Hz'),  # Lorde Vortex, o vilão (inglês)
    'bip':    ('pt-BR-FranciscaNeural',   '+6%',  '+30Hz'),  # Bip, robô ajudante (português)
    'coach':  ('en-US-GuyNeural',         '-5%',  '+0Hz'),   # Coach Max (só fala inglês)
    'tony':   ('en-US-ChristopherNeural', '-6%',  '-14Hz'),  # Big Tony, goleiro rival (inglês)
    'narr':   ('pt-BR-AntonioNeural',     '+10%', '+0Hz'),   # narrador do jogo (português)
}
WORD_RATE = '-25%'   # palavra-modelo: devagar e clara
SLOW_RATE = '-50%'   # palavra-modelo bem devagar (segunda correção)

LINES = {
    # ---------------- LUCAS · Esquadrão Estelar · Missão 1 ----------------
    'L01': ('bip',  'Lucas! Lucas! Alerta vermelho! Eu sou o Bip, seu robô ajudante.'),
    'L02': ('bip',  'Uma nave gigante apareceu no radar. É o Lorde Vortex!'),
    'V01': ('vortex', 'Ha ha ha! I am Lord Vortex! Your base is mine!'),
    'L03': ('bip',  'Ele disse que a nossa base agora é dele. Nem pensar! Vou chamar a Capitã Nova.'),
    'L04': ('nova', 'Pilot Lucas! We need you! Build a ship!'),
    'L05': ('bip',  'A Capitã disse: piloto Lucas, precisamos de você! Construa uma nave!'),
    'L06': ('bip',  'Só que o computador da nave só entende inglês. Cada peça só aparece quando você fala o nome dela em inglês. Escute a Capitã, aperte o microfone e repita.'),
    'L10': ('bip',  'Primeiro, as asas! Asa, em inglês, é...'),
    'L11': ('bip',  'Agora o foguete, pra nave voar bem rápido! Foguete, em inglês, é...'),
    'L12': ('bip',  'Agora o canhão de laser! Em inglês o nome é parecido, mas o som é diferente. Escute...'),
    'L13': ('bip',  'O espaço é muito escuro. A nave precisa de luz! Luz, em inglês, é...'),
    'L14': ('bip',  'A nave está quase pronta! Agora a Capitã vai testar as peças. Ela fala o nome em inglês e você toca na peça certa.'),
    'L15': ('bip',  'Agora a parte mais legal: a cor da sua nave! Toque nas cores pra ouvir. Depois aperte o microfone e fale a cor que você quer.'),
    'L16': ('nova', 'Wow! Your ship is ready, pilot!'),
    'L17': ('bip',  'Pra decolar, a Capitã conta até três. No final, você grita: Go! Quer dizer: vai!'),
    'L18': ('bip',  'Decolamos! Cuidado, asteroides! A Capitã vai dizer pra onde ir: up é pra cima, down é pra baixo. Escute e toque na seta!'),
    'L19': ('bip',  'Ufa! Passamos pelos asteroides!'),
    'L20': ('bip',  'Ih! Um drone do Vortex atirou e apagou as nossas luzes! Não dá pra ver nada!'),
    'L21': ('bip',  'Fala o nome da peça que acende a nave!'),
    'L22': ('bip',  'São os drones do Vortex! Qual peça a gente usa pra acertar os drones?'),
    'L23': ('bip',  'Opa! Um drone acertou a nossa asa! A nave está rodando! Qual peça a gente precisa consertar?'),
    'V02': ('vortex', 'You cannot escape me! Ha ha ha!'),
    'L24': ('bip',  'O Vortex está puxando a gente com um raio! Precisamos de força total! Qual peça faz a nave correr?'),
    'V03': ('vortex', 'Nooo! I will be back!'),
    'L25': ('nova', 'You did it, Lucas! The base is safe. You are a real pilot!'),
    'L26': ('bip',  'Você salvou a base estelar e ganhou suas asas de piloto!'),
    'L27': ('bip',  'Mas o Vortex disse que vai voltar... Amanhã você vai precisar de uma espada de luz. Até amanhã, piloto!'),
    # Capitã Nova
    'LN_color':    ('nova', 'Choose a color: red, blue, or green.'),
    'LN_count':    ('nova', 'Three... two... one...'),
    'LN_countgo':  ('nova', 'Three... two... one... Go!'),
    'LN_touch_wing':   ('nova', 'Touch the wing!'),
    'LN_touch_rocket': ('nova', 'Touch the rocket!'),
    'LN_touch_laser':  ('nova', 'Touch the laser!'),
    'LN_touch_light':  ('nova', 'Touch the light!'),
    'LN_yes':      ('nova', 'Yes!'),
    'LN_check':    ('nova', 'All systems go!'),
    'LN_q_light':  ('nova', 'It is dark! What do we need?'),
    'LN_q_laser':  ('nova', 'Drones! What do we use?'),
    'LN_q_wing':   ('nova', 'Our wing is broken! Fix it!'),
    'LN_q_rocket': ('nova', 'Pilot! Full power! Now!'),
    'E_wing':   ('nova', 'Yes! Big wings!'),
    'E_rocket': ('nova', 'A fast rocket! Whoosh!'),
    'E_laser':  ('nova', 'A laser! Pew, pew!'),
    'E_light':  ('nova', 'Light! Now we can see!'),
    'E_go':     ('nova', 'Go, go, go!'),
    'E2_light':  ('nova', 'Light! I can see the drones!'),
    'E2_laser':  ('nova', 'Pew, pew! Great shot!'),
    'E2_wing':   ('nova', 'The wing is okay! Good job!'),
    'E2_rocket': ('nova', 'Full power! Whoosh!'),
    'E_ship_red':   ('nova', 'A red ship! Cool!'),
    'E_ship_blue':  ('nova', 'A blue ship! Cool!'),
    'E_ship_green': ('nova', 'A green ship! Cool!'),
    # Bip: ajuda e correção
    'LB_say':      ('bip', 'Aperte o microfone e repita!'),
    'LB_part':     ('bip', 'A peça apareceu!'),
    'LB_fixed':    ('bip', 'Agora sim! Você corrigiu!'),
    'LB_close':    ('bip', 'Quase!'),
    'LB_remember': ('bip', 'Lembra? É esta palavra aqui. Escute a Capitã:'),
    'LB_slow':     ('bip', 'Vamos bem devagar, pedacinho por pedacinho. Escute e repita igualzinho.'),
    'LB_help':     ('bip', 'Essa palavra é difícil mesmo! Desta vez eu ajudo. Amanhã a gente treina ela de novo.'),
    'LB_louder':   ('bip', 'Não escutei. Aperte o microfone e fale bem alto, pertinho.'),
    'LB_wrong':    ('bip', 'Opa, essa não. Escute de novo!'),

    # ---------------- HENRIQUE · A Grande Final · Missão 1 ----------------
    'H01': ('narr', 'Olá, olá, torcida! Hoje é dia de grande final!'),
    'H02': ('narr', 'De um lado, os Tubarões. Do outro, o time do craque Henrique!'),
    'H03': ('narr', 'O técnico do time é o Coach Max. Ele veio dos Estados Unidos e só fala inglês. Escute bem!'),
    'H04': ('coach', 'Hey, champ! Are you ready?'),
    'H05': ('narr', 'Ele perguntou se você está pronto! Pra dizer sim, em inglês, a gente fala...'),
    'H06': ('coach', 'Now choose your shirt! Red, blue, or yellow?'),
    'H07': ('narr', 'Shirt é camisa! Toque nas cores pra ouvir. Depois aperte o microfone e fale a cor que você quer.'),
    'H08': ('narr', 'Agora a chuteira! Em inglês, a gente fala shoes. Escute o Coach.'),
    'H09': ('coach', 'Take the ball!'),
    'H10': ('narr', 'O Coach quer a bola! Bola, em inglês, é...'),
    'H11': ('narr', 'Entrando em campo! Começa a grande final!'),
    'H12': ('narr', 'Ih, os Tubarões fizeram um gol! Um a zero pra eles.'),
    'H13': ('narr', 'Agora o Coach vai gritar o que fazer. Run é correr. Kick é chutar. Escute e toque no botão certo! Se quiser, corre no lugar de verdade!'),
    'H14': ('narr', 'Goool! Empatou! Um a um!'),
    'H15': ('narr', 'Fim de jogo! Empate! A final vai ser decidida nos pênaltis!'),
    'H16': ('narr', 'E no gol dos Tubarões está o goleiro mais bravo do campeonato: Big Tony!'),
    'T01': ('tony', 'I am Big Tony! No goals today!'),
    'H17': ('narr', 'Ele disse que hoje não vai ter gol. Vamos ver! Pra escolher onde chutar, fale a cor do alvo em inglês.'),
    'H18': ('narr', 'Gooool! Que golaço!'),
    'T02': ('tony', 'What? No!'),
    'H19': ('narr', 'Defendeu o Big Tony! Calma, ainda dá!'),
    'T03': ('tony', 'Ha! My ball!'),
    'H20': ('narr', 'Última cobrança! Se fizer, é campeão!'),
    'H21': ('narr', 'Entrouuu! Agora grita gol em inglês, bem alto!'),
    'H22': ('narr', 'É campeão! É campeão! Henrique fez o gol do título!'),
    'T04': ('tony', 'Okay... good kick, champ.'),
    'H23': ('narr', 'Você ganhou a taça e a figurinha de Craque da Final! Amanhã tem treino novo com o Coach Max. Até amanhã, campeão!'),
    # Coach Max
    'HC_run':    ('coach', 'Run! Run!'),
    'HC_kick':   ('coach', 'Kick!'),
    'HC_goal':   ('coach', 'Goal! Great kick!'),
    'HC_where':  ('coach', 'Where? Red, blue, or yellow?'),
    'HC_okay':   ('coach', 'It is okay, champ! You can do it!'),
    'HC_ready':  ('coach', 'Champ! Are you ready?'),
    'HC_yes':    ('coach', 'Yes!'),
    'E_yes':     ('coach', 'Yes! Let us play!'),
    'E_shoes':   ('coach', 'Cool shoes! Fast feet!'),
    'E_ball':    ('coach', 'Yes! The ball! Let us go!'),
    'E2_yes':    ('coach', 'Yes! You can do it!'),
    'E_goal':    ('coach', 'Goal! You are a champion!'),
    'E_shirt_red':    ('coach', 'A red shirt! Nice!'),
    'E_shirt_blue':   ('coach', 'A blue shirt! Nice!'),
    'E_shirt_yellow': ('coach', 'A yellow shirt! Nice!'),
    # Narrador: ajuda e correção
    'HN_say':      ('narr', 'Aperte o microfone e fale!'),
    'HN_fixed':    ('narr', 'Agora sim! Você corrigiu!'),
    'HN_close':    ('narr', 'Quase!'),
    'HN_remember': ('narr', 'Lembra? É esta palavra aqui. Escute o Coach:'),
    'HN_slow':     ('narr', 'Vamos bem devagar, pedacinho por pedacinho. Escute e repita igualzinho.'),
    'HN_help':     ('narr', 'Essa palavra é difícil mesmo! Desta vez eu ajudo. Amanhã a gente treina ela de novo.'),
    'HN_louder':   ('narr', 'Não escutei! Aperte o microfone e fala bem alto, pertinho.'),
    'HN_wrong':    ('narr', 'Opa, essa não. Escute o Coach de novo!'),
}

# Vocabulário. ok = aceito (só a palavra e grafias com o mesmo som).
# near = palavras parecidas que o reconhecedor ouve quando a criança erra; cada grupo tem a sua dica
# (tips[i] vale para near[i]; tips[0] também vale quando o erro não está em nenhum grupo).
VOCAB = {
    'wing':   {'pt': 'asa', 'say': 'uíng', 'icon': '✈️', 'ok': ['wing', 'wings'],
               'near': [['ring', 'being', 'king', 'thing', 'sing', 'bing', 'ding', 'swing'],
                        ['win', 'when', 'wind', 'wig', 'wink', 'wit', 'we', 'winner', 'wean', 'ween', 'wine']],
               'tips': ['Wing começa fazendo biquinho, como se fosse falar u. Escute de novo:',
                        'Quase! No final, o som sai pelo nariz, sem fechar a boca. Escute de novo:']},
    'rocket': {'pt': 'foguete', 'say': 'rá-quet', 'icon': '🚀', 'ok': ['rocket', 'rockets'],
               'near': [['pocket', 'locket', 'socket', 'racket', 'raquet', 'rack it', 'jacket', 'hockey'],
                        ['rock', 'rocky', 'rocked', 'rocks', 'rockin', 'rok', 'rocco']],
               'tips': ['Rocket começa com o R do inglês: a língua fica enroladinha lá atrás, sem encostar em nada. E abre bem a boca. Escute:',
                        'Quase! São dois pedacinhos: rá e quet. Fala os dois, sem pular o final. Escute:']},
    'laser':  {'pt': 'laser', 'say': 'lêi-zer', 'icon': '⚡', 'ok': ['laser', 'lasers', 'lazer'],
               'near': [['loser', 'lesser', 'leisure', 'lousy', 'looser', 'user', 'lasagna'],
                        ['lazy', 'lady', 'lacy', 'layer', 'later', 'lace', 'laces', 'lay', 'lays'],
                        ['razor', 'racer', 'raiser', 'raser', 'riser']],
               'tips': ['Laser começa com lêi, bem aberto, como em lei. Escute:',
                        'Quase! No final vem zer, com o R enroladinho. Escute:',
                        'Começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes. Escute:']},
    'light':  {'pt': 'luz', 'say': 'lái-t', 'icon': '💡', 'ok': ['light', 'lights', 'lite'],
               'near': [['white', 'right', 'write', 'night', 'bright', 'fight', 'might', 'wide', 'ride', 'height',
                         'kite', 'quite', 'rite', 'wright', 'why', 'wait', 'eight', 'ight', 'hi', 'high'],
                        ['like', 'life', 'line', 'lie', 'lied', 'lies', 'lime', 'lighty', 'lighter', 'lighting',
                         'lightning', 'alike', 'lion', 'lay']],
               'tips': ['Light começa com o som do L, igual em lua: a pontinha da língua encosta atrás dos dentes de cima. Escute:',
                        'Quase! No final tem um tê bem curtinho, quase mudo, sem i no final. Escute:']},
    'red':    {'pt': 'vermelho', 'say': 'réd', 'icon': '🔴', 'ok': ['red', 'reds'],
               'near': [['wed', 'bed', 'head', 'fed', 'had', 'rad', 'rat', 'ret', 'rent', 'ready', 'raid', 'rid',
                         'bread', 'dread', 'hey', 'ed', 'head']],
               'tips': ['Red começa com o R do inglês: a língua fica enroladinha, sem encostar em nada. Escute:']},
    'blue':   {'pt': 'azul', 'say': 'blu', 'icon': '🔵', 'ok': ['blue', 'blew', 'blues'],
               'near': [['blow', 'below', 'glue', 'boo', 'bloom', 'blur', 'bleu', 'plu', 'pool', 'bull', 'balloon',
                         'bluey', 'flu', 'blood']],
               'tips': ['Blue é rapidinho: junta o B com o L e termina fazendo biquinho. Escute:']},
    'green':  {'pt': 'verde', 'say': 'griin', 'icon': '🟢', 'ok': ['green', 'greens'],
               'near': [['grin', 'queen', 'cream', 'grain', 'screen', 'greet', 'grim', 'gringo', 'clean', 'gree',
                         'grey', 'gray', 'grand', 'brin', 'cringe']],
               'tips': ['Green tem um i bem comprido no meio, e o R enroladinho. Escute:']},
    'yellow': {'pt': 'amarelo', 'say': 'iélou', 'icon': '🟡', 'ok': ['yellow', 'yellows'],
               'near': [['hello', 'jello', 'fellow', 'mellow', 'yell', 'yelo', 'hallo', 'hollow', 'halo', 'ello',
                         'allo', 'below', 'hey low', 'yo']],
               'tips': ['Yellow começa com iê, como em ioiô. Não é rélou, é iélou. Escute:']},
    'go':     {'pt': 'vai!', 'say': 'gôu', 'icon': '🏁', 'ok': ['go', 'goes'],
               'near': [['no', 'oh', 'so', 'ho', 'good', 'gone', 'goal', 'girl', 'cold', 'got', 'know', 'dough',
                         'toe', 'coal', 'cool', 'call']],
               'tips': ['Go é curtinho e forte: começa com gô e termina fazendo biquinho. Escute:']},
    'yes':    {'pt': 'sim', 'say': 'iés', 'icon': '👍', 'ok': ['yes', 'yeah', 'yep', 'yup', 'yea'],
               'near': [['jess', 'chess', 'guess', 'yet', 'this', 'is', 'ice', 's', 'say', 'yas', 'jazz', 'dress',
                         'less', 'east', 'jesus', 'his']],
               'tips': ['Yes começa com iê e termina com um sss de cobra. Escute:']},
    'shoes':  {'pt': 'chuteiras', 'say': 'xúz', 'icon': '👟', 'ok': ['shoes', 'shoe', 'choose', 'shoos', 'chews'],
               'near': [['juice', 'shows', 'sues', 'shoot', 'shoots', 'sushi', 'suits', 'zoos', 'soup', 'sure',
                         'shush', 'shoo', 'jews', 'news', 'suit', 'shorts', 'show']],
               'tips': ['Shoes começa com xis, como em xícara, faz biquinho, e termina zumbindo como abelha: zzz. Escute:']},
    'ball':   {'pt': 'bola', 'say': 'bóol', 'icon': '⚽', 'ok': ['ball', 'balls'],
               'near': [['bowl', 'bull', 'bow', 'bill', 'bell', 'paul', 'boo', 'bo', 'bol', 'bowel', 'boll', 'bold',
                         'both', 'bro', 'pole', 'poll', 'boat', 'bob', 'bowls', 'all']],
               'tips': ['Ball tem um ó bem aberto, com a boca grande. E no final a língua encosta atrás dos dentes. Escute:']},
    'goal':   {'pt': 'gol', 'say': 'gôul', 'icon': '🥅', 'ok': ['goal', 'goals'],
               'near': [['go', 'gold', 'call', 'cool', 'girl', 'ghoul', 'coal', 'gone', 'golf', 'good', 'gol', 'cold',
                         'gall', 'goat', 'col', 'cole', 'gull', 'ball']],
               'tips': ['Goal começa com gôu e termina com a língua encostando atrás dos dentes, como um L. Escute:']},
    'up':     {'pt': 'para cima', 'say': 'âp', 'icon': '⬆️'},
    'down':   {'pt': 'para baixo', 'say': 'dáun', 'icon': '⬇️'},
    'run':    {'pt': 'correr', 'say': 'rân', 'icon': '🏃'},
    'kick':   {'pt': 'chutar', 'say': 'quic', 'icon': '🦶'},
}

# quem ensina cada palavra (voz-modelo) e quem dá as dicas de pronúncia
TEACH = {
    'nova':  {'helper': 'bip',  'words': ['wing', 'rocket', 'laser', 'light', 'red', 'blue', 'green', 'go', 'up', 'down']},
    'coach': {'helper': 'narr', 'words': ['yes', 'red', 'blue', 'yellow', 'shoes', 'ball', 'goal', 'run', 'kick']},
}


def jobs():
    for key, (who, text) in LINES.items():
        v, rate, pitch = CAST[who]
        yield key, who, text, v, rate, pitch
    for who, t in TEACH.items():
        v, _, pitch = CAST[who]
        hv, hrate, hpitch = CAST[t['helper']]
        for w in t['words']:
            W = w.capitalize()
            yield f'W_{who}_{w}', who, W + '.', v, WORD_RATE, pitch
            if 'ok' in VOCAB[w]:
                yield f'S_{who}_{w}', who, f'{W}... {W}.', v, SLOW_RATE, pitch
                for i, tip in enumerate(VOCAB[w]['tips']):
                    yield f'T_{t["helper"]}_{w}_{i}', t['helper'], tip, hv, hrate, hpitch


async def main(force):
    out = ROOT / 'audio'
    out.mkdir(exist_ok=True)
    subs = {}
    for key, who, text, v, rate, pitch in jobs():
        subs[key] = {'who': who, 'text': text}
        f = out / f'{key}.mp3'
        if f.exists() and not force:
            continue
        for tentativa in range(4):   # o serviço de voz às vezes falha de vez em quando
            try:
                await edge_tts.Communicate(text, v, rate=rate, pitch=pitch).save(str(f))
                break
            except edge_tts.exceptions.NoAudioReceived:
                f.unlink(missing_ok=True)
                await asyncio.sleep(2 + tentativa * 3)
        else:
            raise SystemExit(f'falhou: {key}')
        print('gravado', key)
    (ROOT / 'lines.js').write_text('// gerado por tools/roteiro.py — não editar à mão\nconst LINES = '
                                    + json.dumps(subs, ensure_ascii=False, indent=1) + ';\nconst VOCAB = '
                                    + json.dumps(VOCAB, ensure_ascii=False, indent=1) + ';\n', encoding='utf-8')
    print(len(subs), 'falas')


if __name__ == '__main__':
    asyncio.run(main('--all' in sys.argv))
