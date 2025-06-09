function showMessage(vibe) {
  const messages = {
    inspired: "Yesss! Go build something cool today!🎉",
    tired: "Hey, go get a snack and take a break.🍿",
    curious: "I love that! Let’s explore something new.🔍"
  };
  const messageDiv = document.getElementById("vibe-message");
  messageDiv.textContent = messages[vibe];
}
