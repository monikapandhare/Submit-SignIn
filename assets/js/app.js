console.log("hello submit event");
let cl = console.log;
const signInform = document.getElementById("signInform");

const email = document.getElementById("email");

const password = document.getElementById("password");


let emailFromDb = "monikapandhare71@gmail.com";
let passFromDB = "9975487921";
// let db = [
//     {email : "monika71@gmail.com", password : 'iamDeveloper'},
//     {email : "monika45@gmail.com", password : 'iamDeveloper'},
//     {email : "monika32@gmail.com", password : 'iamDeveloper'},
//     {email : "monika11@gmail.com", password : 'iamDeveloper'},
//     {email : "monika22@gmail.com", password : 'iamDeveloper'}
// ]
const onsignInHandler = (eve) => {
    eve.preventDefault(); // it does not refresh page
    // cl(`sign In !!!`)

    let emailval = email.value;
    let passwordval = password.value;
    if(emailval === emailFromDb && passFromDB){
        // alert(`Sign In successfully`)
        Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Sign In Successfully',
            showConfirmButton: false,
            timer: 3000
          })
        

        return true;
    }else{
        // alert(`Invalid Username Or Password`)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Username Or Password',
            timer: 3000,
            position: 'top-start'
          })
          eve.target.reset()
        return false
    }

}





signInform.addEventListener("submit",onsignInHandler);

// submit event having default behaviour as it refresh page we stop this using preventDefault