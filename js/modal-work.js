const modalOpenOne = document.querySelector('#carouselExampleControls')

modalOpenOne.addEventListener('click', e => {

   const modalToggle = e.target.closest('.portfolio-link')
   if (!modalToggle) return

   const modal = modalToggle.parentNode.parentNode.nextElementSibling
   const closeButton = modal.querySelector('.modal-close')

   const modalOpen = () => {
      modal.classList.add('is-open')
      modal.style.animation = 'modalIn 500ms forwards'
      document.body.style.overflowY = 'hidden'
   }

   const modalClose = () => {
      modal.classList.remove('is-open')
      modal.removeEventListener('animationend', modalClose)
   }

   closeButton.addEventListener('click', () => {
      modal.style.animation = 'modalOut 500ms backwards'
      modal.addEventListener('animationend', modalClose)
      document.body.style.overflowY = 'scroll'
   })

   document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
         modal.style.animation = 'modalOut 500ms backwards'
         modal.addEventListener('animationend', modalClose)
         document.body.style.overflowY = 'scroll'
      }
   })

   modalOpen()
})