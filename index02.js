function log(){
const email = prompt('Enter your email:')
const password = prompt('Enter your password:')

if (email=="stu@letsupgrade.com" && password=="12345"){
    alert("You're logged in")
}
else{
    log();
}
}

log();