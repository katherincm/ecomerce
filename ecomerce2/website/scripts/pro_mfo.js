////////// PRODUTOS MASCULINO //////////
var proMasculino = [
    {
      img: "img/m1.jpg",
      name: "Masculino 1",
      title: "R$ 300,00",
      type: "tipo masculino",
    },
    {
      img: "img/m2.jpg",
      name: "Masculino 1",
      title: "R$ 300,00",
      type: "tipo masculino",
    }
  ];
  /////////////

  function init() {
    // Obtendo elemento de items novidades
    var listaMasculina = document.getElementById("linea-masculina");
      // Adicionando items novidades a tela
    proMasculino.forEach(function (item) {
        listaMasculina.appendChild(createCard(item));
  });

  }

  init();