Estesia Sound Color Out
--------------

Projeto baseado no [rhizome](https://github.com/sebpiq/rhizome) usado no espetáculo estesia+batebit.

Os celulares da plateia se conectam ao computador que está rodando o servidor do rhizome e comandos MIDI do computador disparam samples nesse celular. A plateia então se torna uma grande propagadora de massa sonora formada pelos alto-falantes dos celulares.

Instruções
--------------

- abrir o Terminal e `cd` para este diretório
- começar o servidor rhizome com: `rhizome config.js`
- abrir um browser e abrir o endereço `http://localhost:8000`
- rodar o max com o `metronome_batebit.maxpat` que faz a conversão de MIDI para OSC pro rhizome

para evitar que o usuário tenha de colocar o número da porta, pode-se usar a porta 80 que é a padrão para requisições http.
dessa forma, o usuário precisa apenas digitar `http://localhost` no browser.
para alterar a configuração de porta, modifique o arquivo `config.js` na pasta do projeto.
lembre-se de modificar tanto para `http` quanto para `websocket`.
para usar a porta 80, é preciso ser root, assim o comando para rodar o servidor deve ser: `sudo rhizome config.js`
