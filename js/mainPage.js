let img = document.querySelector(".carousel-imgs")
let about = document.querySelector("#about .item-2")
let serialls = document.querySelector(".serialls")
let filmAdi= document.querySelector(".carousel-div h2")
function addImg(arr){
  let i=0;
    arr.forEach(element => {
      
        img.innerHTML += `<div class="carousel-item carousel-item-${i}" >
    <img src="${element.image.original}" class="d-block w-100" alt="...">
  </div>`
  serialls.innerHTML += `<li class="list-group-item d-flex align-items-start  bg-black" onclick="clickSeriall(${i})">
  <a href="#">
      <img src="${element.image.original}" height="80px" alt="">
      ${element.summary}
  </a>
</li>`
i++
})
}



fetch("https://api.tvmaze.com/show")
.then(response => response.json())
.then(data => {
  addImg(data)
 
})


function clickSeriall(j){
  document.querySelector(".active").classList.remove('active')
  document.querySelector('.carousel-item-'+j).classList.add('active');
  fetch("https://api.tvmaze.com/show")
  .then(response => response.json())
  .then(data => {
    
    filmAdi.innerHTML=`${data[j].name}`
    about.innerHTML = `<ul class="carousel-item-${j}"> 
                      <li class="list-item">${data[j].genres}</li>
                      <li class="list-item">${data[j].rating.average}</li>
                      <li class="list-item">${data[j].type}</li>
                      <li class="list-item">${data[j].language}</li>
                      <li class="list-item"><a href="${data[j].officialSite}">
                      ${data[j].officialSite[11] +data[j].officialSite[12]+data[j].officialSite[13]+data[j].officialSite[14]+data[j].officialSite[16]+data[j].officialSite[17]+data[j].officialSite[18]+data[j].officialSite[19]+data[j].officialSite[20]}...
                      </a></li>
                      <li class="list-item">${data[j].status}</li>
                  </ul>`

  })

}

let x=1

function nextSeriall(x) {
  
  let i = Number(document.getElementById("d1").innerText)
  i+=x;
  if (i==240 ) {
    i=0
  }
  if (i==-1) {
    i=239
  }

  fetch("https://api.tvmaze.com/show")
    .then(response => response.json())
    .then(data => {
      
      filmAdi.innerHTML=`${data[i].name}`
      about.innerHTML = `<ul cla> 
                        <li class="list-item">${data[i].genres}</li>
                        <li class="list-item">${data[i].rating.average}</li>
                        <li class="list-item">${data[i].type}</li>
                        <li class="list-item">${data[i].language}</li>
                        <li class="list-item"><a href="${data[i].officialSite}">${data[i].officialSite[11] +data[i].officialSite[12]+data[i].officialSite[13]+data[i].officialSite[14]+data[i].officialSite[16]+data[i].officialSite[17]+data[i].officialSite[18]+data[i].officialSite[19]+data[i].officialSite[20]}...
                        </a></li>
                        <li class="list-item">${data[i].status}</li>
                    </ul>`

    })


  // document.getElementById("myCheck").click();
  console.log(i);
 
  document.getElementById("d1").innerText = i;
}



  




// fetch("https://api.tvmaze.com/show")
//     .then(response => response.json())
//     .then(data => addImg(data))



/*let i=3
function addImg(){
fetch("https://api.tvmaze.com/show")
.then(response=>response.json())
.then(data=>{
    img.innerHTML+=`<div class="carousel-item">
    <img src="${data[i].image.original}" class="d-block w-100" alt="...">
  </div>`
})

i++
}
    document.querySelector(".carousel-control-next").addEventListener('click',addImg())
*/

/*
let img = document.querySelector(".carousel-imgs")
let about=document.querySelector(".about")
function addImg(arr){
    arr.forEach(element => {
        img.innerHTML += `<div class="carousel-item">
    <img src="${element.image.original}" class="d-block w-100" alt="...">
  </div>`
        
    })
}

var i=1
function addSummary(){
fetch("https://api.tvmaze.com/show")
.then(response=>response.json())
.then(data=>{
    img.innerHTML+=`<div class="carousel-item">
    <img src="${data[i].image.original}" class="d-block w-100" alt="...">
  </div>`
})
console.log(i);
i++
}*/




