function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: "Story of the character is told here",
    autoStart: true,
    delay: 10,
  });
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateStory);
