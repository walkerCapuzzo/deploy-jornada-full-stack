import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

// rafce
// Arrow Funcion
// const App2 = () => <h1>Olá Mundo!</h1>
 
//  NOmeação de compoennte
//  PascalCase

//  nomeação de variável função
//  camelCase

// export default, posso importar com qualquer nome
// exporte sem default, preciso importar com o mesmo nome e com as chaves

// self closing tag
// <Header></Header> -> <Header />

// NOmeação de classe em css
//  metodo BEM
//  Block Element Modifier
// bloco__elemento--modificador
// header__logo--small

//  tag vazia em react se chama fragment ou fragmento

// Componentes recebem "props" como argumento

/* <div className='item-list__container'>
                {Array(items)
                    .fill()
                    .map((currentValue, index) => (
                        <SingleItem key={`${title}-${index}`} />
                    ))
                }

            </div> */
//  Quando componentes se re-renderizaão?
//  Quando o estado do componente muda
// hook useState
            