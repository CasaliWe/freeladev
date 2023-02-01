//Selecionar página / PROJETOS
function selectPage(pag){
        if(pag == 'one'){
            $("#multi").removeClass('active-projetos')
            $("#one").addClass('active-projetos')

            $("#container-projetos-multi").slideUp(2000)
            $("#container-projetos-one").slideDown(2000)

        } else { 
            $("#one").removeClass('active-projetos')
            $("#multi").addClass('active-projetos')

            $("#container-projetos-one").slideUp(2000)
            $("#container-projetos-multi").slideDown(2000)
        }
}



//Abrir / fechar menu mobile
function btnMobile(){
    if($("#nav-mobile").hasClass('test')){
         $("#nav-mobile").css({width: '0%', transition: '1s'}) 
         $("#nav-mobile").removeClass('test')
    }else {
        $("#nav-mobile").css({width: '100%', transition: '1s'})
        $("#nav-mobile").addClass('test')
    }
}