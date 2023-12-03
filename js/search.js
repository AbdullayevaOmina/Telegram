document.addEventListener("DOMContentLoaded", async function () {
  function createAlert(msg, type = "error") {
    let alertElement = document.createElement("div");
    let color =
      type === "error"
        ? "rose"
        : type === "success"
        ? "green"
        : type === "info"
        ? "blue"
        : "yellow";
    let className = `text-xl ps-8 py-2 pe-4 rounded-lg border border-${color}-900 text-${color}-900 bg-${color}-200`;

    alertElement.classList.add(...className.split(" "));
    alertElement.innerText = msg;
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("ms-4");
    closeBtn.innerText = "X";
    alertElement.append(closeBtn);
    alerts.append(alertElement);
    closeBtn.addEventListener("click", () => alertElement.remove());
    setTimeout(() => alertElement.remove(), 3_000);
  }

  axios.defaults.baseURL = "http://localhost:3000";

  let userImg = document.querySelector(".userImg");
  let fullName = document.querySelector(".userImg");
  let phoneNumber = document.querySelector(".phoneNumber");
  let serch_input = document.querySelector("#serch-input");
  let search_btn = document.querySelector(".search_btn");
  let logoutbtn = document.querySelector(".log-out-btn");

  logoutbtn.addEventListener("click", () => {
    window.location.replace("pages/login.html");
  });

  let { data: user } = await axios.get(`users/${userId}`)

  if(!user) {
    createAlert("")
  }
});
