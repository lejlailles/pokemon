$(function () {
  //példányosítás
  const myajax = new MyAjax();
  let pokemon = {};
  let pokemonTomb=[];
  const szuloElem = $("article");
  const sablonElem = $(".pokemon");
  szuloElem.empty();

  for (let index = 0; index < 52; index++) {
    let apivegpont = "https://pokeapi.co/api/v2/pokemon/" + index;
    myajax.getAdat(apivegpont, pokemon, megjelenit, hibakezeles, index);
  }

  function hibakezeles(hiba) {
    console.log("HIBA");
    $("h2").html("Nincs ilyen pokémon");
    $("img").attr("src", "hiba.jpg");
  }

  /*$("#oke").on("click", () => {
    let id = Math.floor(Math.random() * 1000);
    const vegpont = "https://pokeapi.co/api/v2/pokemon/" + id;
    myajax.getAdat(vegpont, pokemon, megjelenit, hibakezeles);
  });*/

  function megjelenit(pokemon) {
    szuloElem.show();
    let ujElem = sablonElem.clone().appendTo(szuloElem);
    const pokemonok = new Pokemon(ujElem, pokemon);
   
  }
  szuloElem.hide();


  $(window).on("csata", (event) => {
    var kattintas = 0;
      console.log(event.detail);
      if(kattintas == 0){
        $(".kihivo").html(event.detail.elem);
        kattintas++;
        
      }else{
        $(".ellenfel").html(event.detail.elem);
       kattintas--;
        
      }
  
  });
});
