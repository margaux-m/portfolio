const email_icon = document.querySelectorAll('.email-clickable');
const email_address = document.getElementById('email-address')

const toggleEmailInnerText = (event) => {
  email_address.innerText == "" ?
    email_address.innerText = "margaux.mansanarez@gmail.com" : email_address.innerText = "";
};

const bindEmailIconToClick = (email_icon) => {
  email_icon.addEventListener('click', toggleEmailInnerText);
};

const toggleEmailAddress = () => {
  email_icon.forEach(bindEmailIconToClick);
};

export { toggleEmailAddress };
