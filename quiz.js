// =====================================================
// Moteur de QCM réutilisable — Les Mathématiques pour Tous
// Utilisation : renderQuiz("id-du-conteneur", tableauDeQuestions)
// Chaque question : { q: "texte", options: [...], correct: index }
// =====================================================

function renderQuiz(containerId, questions) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var answers = new Array(questions.length).fill(null);

  function build() {
    var html = "";
    questions.forEach(function (item, qi) {
      html += '<div class="quiz-question" data-qi="' + qi + '">';
      html += '<p class="quiz-q-text">' + (qi + 1) + '. ' + item.q + '</p>';
      html += '<div class="quiz-options">';
      item.options.forEach(function (opt, oi) {
        html += '<button type="button" class="quiz-option" data-qi="' + qi + '" data-oi="' + oi + '">' + opt + '</button>';
      });
      html += '</div>';
      html += '<p class="quiz-feedback" data-qi="' + qi + '"></p>';
      html += '</div>';
    });
    html += '<button type="button" id="' + containerId + '-submit" class="quiz-submit">Terminer le quiz</button>';
    html += '<p class="quiz-score" id="' + containerId + '-score"></p>';
    container.innerHTML = html;

    container.querySelectorAll(".quiz-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qi = parseInt(btn.getAttribute("data-qi"), 10);
        var oi = parseInt(btn.getAttribute("data-oi"), 10);
        answers[qi] = oi;

        var group = container.querySelector('.quiz-question[data-qi="' + qi + '"]');
        group.querySelectorAll(".quiz-option").forEach(function (b) {
          b.classList.remove("selected");
        });
        btn.classList.add("selected");

        var feedback = container.querySelector('.quiz-feedback[data-qi="' + qi + '"]');
        if (oi === questions[qi].correct) {
          feedback.textContent = "✓ Correct";
          feedback.className = "quiz-feedback correct";
        } else {
          feedback.textContent = "✗ Faux — bonne réponse : " + questions[qi].options[questions[qi].correct];
          feedback.className = "quiz-feedback incorrect";
        }
      });
    });

    document.getElementById(containerId + "-submit").addEventListener("click", function () {
      var score = 0;
      answers.forEach(function (a, i) {
        if (a === questions[i].correct) score++;
      });
      var scoreEl = document.getElementById(containerId + "-score");
      var unanswered = answers.filter(function (a) { return a === null; }).length;
      var msg = "Score : " + score + " / " + questions.length;
      if (unanswered > 0) {
        msg += " (" + unanswered + " question(s) sans réponse)";
      }
      scoreEl.textContent = msg;
      scoreEl.classList.add("visible");
    });
  }

  build();
}
