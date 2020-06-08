var slideIndex = 1;

function adView() {
  let adId = localStorage.getItem("adID");

  let slider = document.getElementById("slider");

  let desc = document.getElementById("desc");
  let title = document.getElementById("title");
  let detail = document.getElementById("detail");
  detail.innerText = "Loading";
  let imgRef = db.ref(`All/${adId}`);
  imgRef.on("value", snap => {
    let data = snap.val();
    title.innerText = data.name;
    table.innerHTML = `
      <tbody>
      <tr>
        <td>Category</td>
        <td>${data.category}</td>
        <td>Area</td>
        <td>${data.area} ${data.areaUnit}</td>
      </tr>
      <tr>
        <td>Price</td>
        <td>PKR ${data.price} ${data.priceUnit}</td>
        <td>Purpose</td>
        <td>${data.purpose}</td>
      </tr>
      <tr>
    <td>Status</td>
    <td>${data.isSold ? "Sold" : "Available"}</td>
     
      <td>Bedroom(s)</td>
      <td>${data.bedroom}</td>
    </tr>
    <tr>
    <td>Bathroom(s)</td>
    <td>${data.bathroom}</td>
    <td>Posted at</td>
    <td>${data.date}</td>
    </tr>
    <tr>
    <td>Location</td>
    <td colspan="4">${data.address}</td>
    </tr>
    
    </tbody>
      `;
    desc.innerHTML += `
      <h2 id="des">Discription</h2>
      <div>
      <p id="paragraph">
      ${data.description}
    </p>
      </div>
      `;
    slider.innerHTML += `
      <div class="text-block"> 
      <a href="${
        data.link
      }"><img class="mapicon" src="https://image.flaticon.com/icons/svg/149/149060.svg" alt="icon"/>
      <span class="mapLink">Map</span></a>
    </div>
      `;
    data.adImages.map(val => {
      return (slider.innerHTML += `
        <img class="mySlides" src="${val}" style='width:100%'>
        
        `);
    });
  });
  setTimeout(function() {
    showDivs(slideIndex);
    detail.innerText = "Details";
  }, 4000);
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}
