'use strict';



let container = document.getElementById('orderList');
let table = document.createElement('table');
container.appendChild(table);
// let books = [
//     {
//         'author': 'Chinua Achebe',
//         'country': 'Nigeria',
//         'imageLink': 'img/things-fall-apart.jpg',
//         'language': 'English',
//         'link': 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
//         'pages': 209,
//         'title': 'Things Fall Apart',
//         'year': 1958,
//         'genre': 'fantasy',
//         'price': 25
//         ,
//     },
//     {
//         'author': 'Hans Christian Andersen',
//         'country': 'Denmark',
//         'imageLink': 'img/fairy-tales.jpg',
//         'language': 'Danish',
//         'link': 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
//         'pages': 784,
//         'title': 'Fairy tales',
//         'year': 1836,
//         'genre': 'fantasy',
//         'price': 25

//     },
//     {
//         'author': 'Dante Alighieri',
//         'country': 'Italy',
//         'imageLink': 'img/the-divine-comedy.jpg',
//         'language': 'Italian',
//         'link': 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
//         'pages': 928,
//         'title': 'The Divine Comedy',
//         'year': 1315,
//         'genre': 'fantasy',
//         'price': 30
//         ,
//     },
//     {
//         'author': 'Unknown',
//         'country': 'Sumer and Akkadian Empire',
//         'imageLink': 'img/the-epic-of-gilgamesh.jpg',
//         'language': 'Akkadian',
//         'link': 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
//         'pages': 160,
//         'title': 'The Epic Of Gilgamesh',
//         'year': -1700,
//         'genre': 'fantasy'
//         , 'price': 45
//     },
//     {
//         'author': 'Unknown',
//         'country': 'Achaemenid Empire',
//         'imageLink': 'img/the-book-of-job.jpg',
//         'language': 'Hebrew',
//         'link': 'https://en.wikipedia.org/wiki/Book_of_Job\n',
//         'pages': 176,
//         'title': 'The Book Of Job',
//         'year': -600,
//         'genre': 'history'
//         , 'price': 50
//     },]


// function renderItems() {

//     for (let i = 0; i < books.length; i++) {
//         let division = document.createElement('div');
//         container.appendChild(division);
//         let img = document.createElement('img');
//         img.src = books[i].imageLink;
//         division.appendChild(img);
//         let price = document.createElement('p');
//         division.appendChild(price);
//         let quantityInput = document.createElement('input');
//         quantityInput.type = 'number';
//         quantityInput.addEventListener('input', getQuantity);
//         quantityInput.setAttribute('min',0);
//         division.appendChild(quantityInput);
//         let removeButton = document.createElement('button');
//         removeButton.addEventListener('click',remove);
//         division.appendChild(removeButton);
//         removeButton.textContent='remove';
//         price.textContent = books[i].price;
//         function getQuantity(e) {
//             let quantity = e.target.value;
//             // if(quantity<2||quantity==NaN||quantity==null){
//             //     e.target.value=1;
//             //     price.textContent=books[i].price; 
//             // }
//             price.textContent = books[i].price * quantity;
//             console.log(quantity);
//         }
//         function remove(){
//             division.textContent='';
//         }
//     }
// }
let books=[];
function getData(){
    let data = localStorage.getItem('booksCart');
    books=JSON.parse(data);
}
function renderTable() {

    let hrow = document.createElement('tr');
    table.appendChild(hrow);
    let headerCell1 = document.createElement('th');
    headerCell1.textContent = '';
    hrow.appendChild(headerCell1);
    let headerCell2 = document.createElement('th');
    headerCell2.textContent = 'price';
    hrow.appendChild(headerCell2);
    let headerCell3 = document.createElement('th');
    headerCell3.textContent = 'quantity';
    hrow.appendChild(headerCell3);
    let headerCell4 = document.createElement('th');
    headerCell4.textContent = '';
    hrow.appendChild(headerCell4);

    let totalArr = [];
    totalArr.length=books.length;
    let sum = 0;

    for (let i = 0; i < totalArr.length; i++) {

        totalArr[i] = 0;

    }
    for (let i = 0; i < books.length; i++) {
        let value;
        let price;
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let j = 0; j < 4; j++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            if (j == 0) {
                let img = document.createElement('img');
                img.src = books[i].imageLink;
                cell.appendChild(img);
            } else if (j == 1) {
                price = document.createElement('p');
                price.textContent = books[i].price;
                cell.appendChild(price);
            } else if (j == 2) {
                let quantityInput = document.createElement('input');
                quantityInput.type = 'number';
                quantityInput.addEventListener('input', getQuantity);
                quantityInput.setAttribute('min', 0);
                cell.appendChild(quantityInput);
            } else if (j == 3) {
                let removeButton = document.createElement('button');
                removeButton.addEventListener('click', remove);
                removeButton.textContent = 'remove';
                cell.appendChild(removeButton);
            }

        }
        function getQuantity(e) {
            let totalBookPrice = 0;
            sum=0;
            value=e.target.value;
            let quantity = e.target.value;
            price.textContent = books[i].price * quantity;
            totalBookPrice += books[i].price * quantity;
            totalArr[i] = totalBookPrice;

            for(let i=0;i<totalArr.length;i++){
                // if(totalArr[i]==null){
                //     totalArr[i]=0;
                // }
                sum+=totalArr[i];
            }
            footerCell4.textContent=sum;
            console.log(totalArr);
            console.log(sum);
            
        }
        function remove() {
            row.textContent = '';
            totalArr[i]=0;
            sum=0;
            for(let i=0;i<totalArr.length;i++){
                // if(totalArr[i]==null){
                //     totalArr[i]=0;
                // }
                sum+=totalArr[i];
            }
            footerCell4.textContent=sum;
            console.log(totalArr);
           
        }
    }

    let brow = document.createElement('tr');
    table.appendChild(brow);
    let footerCell1 = document.createElement('th');
    footerCell1.textContent = '';
    brow.appendChild(footerCell1);
    table.appendChild(brow);
    let footerCell2 = document.createElement('th');
    footerCell2.textContent = '';
    brow.appendChild(footerCell2);
    table.appendChild(brow);
    let footerCell3 = document.createElement('th');
    footerCell3.textContent = 'Total Price:';
    brow.appendChild(footerCell3);
    table.appendChild(brow);
    let footerCell4 = document.createElement('th');
    footerCell4.textContent = sum;
    brow.appendChild(footerCell4);
    
    document.getElementById("button-a").onclick = function jsalert() {
    
        swal(`You are welcom any time`,`The total cost=${sum}`, "success")
      };
}

getData();
renderTable();
