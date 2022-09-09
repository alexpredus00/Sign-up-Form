let passOne = document.getElementById('password_one');
let passTwo = document.getElementById('password_two');
let passMatch = document.getElementById('password_match');

$('input[type="submit"]').click( function(){
    $('form').addClass('submitted');
    if(passOne == passTwo){
        passMatch.innerHTML = '';
    } else {
        passMatch.innerHTML = '* passwords do not match';
    }
});





