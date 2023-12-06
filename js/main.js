window.addEventListener("scroll", function () {
  toggleBacktop();
})

const backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (window.scrollY > 200) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}

backtop.addEventListener('click', function () {
  scrollToTop();
})

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const loader = document.querySelector('.loaders')
setTimeout(() => {
  loader.style.display = 'none'
}, 2000)