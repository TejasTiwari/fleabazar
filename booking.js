

var selected=0;

function count(event){
    if((document.getElementById(event.target.id).checked)==true){
        selected+=1;
    }

    else{
        selected-=1;
    }
     
    console.log(selected);
}

// window.onload( function loadseats(){
//         int i;

//     }

// )

// var xhttp= new XMLHttpRequest();
// var list;

// xhttp.open("GET", "url", true);
// xhttp.setRequestHeader("Content-type", "application/json");

// xhttp.onreadystatechange= function(){
//     if( this.readyState==4 && this.status==200){
//         var json= JSON.parse(this.);
//         list= json.array;

//         for(let i=0; i<list.length; i++){
//             var row= document.createElement("div");
            
//             for(let j=0; j< list[i].length; j++){

//             }
//         }
//     }
// }