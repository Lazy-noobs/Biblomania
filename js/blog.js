
let starRating = 0;
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item');
container.onclick = e => {
  const elClass = e.target.classList;
  // change the rating if the user clicks on a different star
  if (!elClass.contains('active')) {
    items.forEach( // reset the active class on the star
      item => item.classList.remove('active')
    );
    // let starRating = e.target.getAttribute('data-rate');
    // console.log(starRating);
    console.log(e.target.id)
    if (e.target.id == "star5") {
      starRating = 5
    }
    if (e.target.id == "star4") {
      starRating = 4
    }
    if (e.target.id == "star3") {
      starRating = 3
    }
    if (e.target.id == "star2") {
      starRating = 2
    }
    if (e.target.id == "star1") {
      starRating = 1
    }
    elClass.add('active'); // add active class to the clicked star
  }
};


allBlogs = [];

let blogsForm = document.getElementById('booksform');
blogsForm.addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();
  console.log(event);

  let blog = {
    author: document.getElementById('author').value,
    name: document.getElementById('username').value,
    bookName: document.getElementById('bookname').value,
    rating: starRating,
    comment: document.getElementById('comment').value,
  };

  console.log(blog)
  allBlogs.push(blog);
  updateStorage();

  i = allBlogs.length - 1;
  //Render Last entry
  let section = document.getElementById('blogSection');
  let divElement = document.createElement('div');
  section.appendChild(divElement);
  divElement.setAttribute('id', "blogComments")
  let name = document.createElement('p');
  divElement.appendChild(name);
  name.setAttribute('id', "name")
  name.textContent = `${allBlogs[i].name} rates "${allBlogs[i].bookName}" by ${allBlogs[i].author}`;

  let rating = document.createElement('p');
  divElement.appendChild(rating);
  rating.textContent   = `Book rating : ${allBlogs[i].rating} stars`;
  rating.setAttribute('id', "rating")

  let comment = document.createElement('p');
  divElement.appendChild(comment);
  comment.textContent = `"${allBlogs[i].comment}"`;
  comment.setAttribute('id','comment')

}

function render() {
  getData();
  let section = document.getElementById('blogSection');
  for (let i = 0; i < allBlogs.length; i++) {
    let divElement = document.createElement('div');
    section.appendChild(divElement);
    divElement.setAttribute('id', "blogComments")
    let name = document.createElement('p');
    divElement.appendChild(name);
    name.setAttribute('id', "name")
    name.textContent = `${allBlogs[i].name} rates "${allBlogs[i].bookName}" by ${allBlogs[i].author}`;

    let rating = document.createElement('p');
    divElement.appendChild(rating);
    rating.textContent   = `Book rating : ${allBlogs[i].rating} stars`;
    rating.setAttribute('id', "rating")

    let comment = document.createElement('p');
    divElement.appendChild(comment);
    comment.textContent = `"${allBlogs[i].comment}"`;
    comment.setAttribute('id','comment')

  };

}
render();

function updateStorage() {
  let data = allBlogs;
  localStorage.setItem('data', JSON.stringify(data));
}


function getData() {
  let data = localStorage.getItem('data');
  let dataObj = JSON.parse(data);

  if (dataObj !== null) {
    allBlogs = dataObj;
  }
}



