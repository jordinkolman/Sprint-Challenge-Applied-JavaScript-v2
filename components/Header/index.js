// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header('March 28, 2019', '98°'))

function Header(date, temperature) {
    //Define elements within component
    const header = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerHeading = document.createElement('h1')
    const headerTemp = document.createElement('span')

    //Set up structure of component
    header.appendChild(headerDate)
    header.appendChild(headerHeading)
    header.appendChild(headerTemp)

    //Set up class names for structure
    header.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')

    //Define JSON/text content
    headerDate.textContent = date
    headerHeading.textContent = 'Lambda Times'
    headerTemp.textContent = temperature

    return header
}

