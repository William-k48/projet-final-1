var button_code_bar = document.getElementById('button_code_bar');
var text = document.getElementById('text');
var box = document.getElementById('box');
var pdf_box = document.getElementById('pdf_box');

button_code_bar.onclick = function(){
    if(text.value.length > 0){
        if(text.value.length < 50){
            //generer le code bar
            box.innerHTML = "<svg id='barcode'></svg>";
            JsBarcode("#barcode", text.value);
            box.style.border='1px solid #999';
            //creer un bouton pour télecharger le code bar
            pdf_box.innerHTML = "<button onclick='genererPDF()'> Télécharger le code bar</button>";
            //styliser la boite du boutton pdf
            pdf_box.style.marginTop="10px";
            pdf_box.style.display="flex";


        }else{
            box.style.border = "0";
            box.innerHTML="<p class='error'> Le texte est trop long !</p>";
            pdf_box.style.display = "none";
        }
    }else{
        box.style.border = "0";
        box.innerHTML="<p class='error'>Remplissez le champ !</p>";
        pdf_box.style.display = "none";
    }
}
//generer le pdf
function genererPDF(){
    const options = {
        filename: `${text.value}.pdf`,
        margin: 1,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a6', orientation: 'l' },
    };
    // new promise-based usage:
    html2pdf().set(options).from(box).save();

    
}