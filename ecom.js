/*const names = [
    {id: 0, name: "SSD"},
    {id: 1, name: "RAM"},
    {id: 2, name: "SCB"}
];
const price = [
    {id: 0, price: 20}, 
    {id: 1, price: 40}, 
    {id: 2, price: 50}
];
const description = [ 
    {id: 0, desc: "Solid-state drive for your computer"}, 
    {id: 1, desc: "Random access memory for your computer"}, 
    {id: 2, desc: "Small computer board for electronic use"}
];
const imgsrc = [
    {id: 0, src: "ssd.jpg"}, 
    {id: 1, src: "ram.jpg"}, 
    {id: 2, src: "scb.jpg"}
];*/

var map = new Map();
map.set('name0', 'SSD');
map.set('price0', 20);
map.set('desc0', "Solid-state drive for your computer");
map.set('imgsrc0', "ssd.jpg");

map.set('name1', 'RAM');
map.set('price1', 40);
map.set('desc1', "Random access memory for your computer");
map.set('imgsrc1', "ram.jpg");

map.set('name2', 'SCB');
map.set('price2', 50);
map.set('desc2', "Small computer board for electronic use");
map.set('imgsrc2', "scb.jpg");

let string = "rows";
let string2 = "image";
let string3 = "title";
let string4 = "price";
let string5 = "description";
let azsort = false;
let high = 50;
let low = 20;
let tempval = 0;

function checkSelected() {
    const dropdown = document.getElementById("sort");
    const selectedValue = dropdown.value;

    if (selectedValue == "price") {
        for (let i = 0; i < 3; i++) {
            let word5 ='price'
            if (map.get(word5.concat(i)) < high) {
                document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
                tempval = map.get(word5.concat(i))
            } else if (map.get(word5.concat(i)) < tempval) {
                document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
            }
        }
    } else if (selectedValue == "price2") {
       for (let i = 0; i < 3; i++) {
            let word5 ='price'
            if (map.get(word5.concat(i)) > low) {
                document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
                tempval = map.get(word5.concat(i))
            } else if (map.get(word5.concat(i)) > tempval) {
                document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
            }
        }
    }
}

for (let i = 0; i < 3; i++) {
        let word1 = '<img  width="640px" height="350px" src="';
        let word2 = '">';
        let word3 ='imgsrc'
        let word4 ='name'
        let word5 ='price'
        let word6 ='desc'
        let htmlString = word1 + map.get(word3.concat(i)) + word2;
        document.getElementById(string.concat(i)).insertAdjacentHTML("afterbegin", htmlString);
        document.getElementById(string3.concat(i)).innerHTML = map.get(word4.concat(i));
        document.getElementById(string4.concat(i)).innerHTML = map.get(word5.concat(i));
        document.getElementById(string5.concat(i)).innerHTML = map.get(word6.concat(i));
    }


