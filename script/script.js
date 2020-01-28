
      var mdate = document.getElementById("date");
      mdate.onclick = function () {
        document.getElementById('demo').innerHTML = new Date();
      }
      var d = new Date();
document.getElementById("demo").innerHTML = d.getDate();