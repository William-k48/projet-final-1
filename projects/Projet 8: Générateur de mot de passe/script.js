var copyBtn = document.getElementById('copy');

function getpassword(){
    var chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    var passwordLength= 16;
    var password= "";

    

    //générer le mot de passe
    for(let i= 0; i < passwordLength ; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        
        password += chars[randomNumber];

        //afficher le mot de passe

        document.getElementById('password').value = password;

        //changer le style du boutton copier

        copyBtn.style.background="#6c757d"
        copyBtn.style.color="#fff"
    }
}

//copier le mot de passe

function copyMdp(){
    var inputpassword = document.getElementById('password');
    
    //verifier la longeur du mot de passe

    if(inputpassword.value.length ==16){
        //copier le mot de passe
        
        navigator.clipboard.writeText(inputpassword.value)
        .then(()=> {

       

        //changer le style du boutton copier

        copyBtn.style.background ="transparent";
        copyBtn.style.color ="#000"
        
        //afficher une alert

        alert('Mot de passe copié !')
    })
    }else{
        //si non
        alert('Veuillez générer un Mot de passe')
    }
}
