var score = 0; 
var total = 4;
var point = 1;
var highest = total * point;

function init(){
    sessionStorage.setItem('a1','a')
    sessionStorage.setItem('a2','b')
    sessionStorage.setItem('a3','c')
    sessionStorage.setItem('a4','d')
}

$(document).ready(function(){
    //hide all questions
    $('.questionform').hide();
    
    //show all questions
    $('#q0').show();
    
    $('#q1 #submit').click(function(){
        $('.questionform').hide();
		$('.questionform').hide();
        process('q1');
        $('#q2').fadeIn(300);
        return false;
    });
    
    
    //test
    
    // 1
    
    $('#q1 #submita').click(function(){
        $('.questionform').hide();
        process('q1');
        $('#q2').fadeIn(300);
        return false;
    });
    
        $('#q1 #submitb').click(function(){
        $('.questionform').hide();
        process('q1');
        $('#f1').fadeIn(300);
        return false;
    });
    
        $('#q1 #submit1').click(function(){
        $('.questionform').hide();
        process('q1');
        $('#f1').fadeIn(300);
        return false;
    });
    
    
    // 2
    
        $('#q2 #submita').click(function(){
        $('.questionform').hide();
        process('q2');
        $('#q3').fadeIn(300);
        return false;
    });
    
        $('#q2 #submitb').click(function(){
        $('.questionform').hide();
        process('q2');
        $('#f2').fadeIn(300);
        return false;
    });
    
        $('#f2 #submit2').click(function(){
        $('.questionform').hide();
        process('q2');
        $('#q2').fadeIn(300);
        return false;
    });
    
    // 3
    
        $('#q3 #submita').click(function(){
        $('.questionform').hide();
        process('q3');
        $('#f3').fadeIn(300);
        return false;
    });
    
        $('#q2 #submitc').click(function(){
        $('.questionform').hide();
        process('q3');
        $('#q4').fadeIn(300);
        return false;
    });
    
        $('#f3 #submit3').click(function(){
        $('.questionform').hide();
        process('q3');
        $('#q3').fadeIn(300);
        return false;
    });
    
    // 4
    
        $('#q4 #submita').click(function(){
        $('.questionform').hide();
        $('#results').hide();
        process('q4');
        $('#f4').fadeIn(300);
        return false;
    });
    

    
	
	    // I
    
        $('#q4 #submitc').click(function(){
        $('.questionform').hide();
        $('#results').hide();
        process('q4');
        $('#f3').fadeIn(300);
        return false;
    });
    
        $('#q3 #submitb').click(function(){
        $('.questionform').hide();
		$('#results').hide();
        process('q4');
        $('#f4').fadeIn(300);
        return false;
    });
    
        $('#q4 #submita').click(function(){
        $('.questionform').hide();
        $('#results').hide();
        process('q4');
        $('#f5').fadeIn(300);
        return false;
    });
	
	    $('#q4 #submitb').click(function(){
        $('.questionform').hide();
        $('#results').hide();
        process('q4');
        $('#q5').fadeIn(300);
        return false;
    });
	
		$('#q5 #submita').click(function(){
        $('.questionform').hide();
        $('#results').hide();
        process('q4');
        $('#f5').fadeIn(300);
        return false;
    });
	
		$('#q5 #submitb').click(function(){
        $('.questionform').hide();
        $('#results').hide();
        process('q4');
        $('#f6').fadeIn(300);
        return false;
    });
	
		$('#q4 #submitc').click(function(){
        $('.questionform').hide();
        $('#results').hide();
        process('q4');
        $('#q5').fadeIn(300);
        return false;
    });
    
		
	
		
	
		
    
    //test
    
    
                           
    
    $('#q2 #submit').click(function(){
        $('.questionform').hide();
        process('q2');
        $('#q3').fadeIn(300);
        return false;
    });
                           
    
                           
    $('#q3 #submit').click(function(){
        $('.questionform').hide();
        process('q3');
        $('#q4').fadeIn(300);
        return false;
    });
                           
                           
		$('#s1 #submits').click(function(){
        $('.questionform').hide();
		$('.start').hide();
        process('q1');
        $('#q1').fadeIn(300);
        return false;
    });
	

	



});

function process(q){
    if(q == "q1"){
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a1){
            score++;
        }
    }
    
    if(q == "q2"){
        var submitted = $('input[name=q2]:checked').val();
        if(submitted == sessionStorage.a2){
            score++;
        }
    }
    
    if(q == "q3"){
        var submitted = $('input[name=q3]:checked').val();
        if(submitted == sessionStorage.a3){
            score++;
        }
    }
    
    if(q == "q4"){
        var submitted = $('input[name=q4]:checked').val();
        if(submitted == sessionStorage.a4){
            score++;
        }
        $('#results').html('<h3>Je score is: '+score+' van de 4</h3><a href="quiz.html">Opnieuw</a>');
    }
    return false;
}
    
window.addEventListener('load',init,false)
