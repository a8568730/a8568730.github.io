document.addEventListener("DOMContentLoaded", function(e){
  var types = ["video/webm",
             "audio/webm",
             "video/webm\;codecs=vp8",
             "video/webm\;codecs=daala",
             "video/webm\;codecs=h264",
             "audio/webm\;codecs=opus",
             "video/mpeg"];

  for (var i in types) {
    var _p = document.createElement("p");
    _p.innerHTML = "Is " + types[i] + " supported? " + (MediaRecorder.isTypeSupported(types[i]) ? "Maybe!" : "Nope :(")
    document.body.appendChild(_p);
  }

})
