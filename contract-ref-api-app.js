var app = require('express')();

app.get('/contract/api/v1/account/:accountId', function (req, res) {
  //checks header first.
  if (req.headers.userid == 'USERID') {

    //if valid account
    if (req.params.accountId == 'ac001') res.json({ accountId: 'ac001', accounType: 'savings', ownerFirstName: 'John', ownerLastName: 'Doe' });

    //else invalid
    else res.status(400).json({ "errorMessage": "PNC0001: bad account id" });
  }

  //bad header.
  else res.status(401).json({ "errorMessage": "PNC0002: Authentication failed" });
})

app.post('/contract/api/v1/account', function (req, res) {
  res.status(201).json({ accountId: 'ac001', accounType: 'savings', ownerFirstName: 'John', ownerLastName: 'Doe' });
})

app.put('/contract/api/v1/account/:accountId', function (req, res) {
    //if valid account
    if (req.params.accountId == 'ac001') 
        res.json({ accountId: 'ac001', accounType: 'savings', ownerFirstName: 'John', ownerLastName: 'Doe' });
    else 
        res.status(400).json({ "errorMessage": "PNC0001: bad account id" });
})

app.delete('/contract/api/v1/account/:accountId', function (req, res) {
     //if valid account
    if (req.params.accountId == 'ac001') 
        res.json({ accountId: 'ac001' });
    else 
        res.status(400).json({ "errorMessage": "PNC0001: bad account id" });
})

app.listen(3001);
