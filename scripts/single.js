function singleData(){
    let singleList = JSON.parse(localStorage.getItem("single-list"))

    console.log(singleList)
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let country = document.getElementById("country");
    let postal = document.getElementById("postal");
    let phone = document.getElementById("phone");


    phone.innerHTML = singleList.phone;
    name.innerHTML = singleList.name;
    type.innerHTML = singleList.brewery_type;
    city.innerHTML = singleList.city;
    state.innerHTML = singleList.state;
    country.innerHTML = singleList.county;
    postal.innerHTML = singleList.postal_code;
}