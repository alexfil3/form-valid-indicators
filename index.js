const form = document.querySelector("form");
const fname = document.querySelector('[name="fname"]');
const fnameError = document.querySelector('[name="fname"] + div');
const lname = document.querySelector('[name="lname"]');
const lnameError = document.querySelector('[name="lname"] + div');
const email = document.querySelector('[type="email"]');
const emailError = document.querySelector('[type="email"] + div');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkMissingValue(fname)) {
    showError(fnameError, fname);
  } else {
    hideError(fnameError, fname);
  }

  if (checkMissingValue(lname)) {
    showError(lnameError, lname);
  } else {
    hideError(lnameError, lname);
  }

  if (checkWrongValue(email)) {
    showEmailError(emailError, email);
  } else {
    hideEmailError(emailError, email);
  }
});

fname.addEventListener("input", () => {
  if (checkMissingValue(fname)) {
    showError(fnameError, fname);
  } else {
    if (lname.classList.contains("error", "errorBorder")) {
      hideError(fnameError, fname);
    }
  }
});

lname.addEventListener("input", () => {
  if (checkMissingValue(lname)) {
    showError(lnameError, lname);
  } else {
    if (lname.classList.contains("error", "errorBorder")) {
      hideError(lnameError, lname);
    }
  }
});

email.addEventListener("input", () => {
  if (checkWrongValue(email)) {
    showEmailError(emailError, email);
  } else {
    hideEmailError(emailError, email);
  }
});

function checkMissingValue(elem) {
  return elem.validity.valueMissing;
}

function checkWrongValue(elem) {
  return elem.validity.typeMismatch;
}

function showError(elem, input) {
  elem.classList.add("error");
  input.classList.add("errorBorder");
}

function hideError(elem, input) {
  elem.classList.remove("error");
  input.classList.remove("errorBorder");
}

function showEmailError(elem, input) {
  elem.classList.add("errorEmail");
  input.classList.add("errorBorder");
}

function hideEmailError(elem, input) {
  elem.classList.remove("errorEmail");
  input.classList.remove("errorBorder");
}
