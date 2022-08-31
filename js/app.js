// load data
const loadCocktails = async () => {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );
  const data = await res.json();
  displayAllCocktails(data.drinks);
};

const loadDetails = async (cocktail) => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`
  );
  const data = await res.json();
  console.log(data.drinks[0]);
};

// show all cocktails
const displayAllCocktails = (cocktails) => {
  const container = document.getElementById("cocktail-container");

  cocktails.forEach((cocktail) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
    <div class="card">
    <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${cocktail.strDrink}</h5>
      <p class="card-text">
        ${cocktail.strInstructions}
      </p>
      <button onclick="loadDetails(${cocktail.idDrink})" class="btn btn-primary">Show Ingredient</button>
    </div>
  </div>
    `;

    container.appendChild(div);
  });
};

loadCocktails();
