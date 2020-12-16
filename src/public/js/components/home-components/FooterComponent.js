import { RenderComponent } from '../utils/renderUtil.js';

function RenderFooter()
{
    var renderHTML = GetHtmlFooter();
    RenderComponent("#FooterGeneral",renderHTML);
}

function GetHtmlFooter()
{
    var headerHtmlBase = 
    `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <a href="https://api.whatsapp.com/send?phone=+5491140271615&text=Gracias%20por%20comunicarte%20a%20FarmaciaMas!%20" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>
    <br>
    <br>
    <br>
    <br>
        <footer>
            <div class="container-fluid">
                @DOWNBAR
            </div>        
        </footer>
    `;
    headerHtmlBase = headerHtmlBase.replace(/@DOWNBAR/g,GetDownBar());
    return headerHtmlBase;
}

function GetDownBar()
{
    var topBarHtmlBase = 
    `
    <div class="row downBar">
    <div class="col-xs-12 col-lg-10 contenedorNewsL">
        <h6 class="NewsLeterTitle">Suscribite a nuestro NewsLetter para enterarte de todas nuestras novedades!<h6>
        <form class="form-inline formNL">
            <div class="form-group ">          
                <input type="email" class="form-control NewsLetterMail" id="NewsLetterMail" aria-describedby="emailHelp" placeholder="Email">          
            </div>
            <h6 class="NewsLeterTitle">&nbsp y/o &nbsp</h6>
            <div class="form-group">          
                <input type="number" class="form-control NewsLetterTelefono" id="NewsLetterTelefono" placeholder="Celular">
            </div>        
            &nbsp
            &nbsp
            <button type="submit" class="btn NewsLetterButton">Suscribirse!</button>
        </form>
    </div>
    <div class="col-xs-12 col-lg-2 contenedorRedes">

        <div class="row">
            <div class="col-xs-10 redes">
                <a href="#">
                    <img class="imgFoIg" src="/resources/IG.png" width="50px" heigth="50px">
                </a>
            </div>            
            <div class="col-xs-2 redes">
            <a href="#">
                    <h6 class="redesTitle">
                        @FarmaciaMas
                    </h6>
                </a>
            </div>             
        </div>
        <div class="row">
            <div class="col-xs-10 redes">
            <a href="#">
                    <img class="imgFoFace" src="/resources/FB.png" width="40px" heigth="40px">
                </a>
            </div>        
            <div class="col-xs-2 redes">
            <a href="#">
                    <h6 class="redesTitle">
                        /FarmaciaMas
                    </h6>
                </a>
            </div>             
        </div>        
    </div>
</div> 
    `;

    return topBarHtmlBase;
}




export{RenderFooter}