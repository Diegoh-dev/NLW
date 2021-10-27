/*variáveis: let ou const = se vaipoder ser movificada depois, ou se vai permanecer constante.
             let = pode mudar o conteúdo que tem dentro da variável.
             const = de constante, ou seja o conteúdo da variável não pode ser mudado.

             const name = 'Diego Rennan'
            let phone = 12345678
            let accept = true

            let accept = true
            let user = {
              name: 'Diego Rennan',
              phone: 9865442326,

            }
      alert(user.name)*/

// formas de escrever variáveis:
// camelCase, PascalCase, snake_case

const LinksSocialMedia = {
  github: 'Diegoh-dev',
  instagram: 'yo_diegoh',
  twitter: 'DiegoCo45286293'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Gustavo'
  //Apenas para exemplo
  /* forma mais fácil de fazer
        userName.textContent = 'Marcelo'*/

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1
// i++

//ser humano ler :123456789
// O computador: 0123456789

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userimage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//ARROW FUNCTIONS

/*
Function nomeDaFuncao(argumentos){
 // code 
}

// CONTRAIR A FORMA DE UMA FUNÇÃO. ELIMINA O NOME DA FUNÇÃO E A NECESSIDADE DE USAR A PALAVRA FUNCTION.
//FUNÇÃO ANÔNIMA

argumento => {

}

*/
