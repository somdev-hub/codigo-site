const contact = document.getElementById("contact-card");
const contactContainer = document.querySelector("#contact-container");
const contactTitle = document.querySelector("#contact-title");
const header = document.querySelector("#contact");
const contactPara = document.querySelector(".contact-title p");

const submitForm = (formData) => {
  console.log(formData);
  axios.post("http://localhost:3000/contact-us", formData).then((res) => {
    console.log(res);

    if (res.status === 200) {
      header.style.height = "100vh";
      contactContainer.classList.add("hide");
      contactTitle.innerHTML = "Your message has been sent";
      contactPara.innerHTML =
        "Thank you for contacting us. We will get back to you soon.";
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      alert("Message Not Sent");
    }
  });
  console.log("submitted");
};

contact.onsubmit = function (e) {
  // console.log(contact);
  e.preventDefault();
  //   console.log("Form Submitted");
  console.log(contact);
  const formData = {
    name: contact.name.value,
    email: contact.email.value,
    contact: contact.contact.value,
    message: contact.message.value
  };

  submitForm(formData);

  //   contactContainer.classList.add("hide");
};

// contactContainer.classList.add("hide");
