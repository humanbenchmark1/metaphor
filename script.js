function calculateResult() {
  const answers = {
    introvert: 0,
    extrovert: 0,
    "detail": 0,
    "big-picture": 0
  };

  // Get the user's selected answers
  const form = document.getElementById("quizForm");
  const formData = new FormData(form);
  for (let value of formData.values()) {
    answers[value]++;
  }

  // Simple scoring logic
  let result = '';
  if (answers.introvert > answers.extrovert) {
    result += "You might be more introverted. ";
  } else {
    result += "You might be more extroverted. ";
  }

  if (answers["detail"] > answers["big-picture"]) {
    result += "You seem to be detail-oriented.";
  } else {
    result += "You seem to be big-picture focused.";
  }

  // Display the result
  document.getElementById("result").textContent = result;
}
