let form1= document.getElementById("form");

form1.addEventListener("submit",(e) =>{
     e.preventDefault();
     eventInput();
});

function eventInput () {
    /* First Name */
    let firstName = document.getElementById("firstname").value;
    let firstNameFormat = /[a-z ,.'-]+$/;
    
    if(firstName == ""){
        document.getElementById("d1").innerHTML = "Please Enter Your Name above"
        document.getElementById("d1").style.color = "red"
    }
    else if(!firstName.match(firstNameFormat)){
        document.getElementById("d1").innerHTML = "Please Enter a Valid Name !"
        document.getElementById("d1").style.color = "red"
    }
    else{
        document.getElementById("d1").innerHTML = "Look's Good !";
        document.getElementById("d1").style.color = "green";
    };
         /* LastName */

        let lastName = document.getElementById("lastname").value;
        let lastNameFormat = /[a-z ,.'-]+$/;    

        if(lastName == ""){
            document.getElementById("d2").innerHTML = "Please Enter Your Last Name Above "
            document.getElementById("d2").style.color = "red"
        }
        else if(!lastName.match(lastNameFormat)){
            document.getElementById("d2").innerHTML = "Please a Valid Last Name"
            document.getElementById("d2").style.color = "red"
        }
        else {
            document.getElementById("d2").innerHTML = "Looks Good!!"
            document.getElementById("d2").style.color = "green"
        }
        
            /* Email */
        
        let emailName = document.getElementById("email").value;
        let emailNameFormat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

        if(emailName == ""){
            document.getElementById("d3").innerHTML = "Please Enter a E-main Above";
            document.getElementById("d3").style.color = "red";
        }
        else if(!emailName.match(emailNameFormat)){
            document.getElementById("d3").innerHTML = "Please Enter a Valid E-main ";
            document.getElementById("d3").style.color = "red";
        }
        else{
            document.getElementById("d3").innerHTML = "Looks Good!!";
            document.getElementById("d3").ststyle,color = "green";
        }
        
            /* Number */

        let numberName = document.getElementById("number").value;
        let numberNameFormat = /^03\d{9}$/;

        if(numberName == ""){
            document.getElementById("d4").innerHTML = "Please Enter Your Number";
            document.getElementById("d4").style.color = "red";
        }
        else if(!numberName.match(numberNameFormat)){
            document.getElementById("d4").innerHTML = "Please Enter a Valid Number";
            document.getElementById("d4").style.color = "red";
        }
        else{
            document.getElementById("d4").innerHTML = "Looks Good!!";
            document.getElementById("d4").style.color = "green";
        }

               /* Address */

        let addressName = document.getElementById("address").value;

        if(addressName == ""){
            document.getElementById("d5").innerHTML = "Please Enter Your Address ";
            document.getElementById("d5").style.color = "red";
        }
        else{
            document.getElementById("d5").innerHTML = "Looks Good!!";
            document.getElementById("d5").style.color = "green";
        }

        /* Language */

        let languageName = document.getElementById("language").value;

        if(languageName == ""){
            document.getElementById("d6").innerHTML = "Select Your Language ";
            document.getElementById("d6").style.color = "red";
        }
        else{
            document.getElementById("d6").innerHTML = "Looks Good!!";
            document.getElementById("d6").style.color = "green";
        }

        /* Gender */

    let gender = document.getElementById("gender").value;
     
    if(gender == ""){
        document.getElementById("d7").innerHTML = "Select Your Gender"
        document.getElementById("d7").style.color = "red"
    }
    else{
        document.getElementById("d7").innerHTML = "Looks Good!!"
        document.getElementById("d7").style.color = "green"
    }

        /* Zipcode */

        let zipcode = document.getElementById("zipcode").value;
        let zipCodeFormat =/^[0-9]{5}(?:-[0-9]{4})?$/;
         
        if(zipcode == ""){
            document.getElementById("d8").innerHTML = "Please Enter your Zip-Code "
            document.getElementById("d8").style.color = "red"
        }
        else if(!zipcode.match(zipCodeFormat)){
            document.getElementById("d8").innerHTML = "Please Enter a Valid Zip Code !"
            document.getElementById("d8").style.color = "red"
        }
        else{
            document.getElementById("d8").innerHTML = "Looks Good!!"
            document.getElementById("d8").style.color = "green"
        }
        
        /* Password */

        let newPassword = document.getElementById("newPassword").value;
        let newPasswordFormat =/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
         
        if(newPassword == ""){
            document.getElementById("d9").innerHTML = "Please Enter New-Password"
            document.getElementById("d9").style.color = "red"
        }
        else if(!newPassword.match(newPasswordFormat)){
            document.getElementById("d9").innerHTML = "Please Enter a Valid Password!!"
            document.getElementById("d9").style.color = "red"
        }
        else{
            document.getElementById("d9").innerHTML = "Looks Good!!"
            document.getElementById("d9").style.color = "green"
        }

        /* Confirm password */


       let conPassword = document.getElementById("conPassword").value;
       let conPasswordFormat =/^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
        
       if(conPassword == ""){
           document.getElementById("d10").innerHTML = "Please Confirm your new Password"
           document.getElementById("d10").style.color = "red"
       }
       else if(conPassword !== newPassword){
           document.getElementById("d10").innerHTML = "Your password does not match"
           document.getElementById("d10").style.color = "red"
       }
       else{
           document.getElementById("d10").innerHTML = "Looks Good!!"
           document.getElementById("d10").style.color = "green"
       }


}