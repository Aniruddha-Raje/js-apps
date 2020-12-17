var parseString = require('xml2js').parseString;

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Header />
   <SOAP-ENV:Body>
      <ns3:ChargeCommitResponse xmlns:ns3="http://com/h3g/vasbilling/ws/service" xmlns:ns2="http://ws.vasbilling.h3g.com">
         <ns3:ChargeCommitOutput>
            <ns2:errorType>
               <ns2:message>NO_ERROR</ns2:message>
               <ns2:code>0</ns2:code>
            </ns2:errorType>
         </ns3:ChargeCommitOutput>
      </ns3:ChargeCommitResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

parseString(xml, function (err, vasDiscoveryResponse) {
    console.dir(vasDiscoveryResponse['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns3:ChargeCommitResponse'][0]['ns3:ChargeCommitOutput'][0]);
});