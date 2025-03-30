const axios = require('axios/dist/browser/axios.cjs');
const ul = document.getElementById('title')
const li = document.createElement('li')
let array = []

axios.get(`http://localhost:3000/data/`)
  .then(res => {

    array = res.data
    console.log(array)
  })