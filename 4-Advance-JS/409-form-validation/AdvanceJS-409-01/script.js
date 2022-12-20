const fname = document.getElementById('fname');
       const lname = document.getElementById('lname');
       const submitButton = document.getElementById('submit_button');
       const email = document.getElementById('email');
       const password = document.getElementById('password');
       const telephone = document.getElementById('telephone');
       const bio = document.getElementById('bio');
       const error1 = document.getElementById('fname_text');
       const error2 = document.getElementById('lname_text');
       const error3 = document.getElementById('email_text');
       const error4 = document.getElementById('password_text');
       const error5 = document.getElementById('telephone_text');
       const error6 = document.getElementById('bio_text');
        const success = document.getElementById('success_msg');

       submitButton.addEventListener('click', ()=>{ 
        if(fname.value.length<3 || fname.value.length>16){
            error1.innerHTML='First name must be alphanumeric and contain 3 to 16 characters';
            error1.style.color='red';
       }
       else if(lname.value.length<3 || lname.value.length>16){
            error2.innerHTML='Last name must be alphanumeric and contain 3 to 16 characters';
            error2.style.color='red';
            error1.innerHTML="";
       }
        else if(!email.value.includes('@gmail.com')){
        error3.innerHTML='Email must be a valid address, e.g. example@example.com';
        error3.style.color='red';
        error2.innerHTML="";
        error1.innerHTML="";
       }
       else if(password.value.length<6 || password.value.length>20){  
        error4.innerHTML='password should be alphanumeric(@, _and - are also allowed)and between 6-20 characters';
        error4.style.color='red';
        error3.innerHTML="";
        error2.innerHTML="";        
        error1.innerHTML="";
       }
       else if(telephone.value.length<11 ||telephone.value.length>11){
        console.log(telephone.value.length);  
        error5.innerHTML='A valid Telephone number(11 digits and 333-333-3334)';
        error5.style.color='red';
        error4.innerHTML="";
        error3.innerHTML="";
        error2.innerHTML="";
        error1.innerHTML="";
       }
       else if(bio.value.length<8 || bio.value.length>50 || !bio.value.includes('_')|| !bio.value.includes('-')){  
        error6.innerHTML='Bio must contain only lowercase letters, underscores, hyphens and  be 8-50 characters';
        error6.style.color='red';
        error5.innerHTML="";
        error4.innerHTML="";
        error3.innerHTML="";
        error2.innerHTML="";
        error1.innerHTML="";
       }
       else{
        error6.innerHTML="";
        error5.innerHTML="";
        error4.innerHTML="";
        error3.innerHTML="";
        error2.innerHTML="";
        error1.innerHTML="";
        success.innerHTML="Created Successfully!";
        success.style.color='red';
        fname.value='';
        lname.value='';
        email.value='';
        password.value='';
        telephone.value='';
        bio.value='';
       }
       })