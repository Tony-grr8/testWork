document.addEventListener("DOMContentLoaded",function() {    
    var sendBtn = document.getElementById('message-send-btn');    
    var msgInput = document.getElementById('message-input');
    
    sendBtn.addEventListener("click", function() {      
      var message = document.getElementById('message-input').value;
      var messageBox = document.getElementById('message-box');
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      
      messageBox.innerHTML += "<div id='clientMessage'>" + time + " Клиент: " + message + "</div";            

      message = 'message=' + encodeURIComponent(message);
      
      var request = new XMLHttpRequest();
      request.open('POST','messageCallback.php',true);      
      request.addEventListener('readystatechange', function() {        
        if ((request.readyState==4) && (request.status==200)) {              
          messageBox.innerHTML += request.responseText;
        }
      });
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      request.send(message);
    });
    
    msgInput.addEventListener('keyup', function(event) {      
      if (event.keyCode === 13) {
        event.preventDefault();        
        sendBtn.click();
      }
    });      
  });
