const logo = document.getElementById('logo')

const changeLogoInnerText = (event) => {
  event.currentTarget.innerText == "margaux mansanarez" ?
    event.currentTarget.innerText = "m_m_" : event.currentTarget.innerText = "margaux mansanarez";
};

const bindLogoToHover = (logo) => {
  logo.addEventListener('mouseover', changeLogoInnerText);

};

const reduceLogoOnHover = () => {
  bindLogoToHover(logo);
};

export { reduceLogoOnHover };
