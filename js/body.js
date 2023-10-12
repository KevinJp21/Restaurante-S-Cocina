import '../css/style.css'
import body from '../json/body.json'

/*Topbar*/
document.querySelector('#container-fluid').innerHTML=`
<a class="navbar-brand fs-1" href="#" id="logo">Restaurante S <span class="yellow fs-1">Co</span><span
class=" blue fs-1">ci</span><span class="red fs-1">na</span></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span><i class="fa-solid fa-bars fs-1" style="color: white;  font: size 23px;"></i></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
  <a class="nav-link fs-3 " aria-current="page" href="#home">Inicio</a>
</li>
<li class="nav-item">
  <a class="nav-link fs-3" href="#about">Sobre nosotros</a>
</li>
<li class="nav-item">
  <a class="nav-link fs-3" href="#menu">Menú</a>
</li>
<li class="nav-item">
  <a class="nav-link fs-3" href="#contact">Contactanos</a>
</li>
</ul>
<form class="d-flex" role="search">
<input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
<button class="btn btn-outline-success fs-5" type="submit">Buscar</button>
</form>
</div>
`
/*Home*/
document.querySelector('#content').innerHTML = `
<h3 class="display-2">Mejora tu dia con <br>comida 100% Colombiana</h3>
    <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <button class="fs-4" id="btn">Compra ahora</button>
`
/*About*/
document.querySelector('#container').innerHTML =`<div>Sobre <span>nosotros</span></div>
<div class="row">
  <div class="col-md-6">
    <div class="card">
        <img src="https://i.ytimg.com/vi/iIh99VjIjnw/maxresdefault.jpg" alt="Arroz de cerdo">
    </div>
  </div>

  <div class="col-md-6">
    <h3>¿Qué hace a nuestra comida especial?</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptatibus possimus at praesentium aliquam ipsum omnis, iusto consequatur nobis hic aperiam dolor. Magnam ullam voluptatibus repellat et impedit vel tenetur.
      <br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis harum autem explicabo exercitationem, deleniti recusandae nemo nihil cum accusantium ipsam? Ipsam distinctio maxime deleniti quibusdam voluptas animi velit quo consequuntur.
    </p>
    <button id="about-btn">Saber Más</button>
  </div>
</div>
`
/*Top cards*/
document.querySelector('#top-cards').innerHTML=`
<div class="heading2 display-6">Categorias <span class="fs-1">Top</span></div>  
<div class="container">
  <div class="row">

    <div class="col-md-4 py-3 py-md-0">
      <div class="card">
        <img src="https://guiagastronomica.co/wp-content/uploads/sopa-de-mondongo-y-seco.jpg" alt="Sopa de mondongo">
      </div>
    </div>

    <div class="col-md-4 py-3 py-md-0">
      <div class="card">
        <img src="https://www.sukkapap.com/wp-content/uploads/2020/09/%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%82%E0%B8%A0%E0%B8%8A%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3-%E0%B9%83%E0%B8%99-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AB%E0%B8%A1%E0%B8%81%E0%B9%84%E0%B8%81%E0%B9%88-1-%E0%B8%88%E0%B8%B2%E0%B8%99-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B9%89%E0%B8%99-%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B1%E0%B8%9A.jpg" alt="Pollo">
      </div>
    </div>

    <div class="col-md-4 py-3 py-md-0">
      <div class="card">
        <img src="https://decomidaperuana.com/wp-content/uploads/2020/10/lomo-saltado-de-pollo.jpg" alt="Lomo de cerdo">
      </div>
    </div>
    
  </div>
</div>
`
/*Menu*/
document.querySelector('#container1').innerHTML='<div class="heading3 display-6">Menú</div>'

const food = body.menu.map(menu=>{
    return `
    
    <div class="col-md-3 py-3 py-md-0 card-container">
    <div class="card">
      <img class="img-lg" src="${menu.img}" alt="pollo">

      <div class="card-body">
        <h3 class="fs-2">${menu.name}</h3>
        <p class="fs-2 price"> ${menu.price} <span class="fs-1 fa-solid fa-basket-shopping btn-basket" data-name=${menu.data_name}></span></p>
      </div>

    </div>
  </div>

    `
});

/*Product Preview */
const preview = body.menu.map((menu, index)=>{
  const isActive = index === 0 ? '  active' : '';
  return `
    <div class="preview" data-target="${menu.data_name}">
    <img class="img-lg" src="${menu.img}" alt="pollo">
    <h3 class="fs-1">${menu.name}</h3>
    <div class="stars">
      <i class="fs-3 fas fa-star"></i>
      <i class="fs-3 fas fa-star"></i>
      <i class="fs-3 fas fa-star"></i>
      <i class="fs-3 fas fa-star"></i>
      <i class="fs-3 fas fa-star-half-alt"></i>
    </div>
      <p class="fs-4">lorem ipsum dolor sit amet consectetur.
      <div class="fs-2 price">${menu.price}</div>
      <div class="buttons">
          <button class="fs-2 btn-modal">Cerrar</button>
          <button class="fs-2 btn-modal">Comprar</button>
      </div>
    </div>
    `
});

document.querySelector('.products-preview').innerHTML=preview.join('')

/*Crea una nueva fila cada 4 cards*/
const rowContainer = document.querySelector('#container2');

food.forEach((menu, index) => {
  if (index % 4 === 0) {
    const newRow = document.createElement('div');
    newRow.classList.add('row','rows');
    rowContainer.appendChild(newRow);
  }
  const currentRow = rowContainer.lastChild;
  currentRow.innerHTML += menu;
});


/*Contact*/

document.querySelector('#contact').innerHTML = `
<div class="container">
<div class="row">

  <div class="col-md-7">
    <div class="heading4 display-4">Contactanos</div>
    <p class="fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit assumenda, velit suscipit autem mollitia accusantium? Amet, dolores quasi atque optio delectus aliquid impedit vitae molestiae unde a, quam tempora quod.
      <br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas corporis repellendus unde necessitatibus ipsum velit assumenda cum, adipisci vitae odio voluptatibus quod saepe eligendi tempore? Recusandae rerum quis sunt!
    </p>
    <input type="text" class="fs-4 form-control" placeholder="Nombre" aria-label="default input example"><br>
    <input type="email" class="fs-4 form-control" placeholder="Email" aria-label="default input example"><br>
    <input type="number" class="fs-4 form-control" placeholder="phone" aria-label="default input example"><br>
    <button class="fs-5" id="contact-btn">Enviar Mensaje</button>
  </div>

  <div class="col-md-5" id="col">
    <h1 class="display-6">Informacion</h1>
    <p class="fs-3"><i class="fa-regular fa-envelope"></i>example@gmail.com</p>
    <p class="fs-3"><i class="fa-solid fa-phone"></i>+573045214315</p>
    <p class="fs-3"><i class="fa-solid fa-building-columns"></i>Colombia</p>
    <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt quisquam, sunt fuga dolores impedit omnis minus saepe voluptatum accusantium ipsum laudantium laborum debitis quae rem deleniti dicta nemo sit!</p>
  </div>

</div>
</div>
`


/*Footer*/
document.querySelector('footer').innerHTML = `
<div class="footer">
<p class="fs-5 m-0">&copy; Copyright 2023 - Todos los derechos reservados |
    KevinJp </p>
<a href="https://github.com/KevinJp21?tab=repositories"><i class="fa-brands fa-github"></i></a>
</div>
`
