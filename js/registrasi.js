
function validateEmail(email){
    if(!email.endsWith('.com')){
        return false
    }
    else if(!email.includes('@')){
        return false
    }
    else if(email.startsWith('@') || email.startsWith('.')){
        return false
    }
    return true
}

function validatepassword(password){
    var isLowerCase = false
    var isUpperCase =false
    var isNumeric=false
    // asdasd

    for(let i=0; i<password.length; i++){
        if(password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122) {
            isLowerCase=true
        } 
        else if(password.charCodeAt(i)>= 65 && password.charCodeAt(i)<=97){
            isUpperCase=true
        }
     else if(password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57){
     isNumeric=true
     }
    }
    
    if( isLowerCase&& isUpperCase && isNumeric){
        return true
    }
    else{
        return false
    }
}

// function isgenderselect(gender){
//     for(let i=0;i<gender.length;i++){
//         if(gender[i].checked){
//             return true
//         } 
//     }
//     return false
// }

var submitBtn=document.getElementById('submit-btn')
submitBtn.addEventListener('click', function(e){
    
    e.preventDefault()

    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    // var gender=document.getElementsByClassName('gender')
    // var city=document.getElementById('city').value
    var agree=document.getElementById('agree').checked
    var confirmblapassword=document.getElementById('confirmblapassword').value


    var usernameErr = document.getElementById('username-err')
   
    if(username.length < 5 || username.length>12){
        alert('Username must be 5-12 characters long')
    }
    else if(!validateEmail(email)){
        alert('Email must ends with `.com`')
    }
    else if(!validatepassword(password)){
        alert('Password must be alphabeic numeric and constain upper and lower case')
    }
    // else if(!isgenderselect(gender)){
    //     alert('gender must be selected!')
    // }
    else if(!agree){
        alert(' u mist be agree to terms and conditions')
    }
    // else if(city==""){
    //     alert('City must be selected!')
    // }
    else if(confirmblapassword!=password){
        alert('Passowrd does not match with confirm_password')
    }
    else{
        alert('account created succesfully!')
        window.location.href='../html/index.html'
    }
})
