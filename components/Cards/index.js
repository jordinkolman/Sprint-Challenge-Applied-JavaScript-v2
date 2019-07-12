// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container')

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)

.then(data => {
    console.log('Response: ', data)
    const javascriptTopics = data.data.articles.javascript
    const jqueryTopics = data.data.articles.jquery
    const nodeTopics = data.data.articles.node 
    const technologyTopics = data.data.articles.technology

    console.log(javascriptTopics)
    console.log(jqueryTopics)
    console.log(nodeTopics)
    console.log(technologyTopics)

    javascriptTopics.forEach(topic => {
        const element = createCard(topic)
        cardContainer.appendChild(element)
    })

    jqueryTopics.forEach(topic => {
        const element = createCard(topic)
        cardContainer.appendChild(element)
    })

    nodeTopics.forEach(topic => {
        const element = createCard(topic)
        cardContainer.appendChild(element)
    })

    technologyTopics.forEach(topic => {
        const element = createCard(topic)
        cardContainer.appendChild(element)
    })
})

.catch(error => {
    console.log('ERROR: ', error)
})

function createCard(topic) {
    //Define elements within component
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const authorName = document.createElement('span')

    //Set up structure of component
    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(imgContainer)
    cardAuthor.appendChild(authorName)
    imgContainer.appendChild(authorImage)

    //Set up class names for structure
    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    imgContainer.classList.add('img-container')

    //Define JSON/Text Content
    cardHeadline.textContent = topic.headline
    authorImage.src = topic.authorPhoto
    authorName.textContent = topic.authorName

    return card

}