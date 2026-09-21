let strings = "rows";
let strings3 = "title";
let strings4 = "price";
let strings5 = "description";
let words = ['<h1 id="', '">', '</h1>', '<h2 id="', 
            '</h2>', '<p id="', '</p>']

class ProductLoop {
  constructor(num) {
    this.num = num;
  }

  makeElements() {
    for (let i = 0; this.num < i; i++) {
        htmlString1 = words[0] + strings3.concat(i) + words[1] + words[2];
        htmlString2 = words[3] + strings4.concat(i) + words[1] + words[4];
        htmlString3 = words[5] + strings5.concat(i) + words[1] +  words[6];
        document.getElementById(strings.concat(i)).insertAdjacentHTML("afterbegin", htmlString1);
        document.getElementById(strings.concat(i)).insertAdjacentHTML("afterbegin", htmlString2);
        document.getElementById(strings.concat(i)).insertAdjacentHTML("afterbegin", htmlString3);
    }
  }
}

const myProduct = new ProductLoop(3);
myProduct.makeElements();