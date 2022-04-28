let requestURL = './main.json'; //get the file from the computer and give it a name (requestURL)
const header = document.querySelector('header'); //get header from html file so that we can use it here
const section = document.querySelector('section'); //get section from html file so that we can use it here
let request = new XMLHttpRequest(); //XMLHttpRequest() is a built in tool and runs the file as soon as the page opens
request.open('GET', requestURL); // we want to resive data so we use 'Get' to get data from (requestURL) in line 1
request.responseType = 'json'; //by default, the browser doesn't know this is a json file so we tell it (otherwise it would be treated as a text file)

request.send();
request.onload = function() { //here we say what happen when the data is loaded
    if (request.status >= 200 && request.status < 400){ //make sure that everything works perfectly
        const PersianFood = request.response;
        populateHeader(PersianFood);
        showFoods(PersianFood);
    } else {
        const wrong = document.createElement('h1');
        wrong.textContent = 'Error!!!!!!!!!!';
    }
};
function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['headName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + obj['homeTown'] +' -------------- year: ' + obj['year'];
    header.appendChild(myPara);
}

function showFoods(obj) {
    const foodsToShow = obj['Foods'];

    for (let i = 0; i < foodsToShow.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = foodsToShow[i].name;
        myPara1.textContent = 'type: ' + foodsToShow[i].type;
        myPara2.textContent = 'time: ' + foodsToShow[i].time;
        myPara3.textContent = 'ingredients:';

        const Ingredients = foodsToShow[i].ingredients;
        for (let j = 0; j < Ingredients.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = Ingredients[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}


