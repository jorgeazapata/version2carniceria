function login(){
 let user,password,solicitud;
 user=document.getElementById('User').value;
 password=document.getElementById('Password').value;
 if (user==null || password== null){
   alert("Por favor ingrese usuario y contraseña,estos son requeridos");
 }
