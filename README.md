<h1 align="center">
  🎬 Prime Movies
</h1>


## :rocket: Sobre o projeto

Este é um site de listagem e busca de filmes, os dados são obtidos por meio da integração com a API do The Movie Database (TMDB). 

Na pagina inicial são listados todos os filmes mais populares do momento em cards com o pôster, nome e média de avaliação. Ao passar o mouse sobre o card ele será expandido, exibindo também parte da sinopse e o ano de lançamento daquele filme.<br/>
Nessa página foi utilizada a tecnologia de Server Side Rendering (SSR) do Next.js, de modo que a requisição dos filmes seja feita antes da renderização da página. Após a conclusão da requisição os dados são passados para a página, exibindo assim o conteúdo dela e proporcionando um aumento no desempenho.


Ao clicar em um filme na pagina inicial o usuário será redirecionado para outra página contendo os detalhes daquele filme. Nela é exibida uma imagem de plano de fundo daquele filme e também as informações mais detalhadas a respeito dele, como: Duração, gênero, título original, atores principais...<br/>
Nessa página foi utilizada a tecnologia de Static Site Generation (SSG) do Next.js, de modo que seja gerada uma página estática sempre que um novo filme é acessado, então quando o próximo usuário acessar a página desse filme ele não precisará aguardar o carregamento da requisição com os dados, pois ela já foi gerada estáticamente assim que o primeiro usuário a acessou. Essa abordagem traz um grande aumento de desempenho, pois remove a necessidade de uma nova requisição sempre que a página for acessada novamente.

Além disso, também foi utilizada a tecnologia de Incremental Static Regeneration (ISR) para a atualização das páginas estáticas, de modo que cada página estática gerada seja atualizada a cada 5 minutos, isso faz com que a página não seja atualizada em todos os acesso, mas também não fique desatualizada até que um novo build seja gerado.

No header de todas as páginas é exibida uma barra de buscas onde o usuário consegue filtrar os filmes. Ao buscar um filme os resultados serão listados em formato de card. No campo de buscas foi utilizado o processo de controle de fluxo Debounce, de modo que não seja feita mais de uma busca a cada 500ms, que é o limite de requisições da API, além de exibir uma mensagem informando esse limite ao usuário.

Nos pôsteres dos filmes foi utilizada a ferramenta de otimização de imagens do Next.js que usa o lazy loading nativo dos navegadores, desse modo as imagens são carregadas apenas quando estão visíveis na tela do usuário ou no scroll próximas de serem visíveis. Isso impede que imagens que não estão visíveis e nem próximas de estarem sejam carregadas sem necessidade, aumentando assim o desempenho da página.

Nas funções utilitárias foram realizados testes unitários utilizando o framework Jest, que visa garantir a qualidade e o resultado esperado em cada função.

**Acesse o deploy do projeto**: https://prime-movies.vercel.app

## :mag: Tecnologias usadas:

- `Javascript`
- `Next.js`
- `Styled Components`
- `Jest`


## :computer: Funcionalidades do projeto:

- `Listagem dos filmes mais populares do momento`
- `Busca de filmes pelo nome`
- `Paginação`
- `Lazy loading`
- `Debounce`
- `Testes com Jest`


## :bulb: Telas
![1](https://user-images.githubusercontent.com/23708544/202031920-ddea18a9-7f9f-42b5-b891-3c00acb2116c.gif)

![2](https://user-images.githubusercontent.com/23708544/202026538-a22214d3-8c8c-4a8a-97da-d92a875b5913.png)

![3](https://user-images.githubusercontent.com/23708544/202026818-5bc928bd-16c5-4058-8b98-44c808ea26c6.png)

![4](https://user-images.githubusercontent.com/23708544/202026885-1249ea82-c15f-482b-a2df-b6c779741c2e.png)



## :wrench: Iniciando o projeto
1. Clone este repositório usando: `git clone https://github.com/samaramiranda/Prime-Movies.git`;
2. Entre no diretório;
3. Rode o comando `npm install` para instalar todas as dependências;
4. Rode o comando `npm run dev` para iniciar a aplicação.
