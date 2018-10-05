document.body.style.backgroundImage = "url(https://image.dhgate.com/0x0s/f2-albu-g7-M01-FD-03-rBVaSVpqyJKALvMHAAQvG4iaCzA661.jpg/hd-mountwallpapers-for-bed-room-ain-autumn.jpg)";
document.body.style.backgroundSize = "cover"; 
 //create 6 rooms for guests to check-in and check-out


//add name when I click the button
//create an array that store names from the input box
var arrName = [];

function addName() {
  //get name from guest
  var name = document.getElementById('name').value;
 //clear the input box
  document.getElementById('name').value = "";
 //unshift the name to arrName
  arrName.unshift(name);
  
//create if and else statement
 if (arrName.length < 5){
  //create element for li
  var li = document.createElement('li');
  //take entered name and stores it as liText
  var liText = document.createTextNode(name);
  //append text to li
  li.appendChild(liText);
  //get ol from HTML
  var ol = document.getElementsByTagName('ol')[0];
  //append li to ol
  ol.appendChild(li);
  
 }

else{
   document.getElementsByTagName('h3')[0].innerHTML = "Full";
  
 }
 //display names in the array
 document.getElementsByTagName('p')[0].innerHTML = arrName;

}
//stop guests from checking in after three people, say room is full

//when clicks a button, remove the first name from list 
 function remove(){
   var li = document.getElementsByTagName('li')[0];
   var parent = li.parentNode;
   parent.removeChild(li)[0];
   arrName.shift();
   
}