let error = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.result');

function shortLinkFunct(){
    //verification input
    if(longLink.value !==""){
        //vider l'erreur
        error.innerHTML= "";
        //connection API
        let url =`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;//Lien de API
        fetch(url)
        .then(response => response.text())
        .then(data => {
            // Affichage du lien raccourci
            short.innerHTML = data;

            // Affichage du résultat
            short.style.display = "block";

            // Vérification si le lien est valide
            if(data.length === 0){
                short.innerHTML = "Lien non valide !";
            }
        })
        .catch(error => {
            // Gestion d'erreur en cas de problème avec la requête
            short.innerHTML = "Erreur de connexion à l'API.";
            short.style.display = "block";
        });
    }else{
        //error
        error.innerHTML ="Veuillez remplir le champ !";
        short.style.display = "none";
    }
}
//Fin 
