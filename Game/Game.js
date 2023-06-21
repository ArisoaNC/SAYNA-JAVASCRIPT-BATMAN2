window.onload=()=>{
    
    let arrow= document.getElementsByClassName('arrow2');
    arrow[0].addEventListener('click', function(){
        window.scrollTo(top, 'smooth');

    });
    arrow[1].addEventListener('click', function(){
        window.scrollBy(0, window.innerHeight);
    });
};
$(document).ready(function(){
    // $.ajax({
    //     url:"https://batman-api.sayna.space/questions",
    //     datatype: 'json',
    //     success : function(questions){
    //         console.log(questions[5].response[0].isGood);

    //     },
    //     error: function(){
    //         console.log('impossible');
    //     }
    $('#btn').click(function(){
        $('*').fadeIN(slow);



    })

    })


