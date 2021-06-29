let titles = document.querySelectorAll('.title')

titles.forEach(title => title.addEventListener('click', () => {
    title.parentElement.childNodes[3].classList.toggle('hidden')
}))