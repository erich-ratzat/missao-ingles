# Missão Inglês

MVP de inglês para crianças: missões curtas com história, personagens e reconhecimento de voz.

- Lucas: Esquadrão Estelar. Missão 1: monta a nave e escapa do Lorde Vortex. Missão 2: ganha espada e escudo e recupera o Cristal de Luz. Missão 3: entra no castelo do Vortex (open, jump, números, setas) e resgata o Bip. Missão 4: com a estrelinha Lumi, salva as estrelas que a máquina do Vortex engoliu (help, fly, stop, thank you; big/small só para entender).
- Henrique: A Grande Final. Ele se arruma no vestiário, joga a final e bate os pênaltis contra o Big Tony.

## Como cada palavra é ensinada

1. **Ouvir antes de falar.** A palavra aparece no meio da história, dita pelo personagem de inglês (Capitã Nova ou Coach Max), devagar.
2. **Repetir.** A criança aperta o microfone e repete. Só vale a palavra certa.
3. **Reconhecer.** O personagem fala em inglês e a criança toca no botão certo, sem palavra escrita. São as peças da nave, up/down, run/kick.
4. **Lembrar sozinho.** Mais tarde, a história pede a palavra sem dizer qual é (luz apagada → *light*; pênalti → a cor do alvo). Lembrar dá mais memória do que repetir.
5. **Usar em frases.** Depois do acerto, o personagem repete a palavra numa frase curta ("Light! Now we can see!").

### A partir da Missão 4 do Lucas

- **Mais inglês na história.** A história é contada em frases curtas em inglês, faladas mais devagar (`STORY_RATE` no roteiro).
- **Sanduíche.** A frase vem em inglês, o Bip fala a tradução e, quando a frase ensina alguma coisa, o inglês volta ("Help me, please!" → "Me ajuda, por favor!" → "Help me, please!"). A criança ouve o inglês de novo já sabendo o que quer dizer. A tradução fica na mesma chave com `_pt`. Frase que já apareceu volta só em inglês.
- **Ouvir antes de falar.** A palavra aparece na história algumas vezes antes de a criança precisar falar (a Lumi diz "Thank you" duas vezes antes de o Lucas aprender a dizer).
- **Gesto junto com a palavra.** Braços abertos no *fly*, mão pra frente no *stop*, e um jogo de estátua (fly/stop) na tela e em casa.
- **Só entender.** Algumas palavras (big, small) a criança só precisa entender e tocar, sem falar. Isso amplia o inglês que ela entende sem aumentar o que ela precisa falar.
- **Poucas palavras novas, muita revisão.** São 4 palavras novas para falar. As palavras das missões anteriores voltam para a criança lembrar sozinha, espalhadas pela história.
- Efeitos visuais (faíscas, explosões, velocidade da luz, cometas, fogos) ficam em `fx.js`, num canvas por cima da cena.

## Correção

- O celular entende mal a voz de criança, então o app é tolerante. Vale se qualquer coisa que o celular ouviu tiver a palavra, um jeito aceito de escrever (*sward* para *sword*), uma letra de diferença ou um "quase" (*rock* para *rocket*).
- Se nada disso aparecer e o celular ouviu uma palavra parecida conhecida (*white* no lugar de *light*), conta como erro.
- O microfone fica amarelo ("Espere...") até o celular começar a gravar e verde ("Fale agora!") quando pode falar. Quem fala antes perde o começo da palavra.
- 1º erro: o app mostra "Ouvi *white* · a palavra é *light*" e dá uma dica de boca para aquele erro específico (L de língua, R enrolado, T no final...). Depois a palavra é dita de novo.
- 2º erro: a palavra é dita bem devagar, duas vezes, com o jeito de falar escrito ("fala assim: lái-t").
- 3º erro: o ajudante fala junto e a história continua. A palavra vai para o "treinar amanhã".
- Silêncio não conta como erro (até duas vezes).
- Escolha de cor: tocar numa cor já mostra a cor na cena, e falar confirma. Se o celular não entender duas vezes, a criança escolhe tocando. O app nunca sorteia uma cor.
- As falas que se repetem muito (Yes!, Escute de novo...) têm versões diferentes que se revezam (`key__2`, `key__3` no roteiro).
- Depois da primeira tentativa recusada aparece um botão discreto para o adulto: "Eu ouvi, pode continuar". Serve para quando o celular entendeu mal uma fala certa. Na escolha de cor, o adulto toca na cor que a criança falou.
- O registro de cada palavra separa: de primeira sozinho, depois de correção, ouviu o 🔊 antes de lembrar, botão "Falei!" (sem microfone), confirmado pelo adulto e ajuda do personagem.

As palavras, as dicas e as palavras parecidas de cada uma ficam em `tools/roteiro.py` (`VOCAB`).

## Arquivos

- Falas e vozes: `tools/roteiro.py` (requer `pip install edge-tts`). Rode `python tools/roteiro.py` para gravar o que faltar, ou `--all` para regravar tudo.
- Teste automático com microfone falso: sirva a pasta e abra `tools/teste.html`; no console, rode `runTest('lucas', {light:['white','light']})`.
