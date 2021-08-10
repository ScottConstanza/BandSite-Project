let defaultComment = [
    {
        name: 'Connor Walton',
        date: '02/17/2021',
        text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    },

    {
        name: 'Emilie Beach',
        date: '01/09/2021',
        text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    },
    
    {
        name: 'Miles Acosta',
        date: '12/20/2020',
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }

]

const commentSection = document.querySelector(".comments-section");

defaultComment.forEach((comment) => {
    const viewContainer = document.createElement('div');
    viewContainer.classList.add("view-container");
    commentSection.appendChild(viewContainer);

    
    const placeHolder = document.createElement('div');
    placeHolder.classList.add("view-container");
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
    viewDate.innerText = comment.date;
    viewComments.appendChild(viewDate);


    const viewText = document.createElement('p');
    viewText.classList.add("view-text");
    viewText.innerText = comment.text;
    viewComments.appendChild(viewText);
}
)









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