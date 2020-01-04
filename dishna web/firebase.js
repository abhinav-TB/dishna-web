// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyAJNF-_TMfn2XunreA-M1gO5i38j9eyPQs",
    authDomain: "website-5b031.firebaseapp.com",
    databaseURL: "https://website-5b031.firebaseio.com",
    projectId: "website-5b031",
    storageBucket: "website-5b031.appspot.com",
    messagingSenderId: "906800308609",
    appId: "1:906800308609:web:1fde4267d4c7be93a18880",
    measurementId: "G-CCTBZ45S16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('events').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var caption = getInputVal('caption');
    var description = getInputVal('description');
    var status = getInputVal('status');
    var NAME =getInputVal('NAME');
    var image = getInputVal('imgInp');
    var phone = getInputVal('phone');
  
    // Save message
    saveMessage(name , caption , description , status  ,NAME,image, phone);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('events').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(NAME , caption , description , status  ,NAME,image, phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      caption : caption,
      description : description,
      status : status,
      NAME :NAME,
      image: image,
      phone : phone
    });
  }