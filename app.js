//MASCARA INPUT TEL
document.getElementById('tel-form').addEventListener('keyup', (e)=>{
    let input = e.target
    input.value = phoneMask(input.value)
})


const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}



//-----------------FAZER CONTAGEM DE VISITA---------------
async function contagemVisita(){
    const response = await fetch("https://freeladev.online/salvarContagem")
    const data = await response.json()
}
contagemVisita();







//------------REMOVER LOADER O MOSTRAR CONTENT APÓS INSERIR TODOS OS DADOS------------------
function inserirDados(){
    setTimeout(() => {
        document.getElementById("loader").classList.remove('d-flex')
        document.getElementById("loader").classList.add('d-none')
        document.getElementById("all-content").classList.remove('d-none')
    }, 2000);
}
inserirDados();