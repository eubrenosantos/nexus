export const FunctionAux = {
  SetScrollDepoimentos: () => {

    setInterval(function () {
      const div = document.querySelector(".scroll"); // Substitua 'minhaDiv' pelo ID da sua div

      let scrollAtual = div.scrollLeft;
      const scrollTotal = div.scrollWidth - div.clientWidth;

      scrollAtual += 120; // Ajuste a velocidade da rolagem aqui, se 

      if (scrollAtual >= scrollTotal) {
        scrollAtual = 0; // Reinicia a rolagem quando atinge o final
      }

      div.scrollLeft = scrollAtual;
    }, 2000);
  },
};
