function validateForm() {
   
    function isNumeric(value) {
        return /^\d+$/.test(value);
    }

   
    var sellerPincode = document.getElementById("sellerPincode").value;

    var billingPincode = document.getElementById("billingPincode").value;
    var billingStateCode = document.getElementById("billingStateCode").value;

    var shippingPincode = document.getElementById("shippingPincode").value;
    var shippingStateCode = document.getElementById("shippingStateCode").value;
    var fields = [sellerName, sellerAddress, sellerCity, sellerState, sellerPincode, sellerPAN, sellerGST,
                  orderNumber, orderDate,
                  billingName, billingAddress, billingCity, billingState, billingPincode, billingStateCode,
                  shippingName, shippingAddress, shippingCity, shippingState, shippingPincode, shippingStateCode, placeOfDelivery,
                  invoiceNumber, invoiceDetails, invoiceDate,
                  unitPrice, unitQuantity];

    for (var i = 0; i < fields.length; i++) {
        if (fields[i] === "") {
            alert("All fields must be filled out");
            return false;
        }
    }
    var pincodePattern = /^\d{6}$/;
    if (!pincodePattern.test(sellerPincode) || !pincodePattern.test(billingPincode) || !pincodePattern.test(shippingPincode)) {
        alert("PIN codes must be 6-digit numerical values");
        return false;
    }

    return true; 
}
