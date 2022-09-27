function Calcular(){
    var valor = window.document.getElementById('valorfgts').value
    var res = window.document.getElementById('res')
    var percentual = Number(0.2)
    var  newfgts = valor * percentual

    valor.innerHTML = ''
    res.innerHTML = 'Preencha os valores'
    if(valor.length.value == 0 || valor == 0){
        alert('Preencha os dados corretamente para verificar os valores')
    }else if (valor < 500 ){
        window.alert(`Você não tem direito a saque aniversário`)
    }if (valor >= 500 && valor <= 1000){
       res.innerHTML = (`Você receberá o valor de R$  ${(valor*0.4 + 50).toFixed(2)} Reais`)
    }if(valor > 1000.01 && valor <= 5000){
      res.innerHTML = (`Você receberá o valor de R$ ${(valor*0.3 + 150).toFixed(2)} Reais`)
    }if (valor > 5000.01 && valor <= 10000.00 ){
        res.innerHTML = `Você receberá o valor de R$${(valor * 0.2 + 650).toFixed(2)}`
    }if(valor > 10000.01 && valor <= 15000){
       res.innerHTML = (`Você receberá o valor de R$ ${(valor * 0.15 + 1150.50).toFixed(2)} Reais`)
    }if(valor > 15000.01 && valor <= 20000){
       res.innerHTML = (`Você receberá o valor de ${(valor * 0.1 + 1900).toFixed(2)} Reais`)
    } if(valor > 20000.01){
        res.innerHTML = `Você receberá o valor de R$${valor * 0.05 + 2900}`
    }
    
}
function Reset(){
var btn = document.querySelector("#resetar");
btn.addEventListener("click", function() {
    
    location.reload();
});
}


