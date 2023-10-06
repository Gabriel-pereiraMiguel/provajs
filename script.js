
let nome = document.querySelector('.register-name')
let email = document.querySelector('.register-email')
let senha = document.querySelector('.register-pass')
let confirma = document.querySelector('.register-conf')
let btn = document.querySelector('.button')



btn.addEventListener('click',function(){
    
    let nomeValor = nome.value 
    let tam = nomeValor.slice(0,1);
    let tam1 = nomeValor.slice(1,10);
    let emailValor = email.value
    let tamEmail = emailValor.slice(0,1)
    let email2 = emailValor.slice(1,30)
    let senhaValor = senha.value
    let senha2 = senhaValor.slice(0,8)
    
    if(tam.includes('@') || 
        tam.includes('!') || 
        nome.value.length > 10 ||
        nome.value.includes(' ') ||
        tam.includes('1') ||
            tamEmail.includes('@')||
            tamEmail.includes('!')||
            tamEmail.includes('#')||
            tamEmail.includes('1')||
            emailValor.includes(' ')|| 
                 senha2.includes('aaa')||
                 senha2.includes('111')||
                 senha2.includes('222')||
                 senha2.includes('333')||
                 senha2.includes('@@@')||
                 senha2.includes('!!!')||
                 senhaValor.length >= 8){
         alert('VOCE ERROU')
     }else if(nome.value==="" && email.value==="" && senha.value===""){
         alert('Não pode ter campo vazio!')
     }else if (tam1.includes('@') ||
             tam1.includes('!')||
             tam1.includes('1') ||
                 email2.includes('@') ||
                 email2.includes('.') ||
                 emailValor >= 20 ||
                    senhaValor.includes('1')&&
                    senhaValor.includes('2')&&
                    senhaValor.includes('@')&&
                    senhaValor.includes('!')&&
                    senhaValor.includes('A')&&
                    senhaValor.includes('B')&&
                    senha.value === confirma.value ){
           alert('Usuario cadastrado')
     }else{
         alert('FOI')
     }

    

    
    
})




