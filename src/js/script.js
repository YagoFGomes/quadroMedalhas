const  urlSite = "https://kenzie-olimpiadas.herokuapp.com/paises" 

fetch(urlSite)
.then(response => response.json())
.then(data => tratarDadosMedalhas(data))


let quadro_medalhas = document.querySelector('.quadro-medalhas')

function criarTemplateLinha(colocacao, country, flag_url, gold, silver, bronze){

//criando linha do quadro
    let linha = document.createElement('div')

//add class para div linha
    linha.classList.add('linha')

//COLUNAS
    let coluna_rank = criarColuna_rank(colocacao +'º ')
    let coluna_country = criarColuna_country(country, flag_url) 
    let medal_gold = criarMedal_gold(gold)
    let medal_silver = criarMedal_silver(silver)
    let medal_bronze = criarMedal_bronze(bronze)
    let total = gold + silver + bronze
    let medal_total = criarMedal_total(total)

    linha.appendChild(coluna_rank)
    linha.appendChild(coluna_country)
    linha.appendChild(medal_gold)
    linha.appendChild(medal_silver)
    linha.appendChild(medal_bronze)
    linha.appendChild(medal_total)

    quadro_medalhas.appendChild(linha)   

   
}


//funcao que trata os dados da api
function tratarDadosMedalhas(arrayPaises){
    let paisesOrdenados  =  ordenarPaises(arrayPaises)
    for(let i = 0; i<paisesOrdenados.length; i++){
        let pais  = paisesOrdenados[i]
   
        criarTemplateLinha(
            i+1,
            pais.country,
            pais.flag_url,
            pais.medal_gold,
            pais.medal_silver,
            pais.medal_bronze,
        )
    }
   
}

function ordenarPaises(arrayPaises){
    let newArrayPaises = arrayPaises.map((pais)=> pais).sort((a,b) =>  b.medal_gold - a.medal_gold)
    return newArrayPaises
}

//funcao que cria coluna rank

function criarColuna_rank(rank){
  
//criando colunas - rank
    let coluna_rank = document.createElement('div')
    coluna_rank.classList.add('coluna', 'coluna-rank')

//criando SPAN titulo rank
    let coluna_rank_titulo = document.createElement('span')
    coluna_rank_titulo.innerText = rank
    coluna_rank.appendChild(coluna_rank_titulo)

    return coluna_rank
}
function criarColuna_country(country, url_imagem){
  
    //criando coluna - country
        let coluna_country = document.createElement('div')
        coluna_country.classList.add('coluna', 'country')
    
    //criando SPAN titulo country
        let coluna_country_titulo = document.createElement('span')
        coluna_country_titulo.innerText = country
        coluna_country.appendChild(coluna_country_titulo)

    //criando imagem country
    let coluna_country_imagem = document.createElement('img')
    coluna_country_imagem.src = url_imagem
    coluna_country_imagem.alt = country

    coluna_country.appendChild(coluna_country_imagem)
    coluna_country.appendChild(coluna_country_titulo)
    
    
        return coluna_country
}
function criarMedal_gold(gold){
  
    //criando coluna - medal
        let medal_gold = document.createElement('div')
        medal_gold.classList.add('coluna', 'medal-gold')
    
    //criando SPAN titulo medal
        let coluna_medal = document.createElement('span')
        coluna_medal.innerText = gold
        medal_gold.appendChild(coluna_medal)

        return medal_gold
}
function criarMedal_silver(silver){
  
    //criando coluna - medal
        let medal_silver = document.createElement('div')
        medal_silver.classList.add('coluna', 'medal-silver')
    
    //criando SPAN titulo medal
        let coluna_medal = document.createElement('span')
        coluna_medal.innerText = silver
        medal_silver.appendChild(coluna_medal)

        return medal_silver
}
function criarMedal_bronze(bronze){
  
    //criando coluna - medal
        let medal_bronze = document.createElement('div')
        medal_bronze.classList.add('coluna', 'medal-bronze')
    
    //criando SPAN titulo medal
        let coluna_medal = document.createElement('span')
        coluna_medal.innerText = bronze
        medal_bronze.appendChild(coluna_medal)

        return medal_bronze
}
function criarMedal_total(total){
  
    //criando coluna - total
        let medal_total = document.createElement('div')
        medal_total.classList.add('coluna', 'total')
    
    //criando SPAN titulo medal
        let coluna_medal = document.createElement('span')
        coluna_medal.innerText = total
        medal_total.appendChild(coluna_medal)

        return medal_total
}


