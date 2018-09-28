document.body.style.backgroundImage = "url(https://image.dhgate.com/0x0s/f2-albu-g7-M01-FD-03-rBVaSVpqyJKALvMHAAQvG4iaCzA661.jpg/hd-mountwallpapers-for-bed-room-ain-autumn.jpg)";
document.body.style.backgroundSize = "cover"; 
 //create an empty array that stores values
 var arrWaitL = [];
 var arr = []; 

  function waitlist(){
    var userName = document.getElementById('userN').value;
    document.getElementById('userN').value = "";
    arrWaitL.unshift(userName);
    document.querySelectorAll("h2")[0].innerHTML =  "Room Filled, " + arrWaitL[0] + " " + "Waitlisted" ;
    
  
    }
    
function addName() {
    var userName = document.getElementById('userN').value;
  if (arr.length > 2 ) { //if the length of the array is > 2, then put name in waitlist
      
    waitlist();
    return;
   }
   //push the value into the array
   arr.push(userName);
   //clear box
  
   document.getElementById('userN').value = "";
   //create list item
   var newList = document.createElement('li');
   //create text nodes
   var text = document.createTextNode(userName);
   //append text to list item
   newList.appendChild(text);
   //get ol element from HTML
   var olList = document.getElementsByTagName('ol')[0];
   //append newList to olList
   olList.appendChild(newList);

}                       

function clearName() {  //remove order list
      //var order = document.querySelectorAll("ol")[0]; //take first ol
      delete addName();
      delete userName; 
    }
