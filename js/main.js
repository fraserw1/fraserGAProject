// dropdown menu

const menuAppear = document.getElementById("menu-trigger");
const menuClose =  document.getElementById("menu-close");


menuAppear.addEventListener("click", dropdownMenuAppears);
menuClose.addEventListener("click", dropdownMenuCloses);

function dropdownMenuAppears() {
  document.getElementById("menu-1").classList.add("show");
  menuAppear.style.display = "none";
  menuClose.style.display = "flex";
}
function dropdownMenuCloses() {
  document.getElementById("menu-1").classList.remove("show");
  menuAppear.style.display = "flex";
  menuClose.style.display = "none";
}

// scroll bar

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

// modal

const openModal = document.getElementById("show-button-1");

openModal.addEventListener("click", function() {
  document.querySelector(".mask").classList.add("active");
})

const openModalTwo = document.getElementById("show-button-2");

openModalTwo.addEventListener("click", function() {
  document.querySelector(".mask").classList.add("active");
})


function closeModal() {
  document.querySelector(".mask").classList.remove("active");
}

document.querySelector(".close-button").addEventListener("click", function() {
  closeModal();
})

document.querySelector(".mask").addEventListener("click", function() {
  closeModal();
})

document.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});

// LOGIN

const accountInfo = [
  {
    username: "fraser",
    password: "fanbase",
  },
  {
    username: "wilson",
    password: "letmein",
  },
];

const errorsList = document.querySelector("#errors");


document.querySelector("#login").addEventListener("submit", getInfo);

function getInfo(event) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  for (i = 0; i < accountInfo.length; i++) {
    if (
      username == accountInfo[i].username &&
      password == accountInfo[i].password
    ) {
      return;
      }
    if (
      username !== accountInfo[i].username
    ) {
      addError ("username not recognised");
      break;
    }
    if (
      password !== accountInfo[i].password
    ) {
      addError ("incorrect password");
      break;
    }
  }
  event.preventDefault();
}

function addError(message) {
  let li = document.createElement("li");
    li.innerText = message;
    errorsList.appendChild(li);
}


// INTERSECT OBSERVER

const fade = document.querySelectorAll(".fade-in");
const slide = document.querySelectorAll(".slide");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll)
{
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

fade.forEach(fade => {
  appearOnScroll.observe(fade);
});

slide.forEach(slide => {
  appearOnScroll.observe(slide);
});