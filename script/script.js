
       document.getElementById("demo").addEventListener("click", myFunction);

       function myFunction() {
         
       // To set two dates to two variables 
       var date1 = new Date("2019-09-01"); 
       var today = new Date(); 
         
       // To calculate the time difference of two dates 
       var date2= today.getTime() - date1.getTime(); 
         
       // To calculate the no. of days between two dates 
       var date2 = date2 / (1000 * 3600 * 24); 
        
       //To display the final no. of days (result) 
         document.getElementById("demo").innerHTML = "Hi! I'm Ann and this is my <br>"+ Math.round(date2) +"<br>day of learning JS";
       }