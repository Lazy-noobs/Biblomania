
let starRating = 0 
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
container.onclick = e => {
const elClass = e.target.classList;
// change the rating if the user clicks on a different star
if (!elClass.contains('active')) {
    items.forEach( // reset the active class on the star
    item => item.classList.remove('active')
);
    let starRating = e.target.getAttribute("data-rate")
    console.log(starRating);
    elClass.add('active'); // add active class to the clicked star
}
};


allBlogs = []

let blogsForm = document.getElementById('booksform');
blogsForm.addEventListener('submit',submitter);

function submitter(event) {
    event.preventDefault();
    
    let blog = {
        name: document.getElementById("username").value,
        bookName: document.getElementById("bookname").value,
        rating: document.getElementsByClassName("rating").value,
        comment: document.getElementById("comment").value,
    }


    allBlogs.push(blog)
    updateStorage()
    
    i = allBlogs.length - 1
    //Render Last entry
    let section = document.getElementById('blogSection');
    let divElement = document.createElement('div');
    section.appendChild(divElement);
    let name = document.createElement('p');
    divElement.appendChild(name);
    name.textContent = `${allBlogs[i].name} rates ${allBlogs[i].bookName}`;
    let comment = document.createElement('p');
    divElement.appendChild(comment);
    comment.textContent = allBlogs[i].comment;
    

}

function render() {
    getData();
    let section = document.getElementById('blogSection');
    for (let i = 0; i < allBlogs.length; i++) {
        let divElement = document.createElement('div');
        section.appendChild(divElement);
        let name = document.createElement('p');
        divElement.appendChild(name);
        name.textContent = `${allBlogs[i].name} rates ${allBlogs[i].bookName}`;
        let comment = document.createElement('p');
        divElement.appendChild(comment);
        comment.textContent = allBlogs[i].comment;
    }
    
}
 
render();

function updateStorage() {
    let data = allBlogs
    localStorage.setItem("data", JSON.stringify(data));
}


function getData(){
    let data = localStorage.getItem('data');
    let dataObj = JSON.parse(data);
 
    if(dataObj !== null){
      allBlogs = dataObj
    }
 }


 
