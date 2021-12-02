var parseString = require('xml2js').parseString;

let xml = `<root><partner_code>ATDREIATELNA01</partner_code>
<partner_order_id>COM000007664003</partner_order_id>
<device_id_type>imei</device_id_type>
<device_unique_id>020893334876081</device_unique_id>
<product_purchase_date>2021-09-15T08:51:55.183Z</product_purchase_date></root>`

parseString(xml, function (err, response) {
    console.dir(response.root.product_purchase_date);
});