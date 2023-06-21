window.onload=()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',function(e){
       let email=document.getElementById('email');
        if(email.value==''){
            e.preventDefault;
            let invalid=document.getElementById('invalid');
            invalid.innerHTML='Veuiller entrer un adresse email';
            invalid.style.color='red';
            invalid.style.fontSize='15px';
            invalid.style.fontStyle='italic';
        }else{
        e.preventDefault();
        document.getElementById('popupbox').style.display='block';
        invalid.innerHTML='';
        }
    })
    
};
