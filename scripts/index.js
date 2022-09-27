async function loadMain(){

    let url = 'https://api.openbrewerydb.org/breweries?per_page=15'
   const recievedData = await fetch(url)
    .then(res => res.json())
    .catch(err => err.message)
    
    let tBody = document.getElementById("tableBody")
    if(recievedData){
        recievedData.forEach(element => {
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let button = document.createElement("button")

            let a = document.createElement("a")

            a.setAttribute("href", "singlePage.html")
            td1.style.padding = "2%"
            tr.style.background = "green"
            tr.style.color = "#ffff"
            tr.style.textAlign = "center"
            td1.innerHTML = element.name;
            td2.innerHTML = element.brewery_type;
            td3.innerHTML = element.city;
            td4.innerHTML = element.state;
            a.innerHTML = "More details"
            a.style.textDecoration = "none"
            button.style.width = "90%";
            button.style.padding = "5% 0"
            button.style.marginTop = "16px"
            button.style.fontSize = "16px"
            button.style.background = "orange"
            button.style.border = "none"
            button.style.borderRadius = "5px"

            button.addEventListener("click", function myFunction(){
                localStorage.setItem("single-list", JSON.stringify(element))
                console.log("clicked")
            })
            button.append(a)
            tr.append(td1,td2,td3,td4,button)
            tBody.append(tr)
        });
    }
    
}


 async function filterData () {
    event.preventDefault();
    let category = document.getElementById("category").value;
    let tBody = document.getElementById("tableBody")
    tBody.innerHTML = '';
    console.log(category)
    let url = `https://api.openbrewerydb.org/breweries?by_type=${category}&per_page=3`

    const recievedData = await fetch(url)
    .then(res => res.json())
    .catch(err => err.message)
    
    if(recievedData){
        recievedData.forEach(element => {
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let button = document.createElement("button")

            let a = document.createElement("a")

            a.setAttribute("href", "singlePage.html")
            td1.style.padding = "2%"
            tr.style.background = "green"
            tr.style.color = "#ffff"
            tr.style.textAlign = "center"
            td1.innerHTML = element.name;
            td2.innerHTML = element.brewery_type;
            td3.innerHTML = element.city;
            td4.innerHTML = element.state;
            a.innerHTML = "More details"
            a.style.textDecoration = "none"
            button.style.width = "90%";
            button.style.padding = "5% 0"
            button.style.marginTop = "16px"
            button.style.fontSize = "16px"
            button.style.background = "orange"
            button.style.border = "none"
            button.style.borderRadius = "5px"

            button.addEventListener("click", function myFunction(){
                localStorage.setItem("single-list", JSON.stringify(element))
                console.log("clicked")
            })
            button.append(a)
            tr.append(td1,td2,td3,td4,button)
            tBody.append(tr)
        });
    }

}