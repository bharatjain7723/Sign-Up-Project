//document.getElementById('submitButton').addEventListener('click', submitForm);
$("#submitButton").click(function(event){
    event.preventDefault();

    // var userEmail = document.getElementById('email').value;
    // var userPassword = document.getElementById('password').value;

    var baseURL = 'http://13.126.92.102:8000';

    var userEmail = $("#email").val();
    var userPassword = $("#password").val();


    console.log(userEmail +"   "+ userPassword);

    $.ajax({
        url: baseURL + "/test-login",
        method:"POST",

        data:{
          username: userEmail,
          password: userPassword
        },
        success:function() {
         alert("success");
           
        },
        fail:function(){
            alert("error");
        }
    });

});

// function submitForm(event){


 
//     var userEmail = document.getElementById('email').value;
//     var userPassword = document.getElementById('password').value;

//     var baseURL = 'http://13.126.92.102:8000';

//     console.log(userEmail +"   "+ userPassword);

//     $.ajax({
//         url: baseURL + "/test-login",
//         method:"POST",

//         data:{
//           username: userEmail,
//           password: userPassword
//         },
//         done:function(response) {
//          console.log(response);  
//          console.log("Successs....");
//          alert("success");
           
//         },
//         fail:function(){
//             alert("error");
//         }
//     });
// }
