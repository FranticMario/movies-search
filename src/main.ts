import movies from "./movies";

const searchInput = document.querySelector("#search__input") as HTMLInputElement;
const searchBtn = document.querySelector(".search__btn") as HTMLElement;
const card = document.querySelector(".card") as HTMLElement;

const sortUpBtn = document.querySelector(".tag__year-up") as HTMLElement;
const sortDownBtn = document.querySelector(".tag__year-down") as HTMLElement;
const sortBestRateBtn = document.querySelector(".tag__best-rate") as HTMLElement;



const sortArr = (arr:[string, string, string, string, string[], string][], anweisung: string) => {
  let indexArr = (anweisung === "Year up" || anweisung === "Year down" ) ? 1 : 5

  if(anweisung === "Year up" || anweisung === "Best rate") {
   arr.sort((item1, item2) =>  Number(item2[indexArr]) - Number(item1[indexArr]))
  } else {
    arr.sort((item1, item2) =>  Number(item1[indexArr]) - Number(item2[indexArr] ))
  }

  renderCardToHtml(arr)
}

const renderCardToHtml = (arr:[string, string, string, string, string[], string][]) => {
  card.innerHTML = "";

  arr.forEach(film => {
    card.innerHTML += `
      <div class="description">
                <h3 class="film__title">${film[0]}</h3>
              <div class="film__released">${film[1]}</div>
              <div class="film__director">${film[2]}</div>
              <div class="film__runtime">${film[3]}</div>
              <div class="film__genre">${film[4]}</div>
              <div class="film__rating">${film[5]}</div>
            </div>
    `
  });
  searchInput.value = "";
}





const searchStart = () => {
  const searchInputValue = searchInput?.value.toLowerCase();
  console.log(searchInputValue)
  const searchFilm = movies.filter(item => {

   return item[0].toLowerCase().includes(searchInputValue)
  })
  renderCardToHtml(searchFilm)
}


sortUpBtn.addEventListener("click", () => {sortArr(movies, "Year up")})

sortDownBtn.addEventListener("click", () => {sortArr(movies, "Year down")})

sortBestRateBtn.addEventListener("click", () => {sortArr(movies, "Best rate")})

renderCardToHtml(movies)
searchBtn.addEventListener("click", searchStart)