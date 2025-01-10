"use strict";

let numbers = [100, 456, 45, 43, 73];
let allNumbers = document.getElementById("all-numbers");
let evenNumbers = document.getElementById("even-numbers");

for (let i = 0; i < numbers.length; i++) {
  allNumbers.innerHTML += `<li>${numbers[i]}</li>`;
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.innerHTML += `<li>${numbers[i]}</li>`;
  }
}

let post1 = document.getElementById("post1");

let blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    author: "Author A",
    date: "2023-11-15",
    src: "https://placehold.co/100x100",
  },
  {
    id: 2,
    title: "Blog Post 2",
    author: "Author B",
    date: "2023-12-01",
    src: "https://placehold.co/100x100",
  },
];
function render(thisIsADifferentPost) {
  for (let i = 0; i < thisIsADifferentPost.length; i++) {
    let bootStrapCard = `
        <li class="card" style="width: 18rem;">
          <img src="${thisIsADifferentPost[i].src}" class="card-img-top" alt="${thisIsADifferentPost[i].title}>
          <div class="card-body">
            <h5 class="card-title">${thisIsADifferentPost[i].title}</h5>
            <p class="card-text">${thisIsADifferentPost[i].author}</p>
            <p class="card-text">${thisIsADifferentPost[i].date}</p>
           
          </div>
        </li>`;
    post1.innerHTML += bootStrapCard;
  }
}

render(blogPosts);
render([blogPosts[0]]);
let fiveMorePost = [];
fiveMorePost.push(
  {
    id: 3,
    title: "Blog Post 3",
    author: "Author C",
    date: "2023-5-6",
    src: "https://placehold.co/100x100",
  },
  {
    id: 4,
    title: "Blog Post 4",
    author: "Author D",
    date: "2023-5-15",
    src: "https://placehold.co/100x100",
  },
  {
    id: 5,
    title: "Blog Post 5",
    author: "Author E",
    date: "2023-9-13",
    src: "https://placehold.co/100x100",
  },
  {
    id: 6,
    title: "Blog Post 6",
    author: "Author F",
    date: "2023-12-11",
    src: "https://placehold.co/100x100",
  },
  {
    id: 7,
    title: "Blog Post 7",
    author: "Author G",
    date: "2023-10-16",
    src: "https://placehold.co/100x100",
  }
);
render(fiveMorePost);
