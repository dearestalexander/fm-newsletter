const cardFront = document.getElementById('card-front');
const emailForm = document.getElementById('card-form');
const emailAddress = document.getElementById('card-email');
const emailError = document.getElementById('card-error');
const submitButton = document.getElementById('card-button');
const cardBack = document.getElementById('card-back');
const sentToEmail = document.getElementById('sent-to-email');
const dismissButton = document.getElementById('card-back--button');
const emailRegExp = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;


const resetEmailClass = () => {
  emailAddress.classList.remove('valid');
  emailAddress.classList.remove('invalid');
}

window.addEventListener('load', () => {
  resetEmailClass();
})


// Listen for e-mail address input
emailAddress.addEventListener('input', () => {
  handleEmailInput();
})

// Handle e-mail address input
const handleEmailInput = () => {
  if (emailAddress.value == "") {
    resetEmailClass();
  }
  else {
    setEmailAddressClass(isValidEmail());
  }
}

// Update classes based on email validity
const setEmailAddressClass = (validity) => {
  emailAddress.classList.remove('valid', 'invalid');
  emailAddress.classList.add(validity ? 'valid' : 'invalid');
  emailError.textContent = "";
};


// Check e-mail validity
const isValidEmail = () => {
  const validity = emailAddress.value.length !== 0 
  && emailRegExp.test(emailAddress.value);
  return validity; 
}

// Listen for submit
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  handleSubmit();
})

const handleSubmit = () => {
  if (isValidEmail()) {
    console.log("submit - valid");
    cardFront.classList.remove('card-front-grid');
    cardFront.classList.add('hidden');
    cardBack.classList.remove('hidden');
    sentToEmail.textContent = emailAddress.value;
  } else {
    console.log("submit - invalid");
    handleEmailInput();
    updateError();
  }
}


// Error message display for incorrect input on submit
const updateError = (x) => {
    emailError.textContent = "Valid email required";
};


// dismiss success message
dismissButton.addEventListener('click', (e) => {
  e.preventDefault;
  cardBack.classList.add('hidden');
  cardFront.classList.remove('hidden');
  cardFront.classList.add('card-front-grid');
})











