# Missão Inglês

MVP de inglês para crianças: missões curtas com história, personagens e reconhecimento de voz.

- Lucas: Esquadrão Estelar. Ele monta a nave, enfrenta os drones e escapa do Lorde Vortex.
- Henrique: A Grande Final. Ele se arruma no vestiário, joga a final e bate os pênaltis contra o Big Tony.

## Como cada palavra é ensinada

1. **Ouvir antes de falar.** A palavra aparece no meio da história, dita pelo personagem de inglês (Capitã Nova ou Coach Max), devagar.
2. **Repetir.** A criança aperta o microfone e repete. Só vale a palavra certa.
3. **Reconhecer.** O personagem fala em inglês e a criança toca no botão certo, sem palavra escrita. São as peças da nave, up/down, run/kick.
4. **Lembrar sozinho.** Mais tarde, a história pede a palavra sem dizer qual é (luz apagada → *light*; pênalti → a cor do alvo). Lembrar dá mais memória do que repetir.
5. **Usar em frases.** Depois do acerto, o personagem repete a palavra numa frase curta ("Light! Now we can see!").

## Correção (nunca aceita palavra errada)

- Vale o que o reconhecedor entendeu primeiro. Se for uma palavra parecida conhecida (*white* no lugar de *light*), conta como erro.
- 1º erro: o app mostra "Ouvi *white* · a palavra é *light*" e dá uma dica de boca para aquele erro específico (L de língua, R enrolado, T no final...). Depois a palavra é dita de novo.
- 2º erro: a palavra é dita bem devagar, duas vezes, com o jeito de falar escrito ("fala assim: lái-t").
- 3º erro: o ajudante fala junto e a história continua. A palavra vai para o "treinar amanhã".
- Silêncio não conta como erro (até duas vezes).

As palavras, as dicas e as palavras parecidas de cada uma ficam em `tools/roteiro.py` (`VOCAB`).

## Arquivos

- Falas e vozes: `tools/roteiro.py` (requer `pip install edge-tts`). Rode `python tools/roteiro.py` para gravar o que faltar, ou `--all` para regravar tudo.
- Teste automático com microfone falso: sirva a pasta e abra `tools/teste.html`; no console, rode `runTest('lucas', {light:['white','light']})`.
