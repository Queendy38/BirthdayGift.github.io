document.body.style.backgroundImage = "url(https://image.dhgate.com/0x0s/f2-albu-g7-M01-FD-03-rBVaSVpqyJKALvMHAAQvG4iaCzA661.jpg/hd-mountwallpapers-for-bed-room-ain-autumn.jpg)";
document.body.style.backgroundSize = "cover"; 
 //create 6 rooms for guests to check-in and check-out


//add name when I click the button
//create an array that store names from the input box
var arrName = [];
var arrWait = [];
function timeOut(){


setTimeout (function() { //after 1 min, no more check-in
       var button = document.getElementsByTagName('button')[0];
       var parent = button.parentNode;
       parent.removeChild(button);
       document.getElementById('cleanUp').innerHTML = "It's time to clean up the rooms.";
  
},60000);

}
function addName() { 
  
  //get name from guest
  var name = document.getElementById('name').value;
 //clear the input box
  document.getElementById('name').value = "";
 //unshift the name to arrName
  arrName.unshift(name);
  
if (arrName.length > 4){ //if the length is greate than 4, display room filled and put people in waitlist
arrWait.unshift(name); 
document.getElementsByTagName('h3')[0].innerHTML = "Full! " + arrWait + " waitlisted";

return;
}
//create if and else statement
// if (arrName.length < 5){
  var ol = document.getElementsByTagName('ol')[0];
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var d = new Date();
  var liText = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")"); 
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementsByTagName('ol')[0];
  //append li to ol
  ol.appendChild(li);
  document.getElementsByTagName('p')[1].innerHTML = "All Guests:" + arrName;
 }


//when clicks a button, remove the first name from list 
 function remove(){
   var li = document.getElementsByTagName('li')[0];
   var parent = li.parentNode;
   parent.removeChild(li)[0];
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////trying to remove an item from arrName
   
}
//when click the button, remove the order list
function deleteAll(){
   var ol = document.getElementById('list');
   var parent = ol.parentNode;
   parent.removeChild(ol);
   
}
function replace(){//when clicks a button, take the name from waitlist and put it into the list
  var name = arrWait[0];
  var li = document.createElement('li');
  var ol = document.getElementById('list');
  var d = new Date();
  var text = document.createTextNode(name + " ("+ "Checked in: " + d.toUTCString() + ")");
  li.appendChild(text);
  ol.appendChild(li);
  arrWait.shift();
}
//function darrName(){
  //var elim = arrName[0];
  //elim.parentNode.removeChild(elim);
//}