let open = false

function expandMenu(x) {
            x.classList.toggle("change")
            
            let links = x.getElementsByClassName("menu-links")
            let logo = document.getElementById('logo-horizontal')
            let searchIcon = document.getElementById('search-icon')
            let navBar = document.getElementsByClassName('navbar')

            if (open) {
                open = false
                links[0].style.display = 'none'
                logo.style.display = ''
                searchIcon.style.display = ''
                navBar[0].style.justifyContent = 'space-between'
            } else {
                open = true
                links[0].style.display = 'flex'
                links[0].style.flexDirection = 'column'
                logo.style.display = 'none'
                searchIcon.style.display = 'none'
                navBar[0].style.justifyContent = 'flex-end'
            }         
        }