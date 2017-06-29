var resultObj = {
  Telus: {

  },
  Bombardier: {

  }
};



var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

for (var i = 0; i < companySalesData.length; i++) {
var totalSales = 0;
  for (var j = 0; j < companySalesData[i].sales.length; j++) {
    totalSales += companySalesData[i].sales[j];
    companySalesData[i]["total"] = totalSales;
  }
}

for (var k = 0; k < companySalesData.length; k++) {
  var taxRate = salesTaxRates[companySalesData[k].province];
  companySalesData[k]["totalTaxes"] = (taxRate * companySalesData[k].total);
}
console.log(companySalesData);

for (var key in resultObj) {
  if (key === companySalesData[0].name) {
    console.log("YES");
  }
}


