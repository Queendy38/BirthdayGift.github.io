document.body.style.backgroundImage = "url(https://image.dhgate.com/0x0s/f2-albu-g7-M01-FD-03-rBVaSVpqyJKALvMHAAQvG4iaCzA661.jpg/hd-mountwallpapers-for-bed-room-ain-autumn.jpg)";
document.body.style.backgroundSize = "cover"; 
 //create 6 rooms for guests to check-in and check-out

//create an array that store names from the input box
var arrName = [];
var total = 0;


function timeOut(){


setTimeout (function() { //after 1 min, no more check-in, button disappears
       var button = document.getElementsByTagName('button')[0];
       var parent = button.parentNode;
       parent.removeChild(button);
       document.getElementById('cleanUp').innerHTML = "It's time to clean up the rooms.";
  
},60000);

}
function addName() { 
  total++; //adds one everytime you presses a button
  //get name from guest
  var name = document.getElementById('name').value;
 //clear the input box
  document.getElementById('name').value = "";
 //unshift the name to arrName
 document.getElementsByTagName('h3')[0].innerHTML = "Room 1";
  
if (total <= 5) { //if the length is greate than 4, display room filled and put people in waitlist
   arrName.unshift(name);
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
  document.getElementsByTagName('p')[1].innerHTML = "All Guests:" + arrName; }

else if (total >= 5){
      document.getElementsByTagName('h3')[0].innerHTML = "Full!";
      
 
}
  
 }

//when click the button, remove the order list
//I dont want to remove the enitre, I want to be able to remove all li
function deleteAll(){
   total = 0;
   document.getElementsByTagName('h3')[0].innerHTML = "Room 1";
  //find child
  //find parent
  //remove child from parent
  var li = document.getElementsByTagName('li')[0-4];
  var parent = li.parentNode;
  parent.removeChild(li)[0-4];
}
function removeName() { //remove the li
    document.getElementsByTagName('h3')[0].innerHTML = "Room 1";
    var li = document.getElementsByTagName('li')[0];
    var parent = li.parentNode;
    parent.removeChild(li);
    total = 5; //set button = 5
    total--; //button minus 1

}
for (i = 0; i < 6; i++){
      
}
