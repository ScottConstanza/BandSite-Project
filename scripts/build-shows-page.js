
// let showsList = [
//     {
//         date: 'Mon Sept 06 2021',
//         venue: 'Ronald Lane',
//         location: 'San Francisco, CA',
//     },

//     {
//         date: 'Tue Sept 21 2021',
//         venue: 'Pier 3 East',
//         location: 'San Francisco, CA',
//     },
    
//     {
//         date: 'Fri Oct 06 2021',
//         venue: 'View Lounge',
//         location: 'San Francisco, CA',
//     },

//     {
//         date: 'Sat Nov 06 2021',
//         venue: 'Hyatt Agency',
//         location: 'San Francisco, CA',
//     },

//     {
//         date: 'Fri Nov 26 2021',
//         venue: 'Moscow Center',
//         location: 'San Francisco, CA',
//     },

//     {
//         date: 'Wed Dec 15 2021',
//         venue: 'Press Club',
//         location: 'San Francisco, CA',
//     }

// ]


let shows =[]

let apiKeyy = "cb39efe6-7135-448f-8ccc-0d37be500d2c"
let liveShows = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKeyy}`

const userShows = () => {
    axios.get(liveShows).then(result => {
        // userShows = result.data;
        // (userShows);
        // console.log(userShows);
        displayShows(result.data);
    })
}

const date =

userShows();


const showsContainer = document.querySelector(".shows-containers");
const showsHeading = document.createElement('h2');
showsHeading.classList.add("shows-subheader");
showsHeading.innerText = "Shows";
showsContainer.appendChild(showsHeading);

// forEach iterates through each item in the array above until it gets to the bottom on the array list.
// Try and find the pattern, if something repeats then make it once as a template to put in a loop.

function displayShows(show){

    show.forEach((show) => {
        const showsSection = document.createElement('section');
        showsSection.classList.add("shows-section");
        showsContainer.appendChild(showsSection);


        const showsDivision = document.createElement('div');
        showsDivision.classList.add("shows-division");
        showsSection.appendChild(showsDivision);


        const showsText = document.createElement('p');
        showsText.classList.add("shows-smalltext");
        showsText.innerText = "DATES"
        showsDivision.appendChild(showsText);

        const showsDate = document.createElement('p');
        showsDate.classList.add("shows-subtext")
        showsDate.innerText= show.date;
        showsDivision.appendChild(showsDate);

        // 2nd Div within the section (Venue)

        const showsDivisionV = document.createElement('div');
        showsDivisionV.classList.add("shows-division");
        showsSection.appendChild(showsDivisionV);

        const showsTextV = document.createElement('p');
        showsTextV.classList.add("shows-smalltext");
        showsTextV.innerText = "VENUE"
        showsDivisionV.appendChild(showsTextV);

        const showsVenue = document.createElement('p');
        showsVenue.innerText= show.place;
        showsDivisionV.appendChild(showsVenue);

        // 3rd Div within the Section (Location)

        const showsDivisionL = document.createElement('div');
        showsDivisionL.classList.add("shows-division");
        showsSection.appendChild(showsDivisionL);

        const showsTextL = document.createElement('p');
        showsTextL.classList.add("shows-smalltext");
        showsTextL.innerText = "LOCATION"
        showsDivisionL.appendChild(showsTextL);

        const showsLocation = document.createElement('p');
        showsLocation.innerText= show.location;
        showsDivisionL.appendChild(showsLocation);

        const buttonElement = document.createElement('button');
        buttonElement.classList.add("shows-button");
        buttonElement.innerText= "BUY TICKETS";
        showsSection.appendChild(buttonElement);
        buttonElement.addEventListener('click', (e) => {
            console.log(show.venue);
        })

    }
    )
}







































// const showsContainer = document.querySelector(".shows-container");
// for(let i = 0; i < showsList.length; i++) {
//     console.log(showsList[i]);
//     const newElement = document.createElement('section');
//     newElement.innerText = showsList[i].date
//     newElement.classList.add("shows-section");
// }

// showsList.forEach((show)  => {
//     const buttonElement = document.createElement('button');
//     buttonElement.classList.add("shows-button");
//     buttonElement.innerText = "BUY TICKETS";
//     let showsList = document.querySelector(".shows-button");
//     showsList.appendChild(buttonElement);
// }
// ) 

// const bodyElement = document.body;

// // "createElement" makes the html element for the webpage.
// const showsContainer = document.createElement('div');
// const showsHeading = document.createElement('h2');
// const showsSection = document.createElement('section');
// const showsDivision = document.createElement('div');
// const showsText = document.createElement('p');
// const showsDate = document.createElement('p');
// const buttonElement = document.createElement('button');


// // "Class name" gives the element the class you want to name it
// showsContainer.classList.add("shows-containers");
// showsHeading.classList.add("shows-subheader");
// showsSection.classList.add("shows-section");
// showsDivision.classList.add("shows-division");
// showsText.classList.add("shows-smalltext");
// showsDate.classList.add("shows-subtext");
// buttonElement.classList.add("shows-button");

// // Giving source to the button element

// buttonElement.setAttribute("href", "#");

// // Adding text using InnerText

// showsHeading.innerText = "Shows";
// showsText.innerText = "DATES";
// showsDate.innerText = "Mon Sept 06 2021";
// buttonElement.innerText = "BUY TICKETS";

// // AppendChild section to add to the HTML File
// bodyElement.append(showsContainer);


