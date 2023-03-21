import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const meliSlice = createSlice({
  name: "busqueda",
  initialState: {
    results: [],
    details: {},
  },
  reducers: {
    details: (state, action) => {
      state.details = action.payload;
    },
    resultado: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { details, resultado } = meliSlice.actions;

export default meliSlice.reducer;
// let jsonPrueba = {
//   mercadoL: {
//     results: [
//       {
//         site_id: "MLA",
//         country_default_time_zone: "GMT-03:00",
//         query: "messi",
//         paging: {
//           total: 17057,
//           primary_results: 1000,
//           offset: 0,
//           limit: 50,
//         },
//         results: [
//           {
//             id: "MLA1314445322",
//             title:
//               "Remera-camiseta Seleccion Argentina Mundial Qatar 2022 Messi",
//             condition: "new",
//             thumbnail_id: "952391-MLA53428038143_012023",
//             catalog_product_id: null,
//             listing_type_id: "gold_pro",
//             permalink:
//               "https://articulo.mercadolibre.com.ar/MLA-1314445322-remera-camiseta-seleccion-argentina-mundial-qatar-2022-messi-_JM",
//             buying_mode: "buy_it_now",
//             site_id: "MLA",
//             category_id: "MLA1286",
//             domain_id: "MLA-FOOTBALL_SHIRTS",
//             thumbnail:
//               "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-I.jpg",
//             currency_id: "ARS",
//             order_backend: 1,
//             price: 8540.5,
//             original_price: 8990,
//             sale_price: null,
//             sold_quantity: 150,
//             available_quantity: 500,
//             official_store_id: null,
//             use_thumbnail_id: true,
//             accepts_mercadopago: true,
//             tags: [
//               "good_quality_thumbnail",
//               "standard_price_by_channel",
//               "3x_campaign",
//               "certified_quality_thumbnail",
//               "deal_of_the_day",
//               "good_quality_picture",
//               "immediate_payment",
//               "cart_eligible",
//               "best_seller_candidate",
//             ],
//             variation_filters: ["COLOR", "SIZE"],
//             shipping: {
//               logistic_type: "cross_docking",
//               mode: "me2",
//               store_pick_up: false,
//               free_shipping: true,
//               tags: ["self_service_in", "mandatory_free_shipping"],
//               promise: null,
//             },
//             stop_time: "2043-02-15T19:57:17.000Z",
//             seller: {
//               id: 462384402,
//               nickname: "VINIL REMERAS",
//               car_dealer: false,
//               real_estate_agency: false,
//               _: false,
//               registration_date: "2019-08-17T15:55:29.000-04:00",
//               tags: [
//                 "normal",
//                 "credits_profile",
//                 "mshops",
//                 "messages_as_seller",
//               ],
//               car_dealer_logo: "",
//               permalink: "http://perfil.mercadolibre.com.ar/VINIL+REMERAS",
//               seller_reputation: {
//                 level_id: "5_green",
//                 power_seller_status: "platinum",
//                 transactions: {
//                   canceled: 865,
//                   completed: 8393,
//                   period: "historic",
//                   ratings: {
//                     negative: 0.09,
//                     neutral: 0.02,
//                     positive: 0.89,
//                   },
//                   total: 9258,
//                 },
//                 metrics: {
//                   sales: {
//                     period: "60 days",
//                     completed: 1572,
//                   },
//                   claims: {
//                     period: "60 days",
//                     rate: 0.0051,
//                     value: 9,
//                   },
//                   delayed_handling_time: {
//                     period: "60 days",
//                     rate: 0.0641,
//                     value: 105,
//                   },
//                   cancellations: {
//                     period: "60 days",
//                     rate: 0.0022,
//                     value: 4,
//                   },
//                 },
//               },
//             },
//             seller_address: {
//               comment: "",
//               address_line: "",
//               zip_code: "",
//               id: null,
//               latitude: null,
//               longitude: null,
//               country: {
//                 id: "AR",
//                 name: "Argentina",
//               },
//               state: {
//                 id: "AR-B",
//                 name: "Buenos Aires",
//               },
//               city: {
//                 id: "TUxBQ0lUVTNjNDFm",
//                 name: "Ituzaingó",
//               },
//             },
//             address: {
//               state_id: "AR-B",
//               state_name: "Buenos Aires",
//               city_id: "TUxBQ0lUVTNjNDFm",
//               city_name: "Ituzaingó",
//             },
//             attributes: [
//               {
//                 id: "BRAND",
//                 name: "Marca",
//                 value_id: null,
//                 value_name: "Algebra remeras",
//                 attribute_group_id: "OTHERS",
//                 attribute_group_name: "Otros",
//                 value_struct: null,
//                 values: [
//                   {
//                     id: null,
//                     name: "Algebra remeras",
//                     struct: null,
//                     source: 2860837171021627,
//                   },
//                 ],
//                 source: 2860837171021627,
//                 value_type: "string",
//               },
//               {
//                 id: "ITEM_CONDITION",
//                 name: "Condición del ítem",
//                 value_id: "2230284",
//                 value_name: "Nuevo",
//                 attribute_group_id: "OTHERS",
//                 attribute_group_name: "Otros",
//                 value_struct: null,
//                 values: [
//                   {
//                     id: "2230284",
//                     name: "Nuevo",
//                     struct: null,
//                     source: 2860837171021627,
//                   },
//                 ],
//                 source: 2860837171021627,
//                 value_type: "list",
//               },
//             ],
//             variations_data: {
//               176372262642: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262645: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262646: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262648: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262652: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176469326539: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176469326540: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262649: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176398476619: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262654: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176372262655: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176469326537: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176469326538: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176469326541: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176469326542: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176469326544: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176469326545: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176372262650: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176398476621: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262647: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262653: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176469326543: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176398476618: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262651: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//               176398476620: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_952391-MLA53428038143_012023-O.jpg",
//                 ratio: "0.65",
//                 name: "Negro",
//                 pictures_qty: 4,
//               },
//               176372262656: {
//                 thumbnail:
//                   "http://http2.mlstatic.com/D_945395-MLA53307962977_012023-O.jpg",
//                 ratio: "0.68",
//                 name: "Blanco",
//                 pictures_qty: 1,
//               },
//             },
//             installments: {
//               quantity: 3,
//               amount: 2846.83,
//               rate: 0,
//               currency_id: "ARS",
//             },
//             winner_item_id: null,
//             discounts: null,
//             promotions: [],
//             differential_pricing: {
//               id: 35713320,
//             },
//             inventory_id: null,
//           },
//           {
//             id: "MLA1362017901",
//             title:
//               "Sobres De Figuritas Fifa World Cup Qatar 2022 Panini - Pack De 10 X 5",
//             condition: "new",
//             thumbnail_id: "733848-MLA53084728781_122022",
//             catalog_product_id: "MLA20922296",
//             listing_type_id: "gold_special",
//             permalink:
//               "https://www.mercadolibre.com.ar/sobres-de-figuritas-fifa-world-cup-qatar-2022-panini-pack-de-10-x-5/p/MLA20922296",
//             buying_mode: "buy_it_now",
//             site_id: "MLA",
//             category_id: "MLA1965",
//             domain_id: "MLA-COLLECTIBLE_ALBUM_STICKERS",
//             thumbnail:
//               "http://http2.mlstatic.com/D_733848-MLA53084728781_122022-I.jpg",
//             currency_id: "ARS",
//             order_backend: 2,
//             price: 1704.07,
//             original_price: 5497,
//             sale_price: null,
//             sold_quantity: 100,
//             available_quantity: 50,
//             official_store_id: null,
//             use_thumbnail_id: true,
//             accepts_mercadopago: true,
//             tags: [
//               "immediate_payment",
//               "cart_eligible",
//               "best_seller_candidate",
//               "shipping_guaranteed",
//             ],
//             shipping: {
//               logistic_type: "cross_docking",
//               mode: "me2",
//               store_pick_up: false,
//               free_shipping: false,
//               tags: ["self_service_in"],
//               promise: null,
//             },
//             stop_time: "2043-03-04T04:00:00.000Z",
//             seller: {
//               id: 57995397,
//               nickname: "CAPSULANDIA",
//               car_dealer: false,
//               real_estate_agency: false,
//               _: false,
//               registration_date: "2006-07-17T23:53:00.000-04:00",
//               tags: [
//                 "normal",
//                 "credits_profile",
//                 "mshops",
//                 "messages_as_seller",
//               ],
//               car_dealer_logo: "",
//               permalink: "http://perfil.mercadolibre.com.ar/CAPSULANDIA",
//               seller_reputation: {
//                 level_id: "5_green",
//                 power_seller_status: "platinum",
//                 transactions: {
//                   canceled: 8270,
//                   completed: 208604,
//                   period: "historic",
//                   ratings: {
//                     negative: 0.02,
//                     neutral: 0.01,
//                     positive: 0.97,
//                   },
//                   total: 216874,
//                 },
//                 metrics: {
//                   sales: {
//                     period: "60 days",
//                     completed: 38663,
//                   },
//                   claims: {
//                     period: "60 days",
//                     rate: 0.0005,
//                     value: 21,
//                   },
//                   delayed_handling_time: {
//                     period: "60 days",
//                     rate: 0.0041,
//                     value: 162,
//                   },
//                   cancellations: {
//                     period: "60 days",
//                     rate: 0.0002,
//                     value: 9,
//                   },
//                 },
//               },
//             },
//             seller_address: {
//               comment: "",
//               address_line: "",
//               zip_code: "",
//               id: null,
//               latitude: null,
//               longitude: null,
//               country: {
//                 id: "AR",
//                 name: "Argentina",
//               },
//               state: {
//                 id: "AR-C",
//                 name: "Capital Federal",
//               },
//               city: {
//                 id: "TUxBQkJFTDcyNTJa",
//                 name: "Belgrano",
//               },
//             },
//             address: {
//               state_id: "AR-C",
//               state_name: "Capital Federal",
//               city_id: "TUxBQkJFTDcyNTJa",
//               city_name: "Belgrano",
//             },
//             attributes: [
//               {
//                 id: "BRAND",
//                 name: "Marca",
//                 value_id: "47576",
//                 value_name: "Panini",
//                 attribute_group_id: "OTHERS",
//                 attribute_group_name: "Otros",
//                 value_struct: null,
//                 values: [
//                   {
//                     id: "47576",
//                     name: "Panini",
//                     struct: null,
//                     source: 1,
//                   },
//                 ],
//                 source: 1,
//                 value_type: "string",
//               },
//               {
//                 id: "ITEM_CONDITION",
//                 name: "Condición del ítem",
//                 value_id: "2230284",
//                 value_name: "Nuevo",
//                 attribute_group_id: "OTHERS",
//                 attribute_group_name: "Otros",
//                 value_struct: null,
//                 values: [
//                   {
//                     id: "2230284",
//                     name: "Nuevo",
//                     struct: null,
//                     source: 2860837171021627,
//                   },
//                 ],
//                 source: 2860837171021627,
//                 value_type: "list",
//               },
//               {
//                 id: "PACKS_NUMBER",
//                 name: "Cantidad de packs",
//                 value_id: null,
//                 value_name: "1",
//                 attribute_group_id: "OTHERS",
//                 attribute_group_name: "Otros",
//                 value_struct: null,
//                 values: [
//                   {
//                     id: null,
//                     name: "1",
//                     struct: null,
//                     source: 2860837171021627,
//                   },
//                 ],
//                 source: 2860837171021627,
//                 value_type: "number",
//               },
//               {
//                 id: "SALE_FORMAT",
//                 name: "Formato de venta",
//                 value_id: "1359392",
//                 value_name: "Pack",
//                 attribute_group_id: "OTHERS",
//                 attribute_group_name: "Otros",
//                 value_struct: null,
//                 values: [
//                   {
//                     id: "1359392",
//                     name: "Pack",
//                     struct: null,
//                     source: 1,
//                   },
//                 ],
//                 source: 1,
//                 value_type: "list",
//               },
//               {
//                 id: "UNITS_PER_PACK",
//                 name: "Unidades por pack",
//                 value_id: "150349",
//                 value_name: "10",
//                 attribute_group_id: "OTHERS",
//                 attribute_group_name: "Otros",
//                 value_struct: null,
//                 values: [
//                   {
//                     id: "150349",
//                     name: "10",
//                     struct: null,
//                     source: 1,
//                   },
//                 ],
//                 source: 1,
//                 value_type: "number",
//               },
//               {
//                 id: "UNITS_PER_PACKAGE",
//                 name: "Unidades por envase",
//                 value_id: "330041",
//                 value_name: "5",
//                 attribute_group_id: "OTHERS",
//                 attribute_group_name: "Otros",
//                 value_struct: null,
//                 values: [
//                   {
//                     id: "330041",
//                     name: "5",
//                     struct: null,
//                     source: 1,
//                   },
//                 ],
//                 source: 1,
//                 value_type: "number",
//               },
//             ],
//             installments: {
//               quantity: 6,
//               amount: 421.33,
//               rate: 48.35,
//               currency_id: "ARS",
//             },
//             winner_item_id: null,
//             catalog_listing: true,
//             discounts: null,
//             promotions: [],
//             inventory_id: null,
//           },
//         ],
//       },
//     ],
//   },
// };

export const fetchAllproducts = (results) => (dispatch) => {
  // return dispatch(resultado(jsonPruea));
  axios
    .get(`http://localhost:3000/api/items?q=${results}&limit=4`)
    .then((response) => {
      dispatch(resultado(response.data));
    })
    .catch((error) => console.log(error, "error"));
};
export const fetchItemDetails = (id) => (dispatch) => {
  // return dispatch(resultado(jsonPruea));
  axios
    .get(`http://localhost:3000/api/items/${id}`)
    .then((response) => {
      dispatch(details(response.data));
    })
    .catch((error) => console.log(error, "error"));
};
