let links
let projectsList = document.getElementById('projectsBox')
let personalProjects = document.getElementById('personalProjects')


setTimeout(
  () => {
    document.getElementById('footerUsefulLinksTitle').innerHTML = 'projects'
    document.getElementById('header')
      .removeAttribute('headerLinksProps')
  }, 1000
)

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

const ukn = (loc = 0) => {
  let br = '<br class="unhide">'
  // if (loc === 0) { br = '' } else br = '<br class="unhide">'
  loc === 0 ? br = '' : br = '<br class="unhide">'
  for (let i = 0; i < projectsList.getElementsByTagName('ul')[loc].children.length; i++) {
    projectsList.getElementsByTagName('ul')[loc].children[i].getElementsByTagName('a')[0].innerHTML += `${br} (<span>${projectsList.getElementsByTagName('ul')[loc].children[i].getElementsByTagName('a')[0].getAttribute('href')}</span>)`
  }
}
