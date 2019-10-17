function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function trans(){
    document.getElementById("transaction-cont").style.display="block";
    document.getElementById("home").style.display="none";
    document.getElementById("profile").style.display="none";
  }

  function home(){
    document.getElementById("transaction-cont").style.display="none";
    document.getElementById("profile").style.display="none";
    document.getElementById("home").style.display="block";
  }

  function profile(){
    document.getElementById("transaction-cont").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("profile").style.display="block";
  }

  window.onload=function(){


           // Events Table
           var table=document.getElementById("events-table");
           var i=0;
          while(i<8){
            var tr= document.createElement('tr');
         
            var td= document.createElement('td');
             td.appendChild(document.createTextNode('Sunday'));
            tr.appendChild(td);
    
            var td= document.createElement('td');
            td.appendChild(document.createTextNode('30'));
            tr.appendChild(td);
    
            var td= document.createElement('td');
            td.appendChild(document.createTextNode('3:00 PM'));
            tr.appendChild(td);
    
            var td= document.createElement('td');
            var img= document.createElement('img');
            img.setAttribute('src', 'http://www.lemieux-design.net/img/map-pin.png');
            td.appendChild(img);
            tr.appendChild(td);
    
            var td= document.createElement('td');
            td.appendChild(document.createTextNode('New Delhi'));
            tr.appendChild(td);
    
            table.appendChild(tr);
          
            i++;
          }






    var userhttp = new XMLHttpRequest();
    userhttp.open('GET', 'url', true);
    userhttp.setRequestHeader("Content-type", "application/json");
    userhttp.onreadystatechange= function(){
      if(this.readyStatus==4 && this.status==200){
        var json= JSON.parse(this.user);

        // Profile Table
        document.getElementById("prof-name").value= "Tejas";
        document.getElementById("prof-email").value= josn.email;
        document.getElementById("prof-phone").value= json.phone;
        document.getElementById("prof-address").value= json.address;
        document.getElementById("prof-shop").value= json.shop;

       // Events Table
       var table=document.getElementById("events-table");
       var i=0;
      while(i<5){
        var tr= document.createElement('tr');
     
        var td= document.createElement('td');
         td.appendChild(document.createTextNode('Sunday'));
        tr.appendChild(td);

        var td= document.createElement('td');
        td.appendChild(document.createTextNode('30'));
        tr.appendChild(td);

        var td= document.createElement('td');
        td.appendChild(document.createTextNode('3:00 PM'));
        tr.appendChild(td);

        var td= document.createElement('td');
        var img= document.createElement('img');
        img.setAttribute('src', 'http://www.lemieux-design.net/img/map-pin.png');
        td.appendChild(img);
        tr.appendChild(td);

        var td= document.createElement('td');
        td.appendChild(document.createTextNode('New Delhi'));
        tr.appendChild(td);

        table.appendChild(tr);
      
        i++;
      }
        
      }
    }
  }

  