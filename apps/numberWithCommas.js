function numberWithCommas(num){
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{4})+(?!\d))/g, ",");
    return parts.join(".");
  }
  
  console.log('1212321424334.1234', numberWithCommas(1232443.1234));
  