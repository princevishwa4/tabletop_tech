const alphaCharRegex = /^[a-zA-Z ]*$/;
const phoneNo = /^\d{10}$/;

export function validateName(name) {
  let nameError = "";
  if (name === "" || !name.trim()) {
    nameError = "*This field is required";
  } else if (!name.match(alphaCharRegex)) {
    nameError = "*Please enter alphabet characters only";
  } else if (name.length <= 2) {
    nameError = "*Name is too short";
  } else {
    nameError = "";
  }
  return nameError;
}

export function validateDropdown(selectedData) {
  let selectedDataError = "";
  if (selectedData === "") {
    selectedDataError = "*This field is required";
  } else {
    selectedDataError = "";
  }
  return selectedDataError;
}

export function validateMobileNumber(mobileNumber) {
  let mobileNumberError = "";
  if (mobileNumber === "") {
    mobileNumberError = "*This field is required";
  } else if (!mobileNumber.match(phoneNo)) {
    mobileNumberError = "*Please enter valid mobile number";
  } else {
    mobileNumberError = "";
  }
  return mobileNumberError;
}
