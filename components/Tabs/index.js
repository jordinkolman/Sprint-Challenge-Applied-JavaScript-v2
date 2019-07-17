// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabBar = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)

.then(data => {
    console.log('Response: ', data)
    const topics = data.data.topics
    topics.forEach(topic => {
        const element = createTab(topic)
        tabBar.appendChild(element)
    })
})

.catch(error => {
    console.log('ERROR: ', error)
})

function createTab(topic) {
    //Define elements within component
    const tab = document.createElement('div')

    //Set up class names for structure
    tab.classList.add('tab')   

    //Define JSON/Text Content
    tab.textContent = topic

    //Add event listener for functionality
    tab.addEventListener('click', event => {
        tab.classList.toggle('active-tab')
    })



    return tab
}
