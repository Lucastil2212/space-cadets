// Create a new Audio object
var audio = new Audio();

// Load the WAV file into the Audio object
audio.src = "myAudio.wav";

// Add an event listener to detect when the WAV file has finished loading
audio.addEventListener("loadedmetadata", function () {
  // Create a new AudioContext object
  var context = new AudioContext(
    "audio/ich-hab-vergessen-clean-demo-acoustic-with-voacls.mp3"
  );

  // Create a new MediaElementAudioSourceNode object from the Audio object
  var source = context.createMediaElementSource(audio);

  // Connect the MediaElementAudioSourceNode object to the destination of the AudioContext object
  source.connect(context.destination);

  // Start the WAV file playback
  audio.play();

  // Get the current playback time of the WAV file
  var startTime = audio.currentTime;

  // Define the animation loop function
  function animate() {
    // Get the current playback time of the WAV file
    var currentTime = audio.currentTime - startTime;

    // Update the CSS animation based on the current playback time of the WAV file
    document.querySelector(".box").style.animationDelay =
      "-" + currentTime + "s";

    // Request the next animation frame
    requestAnimationFrame(animate);
  }

  // Start the animation loop
  requestAnimationFrame(animate);
});
