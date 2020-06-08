var db = firebase.database();

function submitResponse() {
  debugger;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let obj = {
    name,
    email,
    phone,
    message,
    date: new Date().toDateString()
  };

  let mailRef = db.ref("Mails");
  mailRef.push(obj);

  swal("Response Submitted...!").then(val => {
    document.getElementById("myForm").reset();
    location.href = "../index.html";
  });
  return false;
}
