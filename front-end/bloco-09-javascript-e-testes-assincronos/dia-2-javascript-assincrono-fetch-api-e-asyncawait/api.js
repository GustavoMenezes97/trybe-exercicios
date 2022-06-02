async function arrayCoins() {
  try {
      const response = await fetch(`https://api.coincap.io/v2/assets`);

      const data = await response.json();
      
      return data.data;
  } catch (error) {
  }
}

async function addCoin() {
  const coins = await arrayCoins();

  const catchUl = document.querySelector('ul');

  // for (let index = 0; index < coins.length - 90; index += 1) {
  //   const createLi = document.createElement('li');
  //   createLi.innerText = `${coins[index].id} (${coins[index].symbol}): valor em dólares ${Number(coins[index].priceUsd).toFixed(2)}`
  //   catchUl.appendChild(createLi);
  // }

  coins.filter((coin) => Number(coin.rank) <= 10).forEach((coin) => {
    const createLi = document.createElement('li');
    createLi.innerText = `${coin.id} (${coin.symbol}): valor em dólares ${Number(coin.priceUsd).toFixed(2)}`
    catchUl.appendChild(createLi);
  });

}

addCoin();