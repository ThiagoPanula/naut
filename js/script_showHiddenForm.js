
function showForm(){
    var form = document.getElementById("newCategoria");
    var fundo = document.getElementById("categorias");
    if (form.style.display === "block"){
        form.style.display = "none";
        fundo.style.filter = "brightness(100%)";
    }else{
        form.style.display = "block";
        fundo.style.filter = "brightness(60%)";
    }
}