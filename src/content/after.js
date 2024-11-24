let timer
const observer = new MutationObserver(() => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    const navElement = document.querySelector('.css-stv1n7')
    const isAdded =
      document.querySelector('.css-stv1n7 .markdownLinkCopyButton') !== null

    if (navElement && !isAdded) {
      const markdownLinkCopyButton = document.createElement('a')
      markdownLinkCopyButton.textContent = 'copy as markdown'
      markdownLinkCopyButton.className = 'markdownLinkCopyButton'
      markdownLinkCopyButton.style.cursor = 'pointer'

      const copy = () => {
        const copyText = `[${document.title}](${window.location.href})`
        console.log(copyText)
        navigator.clipboard.writeText(copyText)
      }

      markdownLinkCopyButton.addEventListener('click', copy)
      navElement.appendChild(markdownLinkCopyButton)
    }
  }, 50)
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
