const fetch = require('node-fetch')
const btoa = require('btoa')

const getProductList = async ({ apiKey }) => {
  const promise = new Promise((resolve, reject) => {
    fetch('https://api.printful.com/store/products', {
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(apiKey) }
    }).then(data => data.json()).then(resp => {
      resolve(resp.result);
    }).catch(err => reject(err))
  })
  return await promise;
}

const getProduct = async ({ apiKey, productId }) => {
  const promise = new Promise((resolve, reject) => {
    fetch('https://api.printful.com/store/products/' + productId, {
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(apiKey) }
    }).then(data => data.json()).then(resp => {
      resolve(resp.result);
    }).catch(err => reject(err))
  })
  return await promise;
}


const getOrders = async ({ apiKey }) => {
  const promise = new Promise((resolve, reject) => {
    fetch('https://api.printful.com/orders', {
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(apiKey) }
    }).then(data => data.json()).then(resp => {
      resolve(resp.result);
    }).catch(err => reject(err))
  })
  return await promise;
}

const makeOrder = async ({ apiKey, order: { externalId, shipping, recipient: { name, address1, city, state_code, country_code, zip } }) => {

}})


module.exports = { getProductList, getProduct, getOrders }