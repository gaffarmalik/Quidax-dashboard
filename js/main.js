//Library Data STORE/SOURCE
const LIBRARY = [
    {
        title: "The Effective Engineer",
        author: "Edmond Lau -2009",
        genre: "Motivational"
    },
    {
        title: "Built To Last",
        author: "Jim Collins, Jerry I. Porras -2001",
        genre: "Business, Entrepreneurship"
    },
    {
        title: "The Lean Startup",
        author: "Eric Reis -2005",
        genre: "Motivational"
    },
    {
        title: "The Effective Python",
        author: "Diomidis Spinellis",
        genre: "Motivational"
    }
]


//Get ElementById Utility Function
function get_element(element) {
    return document.getElementById(element);
}



//GET Input Search on Mobile and desktop screens
function inputSearch(element) {

    console.log(window.screen.width)
    if (window.screen.width < 450) {
        mobileSearch(element)
    }
    else {
        desktopSearch(element)
    }

}



//Mobile Screen search formatting
function mobileSearch(element) {
    let text = element.value
    let result_div = get_element("result-mobile")
    let result_list = document.querySelectorAll("#result-mobile ul").item(0)
    var inner_html = ""

    if (text.length == 0) {
        get_element("result-mobile").style.display = "none"

    }
    else {
        //open up result list
        result_div.style.display = "block"
        let returned_result = search(element.value)
        if (returned_result.length == 0) {
            result_list.innerHTML =
                `<li>No result found</li>`
        }
        else {
            search(element.value).forEach(result => {
                // format list display
                inner_html = inner_html + `<li>${result.title}</li>`
                result_list.innerHTML = inner_html


            })
        }


    }
}


//Larger Screen Search Result Formatting
function desktopSearch(element) {
    let text = element.value
    let result_div = get_element("result")
    let result_list = document.querySelectorAll("#result ul").item(0)
    var inner_html = ""

    if (text.length == 0) {
        get_element("result").style.display = "none"

    }
    else {
        //open up result list
        result_div.style.display = "block"
        let returned_result = search(element.value)
        if (returned_result.length == 0) {
            result_list.innerHTML =
                `<li>No result found</li>`
        }
        else {
            search(element.value).forEach(result => {
                // format list display
                inner_html = inner_html + `<li>${result.title}</li>`
                result_list.innerHTML = inner_html


            })
        }


    }

}


//Query Search function
function search(text) {
    //search based on title and return result
    return LIBRARY.filter(element => element.title.toLowerCase().indexOf(text.toLowerCase()) > -1)

}



//close search result when clicking outside search
document.body.addEventListener("click", function (event) {
    get_element("result").style.display = "none";

})






//Open Search Bar on Mobile
function openTouch() {
    get_element("search-mobile").style.display = "block";
    get_element("navbar-inner").style.display = "none";


}


//Close Bar on Back button click
function closeTouch() {
    get_element("search-mobile").style.display = "none";
    get_element("navbar-inner").style.display = "flex";   //FLEX DISPLAY BY DEFAULT
}




function closeDetails(e) {
    get_element("cell-hover").style.display = "none"
}



// TOGGLE SIDEBAR OPEN/CLOSE
function toggleSidebar() {
    get_element("sidebar").style.zIndex = "3"

    let toggle_state = document.getElementById("sidebar").style.display;
    if (toggle_state == "block") {
        get_element("sidebar").style.display = "none"
    }
    else {
        get_element("sidebar").style.display = "block"
    }
}


