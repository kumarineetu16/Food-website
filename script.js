  const modal = document.getElementById("loginModal");
  const btn = document.querySelector(".login-btn");
  const span = document.querySelector(".close");

  btn.onclick = function () {
    modal.style.display = "flex";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      modal.style.display = "none";
    } else {
      alert("Invalid credentials!");
    }
  }

  function submitReview() {
  const name = document.getElementById("reviewerName").value;
  const text = document.getElementById("reviewText").value;

  if (name && text) {
    const reviewList = document.getElementById("reviewList");

    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    reviewDiv.innerHTML = `
  <div class="reviewer">
    <img src="grid_image5.png" alt="User" class="review-img">
    <div>
      <strong>${name}</strong>
      <p>${text}</p>
    </div>
  </div>
`;

    reviewList.prepend(reviewDiv);  // Add to top

    // Clear input fields
    document.getElementById("reviewerName").value = "";
    document.getElementById("reviewText").value = "";
  } else {
    alert("Please fill in both fields!");
  }
}