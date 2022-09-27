let counter = 0;
const getSuggestions = async() => {
    //Calls API to get Data
    let inputSearch = document.getElementById("inputSearch").value

    const searchData = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${inputSearch}&per_page=3`)
    .then(res => res.json())


    let tBody = document.getElementById("tableBody")
    if(searchData){
        searchData.forEach(element => {
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
            button.innerHTML = "More details"
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
    
    // console.log("Fetching Data...", counter++);
}

const delSuggestiion = async() =>{
    let tBody = document.getElementById("tableBody")
    tBody.innerHTML = "";


    const searchData = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${inputSearch}&per_page=3`)
    .then(res => res.json())

    if(searchData){
        searchData.forEach(element => {
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
            button.innerHTML = "More details"
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

const debounce = function (fn, d) {
    let timer;
    return function () {
    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
            fn.apply(context, args);
        }, d)
    }
}

const debounceForData = debounce(getSuggestions, 1000);

const debounceDeleteData = debounce(delSuggestiion,1000)