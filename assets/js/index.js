let links
let projectsList = document.getElementById('projectsBox')
let personalProjects = document.getElementById('personalProjects')

let hello = setInterval(
  () => {
    if (typeof links !== undefined) {
      clearInterval(hello)
      links = document.getElementById('footerUsefulLinks').innerHTML || undefined
      personalProjects.parentElement.style.display = 'block'
      personalProjects.innerHTML += links
      for (let i = 0; i < projectsList.getElementsByTagName('ul').length; i++) {
        ukn(i)
      }
    }
  }, 1000
)

setTimeout(
  () => {
    document.getElementById('footerUsefulLinksTitle').innerHTML = 'projects'
    document.getElementById('header')
      ?.removeAttribute('headerLinksProps')
  }, 1000
)

const ukn = (loc = 0) => {
  const br = loc === 0 ? '' : '<br class="unhide">'
  for (let i = 0; i < projectsList.getElementsByTagName('ul')[loc].children.length; i++) {
    projectsList.getElementsByTagName('ul')[loc].children[i].getElementsByTagName('a')[0].innerHTML +=
      `${br} (<span>${projectsList.getElementsByTagName('ul')[loc].children[i].getElementsByTagName('a')[0].getAttribute('href')}</span>)`
  }
}
