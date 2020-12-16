const express = require('express');
const router = express.Router();
const mercadopago = require('mercadopago');
router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});
mercadopago.configure({
  access_token: 'TEST-392322569877509-080323-9081b8a0b0942cf6f18d0e366281cc20-240228773'
});
function getPreferences(reqValue) {
  let preference = {

    items: [
      {
        title: 'Farmacia Mas',
        unit_price: parseFloat(reqValue.products.totals),
        quantity: 1,//parseInt(reqValue.products.quantity),
        // picture_url: aca iria la imagen de la farmacia
        currency_id: "ARS",
        //description :  si quieren una descripción, va acá."Farmacia MAS"
      }
    ],
    //external_reference : "aca va una referencia",
    payer: {
      // información del comprador, si estan en producción tienen que //traerlos del request
      //(al igual que hicimos con el precio del item) 
      name: reqValue.people.name,
      surname: reqValue.people.surname,
      email: reqValue.people.email
      /*phone: {
        area_code: "11",
        number: "22223333"
      },
      address: {
        zip_code: "1111",
        street_name: "False",
        street_number: "123"
      }*/
    },
    back_urls: {
      success: "http://localhost:3000/views/EndBuyView.html",
      pending: "http://localhost:3000/views/EndBuyView.html",
      failure: "https://localhost:3000.com/error"
    },
    auto_return: "approved"
  };

  return preference;
}


router.get('/toMercadoPago', async function (req, res) {
  //console.log(JSON.stringify(req.body.products))
  try {
    var reqValue = JSON.parse(req.query.body);
    let preference = getPreferences(reqValue);
    mercadopago.preferences.create(preference)
      .then(function (response) {
        global.id = response.body.init_point;
        //prueba(response.body.id);
        //  return response.body.id
      }).catch(function (error) {
        console.log(error);
      });
    let pay = {
      urlID: global.id
    }
    // console.log(prueba);
    res.send(JSON.stringify(pay));
  } catch (error) {
    res.send(JSON.stringify(undefined));
  }
});

module.exports = router;