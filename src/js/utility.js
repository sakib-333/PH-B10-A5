function showActiveButton(id) {
  document.getElementById("btn-donation").classList.remove("bg-donate-200");
  document.getElementById("btn-history").classList.remove("bg-donate-200");

  document.getElementById(id).classList.add("bg-donate-200");
}

function createElement(element) {
  return document.createElement(element);
}

function makeSectorCard(sector) {
  return `
        <div class="card lg:card-side bg-base-100 border" key="${sector.id}">
          <figure class="p-8">
            <img class="w-full" src="${sector.url}" alt="Album" />
          </figure>
          <div class="card-body w-full lg:w-1/2">
            <div
              class="flex items-center space-x-2 bg-zinc-100 p-2 w-40 rounded"
            >
              <img src="./src/assets/coin.png" alt="coin" />
              <h1><span>${sector.income}</span> BDT</h1>
            </div>
            <h2 class="card-title">${sector.headding}</h2>
            <p class="text-justify">${sector.text}</p>
            <div>
              <form>
                <div class="form-control">
                  <input
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
