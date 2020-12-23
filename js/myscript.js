function phoneNumberValidation(phoneNumber)  
{  
    var phoneno = /^\d{10}$/;  
    if(phoneNumber.match(phoneno))  
    {  
        return true;  
    }  
    else  
    {  
        var div = document.getElementById('phone_error');
        div.innerHTML = "* Enter valid 10 digit number like this 9876543210.";
        return false;
    }  
} 
function validate()
{
    var valid = true;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone').value;
    
    if(email=='' || email==null)
    {
        valid=false;
        var div = document.getElementById('email_error');
        div.innerHTML = "* Please enter email.";
    }
    else
    {
        document.getElementById('email_error').innerHTML='';
    }
   
    if(phone=='' || phone==null)
    {
        valid=false;
        var div = document.getElementById('phone_error');
        div.innerHTML = "* Please enter your phone number.";
    }
    else
    {
        document.getElementById('phone_error').innerHTML='';
    }
    if(phone!='')
    {
        valid = phoneNumberValidation(phone);
    }
   
    if(valid==false)
    {
        return false;
    }
    else
    {
        alert("You form is ready to submit.");
        return true;
    }   
}