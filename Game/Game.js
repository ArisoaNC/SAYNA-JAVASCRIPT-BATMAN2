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
    const demarrer = document.getElementById('demarrer');
    const nextbutton = document.getElementById('question-suivant');

    demarrer.addEventListener('click',(e)=>{
    e.preventDefault();
    showQuestions();
    $.ajax({
        url:"https://batman-api.sayna.space/questions",
        datatype: 'json',
        success: function(questions){
        let totalPoint=0;
        let currentQuiz = 0;
        let totalQuiz= questions.lenght;

        $('#total-quiz').text(totalQuiz);
        setForm(questions[currentQuiz].question,questions[currentQuiz].response)
    },
    error: function(){
        console.log('Un probème est survenu Impossible de se connecter au serveur');

    },
        })
    })

});

function showQuestions(){
    const question = document.getElementById('questions');
    question.style.display = 'block';
    const downFleche = document.getElementById('down');
    const demarrer = document.getElementById('entete');
    demarrer.style.display = 'none';
    downFleche.style.display = 'none';
    $('#question-suivante').show();
   
    g

}


    
    
    
    

    


