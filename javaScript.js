function Confirm(){
  document.getElementById('Confirm_msg').innerHTML = 'Your reservation has been successfully confirmed ! Thank you.';
}

function age(){
  var ud = document.getElementById('day').value;
  var um =document.getElementById('month').value;
  var date = new Date();
  var d = date.getDate();
  var m =1+ date.getMonth();
      if(ud==d && um==m){
        document.getElementById('message').innerHTML='You got the discount !';
      }
      else{
        document.getElementById('message').innerHTML='Sorry , today is not your birthday !';
      }
} 

// to get the date og today
function getdate(){
  var today = new Date();

document.getElementById("start").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


}
window.addEventListener('load',getdate, false);


function Signup(){
 
  // ظهور نافذة التاكيد (هل انت متاكد)
  return confirm("Are you sure it is your correct email?");

}
 
//ظهور لون خلفيه مختلف عند الضغط
function labelBG(x){
  x.style.background="#B2B2B2";

}
