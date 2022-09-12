let passMatch = document.getElementById('password_match');

$('input[type="submit"]').click( function(){
    $('form').addClass('submitted');
    let passOne = document.getElementById('password_one').value;
    let passTwo = document.getElementById('password_two').value;
    console.log(passOne + "   " + passTwo);
    if(passOne == passTwo){
        passMatch.innerHTML = '';
    } else {
        passMatch.innerHTML = '* passwords do not match';
        return false;
    }
});





