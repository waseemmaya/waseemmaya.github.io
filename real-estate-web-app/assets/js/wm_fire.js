var config = {
  apiKey: "AIzaSyDHecPN_QkE5v8ZusXwZ2LziyE7N9cXM_I",
  authDomain: "real-state-web-app.firebaseapp.com",
  databaseURL: "https://real-state-web-app.firebaseio.com",
  projectId: "real-state-web-app",
  storageBucket: "real-state-web-app.appspot.com",
  messagingSenderId: "563806783252"
};
firebase.initializeApp(config);

function options() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

var db = firebase.database();
function sendMail() {
  var form = document.querySelector("form");
  var formData = new FormData(form);
  var email = formData.get("email");

  var obj = {
    email: email,
    date: new Date().toDateString()
  };

  let locationRef = db.ref("Subscribe");
  locationRef.push(obj).then(val => {
    swal("Subscribed Successfully");
    form.reset();
  });
}
