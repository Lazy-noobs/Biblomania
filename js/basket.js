"use strict";
let carts = document.getElementsByClassName('add-book');

let books = [
    {
      'author': 'Chinua Achebe',
      'country': 'Nigeria',
      'imageLink': 'images/things-fall-apart.jpg',
      'language': 'English',
      'link': 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
      'pages': 209,
      'title': 'Things Fall Apart',
      'year': 1958
    },
    {
      'author': 'Hans Christian Andersen',
      'country': 'Denmark',
      'imageLink': 'images/fairy-tales.jpg',
      'language': 'Danish',
      'link': 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
      'pages': 784,
      'title': 'Fairy tales',
      'year': 1836
    },
    {
      'author': 'Dante Alighieri',
      'country': 'Italy',
      'imageLink': 'images/the-divine-comedy.jpg',
      'language': 'Italian',
      'link': 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
      'pages': 928,
      'title': 'The Divine Comedy',
      'year': 1315
    },
    {
      'author': 'Unknown',
      'country': 'Sumer and Akkadian Empire',
      'imageLink': 'images/the-epic-of-gilgamesh.jpg',
      'language': 'Akkadian',
      'link': 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
      'pages': 160,
      'title': 'The Epic Of Gilgamesh',
      'year': -1700
    }
];


for(let i=0; i <books.length; i++) {
    books[i].addEventlistener('click',()=>{
        bookNumbers(books[i]);

        totalCost(books[i]);
    })
}

function bookNumbers(book){
    let bookNameNumbers= localStorage.getItem('bookNumbers');

    bookNameNumbers=parseInt(bookNameNumbers);

    if(bookNameNumbers){
        localStorage.setItem('bookNumbers', bookNameNumbers +1)
    }else {
        localStorage.setItem('add-book')
    }
    setBooks(book);

}

function setBooks(book){
    let cartBooks = localStorage.getItem('booksIncart');
    cartBooks= JSON.parse(cartBooks);

    if(cartBooks!=null){
        if(cartBooks[book.tag]==undefined){
            cartBooks={
                ...cartBooks,
                [book.tag]:book
            }
        }
        cartBooks[book.tag].incart +=1;
    }else{
        book.incart = 1;
        cartBooks={
            [book.tag]: book
        }
    }
localStorage.setItem("booksIncart", JSON.stringify(cartBooks));
}

function totalCost(book){
    let booksCost = localStorage.getItem('totalCost');

    if(booksCost != null) {
        booksCost= parseInt(booksCost);

        localStorage.setItem("totalCost", booksCost+ book.price);
    }else{
        localStorage.setItem('totalCost', book.price);
    }
}