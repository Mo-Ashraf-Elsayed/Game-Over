export class Ui {
  constructor() {
    (this.gamesCartoona = document.querySelector(".gamesCartoona")),
      (this.detailsCartoona = document.querySelector(".detailsCartoona"));
  }
  displayData(arr) {
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
      cartoona += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-4" data-id ="${
        arr[i].id
      }">
          <div class="outCard">
              <div
                  class="innerCard border border-1 border-black fs-6 rounded rounded-3 text-white">
                  <div class="imgDiv mx-3 mt-3">
                      <img src="${arr[i].thumbnail}"
                          class="rounded-top-3 card-img-top w-100"
                          alt="...">
                  </div>
                  <div class=" pt-2">
                      <h5
                          class=" mx-3 pt-2 d-flex justify-content-between align-items-center">
                          <span>${arr[i].title
                            .split(" ")
                            .slice(0, 2)
                            .join(" ")}</span>
                          <button
                              class="btn btn-primary fs-6 px-1 py-0">Free</button>
                      </h5>
                      <p
                          class="mx-2 fs-6 pb-2 text-center text-secondary gameText">
                          ${arr[i].short_description
                            .split(" ")
                            .slice(0, 10)
                            .join(" ")}
                      </p>
                      <div
                          class="d-flex justify-content-between align-items-center py-2 px-3 border-top border-black">
                          <div class="category">${arr[i].genre}</div>
                          <div class="category">${arr[i].platform}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
    }
    this.gamesCartoona.innerHTML = cartoona;
  }
  displayDetails(obj) {
    let cartoona = "";
    cartoona = `
                        
                        <div class="col-12 col-md-4 ">
                            <div class="innerDetails"><img class="w-100" src="${obj.thumbnail}" alt></div>
                        </div>
                        <div class="col-12 col-md-8 text-white">
                            <div class="innerDetails pb-4">
                                <h3>Title: <span
                                        class="btn btn-info text-black px-2 py-0">${obj.title}</span></h3>
                                <h4>Category: <span
                                        class="btn btn-info text-black px-2 py-0">${obj.platform}</span></h4>
                                <h4>Platform: <span
                                        class="btn btn-info text-black px-2 py-0">${obj.genre}</span></h4>
                                <h5>Status: <span
                                        class="btn btn-info text-black px-2 py-0">${obj.status}</span></h5>
                                <p>${obj.description}</p>
                                <a href="${obj.game_url}" target='_blank' class="btn btn-outline-warning text-white">Show
                                    Game</a>
                            </div>
                        </div>

      `;
    this.detailsCartoona.innerHTML = cartoona;
  }
}
