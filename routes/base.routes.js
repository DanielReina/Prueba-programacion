const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

function param(...a) {
  let count = 0;
  a[0].forEach((number) => {
     if (typeof parseInt(number) === "number") count += parseInt(number);      
  });   
  return `${count}`;
}

router.get("/", (req, res) => {
  res.render("../views/pages/form");

  
});
router.post("/", (req, res) => {
  console.log(req.body.params.split(","));
  res.send(param(req.body.params.split(",")));
});

module.exports = router;

//Esta función inicialmente resolvía el punto dos, solo que la 
// cambié por el tema del formulario uq em faltó poco para resolver el punto 4:


// function param(...a) {
//   let count = 0;
//   a.forEach((number) => {
//     if (typeof number === "number") count += number;
//   });
//   console.log(count);
// }

// param(1, "hi", 2, "dog", 4);
