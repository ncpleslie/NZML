let menuOpen = false

function expandMenu(x) {
  x.classList.toggle('change')

  let links = x.getElementsByClassName('menu-links')
  let logo = document.getElementById('logo-horizontal')
  let logoStandard = document.getElementById('logo-horizontal-standard')
  let searchIcon = document.getElementById('search-icon')
  let navBar = document.getElementsByClassName('navbar')
  let searchBox = document.getElementById('search-box')
  let groupedIcons = document.getElementsByClassName('grouped-icons')

  const windowWidth = 1021

  // Mobile - Remove logo and search icon
  if (self.innerWidth <= windowWidth) {
    if (menuOpen) {
      menuOpen = false

      if (logoStandard) {
        links[0].style.display = 'none'
        searchIcon.style.display = ''
		logoStandard.style.display = ''
		groupedIcons[0].style.justifyContent = "flex-end"
      } else if (logo) {
        links[0].style.display = 'none'
        searchIcon.style.display = ''
		logo.style.display = ''
		groupedIcons[0].style.justifyContent = "flex-end"
      } else {
        links[0].style.display = 'none'
        searchIcon.style.display = ''
        logo.style.display = ''
		logoStandard.style.display = ''
		groupedIcons[0].style.justifyContent = "flex-end"
      }
    } else {
      menuOpen = true

      if (logoStandard) {
        links[0].style.display = 'flex'
        links[0].style.flexDirection = 'column'
        searchIcon.style.display = 'none'
        navBar[0].style.justifyContent = 'space-between'
		searchBox.style.display = 'none'
        logoStandard.style.display = 'none'
      } else if (logo) {
        links[0].style.display = 'flex'
        links[0].style.flexDirection = 'column'
        searchIcon.style.display = 'none'
        navBar[0].style.justifyContent = 'space-between'
		searchBox.style.display = 'none'
        logo.style.display = 'none'
      } else {
        links[0].style.display = 'flex'
        links[0].style.flexDirection = 'column'
        searchIcon.style.display = 'none'
        navBar[0].style.justifyContent = 'space-between'
        searchBox.style.display = 'none'
        logoStandard.style.display = 'none'
        logo.style.display = 'none'
      }
    }
  }

  // Desktop - Don't remove logo and search icon
  if (self.innerWidth >= windowWidth) {
    if (menuOpen) {
      menuOpen = false

      if (logoStandard) {
        links[0].style.display = 'none'
      } else if (logo) {
        links[0].style.display = 'none'
      } else {
        links[0].style.display = 'none'
      }
    } else {
      menuOpen = true

      if (logoStandard) {
        links[0].style.display = 'flex'
        links[0].style.flexDirection = 'column'
        navBar[0].style.justifyContent = 'space-between'
      } else if (logo) {
        links[0].style.display = 'flex'
        links[0].style.flexDirection = 'column'
        navBar[0].style.justifyContent = 'space-between'
      } else {
        links[0].style.display = 'flex'
        links[0].style.flexDirection = 'column'
        navBar[0].style.justifyContent = 'space-between'
      }
    }
  }
}

let searchOpen = false

function searchFunction() {
  let logo = document.getElementById('logo-horizontal')
  let logoStandard = document.getElementById('logo-horizontal-standard')
  let searchBox = document.getElementById('search-box')
  let searchIcon = document.getElementById('search-icon')
  let groupedIcons = document.getElementsByClassName('grouped-icons')

  const windowWidth = 1021

  // Mobile - Remove logo and search icon
  if (self.innerWidth <= windowWidth) {
    if (searchOpen) {
      searchOpen = false

      if (logoStandard) {
		logoStandard.style.display = ''
		searchBox.style.display = 'none'
		groupedIcons[0].style.justifyContent = "flex-end"
		groupedIcons[0].style.width = '50%'
		searchIcon.style.width = '25%'
      } else if (logo) {
		logo.style.display = ''
		searchBox.style.display = 'none'
		groupedIcons[0].style.justifyContent = "flex-end"
		groupedIcons[0].style.width = '50%'
		searchIcon.style.width = '25%'
      }
    } else {
      searchOpen = true

      if (logoStandard) {
		logoStandard.style.display = 'none'
		searchBox.style.display = 'block'
		groupedIcons[0].style.justifyContent = "space-evenly"
		groupedIcons[0].style.width = '100%'
		searchIcon.style.width = '10%'
      } else if (logo) {
        logo.style.display = 'none'
		searchBox.style.display = 'block'
		groupedIcons[0].style.justifyContent = "space-evenly"
		groupedIcons[0].style.width = '100%'
		searchIcon.style.width = '10%'
      }
    }
  }
  // Desktop
  if (self.innerWidth >= windowWidth) {
    if (searchOpen) {
      searchOpen = false
      searchBox.style.display = 'none'
    } else {
      searchOpen = true
      searchBox.style.display = 'block'
    }
  }
}

let bandIndexOpen = true

function expandRecordingIndex() {
  let bandName = document.getElementById('band-name')
  let bandDesc = document.getElementById('band-description')

  if (bandIndexOpen) {
    bandIndexOpen = false
    bandName.style.display = 'block'
    bandDesc.style.display = 'block'
  } else {
    bandIndexOpen = true
    bandName.style.display = 'none'
    bandDesc.style.display = 'none'
  }
}

let arrayOfPages = [{
  keywords: "salmonella",
  page: "botw.html"
}, {
  keywords: "band",
  page: 'botw.html'
}, {
  keywords: "dub",
  page: "botw.html"
}, {
  keywords: "video",
  page: "SalmonellaDub-SoulLoveTrippa.html"
}, {
  keywords: "contact",
  page: "contact.html"
}, {
  keywords: "contact us",
  page: "contact.html"
}, {
  keywords: "about",
  page: "about.html"
}, {
  keywords: "soul",
  page: "SalmonellaDub-SoulLoveTrippa.html"
}, {
  keywords: "thats",
  page: "SalmonellaDub-ThatsWhatIWant.html"
}]

window.onload = function() {
  const node = document.getElementById('search-box')

  node.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
          let foundValue = arrayOfPages.find(x => x.keywords === node.value.toLowerCase())
          console.log(foundValue)
          window.location.href = foundValue.page
      }
  })
}