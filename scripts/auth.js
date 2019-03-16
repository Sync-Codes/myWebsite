const signUpForm = document.querySelector('#signup');
signUpForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = signUpForm['email'].value;
  const password = signUpForm['password'].value;
  console.log(email, password)
});