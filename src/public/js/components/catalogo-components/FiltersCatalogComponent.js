async function GetHtmlFilters(categorys, marcas, categorysSearch = null, marcasSearch = null) {
    var filtersHtmlBase =
        `
    <div id="categoriasSection"> 
        <div class="card-header bg-white" id="categorias">
            <button id="botonCategoria" type="button"
                    class="btn  text-sm-center text-md-left text-lg-left botonFiltro "
                    data-toggle="collapse" data-target="#collapseCat1" 
                    aria-controls="collapseCat1"  >
                <h5 class="titulosFiltros">
                    Categoria
                </h5>
            </button>  
        </div>
        <div id="categoriasContainer">
            <div id="collapseCat1" class="collapse" aria-labelledby="filtrado" data-parent="#botonCategoria">
                <div class="card-body p-0 small " id="categoriasInnner">
                        @CATEGORIAS        
                </div>                                                                                                      
            </div>                                                                           
        </div>   
    </div>                               
    <div id="marcasSection">
        <div class="card-header bg-white" id="marcasBoton">
            <button id="botonMarca" type="button"
                    class="btn  text-sm-center text-md-left text-lg-left botonFiltro "
                    data-toggle="collapse" data-target="#collapseMarc1" 
                    aria-controls="collapseMarc1" >
                <h5 class="titulosFiltros">
                    Marca
                </h5>
            </button>  
        </div>    
    </div>  
    <div id="collapseMarc1" class="collapse" aria-labelledby="filtrado" data-parent="#botonMarca">
        <div class="card-body p-0 small">              
            <div id="CategoriaIDCATEGORIA">                                                
                <div class="card border-0">
                    <div class="card-header bg-white border-0 p-1" id="HeaderCategoriaIDCATEGORIA">
                        <div class="mb-0"> 
                            <div id="marcasInnner">
                                @MARCAS
                            </div>                                                                                                                                                                                                                    
                        </div>                                                     
                    </div>
                </div>                                                                                    
            </div>                                              
        </div>                                                                                                                  
    </div>  
    `;
    var cat = GetHtmlCategorias(categorys, categorysSearch);
    var marc = GetHtmlMarcas(marcas, marcasSearch);
    filtersHtmlBase = filtersHtmlBase.replace(/@CATEGORIAS/g, cat)
        .replace(/@MARCAS/g, marc);
    return filtersHtmlBase;

}

function GetHtmlCategorias(categorys, categorysSearch) {
    var categoryHtmlBase =
        `      
      <div id="Categoria@IDCATEGORIA">                                                
        <div class="card border-0">
          <div class="card-header bg-white border-0 p-1" id="HeaderCategoria@IDCATEGORIA">
            <div class="mb-0">    
              <div class="form-check">
                <div class="custom-control form-control-lg custom-checkbox">  
                  <input type="checkbox" @checked name = "categoria" value="@IDCATEGORIA" class="custom-control-input checkBoton" id="CheckBoxCategoria@IDCATEGORIA">  
                  <label class="custom-control-label" for="CheckBoxCategoria@IDCATEGORIA">
                    <h7>@NOMBRE</h7>  
                  </label> 
                  <label class="custom-control-label"
                      data-toggle="collapse" data-target="#SubCategorias@IDCATEGORIA"
                      aria-expanded="true" aria-controls="SubCategorias@IDCATEGORIA">                                               
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill flechita" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg> 
                  </label> 
                </div>                                                                                                                             
              </div>                                                     
            </div>
          </div>                                          
          <div id="SubCategorias@IDCATEGORIA" class="collapse" aria-labelledby="HeaderCategoria@IDCATEGORIA"
              data-parent="#Categoria@IDCATEGORIA">
            <div class="card-body p-1 ml-2">
                @SUBCATEGORIAS_CONTAINER
            </div>
          </div>
        </div>
      </div>                                          
`;

    var resCategorys = "";

    for (let category of categorys) {
        var auxCategory = categoryHtmlBase.replace(/@IDCATEGORIA/g, category.idCategory);
        if (categorysSearch != null) {
            for (let categorySearch of categorysSearch) {
                if (category.idCategory == categorySearch.idCategory) {
                    auxCategory = auxCategory.replace(/@checked/g, "checked");
                }
            }
        }
        auxCategory = auxCategory.replace(/@NOMBRE/g, category.description);
        var subCategoryHtmlBase =
            `<div class="form-check">
            <div class="custom-control form-control-lg custom-checkbox">  
                <input type="checkbox" @checked name = "subCategoria" value="@IDSUBCATEGORIA" class="custom-control-input checkBoton" id="SubCategoriaCheckBox@IDSUBCATEGORIA">  
                <label class="custom-control-label" for="SubCategoriaCheckBox@IDSUBCATEGORIA">
                    <h7>@NOMBREe</h7>  
                </label>  
            </div>  
        </div>`;

        var resSubCategorys = "";
        for (let subCategoria of category.subCategorys) {
            var auxSubCategory = subCategoryHtmlBase.replace(/@IDSUBCATEGORIA/g, subCategoria.idSubCategory);

            if (categorysSearch != null) {
                for (let categorySearch of categorysSearch) {
                    for (let subCategorySearch of categorySearch.subCategorys) {
                        debugger;
                        if (subCategoria.idSubCategory == subCategorySearch.idSubCategory) {
                            auxSubCategory = auxSubCategory.replace(/@checked/g, "checked");
                        }
                    }
                }
            }
            resSubCategorys += auxSubCategory.replace(/@NOMBRE/g, subCategoria.description);

        }

        resCategorys += auxCategory.replace(/@SUBCATEGORIAS_CONTAINER/g, resSubCategorys);
    }

    return resCategorys;
}

function GetHtmlMarcas(marcas, marcasSearch) {
    var marcaHtmlBase =
        `
    <div class="form-check">
        <div class="custom-control form-control-lg custom-checkbox">  
            <input type="checkbox" @checked name = "marcas" value="@IDMARCA" class="custom-control-input checkBoton" id="marcaCheck@IDMARCA">  
            <label class="custom-control-label" for="marcaCheck@IDMARCA">
                <h7>@NOMBRE</h7>  
            </label>  
        </div>  
    </div> 
    `
    var resMarcas = "";

    for (let marca of marcas) {
        var auxMarca = marcaHtmlBase.replace(/@IDMARCA/g, marca.idMarca);
        if (marcasSearch != null) {
            for (const marc of marcasSearch) {
                if (marc.idMarca == marca.idMarca) {
                    auxMarca = auxMarca.replace(/@checked/g, "checked");
                }
            }
        }
        auxMarca = auxMarca.replace(/@NOMBRE/g, marca.description);
        resMarcas += auxMarca;
    }

    return resMarcas;

}

export { GetHtmlFilters };