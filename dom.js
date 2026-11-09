// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice: Select these elements
// 1. The h1 element
const h1 = document.querySelector("h1");
console.log("1. h1:", h1);

// 2. All elements with class "content"
const contentElements = document.querySelectorAll(".content");
console.log("2. content:", contentElements);

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("3. form:", form);

// 4. The email input
const emailInput = document.getElementById("email");
console.log("4. email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log("5. nav items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. first nav-link:", firstNavLink);

// 7. The last paragraph
const lastParagraph = paragraphs[paragraphs.length - 1];
console.log("7. last paragraph:", lastParagraph);

// Task 9.2:
const nav = document.querySelector("nav");

// Parent
console.log("Parent:", nav.parentElement);            // header

// Children
console.log("Children:", nav.children);               // HTMLCollection
console.log("First child:", nav.firstElementChild);   // ul
console.log("Last child:", nav.lastElementChild);     // ul

// Siblings
const article = document.querySelector("article");
console.log("Next sibling:", article.nextElementSibling);         // section
console.log("Previous sibling:", article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log("Nav links:", navLinks);

// Practice 1: header, then the nav inside it
const mainHeader = document.getElementById("main-header");
console.log("P1:", mainHeader.querySelector("nav"));

// Practice 2: first nav-link, then its parent li
const firstNavItem = document.querySelector(".nav-link");
console.log("P2:", firstNavItem.parentElement);

// Practice 3: article, then its next sibling (section)
console.log("P3:", article.nextElementSibling);

// Practice 4: the ul, then all its child li elements
const ul = document.querySelector("ul");
console.log("P4:", ul.children);

// Practice 5: from the footer, navigate up to the body
const footer = document.querySelector("footer");
console.log("P5:", footer.parentElement);             // body


// ===== Task 9.3: Modifying Content =====

// Exercise 1: Text Content
{
  const h1 = document.querySelector("h1");
  console.log(h1.textContent);   // includes hidden text
  console.log(h1.innerText);     // only visible text
  h1.textContent = "New Title";
}

// Exercise 3: Attributes
{
  const link = document.querySelector(".nav-link");
  console.log(link.getAttribute("href"));
  console.log(link.href);

  link.setAttribute("href", "https://developer.mozilla.org");
  link.href = "https://developer.mozilla.org";

  console.log(link.hasAttribute("target"));
  link.removeAttribute("target");

  const element = document.querySelector("[data-id]");
  console.log(element.dataset.id);        // "123"
  console.log(element.dataset.category);  // "finance"
  element.dataset.newAttr = "value";      // creates data-new-attr
}

// Exercise 4: Styles
{
  const container = document.querySelector(".container");
  container.style.backgroundColor = "#f0f0f0";
  container.style.padding = "30px";
  container.style.borderRadius = "8px";

  Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
  });
}

// Exercise 2: HTML Content 
{
  const article = document.querySelector("article");
  console.log(article.innerHTML);

  article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
  `;

  // Why innerHTML is dangerous with anything a user typed:
  const userInput = `<img src="x" onerror="alert('hacked!')">`;
  article.innerHTML = userInput;     // a "hacked!" popup will appear
  article.textContent = userInput;   // shows the characters as text, nothing runs
}
// rule:textContent for anything that came from a user or an API.
// innerHTML ONLY FOR HTML you wrote yourself.

