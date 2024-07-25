const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const ejs = require('ejs'); 

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/inputForm', (req, res) => {
    
    res.sendFile(__dirname + '/input_form.html');//response jo mila inputform .html file ka directory se vo mene send kr diya localhost:3000/inputForm pr 
});

app.post('/generateInvoice', (req, res) => {
    
    const {
        sellerName, sellerAddress, sellerCity, sellerState, sellerPincode, sellerPAN, sellerGST,
        orderNumber, orderDate,
        billingName, billingAddress, billingCity, billingState, billingPincode, billingStateCode,
        shippingName, shippingAddress, shippingCity, shippingState, shippingPincode, shippingStateCode,
        placeOfDelivery,
        invoiceNumber, invoiceDetails, invoiceDate,unitPrice,unitQuantity
    } = req.body;

    console.log(unitPrice)
    
    const invoiceData = {
        sellerName, sellerAddress, sellerCity, sellerState, sellerPincode, sellerPAN, sellerGST,
        orderNumber, orderDate,
        billingName, billingAddress, billingCity, billingState, billingPincode, billingStateCode,
        shippingName, shippingAddress, shippingCity, shippingState, shippingPincode, shippingStateCode,
        placeOfDelivery,
        invoiceNumber, invoiceDetails, invoiceDate,unitPrice,unitQuantity
    };

   
    const template = fs.readFileSync('invoice_template.html', 'utf-8');

   
    const renderedHtml = ejs.render(template, invoiceData);

    
    res.send(renderedHtml);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
