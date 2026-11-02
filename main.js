document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const dropdown = document.querySelector(".dropdown");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  if (dropdown) {
    const link = dropdown.querySelector(":scope > a");
    if (link) link.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 850px)").matches) {
        event.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Pet care enquiry - " + (data.get("service") || "General enquiry"));
      const body = encodeURIComponent(
        "Name: " + data.get("name") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Phone: " + data.get("phone") + "\n" +
        "Service: " + (data.get("service") || "Not specified") + "\n\n" +
        "Message:\n" + data.get("message")
      );
      window.location.href = "mailto:tomdaloand@gmail.com?subject=" + subject + "&body=" + body;
      const note = document.querySelector("#form-status");
      if (note) note.textContent = "Your email app should open with the enquiry filled in. Please send the email to complete your enquiry.";
    });
  }
});
