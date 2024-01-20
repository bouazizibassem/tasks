
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })

})()


/*** resize screen js (isExpanded) */

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

const listeMessageBlock = document.getElementById('liste-message');
const contentMessageBlock = document.getElementById('message-content');

var isExpanded = false;

function isExp() {
  if (isExpanded === false) {
    isExpanded = true
  } else {
    isExpanded = false
  }
  // console.log('isExpanded : ' + isExpanded);

  /*
  if(isExpanded  === true){
    document.getElementById('notif-content').style.width = 'calc(65vw - 14rem)' ;
  }else{
    document.getElementById('notif-content').style.width  = 'calc(65vw - 6.3rem)' ;
  }
  */
}

/**********************************/


function displayWindowSize() {
  let myWidth = window.innerWidth;
  let myHeight = window.innerHeight;

  // console.log('width : ' + myWidth)
  // console.log('height : ' + myHeight)

  if (myWidth <= 959) {
    isExpanded = true;
  } else {
    isExpanded = false;
  }

/*
  if(myWidth <= 767){
     document.getElementById('message-content').style.display = 'none';
     document.getElementById('btn-return-to-message').style.display = 'block';
  }else{
    document.getElementById('message-content').style.display = 'block';
    document.getElementById('btn-return-to-message').style.display = 'none';
  }
  */

  // console.log('Etat isExpanded after resize : ' +isExpanded);
/*
    if(isExpanded === true){
      document.getElementById('notif-content').style.width = 'calc(65vw - 14rem)' ;
    }else{
      document.getElementById('notif-content').style.width = 'calc(65vw - 6.3rem)' ;
    }
 */
}

