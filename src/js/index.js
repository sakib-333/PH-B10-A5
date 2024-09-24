const yourCurrentBalanceField = document.getElementById("your-current-balance");
const donationHistroryDiv = document.getElementById("donation-history-div");

let showSectors = true;

document.getElementById("visit-blog").addEventListener("click", () => {
  window.location.href = "./src/pages/blog.html";
});

const markups = sectors.map((sector) => {
  return makeSectorCard(sector);
});

const donationSectors = document.querySelector("#donation-sectors-div");

for (let markup of markups) {
  const element = createElement("div");
  element.innerHTML = markup;

  donationSectors.appendChild(element);
}

for (let sector of sectors) {
  document
    .getElementById(`sector-form-${sector.id}`)
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const givenDonation = document.getElementById(
        `sector-input-${sector.id}`
      ).value;
      if (checkValidDonation(givenDonation)) {
        increaseSectorDonation(
          `sector-income-${sector.id}`,
          Number(givenDonation)
        );
        yourCurrentBalanceField.innerText =
          Number(yourCurrentBalanceField.innerText) - givenDonation;
        document.getElementById(`sector-input-${sector.id}`).value = "";
        createDonationHistory(donationHistroryDiv, sector, givenDonation);
      } else {
        window.alert("Invalid donation!");
      }
    });
}

document.getElementById("btn-donation").addEventListener("click", () => {
  showActiveButton("btn-donation", "donation-sectors-div");
});

document.getElementById("btn-history").addEventListener("click", () => {
  showActiveButton("btn-history", "donation-history-div");
});
