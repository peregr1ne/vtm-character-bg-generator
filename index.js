function generateStory(event) {
  event.preventDefault();

  let charInput = document.querySelector("#request-input");
  let char = charInput.value;

  let apiKey = `tb68bfo76465b10730ef185037e7aaa0`;
  let context =
    "You are one of the Vampire the masquerade game designers and one of the best story tellers, please provide detailed and interesting answer";
  let prompt = `please generate a breathtaking ${char}'s background story, which aligns well with VTM v5 lore. Separate each paragraph with <br>.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(({ data: { answer } }) => {
    new Typewriter("#story", {
      strings: answer,
      autoStart: true,
      delay: 15,
    });
  });
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateStory);
