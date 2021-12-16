class Pokemon {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;

    this.nev = this.elem.children(".nev");
    this.kep = this.elem.children(".kep");
    this.kepessegek = this.elem.children(".kepessegek");
    this.magassag = this.elem.children(".magassag");
    this.csata = this.elem.children("#csata");
    this.csata.on("click", () => {
        this.csataTrigger();
      });
    
    this.setAdatok(adat);
  }

  setAdatok(adat) {
    let kepesseg = adat.abilities;
    let kepessegeink = this.kepessegek;

    kepesseg.forEach(function (adat) {
      kepessegeink.html(adat.ability.name);
    });

    this.nev.html(adat.name);
    //console.log(adat);
    this.kep.attr("src", adat.sprites.front_default);

    this.magassag.html(adat.height);
  }


  csataTrigger() {
    let esemeny = new CustomEvent("csata", { detail: this });

    window.dispatchEvent(esemeny);
  }

}
