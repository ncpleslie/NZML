/* Custom JS made for the NZML project */

// Globals
const windowWidth = 1021

// Used to display the menu
let menuOpen = false

function expandMenu(x) {
  x.classList.toggle('change')

  let links = x.getElementsByClassName('menu-links')
  let logo = document.getElementById('logo-horizontal')
  let logoStandard = document.getElementById('logo-horizontal-standard')
  let searchIcon = document.getElementById('search-icon')
  let searchBox = document.getElementById('search-box')

  // Mobile - Remove logo and search icon
  if (self.innerWidth <= windowWidth) {
      if (menuOpen) {
          menuOpen = false
          links[0].style.display = 'none'
          searchIcon.style.display = ''
          if (logoStandard) {
              logoStandard.style.display = ''
          } else {
              logo.style.display = ''
          }
      } else {
          menuOpen = true
          links[0].style.display = 'flex'
          searchIcon.style.display = 'none'
          searchBox.style.display = 'none'
          if (logoStandard) {
              logoStandard.style.display = 'none'
          } else {
              logo.style.display = 'none'
          }
      }
  }
  // Desktop - Don't remove logo and search icon
  if (self.innerWidth >= windowWidth) {
      if (menuOpen) {
          menuOpen = false
          links[0].style.display = 'none'
      } else {
          menuOpen = true
          links[0].style.display = 'flex'
      }
  }
}

// Used to show/hide the search input
let searchOpen = false

function searchFunction() {
  let logo = document.getElementById('logo-horizontal')
  let logoStandard = document.getElementById('logo-horizontal-standard')
  let searchBox = document.getElementById('search-box')
  let searchIcon = document.getElementById('search-icon')
  let groupedIcons = document.getElementsByClassName('grouped-icons')

  // Mobile - Remove logo and search icon
  if (self.innerWidth <= windowWidth) {
      if (searchOpen) {
          searchOpen = false
          searchBox.style.display = 'none'
          groupedIcons[0].style.width = '50%'
          searchIcon.style.width = '25%'
          if (logoStandard) {
              logoStandard.style.display = ''
          } else {
              logo.style.display = ''
          }
      } else {
          searchOpen = true
          searchBox.style.display = 'block'
          groupedIcons[0].style.width = '100%'
          searchIcon.style.width = '10%'
          if (logoStandard) {
              logoStandard.style.display = 'none'
          } else {
              logo.style.display = 'none'
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

// Used to expand the recording index
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

// Search Function
// Looks through array of objects. If the entered query matches the keywords
// It goes to the given page
const arrayOfPages = [{
  keywords: "salmonelladubband",
  page: "botw.html"
}, {
  keywords: "recordingindexbackcatalogue",
  page: "recordingindex.html"
}, {
  keywords: "contactus",
  page: "contact.html"
}, {
  keywords: "aboutus",
  page: "about.html"
}, {
  keywords: "soullovetrippa",
  page: "SalmonellaDub-SoulLoveTrippa.html"
}, {
  keywords: "thatswhatiwant",
  page: "SalmonellaDub-ThatsWhatIWant.html"
}, {
    keywords: "fortheloveofit",
    page: "SalmonellaDub-ForTheLoveOfIt.html"
  }, {
  keywords: "homeindexfrontpage",
  page: "index.html"
}, {
  keywords: "theblognewsweeklyupdate",
  page: "blog.html"
}]

window.onload = function() {
  const searchBox = document.getElementById('search-box')
  searchBox.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        const searchString = searchBox.value.toLowerCase().replace(/ /g,'')
        const regexp = new RegExp(searchString, 'i')
        const foundValue = arrayOfPages.filter(x => regexp.test(x.keywords))
          if (foundValue[0]) {
          window.location.href = foundValue[0].page
          } else {
            alert("No Results Found")
          }
        
      }
  })
}
