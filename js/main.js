const elForm = document.querySelector("#form");
const elEnter = document.querySelector("#input");
const elText = document.querySelector("#info");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const takeNumber = Number(elEnter.value);
  console.log(takeNumber);
  elText.className = "card";
  switch (takeNumber) {
    case 1:
      elText.textContent = `Dushanba`;
      break;
    case 2:
      elText.textContent = `Seshanba`;
      break;
    case 3:
      elText.textContent = `Chorshanba`;
      break;
    case 4:
      elText.textContent = `Payshanba`;
      break;
    case 5:
      elText.textContent = `Juma`;
      break;
    case 6:
      elText.textContent = `Shanba`;
      break;
    case 7:
      elText.textContent = `Yakshanba`;
      break;

    default:
      elText.textContent = `Siz Notog'ri qiymat kiritdiz!`;
      elText.className = "danger";
      break;
  }
});
