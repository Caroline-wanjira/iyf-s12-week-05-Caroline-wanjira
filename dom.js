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

//  Task 9.4

// Exercise 1: Creating Elements
{
  const article = document.querySelector("article");

  // Task 9.3 emptied the article, so rebuild it first
  article.innerHTML = `
    <h2 class="title">Why Every Shilling Needs a Job</h2>
    <p class="content">This is the first paragraph.</p>
    <p class="content">This is the second paragraph.</p>
  `;

  // Create new element
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph!";
  newParagraph.className = "content highlight";

  // Add to the page
  article.appendChild(newParagraph);   // add at end

  // Insert before another element
  const firstParagraph = article.querySelector("p");
  article.insertBefore(newParagraph, firstParagraph);  // before first p

  // Modern insertion methods
  article.prepend(newParagraph);              // first child
  article.append(newParagraph);               // last child
  firstParagraph.before(newParagraph);        // before sibling
  firstParagraph.after(newParagraph);         // after sibling
}

// Exercise 3: Cloning Elements
{
  const navItem = document.querySelector(".nav-link").parentElement;
  const clone = navItem.cloneNode(true);      // true = deep clone
  clone.querySelector("a").textContent = "New Link";
  document.querySelector(".nav-list").appendChild(clone);
}

// Build: function that adds a nav item dynamically
function addNavItem(text, href) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.className = "nav-link";
  a.textContent = text;
  a.href = href;
  li.appendChild(a);
  document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// Exercise 2:
{
  // Remove an element
  const footer = document.querySelector("footer");
  footer.remove();

  // Remove child
  const nav = document.querySelector("nav");
  const lastLink = nav.querySelector("li:last-child");
  lastLink.parentElement.removeChild(lastLink);

  // Clear all children
  const article = document.querySelector("article");
  article.innerHTML = "";   // simple but rebuilds the DOM
  // OR
  while (article.firstChild) {
    article.removeChild(article.firstChild);
  }
}
  const playground = document.getElementById("playground");

// ===== Task 10.1
const clickButton = document.createElement("button");
clickButton.textContent = "Click Me";
playground.appendChild(clickButton);

// Adding event listeners
clickButton.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Arrow function
clickButton.addEventListener("click", () => {
  console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
  console.log("Handled!");
}
clickButton.addEventListener("click", handleClick);

// Remove event listener
clickButton.removeEventListener("click", handleClick);
const box = document.createElement("div");
box.textContent = "Hover, click or double-click me";
box.style.padding = "20px";
box.style.border = "1px solid gray";
playground.appendChild(box);

const nameInput = document.createElement("input");
nameInput.placeholder = "Type here";
playground.appendChild(nameInput);

function handler(event) {
  console.log(event.type);
}

// Mouse events
box.addEventListener("click", handler);
box.addEventListener("dblclick", handler);
box.addEventListener("mouseenter", handler);
box.addEventListener("mouseleave", handler);

// Keyboard and form events
nameInput.addEventListener("keydown", handler);
nameInput.addEventListener("keyup", handler);
nameInput.addEventListener("focus", handler);
nameInput.addEventListener("input", handler);
nameInput.addEventListener("change", handler);

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);

let count = 0;

const counterDisplay = document.createElement("p");
counterDisplay.textContent = count;

const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
const minusBtn = document.createElement("button");
minusBtn.textContent = "-";
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

function updateCount() {
  counterDisplay.textContent = count;
}

plusBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateCount();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});

document.body.append(counterDisplay, plusBtn, minusBtn, resetBtn);

// Task 10.2
document.addEventListener("click", function (event) {
  console.log("Target:", event.target);
  console.log("Current Target:", event.currentTarget);
  console.log("Type:", event.type);
  console.log("Position:", event.clientX, event.clientY);

  // Prevent default behavior
  event.preventDefault();

  // Stop propagation (bubbling)
  event.stopPropagation();
});

document.addEventListener("keydown", function (event) {
  console.log("Key:", event.key);
  console.log("Code:", event.code);
  console.log("Shift:", event.shiftKey);
  console.log("Ctrl:", event.ctrlKey);
  console.log("Alt:", event.altKey);
});
// A small form to test the shortcuts
const shortcutForm = document.createElement("form");
shortcutForm.innerHTML = `
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
`;
playground.appendChild(shortcutForm);

shortcutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted!");
});

document.addEventListener("keydown", (event) => {
  // Ctrl+S: show "Saved!" (stop the browser's save dialog)
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    alert("Saved!");
  }

  // Escape: clear all form inputs
  if (event.key === "Escape") {
    shortcutForm.reset();
  }

  // Ctrl+Enter: submit the form
  if (event.ctrlKey && event.key === "Enter") {
    shortcutForm.requestSubmit();
  }
});
// Task 10.3
const bubbleDemo = document.createElement("div");
bubbleDemo.innerHTML = `
  <div id="grandparent">Grandparent
    <div id="parent">Parent
      <div id="child">Child</div>
    </div>
  </div>
`;
playground.appendChild(bubbleDemo);

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

const taskInput = document.createElement("input");
taskInput.placeholder = "New task";
const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "Add";
const taskList = document.createElement("ul");
taskList.id = "task-list";
document.body.append(taskInput, addTaskBtn, taskList);

function addTask(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");
  li.append(span, delBtn);
  taskList.appendChild(li);
}

addTask("Learn event delegation");
addTask("Build the task list");

// Add new tasks
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;
  addTask(text);
  taskInput.value = "";
});

// ONE listener on the parent ul (delegation)
taskList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;

  if (event.target.matches(".delete-btn")) {
    li.remove();
  } else {
    li.classList.toggle("completed");
  }
});

// Task 10.4
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const formMessage = document.getElementById("form-message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, message) {
  input.classList.add("error");
  let msg = input.parentElement.querySelector(".error-message");
  if (!msg) {
    msg = document.createElement("small");
    msg.className = "error-message";
    input.parentElement.appendChild(msg);
  }
  msg.textContent = message;
}

function clearError(input) {
  input.classList.remove("error");
  const msg = input.parentElement.querySelector(".error-message");
  if (msg) msg.remove();
}

function showSuccess(message) {
  formMessage.textContent = message;
}

// Real-time validation
contactName.addEventListener("input", (event) => {
  if (event.target.value.trim().length < 2) {
    showError(contactName, "Name must be at least 2 characters");
  } else {
    clearError(contactName);
  }
});

contactEmail.addEventListener("input", (event) => {
  if (!emailRegex.test(event.target.value)) {
    showError(contactEmail, "Please enter a valid email");
  } else {
    clearError(contactEmail);
  }
});

// Check every field when the form is submitted
function isValid(data) {
  let ok = true;
  if (data.name.trim().length < 2) {
    showError(contactName, "Name must be at least 2 characters");
    ok = false;
  }
  if (!emailRegex.test(data.email)) {
    showError(contactEmail, "Please enter a valid email");
    ok = false;
  }
  return ok;
}

// Form submission
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading
  formMessage.textContent = "";

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  console.log("Form data:", data);

  if (isValid(data)) {
    showSuccess("Form submitted successfully!");
    contactForm.reset();
  }
});
