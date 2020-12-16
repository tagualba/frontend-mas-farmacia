import { RenderComponent } from '../utils/renderUtil.js';
import { search } from './searchBar.js';
function RenderHeader()
{
    var renderHTML = GetHtmlHeader();
    RenderComponent("#HeaderGeneral",renderHTML);
}

function GetHtmlHeader()
{
    var headerHtmlBase = 
    `
        <header>
            <div class="container-fluid">
                @TOPBAR
                @SEARCHBAR
            </div>
            @NAVBAR
        </header>
    `;
    headerHtmlBase = headerHtmlBase.replace(/@TOPBAR/g,GetTopBar());
    headerHtmlBase = headerHtmlBase.replace(/@SEARCHBAR/g,GetSearchBar());
    headerHtmlBase = headerHtmlBase.replace(/@NAVBAR/g,GetNavBar());

    return headerHtmlBase;
}

function GetTopBar()
{
    var topBarHtmlBase = 
    `
    <div class="row topBar">
        <div class="col-xs-12 col-lg-12">
            <a href="#">Sucursales</a>
            <a href="#">Como Comprar?</a>
        </div>
    </div>
    `;

    return topBarHtmlBase;
}

function GetSearchBar()
{
    var seachBarHtmlBase =
    `
    <div class="row searchBar">
        <div class="col-md-6 col-lg-3 logoSearchBar justify-content-center">
            <a href="/">
                <img src="/resources/LOGOMASFARMACIA.png" width="300px" height="85px">
            </a>
        </div>
        <div class="d-block d-sm-block d-md-none col-md-6 carritoBtnMobile">
            <div class="">
                <a href="/views/CarritoView.html" >
                    <img src="/resources/CarritoNavBar.jpg" width="50" height="50px">
                    <br>
                    <h9 >Ver Carrito</h9>
                </a>
            </div>
        </div>
        <div class="col-md-12 col-lg-6 ">
            <div class="input-group mb-3 ">
                <input type="text" class="form-control searchBarInput" onchange="search(this.value)" placeholder="¿Que estas buscando?" aria-label="¿Que estas buscando?" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary searchBtn" type="button">Buscar</button>
                </div>
            </div>
        </div>
        <div class="d-none d-sm-none d-md-block col-lg-3 carritoBtnDesktop ">
            <div class="carritoBtnContainer">
                <a href="/views/CarritoView.html" >
                    <img src="/resources/CarritoNavBar.jpg" width="50" height="50px"><br>
                    <h9 >Ver Carrito</h9>
                </a>
            </div>
        </div>    
    </div>
    `;

    return seachBarHtmlBase;
}

function GetNavBar()
{
    var navBarHtmlBase =
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container ">
            <!-- Brand -->
            <a class="navbar-brand" href="/views/CatalogoView.html">Catalogo</a>
            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navbar links -->
            <div class="collapse navbar-collapse " id="collapsibleNavbar">
                <ul class="navbar-nav ">
                    <li class="nav-item  ">
                        <a class="nav-link dropdown-toggle "  onclick="goTo(this)" href="#" id="navbardrop" data-toggle="dropdown">
                            Loreal
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item"  onclick="goTo(this)">Belleza 1</a>
                            <a class="dropdown-item"  onclick="goTo(this)">Belleza 2</a>
                            <a class="dropdown-item"  onclick="goTo(this)">Belleza 3</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" onclick="goTo(this)" id="navbardrop" data-toggle="dropdown">
                            Salud
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" onclick="goTo(this)">Salud 1</a>
                            <a class="dropdown-item" onclick="goTo(this)">Salud 2</a>
                            <a class="dropdown-item" onclick="goTo(this)">Salud 3</a>
                        </div>
                    </li>              
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" onclick="goTo(this)" id="navbardrop" data-toggle="dropdown">
                            Maquillaje
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" onclick="goTo(this)">Maquillaje 1</a>
                            <a class="dropdown-item" onclick="goTo(this)">Maquillaje 2</a>
                            <a class="dropdown-item" onclick="goTo(this)">Maquillaje 3</a>
                        </div>
                    </li>              
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" onclick="goTo(this)" id="navbardrop" data-toggle="dropdown">
                            Bebes
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" onclick="goTo(this)>Maternidad y Bebes 1</a>
                            <a class="dropdown-item" onclick="goTo(this)">Maternidad y Bebes 2</a>
                            <a class="dropdown-item" onclick="goTo(this)">Maternidad y Bebes 3</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" onclick="goTo(this)" id="navbardrop" data-toggle="dropdown">
                            Cuidado Corporal
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" onclick="goTo(this)">Cuidado Corporal 1</a>
                            <a class="dropdown-item" onclick="goTo(this)">Cuidado Corporal 2</a>
                            <a class="dropdown-item" onclick="goTo(this)">Cuidado Corporal 3</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    return navBarHtmlBase;

}


export{RenderHeader}