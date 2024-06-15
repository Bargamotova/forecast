const burgersUrl = import.meta.env.VITE_FORKIFY_URL;
const burgerURL = import.meta.env.VITE_FORKIFY_BURGER_URL;

async function getRandomBurgerInfo(id) {
  try {
    const res = await fetch(`${burgerURL}${id}`);
    const data = await res.json();
    return data.data.recipe;
  } catch (error) {
    console.log(error);
  }
}


export async function getRandomBurger() {
  try {
    //get all burgers
    const resBurgers = await fetch(`${burgersUrl}`);
    const dataBurgers = await resBurgers.json();
    // get all id
    const arrayIndexBurgers = dataBurgers.data.recipes.map(function (el) { return el.id });
    // get random id from id-s
    const randomBurgerIndex = Math.round(Math.random() * (arrayIndexBurgers.length + 1));
    const randomBurger = arrayIndexBurgers[randomBurgerIndex];

    const data = await getRandomBurgerInfo(randomBurger);
    // if (data === undefined) { await getRandomBurgerInfo(randomBurger) }
    return data;
  } catch (error) {
    console.log(error)
  }
}

