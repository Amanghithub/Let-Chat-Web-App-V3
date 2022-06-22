const firebaseConfig = {
    apiKey: "AIzaSyDIvMkX_SGcgKUQSzWcoYci7Fvw9Bv2VzY",
    authDomain: "let-chat-web-app-ad519.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-ad519-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-ad519",
    storageBucket: "let-chat-web-app-ad519.appspot.com",
    messagingSenderId: "695673931878",
    appId: "1:695673931878:web:ffef439dfee5b952c205a7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}