window.onload=()=>{
    let myForm = document.getElementById('myForm');
    
    function show(){
        location.reload();
        window.scrollTo(top);
        }
    myForm.addEventListener('submit',function(e){
       let email=document.getElementById('email');
       let check=document.getElementById('check');
       let select=document.getElementById('deroulantList');
      
        if(email.value=='' ){
            e.preventDefault();
            let invalid=document.getElementById('invalid');
            invalid.innerHTML='Veuiller entrer un adresse email';
            invalid.style.color='red';
            invalid.style.fontSize='15px';
            invalid.style.fontStyle='italic';
        }else{
            invalid.innerHTML='';
        }
        if(!check.checked){
        e.preventDefault();
        let invalid1=document.getElementById('invalid1');
        invalid1.innerHTML='A Cocher ';
        invalid1.style.color='red';
        invalid1.style.fontSize='15px';
        invalid1.style.fontStyle='italic';
       }else{
        invalid1.innerHTML='';
       }
     if(select.selectedIndex==0){
        e.preventDefault();
        
        let invalid2=document.getElementById('invalid2');
        invalid2.innerHTML='Veuillez choisir une option';
        invalid2.style.color='red';
        invalid2.style.fontSize='15px';
        invalid2.style.fontStyle='italic';}
        else{
            invalid2.innerHTML='';
           
        }
    if( select.selectedIndex!=0 && check.checked&& email.value!=''){
        e.preventDefault();
        document.getElementById('popupbox').style.display='block';
        setTimeout(show,3000);   
    }
    })

  
    $('main .cinema article').mouseenter(() => {
        // robert_pattinson
        $('main #cinema article:nth-child(1) img').mouseenter(() => {
            setTimeout(()=>{
                $('#robert_pattinson').addClass('show')
                $('#robert_pattinson').removeClass('information')
            }, 100)
        });      // christian_bale
        $('main #cinema article:nth-child(2) img').mouseenter(() => {
            setTimeout(()=>{
                $('#christian_bale').addClass('show')
                $('#christian_bale').removeClass('information')
            }, 100)
        });
         // ben_affleck
         $('main #cinema article:nth-child(3) img').mouseenter(() => {
            setTimeout(()=>{
                $('#ben_affleck').addClass('show')
                $('#ben_affleck').removeClass('information')
            }, 100)
        });
 
    });
    // cinema mouse leave
    
        $('main #cinema article:nth-child(1)').mouseleave(() => {
            $('#robert_pattinson').addClass('information')
            $('#robert_pattinson').removeClass('show')
        });
        $('main #cinema article:nth-child(2)').mouseleave(() => {
            $('#christian_bale').addClass('information')
            $('#christian_bale').removeClass('show')
        });
        $('main #cinema article:nth-child(3)').mouseleave(() => {
            $('#ben_affleck').addClass('information')
            $('#ben_affleck').removeClass('show')
        });
    
}

