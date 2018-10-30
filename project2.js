document.body.style.backgroundImage = "url(https://www.americaisraeltours.com/wp-content/uploads/greecetour.jpg)";
document.body.style.backgroundSize = "cover"; 
 //create 6 rooms for guests to check-in and check-out

//create an array that store names from the input box
var arrName = [];
var arrGuest = [];
var arrName2 = [];
var arrGuest2 = [];
var arrName3 = [];
var arrGuest3 = [];
var arrName4 = [];
var arrGuest4 = [];
var arrName5 = [];
var arrGuest5 = [];
var arrName6 = [];
var arrGuest6 = [];


function timeOut(){


setTimeout (function() { //after 1 min, no more check-in, button disappears
       var button = document.getElementsByTagName('button')[0];
       var parent = button.parentNode;
       parent.removeChild(button);
       document.getElementById('cleanUp').innerHTML = "It's time to clean up the rooms.";
  
},60000);

}
function timeOut2(){


  setTimeout (function() { //after 1 min, no more check-in, button disappears
         var button = document.getElementsByTagName('button')[1];
         var parent = button.parentNode;
         parent.removeChild(button);
         document.getElementById('cleanUp2').innerHTML = "It's time to clean up the rooms.";
    
  },60000);
  
  }
  function timeOut3(){


    setTimeout (function() { //after 1 min, no more check-in, button disappears
           var button = document.getElementsByTagName('button')[2];
           var parent = button.parentNode;
           parent.removeChild(button);
           document.getElementById('cleanUp3').innerHTML = "It's time to clean up the rooms.";
      
    },60000);
    
    }
    function timeOut4(){


      setTimeout (function() { //after 1 min, no more check-in, button disappears
             var button = document.getElementsByTagName('button')[3];
             var parent = button.parentNode;
             parent.removeChild(button);
             document.getElementById('cleanUp4').innerHTML = "It's time to clean up the rooms.";
        
      },60000);
      
      }
      function timeOut5(){


        setTimeout (function() { //after 1 min, no more check-in, button disappears
               var button = document.getElementsByTagName('button')[4];
               var parent = button.parentNode;
               parent.removeChild(button);
               document.getElementById('cleanUp5').innerHTML = "It's time to clean up the rooms.";
          
        },60000);
        
        }
        function timeOut6(){


          setTimeout (function() { //after 1 min, no more check-in, button disappears
                 var button = document.getElementsByTagName('button')[5];
                 var parent = button.parentNode;
                 parent.removeChild(button);
                 document.getElementById('cleanUp6').innerHTML = "It's time to clean up the rooms.";
            
          },60000);
          
          }
     

 name.onkeyup = function(){
   if (event.keyCode == 13){
     addName();
   }
 } 
              
function addName() { 
  //total++; //adds one everytime you presses a button
  //get name from guest
  
  var name = document.getElementById('name').value;
 //clear the input box
  document.getElementById('name').value = ""; 
 //unshift the name to arrName
 document.getElementsByTagName('h3')[0].innerHTML = "Room 1";
  
if (arrName.length < 4) { //if the length is less than 6, display room filled and put people in waitlist
   arrName.unshift(name);
   arrGuest.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")"); 
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest').innerHTML = "All Guests: " + arrGuest; 
  
  li.onclick = function(){ //remove your selected li
    this.parentNode.removeChild(this);
    arrName--;
  } }

else {
      document.getElementsByTagName('h3')[0].innerHTML = "Full!";
      
 
}}
  
 function addName2() { 
 
  //get name from guest (input box)
  var name = document.getElementById('name2').value;
 //clear the input box
  document.getElementById('name2').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[1].innerHTML = "Room 2";
  
if (arrName2.length < 4) { //if the length is less than 6, display room filled and put people in waitlist
   arrName2.unshift(name);
   arrGuest2.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")"); 
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list2');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest2').innerHTML = "All Guests: " + arrGuest2; }

else {//if click more than five times, do this
      document.getElementsByTagName('h3')[1].innerHTML = "Full!";
      
 
}
  
 }

function addName3(){
  //get name from guest (input box)
  var name = document.getElementById('name3').value;
 //clear the input box
  document.getElementById('name3').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[2].innerHTML = "Room 3";
  
if (arrName3.length < 4) { //if the length is less than 6, display room filled and put people in waitlist
   arrName3.unshift(name);
   arrGuest3.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")"); 
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list3');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest3').innerHTML = "All Guests: " + arrGuest3; }

else {//if click more than five times, do this
      document.getElementsByTagName('h3')[2].innerHTML = "Full!";
      
 
}
  
 
}
function addName4(){
  //get name from guest (input box)
  var name = document.getElementById('name4').value;
 //clear the input box
  document.getElementById('name4').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[3].innerHTML = "Room 4";
  
if (arrName4.length < 4) { //if the length is less than 6, display room filled and put people in waitlist
   arrName4.unshift(name);
   arrGuest4.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")"); 
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list4');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest4').innerHTML = "All Guests: " + arrGuest4; }

else {//if click more than five times, do this
      document.getElementsByTagName('h3')[3].innerHTML = "Full!";
     
 
}
  
 
}
function addName5(){
  //get name from guest (input box)
  var name = document.getElementById('name5').value;
 //clear the input box
  document.getElementById('name5').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[4].innerHTML = "Room 5";
  
if (arrName5.length < 4) { //if the length is less than 6, display room filled and put people in waitlist
   arrName5.unshift(name);
   arrGuest5.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")"); 
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list5');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest5').innerHTML = "All Guests: " + arrGuest5; }

else{//if click more than five times, do this
      document.getElementsByTagName('h3')[4].innerHTML = "Full!";
     
 
}
  
 
}
function addName6(){
  //get name from guest (input box)
  var name = document.getElementById('name6').value;
 //clear the input box
  document.getElementById('name6').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[5].innerHTML = "Room 6";
  
if (arrName6.length < 4) { //if the length is less than 6, display room filled and put people in waitlist
   arrName6.unshift(name);
   arrGuest6.unshift(name);
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")"); 
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementById('list6');
  //append li to ol
  ol.appendChild(li);
  document.getElementById('allGuest6').innerHTML = "All Guests: " + arrGuest6; }

else{//if click more than five times, do this
      document.getElementsByTagName('h3')[5].innerHTML = "Full!";
      return;
 
}
  
 
}

function deleteAll(){ //remove all li
  arrName.length = 0;
 document.getElementsByTagName('h3')[0].innerHTML = "All Guest Removed";
  var ol = document.getElementById('list');
  while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
    ol.removeChild(ol.firstChild);
 
   
  }
     
    
}

function deleteAll2(){ //remove all li
  arrName2.length = 0;
  document.getElementsByTagName('h3')[1].innerHTML = "All Guest Removed"; 
   var ol = document.getElementById('list2');
   while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
     ol.removeChild(ol.firstChild);
   
     }
  
}
function deleteAll3(){
    arrName3.length = 0;
    document.getElementsByTagName('h3')[2].innerHTML = "All Guest Removed"; 
     var ol = document.getElementById('list3');
     while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
       ol.removeChild(ol.firstChild);
       }
  
}
function deleteAll4(){
 arrName4.length = 0;
  document.getElementsByTagName('h3')[3].innerHTML = "All Guest Removed"; 
   var ol = document.getElementById('list4');
   while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
     ol.removeChild(ol.firstChild);
     
    
}
}
function deleteAll5(){
  arrName5.length = 0;
  document.getElementsByTagName('h3')[4].innerHTML = "All Guest Removed"; 
   var ol = document.getElementById('list5');
   while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
     ol.removeChild(ol.firstChild);
     }
}
function deleteAll6(){
  arrName6.length = 0;
  document.getElementsByTagName('h3')[5].innerHTML = "All Guest Removed"; 
   var ol = document.getElementById('list6');
   while (ol.hasChildNodes()){ //as long as <ol> has a child, remove all child
     ol.removeChild(ol.firstChild);
  }
}
function removeName() { //remove the li 
  arrName.length--;
  document.getElementsByTagName('h3')[0].innerHTML = "Room 1"; 
  var ol = document.getElementsByTagName('ol')[0];
  var li = ol.childNodes[0];
  ol.removeChild(li)[0]; 
 }
 
function removeName2() { //remove the li
  arrName2.length--;
  document.getElementsByTagName('h3')[1].innerHTML = "Room 2";
  var ol = document.getElementsByTagName('ol')[1]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0];
  
}
function removeName3() { //remove the li
  arrName3.length--;
  document.getElementsByTagName('h3')[2].innerHTML = "Room 3";
  var ol = document.getElementsByTagName('ol')[2]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0]; 
  }
function removeName4() { //remove the li
  arrName4.length--;
  document.getElementsByTagName('h3')[3].innerHTML = "Room 4";
  var ol = document.getElementsByTagName('ol')[3]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0]; 
 }
function removeName5() { //remove the li
 arrName5.length--;
  document.getElementsByTagName('h3')[4].innerHTML = "Room 5";
  var ol = document.getElementsByTagName('ol')[4]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0]; 
  }
function removeName6() { //remove the li
  arrName6.length--;
  document.getElementsByTagName('h3')[5].innerHTML = "Room 6";
  var ol = document.getElementsByTagName('ol')[5]; //remove from ol2
  var li = ol.childNodes[0]; //define which li to remove
  ol.removeChild(li)[0]; 
<<<<<<< HEAD
}
 //delete li when clicks on it
 var listItems = document.getElementsByTagName("li"); // or document.querySelectorAll("li"); 
 for (var i = 0; i < listItems.length; i++) {
  listItems[i].onclick = function() {
    this.parentNode.removeChild(this);
  }
}

//check box 6
//activate a function when presses enter
=======
 }
//delete li when clicks on it
var listItems = document.getElementsByTagName("li"); // or document.querySelectorAll("li"); 
for (var i = 0; i < listItems.length; i++) {
  listItems[i].onclick = function() {this.parentNode.removeChild(this);}
}
//activate a function when presses enter
var elem = document.getElementById("wage");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
       alert("Here");
    }
}
>>>>>>> c7dc75d15656ba04c62cbd07b9505d6f460734fc
