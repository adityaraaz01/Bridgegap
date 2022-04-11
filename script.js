const banner = document.getElementsByClassName('banner')[0]
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const centered = document.getElementsByClassName('centered')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  
})

