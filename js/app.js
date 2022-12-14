// load data
const loadCocktails = async () => {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );
  const data = await res.json();
  displayAllCocktails(data.drinks);
};

const showModal = (drink) => {
  const title = document.getElementById("modal-title");
  const list = document.getElementById("ingredient-list");

  title.innerText = drink.strDrink;

  list.innerText = "";

  // list
  for (let i = 1; i < 5; i++) {
    const li = document.createElement("li");
    const product = `strIngredient${i}`;

    const item = drink[product];

    if (item !== null) {
      li.innerText = item;
      list.appendChild(li);
    }
  }
};

const loadDetails = async (cocktail) => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`
  );
  const data = await res.json();
  showModal(data.drinks[0]);
};

// show all cocktails
const displayAllCocktails = (cocktails) => {
  const container = document.getElementById("cocktail-container");

  cocktails.forEach((cocktail) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
    <div class="card bg-dark border border-warning shadow-lg ">
    <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="..." />
    <div class="card-body text-white">
      <h5 class="card-title">${cocktail.strDrink}</h5>
      <p class="card-text">
        ${cocktail.strInstructions}
      </p>
      <button onclick="loadDetails(${cocktail.idDrink})" class="btn btn-warning text-success fw-bold"
      data-bs-toggle="modal"  data-bs-target="#exampleModal" >Show Ingredient</button>
    </div>
  </div>
    `;

    container.appendChild(div);
  });
};

loadCocktails();
