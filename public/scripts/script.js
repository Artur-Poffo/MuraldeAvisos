document.addEventListener("DOMContentLoaded", () => {
  UpdatePOSTS();
});

function UpdatePOSTS() {
  fetch("http://localhost:3000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let PostElements = "";
      let posts = JSON.parse(json);

      posts.forEach((post) => {
        let PostElement = `<div id="${post.id}" class="card mb-4" style="width: 100%">
        <div class="card-header">
          <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">
            ${post.desc}
          </p>
          <a href="#" class="btn btn-success">Se inscreva!</a>
        </div>
      </div>
    </div>`;

        PostElements += PostElement;
      });

      const containerCard = (document.getElementById(
        "container-card"
      ).innerHTML = PostElements);
    });
}

function NewPOST() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  let post = { title, desc };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post),
  };

  fetch("http://localhost:3000/api/new", options).then((res) => {
    console.log(res);
    UpdatePOSTS();
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
  });
}
