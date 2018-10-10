let menuOpen = false

function expandMenu(x) {
            x.classList.toggle("change")

            let links = x.getElementsByClassName("menu-links")
            let logo = document.getElementById('logo-horizontal')
            let searchIcon = document.getElementById('search-icon')
            let navBar = document.getElementsByClassName('navbar')
            let searchBox = document.getElementById('search-box')

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
                searchBox.style.width = '0%'
            }         
        }

let searchOpen = false

function searchFunction() {
    let logo = document.getElementById('logo-horizontal')
    let searchBox = document.getElementById('search-box')
    
    if (searchOpen) {
        searchOpen = false

        logo.style.display = ''
        searchBox.style.width = '0%'
    } else {
        searchOpen = true
        
        logo.style.display = 'none'
        searchBox.style.width = '80%'
    }
}