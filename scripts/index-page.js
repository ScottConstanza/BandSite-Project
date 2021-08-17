// let defaultComment = [
//     {
//         name: 'Connor Walton',
//         date: '02/17/2021',
//         text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
//     },

//     {
//         name: 'Emilie Beach',
//         date: '01/09/2021',
//         text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
//     },
    
//     {
//         name: 'Miles Acosta',
//         date: '12/20/2020',
//         text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//     }

// ]

let comments =[]

let apiKey = "cb39efe6-7135-448f-8ccc-0d37be500d2c"
let liveComments = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`

axios.get(liveComments).then(result => {
    console.log(result.data);
    // comments = result.data;
    displayAllComments(result.data);
})


const updatedDate = (realDate) => {
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    const fullDate = month + "/" + day + "/" + year;
    return fullDate
    console.log(updatedDate);
}



const commentSection = document.querySelector(".comments-section");
function displayAllComments(array){
    array.forEach((comment) => {
        const viewContainer = document.createElement('div');
        viewContainer.classList.add("view-container");
        commentSection.appendChild(viewContainer);
    
        
        const placeHolder = document.createElement('div');
        placeHolder.classList.add("placeholder-image");
        viewContainer.appendChild(placeHolder);
    
    
        const viewComments = document.createElement('div')
        viewComments.classList.add("view-comments");
        viewContainer.appendChild(viewComments);
    
    
        const viewName = document.createElement('p');
        viewName.classList.add("view-name");
        viewName.innerText = comment.name;
        viewComments.appendChild(viewName);
    
        const viewDate = document.createElement('p');
        viewDate.classList.add("view-date");
        viewDate.innerText = comment.fullDate;
        viewComments.appendChild(viewDate);
    
    
        const viewText = document.createElement('p');
        viewText.classList.add("view-text");
        viewText.innerText = comment.comment;
        viewComments.appendChild(viewText);
    }
    )
}


const commentsForm = document.querySelector(".comments-form");
commentsForm.addEventListener('submit', (b)  => {
    b.preventDefault();
    if(b.target.user_name.value === '') {
        return;
    }

    if(b.target.user_comment.value === '') {
        return;
    }

    const newComment = {
        name: b.target.user_name.value,
        date: new Date().toLocaleDateString(),
        text: b.target.user_comment.value
    }
    
    defaultComment.unshift(newComment);
    const viewContainers = document.querySelectorAll(".view-container");
    viewContainers.forEach((container)  => {
        container.remove()
    })
    displayAllComments();
    b.target.reset();
})

// displayAllComments();








// Creating all the elements I'm going to use
const viewContainer = document.createElement('div');
const placeHolder = document.createElement('div')
const viewComments = document.createElement('div')
const viewName = document.createElement('p')
const viewDate = document.createElement('p')
const viewText = document.createElement('p')

// adding a Class to each element created
viewContainer.classList.add("view-container");
placeHolder.classList.add("placeholder-image");
viewComments.classList.add("view-comments");
viewName.classList.add("view-name");
viewDate.classList.add("view-date");
viewText.classList.add("view-text");