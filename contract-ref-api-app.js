var app = require('express')();

app.get('/contract/api/v1/account/:accountId', function(req, res) {
  res.json({accountId: 'ac001', accounType:'savings', ownerFirstName:'John', ownerLastName:'Doe'});
})

app.post('/contract/api/v1/account', function(req, res) {
   res.status(201).json({accountId: 'ac001', accounType:'savings', ownerFirstName:'John', ownerLastName:'Doe'});
})

app.put('/contract/api/v1/account/:accountId', function(req, res) {
  res.json({accountId: 'ac001', accounType:'savings', ownerFirstName:'John', ownerLastName:'Doe'});
})

app.delete('/contract/api/v1/account/:accountId', function(req, res) {
  res.json({accountId: 'ac001'});
})

app.listen(3001);
