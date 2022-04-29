document.addEventListener("DOMContentLoaded", function(e){
  var types = [
    "audio/webm",
    "audio/webm\;codecs=opus",
    "audio/3gpp",
    "audio/3gpp2",
    "audio/aiff",
    "audio/x-aiff",
    "audio/amr",
    "audio/mp3",
    "audio/mpeg3",
    "audio/x-mp3",
    "audio/x-mpeg3",
    "audio/mp4",
    "audio/mpeg",
    "audio/x-mpeg",
    "audio/wav",
    "audio/x-wav",
    "audio/x-m4a",
    "audio/x-m4b",
    "audio/x-m4p"  ];

  for (var i in types) {
    var _p = document.createElement("p");
    _p.innerHTML = "Is " + types[i] + " supported? " + (MediaRecorder.isTypeSupported(types[i]) ? "Maybe!" : "Nope :(")
    document.body.appendChild(_p);
  }

})
