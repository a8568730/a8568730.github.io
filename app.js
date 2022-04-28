document.addEventListener("DOMContentLoaded", function(e){

  const btn = document.getElementById("btn");
  const status = document.getElementById("status");
	
  status.innerHTML = "DOMContentLoaded";
 
  btn.addEventListener("click", startRecord);
  
  function startRecord(){
		  status.innerHTML = "DOMContentLoaded";
      var mediaConstraints = {
          audio: true
      };

      navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);

      function onMediaSuccess(stream) {
        	status.innerHTML = "Media success.";
          var mediaRecorder = new MediaStreamRecorder(stream);
          mediaRecorder.mimeType = 'audio/wav'; // check this line for audio/wav
          mediaRecorder.ondataavailable = function (blob) {
              // POST/PUT "Blob" using FormData/XHR2
              var blobURL = URL.createObjectURL(blob);
              document.write('<a href="' + blobURL + '">' + blobURL + '</a>');
          };
          mediaRecorder.start(3000);
      }

      function onMediaError(e) {
        	status.innerHTML = `Media error: ${e}`;
          console.error('media error', e);
      }
  }
})
