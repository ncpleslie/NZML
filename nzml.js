let menuOpen = false
let searchOpen = false

function expandMenu(x) {
            x.classList.toggle("change")

            let links = x.getElementsByClassName("menu-links")
            let logo = document.getElementById('logo-horizontal')
            let searchIcon = document.getElementById('search-icon')
            let navBar = document.getElementsByClassName('navbar')

            if (menuOpen) {
                menuOpen = false
                links[0].style.display = 'none'
                logo.style.display = ''
                searchIcon.style.display = ''
                navBar[0].style.justifyContent = 'space-between'
            } else {
                menuOpen = true
                links[0].style.display = 'flex'
                links[0].style.flexDirection = 'column'
                logo.style.display = 'none'
                searchIcon.style.display = 'none'
                navBar[0].style.justifyContent = 'flex-end'
            }         
        }

function searchFunction() {
    let logo = document.getElementById('logo-horizontal')

    if (searchOpen) {
        searchOpen = false
        logo.style.display = ''
    } else {
        searchOpen = true
        logo.style.display = 'none'
    }
}