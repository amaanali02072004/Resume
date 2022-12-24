setTimeout(
  () => {
    document.getElementById('header')
      .removeAttribute('headerLinksProps')
  }, 5000
)

const onPrint = () => {
  document.getElementById('footer').style.display = 'none'
  window.print()
}
