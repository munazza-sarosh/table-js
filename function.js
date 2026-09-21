const table = document.createElement("table")

// row 1
const tr = document.createElement("tr")
const td = document.createElement("td")
const td2 = document.createElement("td")
const td3 = document.createElement("td")
const td4 = document.createElement("td")

td4.innerHTML = "name"
td3.innerHTML = "surname"
td2.innerHTML = "city"
td.innerHTML = "age"

// row 2
const tr2 = document.createElement("tr")
const td_ = document.createElement("td")
const td_2 = document.createElement("td")
const td_3 = document.createElement("td")
const td_4 = document.createElement("td")

td_4.innerHTML = "mahnoor"
td_3.innerHTML = "khan"
td_2.innerHTML = "karachi"
td_.innerHTML = "21"

// row 3
const tr3 = document.createElement("tr")
const td_d = document.createElement("td")
const td_2d = document.createElement("td")
const td_3d = document.createElement("td")
const td_4d = document.createElement("td")

td_4d.innerHTML = "munazza"
td_3d.innerHTML = "sarosh"
td_2d.innerHTML = "karachi"
td_d.innerHTML = "20"

// row 4

const tr4 = document.createElement("tr")
const _td1 = document.createElement("td")
const _td = document.createElement("td")
const _td2 = document.createElement("td")
const _td3 = document.createElement("td")

_td3.innerHTML = "taiba"
_td2.innerHTML = "shahid"
_td1.innerHTML = "lahore"
_td.innerHTML = "22"


// styling
td.style.padding = "10px";
td2.style.padding = "10px";
td3.style.padding = "10px";
td4.style.padding = "10px";

td_.style.padding = "10px";
td_2.style.padding = "10px";
td_3.style.padding = "10px";
td_4.style.padding = "10px";

td_d.style.padding = "10px";
td_2d.style.padding = "10px";
td_3d.style.padding = "10px";
td_4d.style.padding = "10px";

_td.style.padding = "10px";
_td1.style.padding = "10px";
_td2.style.padding = "10px";
_td3.style.padding = "10px";

tr.style.backgroundColor = "#c2bfbf";
tr.style.color = "black";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "500px";
table.style.flexDirection = "column"
table.style.width = "300px"
table.style.textTransform = "capitalize"
// table.style.margin = "100px"
table.style.color = "gray"
table.style.backgroundColor = "#e6e6e6"
table.style.borderRadius = "10px"

// table.setAttribute("border", "2")

tr4.appendChild(_td3)
tr4.appendChild(_td2)
tr4.appendChild(_td1)
tr4.appendChild(_td)

tr3.appendChild(td_4d)
tr3.appendChild(td_3d)
tr3.appendChild(td_2d)
tr3.appendChild(td_d)

tr2.appendChild(td_4)
tr2.appendChild(td_3)
tr2.appendChild(td_2)
tr2.appendChild(td_)


tr.appendChild(td4)
tr.appendChild(td3)
tr.appendChild(td2)
tr.appendChild(td)


table.appendChild(tr)
table.appendChild(tr2)
table.appendChild(tr3)
table.appendChild(tr4)
document.body.appendChild(table)