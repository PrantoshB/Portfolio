const linkHello = document.querySelector('#hellolink')
const linkAbout = document.querySelector('#aboutlink')
const linkPortfolio = document.querySelector('#portfoliolink')
const linkContact = document.querySelector('#contactlink')
const ProjectCard = document.querySelectorAll('.work_cards')
const Modal = document.querySelector('.modal-container')
const ModalTitle = document.querySelector('.modaltitle')
const ModalTechnology = document.querySelector('.language_used_modal')
const ModalImage = document.querySelector('.popup-image')
const ModalDescription = document.querySelector('.pop-up-description')
const ModalSeeLive = document.querySelector('.seelive')
const ModalSeeSource = document.querySelector('.seesource')

/* eslint-disable no-unused-vars */
function onClickMenu () {
  document.querySelector('.mobilemenu').style.display = 'flex'
  document.querySelector('main').style.display = 'none'
  document.querySelector('.header').style.backgroundImage = "url('assets/image_geometry_menu_1.svg')"
  document.querySelector('.header').style.height = '15vh'
  document.querySelector('.mobile_close_icon').style.display = 'block'
  document.querySelector('.mobile_menu_icon').style.display = 'none'
}

function onClickClose () {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
}

linkHello.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
})
linkContact.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
})
linkAbout.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
})
linkPortfolio.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
})

// Pop-up Starts here

const projectsList = [
  {
    projectTitle: 'First Project',
    description: 'First Project Description',
    featuredImage: 'Work1.svg',
    technologies: ['HTML', 'Ruby on Rails', 'JavaScript'],
    linkToLive: 'http://prantoshb.github.io/Portfolio',
    linkToSource: 'https://github.com/PrantoshB/Portfolio'
  },
  {
    projectTitle: 'Second Project',
    description: 'Second Project Description',
    featuredImage: 'Work2.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLive: 'http://prantoshb.github.io/Portfolio',
    linkToSource: 'https://github.com/PrantoshB/Portfolio'
  },
  {
    projectTitle: 'Third Project',
    description: 'Third Project Description',
    featuredImage: 'Work3.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLive: 'http://prantoshb.github.io/Portfolio',
    linkToSource: 'https://github.com/PrantoshB/Portfolio'
  },
  {
    projectTitle: 'Fourth Project',
    description: 'Fourth Project Description',
    featuredImage: 'Work2.jpeg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLive: 'http://prantoshb.github.io/Portfolio',
    linkToSource: 'https://github.com/PrantoshB/Portfolio'
  },
  {
    projectTitle: 'Fifth Project',
    description: 'Fifth Project Description',
    featuredImage: 'Work4.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLive: 'http://prantoshb.github.io/Portfolio',
    linkToSource: 'https://github.com/PrantoshB/Portfolio'
  },
  {
    projectTitle: 'Sixth Project',
    description: 'Sixth Project Description',
    featuredImage: 'Work6.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLive: 'http://prantoshb.github.io/Portfolio',
    linkToSource: 'https://github.com/PrantoshB/Portfolio'
  }
]

ProjectCard.innerHTML = ''
for (let i = 0; i < projectsList.length; i++) {
  let languages = ''
  projectsList[i].technologies.forEach((language) => {
    languages += `
        <li>${language}</li>
      `
  })
  ProjectCard[i].innerHTML = `
              <img src='assets/${projectsList[i].featuredImage}' alt='Project Image' class='work_image' id='img${i}' />
            <div class='workdetails'>
              <h3 class='work_title'>${projectsList[i].projectTitle}</h3>
                <ul class='language_used'>
                  ${languages}
                </ul>
                  <button type='button' class='seeproject project-modal-${i}'>See this Project<i class="fa fa-arrow-right"></i></button>
            </div>
    `
}

// Button Click Event

for (let i = 0; projectsList.length; i++) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    let modaltechnology = ''
    projectsList[i].technologies.forEach((language) => {
      modaltechnology += `
        <li>${language}</li>
      `
    })
    ModalTitle.innerHTML = projectsList[i].projectTitle
    ModalTechnology.innerHTML = modaltechnology
    ModalImage.src = 'assets/' + projectsList[i].featuredImage
    ModalDescription.innerHTML = projectsList[i].description
    ModalSeeLive.setAttribute('href', projectsList[i].linkToLive)
    ModalSeeSource.setAttribute('href', projectsList[i].linkToSource)
    Modal.style.display = 'block'
    document.querySelector('main').style.display = 'none'
    document.querySelector('header').style.display = 'none'
  })
}

// Close Button

function CloseModal () {
  Modal.style.display = 'none'
  document.querySelector('main').style.display = 'block'
  document.querySelector('header').style.display = 'flex'
}
