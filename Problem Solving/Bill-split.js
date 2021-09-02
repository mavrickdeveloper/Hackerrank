function bonAppetit(bill, k, b) {
    let totalBill = 0;
    let billMod = 0;
    let billFinal = 0;
    let refund = 0;
    for (let i = 0; i < bill.length; i++) {
        totalBill += bill[i];
    }
    billMod = totalBill - bill[k]
    
    billFinal = billMod / 2
    
    if ( b !== billFinal ) {
       refund = billFinal - b
       console.log(Math.abs(refund))
    } else {
        console.log("Bon Appetit")
    }
}