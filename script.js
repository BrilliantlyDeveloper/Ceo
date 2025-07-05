window.addEventListener("DOMContentLoaded", () => {
  alert("This site was created by Navruzbek | This site is not yet fully completed.! Sorry for any errors..");
});

const videos = [

  { title: "1 - Personal Subject Pronouns", file: "1-mavzu Personal subject pronouns(Kishilik olmoshlari).mp4" },
  { title: "2 - Possessive Adjectives & Pronouns", file: "2-mavzu Possessive adjectives and pronouns(Egalik olmoshlari).mp4" },
  { title: "3 - To Be (am, is, are)", file: "3-mavzu To be ( bo'lmoq).mp4" },
  { title: "4 - Countable and Uncountable Nouns", file: "4-mavzu Countable and uncountable nouns(Sanaladigan va sanalmaydigan otlar).mp4" },
  { title: "5 - Articles (A, An, The)", file: "5-mavzu Articles(Artikl).mp4" },
  { title: "6 - This, That, These, Those", file: "6-mavzu This ,that,these,those (Ko'rsatish olmoshlari).mp4" },
  { title: "8.1 - Word Order", file: "8.1-mavzu Word order ( So'zlar tartibi).mp4" },
  { title: "8.2 - Have Got / Has Got", file: "8.2-mavzu Have got,Has got(Bor bo'lmoq).mp4" },
  { title: "9 - Prepositions", file: "9-mavzu Prepositions (Joy nomlari).mp4" },
  { title: "10 - Question Words", file: "10-mavzu Question words (So'roq so'zlar).mp4" },
  { title: "12 - Present Continuous", file: "12-mavzu Present Continious (Hozirgi davomli zamon).mp4" },
  { title: "13 - Present Perfect", file: "13-mavzu Present Perfect (Hozirgi tugallangan zamon).mp4" },
  { title: "14 - Present Perfect Continuous", file: "14-mavzu Present Perfect Continious (Hozirgi davomli tugallangan zamon).mp4" },
  { title: "15 - Past Simple", file: "15-mavzu Past simple (O'tgan oddiy zamon).mp4" },
  { title: "16 - Past Continuous", file: "16-mavzu Past countinious (O'tgan davomli zamon).mp4" },
  { title: "17 - Past Simple vs Present Perfect", file: "17-mavzu Past simple,Present perfect (O'tgan zamon, Hozirgi tugallangan zamon).mp4" },
  { title: "18 - Past Perfect", file: "18-mavzu Past perfect (O'tgan tugallangan zamon).mp4" },
  { title: "19 - Future Simple", file: "19-mavzu Future simple(kelasi oddiy zamon).mp4" },
  { title: "20 - Future Simple vs Be Going To", file: "20-mavzu Future simple,be going (Kelasi zamon).mp4" },
  { title: "21 - Future Continuous", file: "21-mavzu Future Countinious (Kelasi davomli zamon).mp4" },
  { title: "22 - Future Perfect / Continuous", file: "22-mavzu Future Perfect,Future Perfect Cointiniouns (Kelasi zamonlar davomi).mp4" },
  { title: "23 - Modal Verbs", file: "23-Mavzu Modal verbs (Modal fe'llar).mp4" },
  { title: "24 - Passive Voice", file: "24-mavzu Passive voice(Majhul nisbat).mp4" },
  { title: "25 - Imperative Mood", file: "25-mavzu Imperative (Buyruq gap).mp4" },
  { title: "26 - Relative Clauses", file: "26-mavzu Relative clauses (Bog'lovchi gaplar).mp4" },
  { title: "27 - Some, Any, No, Few, Little", file: "27-mavzu Some,Any,No,A few,few,Little,a little (Qiymatlar).mp4" },
  { title: "28 - Much, Many, A Lot Of", file: "28-MAVZU Much,Many,Alot of, Too, How question (Ko'plik qiymatlar).mp4" },
  { title: "29 - Other(s), Another, Else, Every, Each", file: "29-mavzu Other(s),Another,Else,Every,Each,ALL,whole,Both,Either,Neither (Boshqa).mp4" },
  { title: "30 - Reflexive Pronouns", file: "30-mavzu Reflexive pronouns (O'zlik olmoshlari).mp4" },
  { title: "31 - Adjectives and Adverbs", file: "31-mavzu Adjective and adverb (Sifat va Ravish).mp4" },
  { title: "32 - Comparatives and Superlatives", file: "32-mavzu Compiratives and Superlatives (Darajalar).mp4" },
  { title: "33 - Question Tags", file: "33-mavzu Question tags (Dumli savollar).mp4" },
  { title: "34 - First Conditional", file: "34-mavzu First conditional (IF li gaplar).mp4" },
  { title: "35 - Second Conditional", file: "35-mavzu Second Conditional (IF li gaplar davomi).mp4" },
  { title: "36 - Exclamations", file: "36-mavzu Question words,Exlamations (Hayrat ifodalari).mp4" },
  { title: "37 - Gerund", file: "37-mavzu Gerund (Gerundiy).mp4" },
  { title: "38 - Gerund vs Infinitive", file: "38-mavzu Gerund vs Infinitive (Gerundiy yoki Infinitiv).mp4" },
  { title: "39 - Agreeing and Disagreeing", file: "39-mavzu Agreeing and Disagreeing (Rozilik va norozilik).mp4" },
  { title: "40 - Reported Speech (2025.07.05-)", file: "40-mavzu Reported Speech (Keltirilgan gaplar).mp4" }
];


let currentPage = 1;
const perPage = 4;
const views = Array(videos.length).fill(0);
const likes = Array(videos.length).fill(0);
const comments = Array(videos.length).fill([]);

function loadVideos() {
  const container = document.getElementById("video-container");
  container.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const currentVideos = videos.slice(start, start + perPage);

  currentVideos.forEach((video, index) => {
    const realIndex = start + index;
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <h2>${video.title}</h2>
      <video src="videos/${video.file}" controls preload="none"></video>
      <div class="controls">
        <span>👁 ${views[realIndex]}</span>
        <button class="like-btn" data-index="${realIndex}">❤️ ${likes[realIndex]}</button>
        <button class="comment-btn" data-index="${realIndex}">💬 Izoh</button>
      </div>
      <div class="comments" id="comments-${realIndex}">
        ${comments[realIndex].map(c => `<p><strong>${c.name}:</strong> ${c.text}</p>`).join("")}
      </div>
    `;
    const videoEl = card.querySelector("video");
    videoEl.addEventListener("play", () => views[realIndex]++);
    container.appendChild(card);
  });

  document.getElementById("pageInfo").textContent = `Sahifa ${currentPage} / ${Math.ceil(videos.length / perPage)}`;
}

// Sahifalash
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    loadVideos();
  }
};
nextBtn.onclick = () => {
  if (currentPage < Math.ceil(videos.length / perPage)) {
    currentPage++;
    loadVideos();
  }
};

// Modal izohlar
const modal = document.getElementById("commentModal");
const closeModal = document.querySelector(".close-button");
const usernameInput = document.getElementById("username");
const commentInput = document.getElementById("commentText");
const submitComment = document.getElementById("submitComment");
let commentTargetIndex = null;

closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

submitComment.onclick = () => {
  const name = usernameInput.value.trim();
  const text = commentInput.value.trim();
  if (name && text && commentTargetIndex !== null) {
    comments[commentTargetIndex].push({ name, text });
    loadVideos();
    modal.style.display = "none";
    usernameInput.value = "";
    commentInput.value = "";
  }
};

// Tungi rejim
const toggle = document.getElementById("toggle-theme");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");

// Like va Comment tugmalari uchun delegatsiya
window.addEventListener("click", e => {
  if (e.target.matches(".like-btn")) {
    const idx = e.target.dataset.index;
    likes[idx]++;
    loadVideos();
  } else if (e.target.matches(".comment-btn")) {
    commentTargetIndex = e.target.dataset.index;
    modal.style.display = "block";
  }
});

// Yuklanganda
document.addEventListener("DOMContentLoaded", loadVideos);


