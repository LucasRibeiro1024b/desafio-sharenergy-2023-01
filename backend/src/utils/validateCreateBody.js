function validateName(name) {
  if (name === undefined) return false;
  if (name.trim() === '') return false;

  return true;
}

function validateEmail(email) {
  if (email === undefined) return false;
  if (email.trim() === '') return false;
  
  email = email.toLowerCase().trim();
  const emailSplitted = email.split('@');
  
  if (emailSplitted.length !== 2) return false;
  if (!emailSplitted[1].includes('.')) return false;
  if (emailSplitted[0].includes('@')) return false;
  if (emailSplitted[1].includes('@')) return false;

  return true;
}

function validatePhoneNumber(phoneNumber) {
  if (phoneNumber === undefined) return false;
  if (phoneNumber.trim() === '') return false;

  phoneNumber = phoneNumber.trim();

  if (phoneNumber.length < 10 || phoneNumber.length > 11) return false;

  return true;
}

function validateAddress(address) {
  if (address === undefined) return false;
  if (address.trim() === '') return false;

  return true;
}

function validateCpf(cpf) {
  if (cpf === undefined) return false;
  if (cpf.trim() === '') return false;

  cpf = cpf.trim();

  if (cpf.length !== 11) return false;

  return true;
}

function validateCreateBody({ name, email, phoneNumber, address, cpf }) {
  if (!validateName(name)) return false;
  if (!validateEmail(email)) return false;
  if (!validatePhoneNumber(phoneNumber)) return false;
  if (!validateAddress(address)) return false;
  if (!validateCpf(cpf)) return false;
  return true;
}

module.exports = validateCreateBody;
