var db = firebase.database();


var count = 4;

var a = document.getElementById("main");

fetchAll = () => {
  count = count + 2;

  let locationRef = db.ref("All").limitToLast(count);

  locationRef.on("child_added", snap => {
    let data = snap.val();

    let key = snap.key;
    a.innerHTML += `
    <li>
    <div class="card">
    <img class="card-img-top" src="${data.adImages[0]}" alt="Card image cap">
    <div class="card-block">
    <a onclick="openAd('${key}')" href="javascript:void(0)"><h2 class="card-title">${
      data.name
    }</h2> 
    <p class="price">PKR ${data.price} ${data.priceUnit}</p></a>
    <p class="text-muted">Category : ${data.category}</p>
    <p class="text-muted">Status : ${data.isSold ? "Sold" : "Available"}</p>


  
    
      </div>
    </div>
  </li>
    `;
  });
};

catHome = () => {
  let a = document.getElementById("catWise");
  let locationRef = db
    .ref("All")
    .orderByChild("category")
    .equalTo("Home");
  locationRef.on("child_added", snap => {
    let data = snap.val();
    let key = snap.key;
    a.innerHTML += `
    <li>
    <div class="card">
    <img class="card-img-top" src="${data.adImages[0]}" alt="Card image cap">
    <div class="card-block">
    <a onclick="openAd('${key}')" href="javascript:void(0)"><h2 class="card-title">${
      data.name
    }</h2>  </a>
    <p class="price">PKR ${data.price} ${data.priceUnit}</p>
    <p class="text-muted">Category : ${data.category}</p>
    <p class="text-muted">Status : ${data.isSold ? "Sold" : "Available"}</p>


  
    
      </div>
    </div>
  </li>
    `;
  });

  return false;
};

catFlat = () => {
  let a = document.getElementById("catWise");
  let locationRef = db
    .ref("All")
    .orderByChild("category")
    .equalTo("Flat");

  locationRef.on("child_added", snap => {
    let data = snap.val();
    let key = snap.key;
    a.innerHTML += `
    <li>
    <div class="card">
    <img class="card-img-top" src="${data.adImages[0]}" alt="Card image cap">
    <div class="card-block">
    <a onclick="openAd('${key}')" href="javascript:void(0)"><h2 class="card-title">${
      data.name
    }</h2>  </a>
    <p class="price">PKR ${data.price} ${data.priceUnit}</p>
    <p class="text-muted">Category : ${data.category}</p>
    <p class="text-muted">Status : ${data.isSold ? "Sold" : "Available"}</p>


  
    
      </div>
    </div>
  </li>
    `;
  });

  return false;
};

catBungalow = () => {
  let a = document.getElementById("catWise");
  let locationRef = db
    .ref("All")
    .orderByChild("category")
    .equalTo("Bungalow");

  locationRef.on("child_added", snap => {
    let data = snap.val();
    let key = snap.key;
    a.innerHTML += `
    <li>
    <div class="card">
    <img class="card-img-top" src="${data.adImages[0]}" alt="Card image cap">
    <div class="card-block">
    <a onclick="openAd('${key}')" href="javascript:void(0)"><h2 class="card-title">${
      data.name
    }</h2> 
    <p class="price">PKR ${data.price} ${data.priceUnit}</p> </a>
    <p class="text-muted">Category : ${data.category}</p>
    <p class="text-muted">Status : ${data.isSold ? "Sold" : "Available"}</p>


  
    
      </div>
    </div>
  </li>
    `;
  });

  return false;
};

function openAd(key) {
  localStorage.setItem("adID", key);
  location.href = "View_Post.html";
  return false;
}
