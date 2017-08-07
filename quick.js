let body = document.querySelector("#body_text")
let ul = document.createElement("ul")
let li = document.createElement("li")
let imgNode = document.querySelector("#avatar")


body.appendChild(ul)

let request = new XMLHttpRequest()
request.open("GET", "https://api.github.com/users/fashola2")
request.send()
request.addEventListener("load", function(){


let data = JSON.parse(this.responseText);

let name = data.name
let url = data.url
let email = data.email
let company = data.company
let website = data.blog



let dataString = `
  <li>Name:  ${name}</li>
  <li>GitHub URL: ${url}</li>
  <li>Email: ${email}</li>
  <li>Company: ${company}</li>
  <li>Website: ${website}</li>
`

ul.innerHTML = dataString


let img = `
<img src=${data.avatar_url}>
`

imgNode.innerHTML = img


})
