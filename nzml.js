let open = false

function expandMenu(x) {
            x.classList.toggle("change");
            let links = x.getElementsByClassName("menu-links")
            if (open) {
                open = false
                links[0].style.display = 'none'
            } else {
                open = true
                links[0].style.display = 'flex'
                links[0].style.flexDirection = 'column'
            }         
        }