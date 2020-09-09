
var name, email, pass,passConf,i,flagN,flagL,flagU,char, flag


function submit() {
    name = document.getElementById('txtUname').value
    email = document.getElementById('txtemail').value
    pass = document.getElementById('txtpass').value
    passConf = document.getElementById('txtpassconf').value
    DoB = document.getElementById('DoB').value

    if(name === ""){
        document.getElementById('err-Uname').innerHTML = "Username must be filled"
    }else if(name.length < 5){
        document.getElementById('err-Uname').innerHTML = "Name length must be at least 5 characters!"
    }
    else if(email === ""){
        document.getElementById('err-email').innerHTML = "Email must be filled!"
        
    }else if(!email.includes('@')){
        document.getElementById('err-email').innerHTML = "Email must include @"
    }
    else if(!email.endsWith(".com")){
        document.getElementById('err-email').innerHTML = "Email must ends with .com"
    }
    else if(pass === ""){
        document.getElementById('err-pass').innerHTML = "Password must be filled!"
    }
    else if(pass.length < 8){
        document.getElementById('err-pass').innerHTML = "Password length must be at least 8 characters!"
    }
    

    
    i= 0
    
    flagN = false
    flagU = false
    flagL = false
    while( i < pass.length ){
        char = pass.charAt(i)
        if(!isNaN(char)){
            flagN = true;
            break;
        }
        else{
            if(char == char.toUpperCase()){
                flagU = true;
            }
            else if(char == char.toLowerCase()){
                flagL = true;
            }   
        }
        i++
    }

    if(flagN === false){
        
        document.getElementById('err-pass').innerHTML = "password must have a number"
    }
    else if(flagU === false){
        
        document.getElementById('err-pass').innerHTML = "password must have a uppercase Letter"
    }
    else if(flagL === false){
        document.getElementById('err-pass').innerHTML = "password must have a lowercase Letter"
    }
    else if(passConf === ""){
        document.getElementById('err-passconf').innerHTML = "password must be filled!"
    }
    else if(passConf.length < 8){
        document.getElementById('err-passconf').innerHTML = "Password Confirmation length must be at least 8 characters!"
    }
    else if(passConf !== pass){
        document.getElementById('err-passconf').innerHTML = "Password is not same"
    }
     
    if(!(document.getElementById('male').checked && document.getElementById('female'.checked)))
    {
        document.getElementById('err-gender').innerHTML = "Gender must be filled!"
    }

    if(DoB === ""){
        document.getElementById('err-DoB').innerHTML = "Date of Birth must filled!"
    }
    
}


