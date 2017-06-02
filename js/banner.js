var imagensBanner = document.querySelectorAll(".banner img");
// No JavaScript, quando damos um espaço, significa que queremos que procure dentro da classe.

var imagensBannerAtiva = 0;

function trocarImagemBanner(){
  imagensBanner[imagensBannerAtiva].classList.remove('ativa');
  imagensBannerAtiva++

  if(imagensBannerAtiva>=imagensBanner.length){
    imagensBannerAtiva=0;
  }
  imagensBanner[imagensBannerAtiva].classList.add('ativa');
}

setInterval(trocarImagemBanner,2500);
