const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;

  if(pokeName == ""){
    pokeName = "null";
  }
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

  fetch(url).then((res) => {
    if (res.status != "200") {
      console.log(res);
    }
    else {
      return res.json();
    }
  }).then((data) => {
    if (data) {

      let myPokeName = data.name;

      let pokeImg = data.sprites.other["official-artwork"].front_default;

      let pokeMoves = data.moves;

      let pokeType = data.types[0].type.name;

      let pokeAltura = data.height;

      let pokePeso = data.weight;

      console.log(" ");

      
    }
  })
  
}

