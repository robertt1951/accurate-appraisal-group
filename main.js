(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.querySelector("#inquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.querySelector("#form-status");
      var name = form.querySelector("[name=name]").value.trim();
      var email = form.querySelector("[name=email]").value.trim();
      var message = form.querySelector("[name=message]").value.trim();
      if (!name || !email || !message) {
        status.textContent = "Please complete name, email, and message.";
        return;
      }
      var subject = encodeURIComponent("Website inquiry from " + name);
      var body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\nPhone: " +
        (form.querySelector("[name=phone]").value || "") +
        "\nType: " + (form.querySelector("[name=type]").value || "") +
        "\n\n" + message
      );
      window.location.href = "mailto:?subject=" + subject + "&body=" + body;
      status.textContent = "Your email app should open with the message drafted. Add your business email in index.html when you are ready.";
    });
  }
})();
