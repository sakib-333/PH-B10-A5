function showActiveButton(id1, id2) {
  document.getElementById("btn-donation").classList.remove("bg-donate-200");
  document.getElementById("btn-history").classList.remove("bg-donate-200");

  document.getElementById("donation-sectors-div").classList.add("hidden");
  document.getElementById("donation-history-div").classList.add("hidden");

  document.getElementById(id1).classList.add("bg-donate-200");
  document.getElementById(id2).classList.remove("hidden");
}

function createElement(element) {
  return document.createElement(element);
}

function checkValidDonation(donation) {
  const amount = Number(donation);
  const accountBalence = Number(
    document.getElementById("your-current-balance").innerText
  );
  return typeof amount !== NaN && amount >= 1 && accountBalence >= donation;
}

function increaseSectorDonation(id, donation) {
  const income = Number(document.getElementById(id).innerText) + donation;
  document.getElementById(id).innerText = income;
}

function createDonationHistory(donationHistroryDiv, sector, givenDonation) {
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="p-4 border rounded-md">
        <h1 class="text-xl font-bold">
          ${givenDonation} Taka is Donated for ${sector.status}
        </h1>
        <p>
          Date : ${new Date()}
        </p>
      </div>
  `;
  donationHistroryDiv.appendChild(div);
}

function makeSectorCard(sector) {
  return `
        <div class="card lg:card-side bg-base-100 border" >
          <figure class="p-8">
            <img class="w-full" src="${sector.url}" alt="Album" />
          </figure>
          <div class="card-body w-full lg:w-1/2">
            <div
              class="flex items-center space-x-2 bg-zinc-100 p-2 w-40 rounded"
            >
              <img src="./src/assets/coin.png" alt="coin" />
              <h1><span id=sector-income-${sector.id}>${sector.income}</span> BDT</h1>
            </div>
            <h2 class="card-title">${sector.headding}</h2>
            <p class="text-justify">${sector.text}</p>
            <div>
              <form id=sector-form-${sector.id}>
                <div class="form-control">
                  <input
                    id=sector-input-${sector.id}
                    type="text"
                    placeholder="Write Donation Amount"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control mt-6">
                  <button class="btn bg-donate-200">Donate Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    `;
}
