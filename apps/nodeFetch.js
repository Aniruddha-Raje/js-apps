let fetch = require("node-fetch");

let test = async () => {
    let url = "https://test-pse-partnerproxy.drei.com:44700/vasbilling5";

    let headers = {
        "Content-Type": "text/xml;charset=UTF-8",
        "cert": `Bag Attributes    localKeyID: 09 6D 04 30 9F BD E1 D1 5B CA 15 5F B5 E2 D7 9D 48 6E E7 48 subject=/C=AT/ST=Vienna/L=Vienna/O=HutchisonDrei/OU=ITMP-PEV/CN=test-pse-partnerproxy-clientissuer=/C=AT/ST=Vienna/L=Vienna/O=HutchisonDrei/OU=ITMP-PEV/CN=CA-test-pse-partnerproxy-----BEGIN CERTIFICATE-----MIIDgDCCAmigAwIBAgIJAKuBBCELfRyEMA0GCSqGSIb3DQEBCwUAMH0xCzAJBgNVBAYTAkFUMQ8wDQYDVQQIDAZWaWVubmExDzANBgNVBAcMBlZpZW5uYTEWMBQGA1UECgwNSHV0Y2hpc29uRHJlaTERMA8GA1UECwwISVRNUC1QRVYxITAfBgNVBAMMGENBLXRlc3QtcHNlLXBhcnRuZXJwcm94eTAeFw0xNjA4MDgxMzU5NTRaFw0yNjA4MDYxMzU5NTRaMIGBMQswCQYDVQQGEwJBVDEPMA0GA1UECAwGVmllbm5hMQ8wDQYDVQQHDAZWaWVubmExFjAUBgNVBAoMDUh1dGNoaXNvbkRyZWkxETAPBgNVBAsMCElUTVAtUEVWMSUwIwYDVQQDDBx0ZXN0LXBzZS1wYXJ0bmVycHJveHktY2xpZW50MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwwuQg0J9oMcgH7maGSzkZ4LbvcLhZor/ptF4Ef6jhKwDOP3Wg77GHzxpoSWlkdyfl+MeYCL+9wQKC9hdB6cbaCrnsS/xJ3pz3xaKJXCVSInIFQx/mF/W1eH7M0nKOA5ngVXcJMQtS/vfLZBOY33VxZPCd489L41vVyljme9XxKTXnElovtH8cjHbDccWOu1JlqY2+aiG5wu0dS6t667kiAnk2oa698L7Jhg88ujHOXymnHgcp5ESYiIWngpIBj4Q72e2+0LcC2IijUOIxfod5RsepYSBPUWW3qMqNRyLbrtagowxTpwg8dbxCUFSVLI+cMBI3PANQU8z6h3s8VzgiwIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAzwMHv4ybbQr5bpviv4KVKQ41sg/ix9+N/Gvpn6jXrCSMggBE7hFl4SAZFcC+bWIMH9fIEljSn1YYn8x7H0xLi0IR07qIxoeLhoiBtA6nZLQ0NR0qyuZ+SIiC8PCoR4QFQ/0NLEE5eZVKBAJFNza0QyWM9KabYvYzdWKgeLHzjalaNVcpZGwAE+HtnrbV5cko5M9j+mym4VaKKTvaxARD2kPZG/7ckZzAlCBNDmmy7HzrlZhtvJICP408om2gSCrNN6gQX3j72sXcWOZAicGJRBsN2y+7r4JyGN7ZVxH6d17A/T4a6eX+f173KhD9bdknGrptyIMCZ+KlWi2fwosZf-----END CERTIFICATE-----`,
        "key": `Bag Attributes    localKeyID: 09 6D 04 30 9F BD E1 D1 5B CA 15 5F B5 E2 D7 9D 48 6E E7 48 Key Attributes: <No Attributes>-----BEGIN PRIVATE KEY-----MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDDC5CDQn2gxyAfuZoZLORngtu9wuFmiv+m0XgR/qOErAM4/daDvsYfPGmhJaWR3J+X4x5gIv73BAoL2F0HpxtoKuexL/EnenPfFoolcJVIicgVDH+YX9bV4fszSco4DmeBVdwkxC1L+98tkE5jfdXFk8J3jz0vjW9XKWOZ71fEpNecSWi+0fxyMdsNxxY67UmWpjb5qIbnC7R1Lq3rruSICeTahrr3wvsmGDzy6Mc5fKaceBynkRJiIhaeCkgGPhDvZ7b7QtwLYiKNQ4jF+h3lGx6lhIE9RZbeoyo1HItuu1qCjDFOnCDx1vEJQVJUsj5wwEjc8A1BTzPqHezxXOCLAgMBAAECggEBAMCjM1/w09Nv2DJ9Rc2HoS769708NRLqRgWk7UoYjbgDjEtFqhEE4vkG2eznGdguZxHEp8ObzOZ7ftCkKX3ddhw0BBHkn/G156t2v4qq30Z9jrf7WCpOvgkQ4OGPB8LFt0TuYDeP6o0ZfxupY0KwjepOPcuIFY5ZypXzswPeeHkl+i6pAvLMPFSsvNKBjhbu0X0/Vy/7UDM7NY6i4wWemx271wthZKyBzHiV6ttKjDQJ51DNxZDY2VJYDZaUS8e+VRtD2aorzY71TF80nm1N5TbT+/jF3w/FwHD1ozZaMst340WUc1SUxKfsNgJMk04nj+ZDmrl6oPQe815x0nh/+kECgYEA+Q35xjcknJOeSFohaXI56TDXifHRzPqVLuygoBkFLVq0gOCrigKBJyuu2Erk1srQ3allCr+89lGmab0UFOfXmbAIu37YU49GYaxzR5SG+F/WUiYbNaNav5UulEHvvjp2+IMFAJygt2NLu7BybFxwD5IGaYzvRhdTPUBxZFropB8CgYEAyHwCrggrv5vX4MrgnjpE61hLMZr0j+lRLuVCNMUVOcUtseicUnkjm54jxXhgLAw/BlIRz4/P5JYwTxI/4VApabMDBEoug1EI8i/xAvMR8DA3Jp8bfjP8TjIMoawvVAgmdM1pSWbub1wrWNpdOZVvZ4vIlL+TlBH4Q37H9j47VhUCgYEAxjUuLGbkV0xQMuqwHphOqFw7nUf7nXNr2O1vJBrleOPwNYUYX/yARulH/FEWcC73LQHMLVLNEweGNi7JVZ3xgxmKyZU4mr+y1rcFA9mb1P2IttYm33hDF6ela05Se4VR+5NiHsuISIrY0eWqGr0yXeHsAoKsRo73qw6nb6O99CcCgYEAmkn1tgFLydYhuTnoy1yElaoJlE9wTyB7/d8pqHrT7vW0SOp/A2l+4dA+L0aInN1/01lto5NFpuF+pBujVb7fYB0IAVEloqHGhLwoeuCduX8hsnNYMTPIxFT4K6PbeIwdLF643Gh+ruz73xGOFTbP2ZxV7UPSS23Y5fi34uXZvFECgYBMIvjI+MeWz95Ob28dVm5NXV10mnIzAsZSe4W4tuyMQLGIgYnDaTZ575mNOi3voashNNMXhq3QvAofvMeptAja/U63LPZIJAB92o7wakv4iIb6zaeawm9z+YiKhy78cLxw3Ca1pBx2G+xqmIdYN+8iWfhMoDhTXtDLJu5QWqqw3w==-----END PRIVATE KEY-----`
    }

    let data = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://com/h3g/vasbilling/ws/service" xmlns:ws="http://ws.vasbilling.h3g.com">
    <soapenv:Header/>
    <soapenv:Body>
    <ser:DiscoveryRequest>
        <ser:DiscoveryInput>
            <!--You may enter the following 17 items in any order-->
            <ws:serviceProviderID>1</ws:serviceProviderID>
            <ws:merchantID>1</ws:merchantID>
        <ws:channel>SILENT</ws:channel>
                        <!--Optional:-->
            <ws:successURL>?</ws:successURL>
            <!--Optional:-->
            <ws:failureURL>?</ws:failureURL>

            <ws:clientIdentifier>436608415888</ws:clientIdentifier>
            <ws:ageClass>ALL</ws:ageClass>
            <ws:amountGross>500</ws:amountGross>
            <!--Optional:-->
            <ws:percentTax>20</ws:percentTax>
            <!--Optional:-->
        <ws:currency>EUR</ws:currency>
            <ws:accountingText>Bolttech</ws:accountingText>
            <!--Optional:-->
            <ws:marketingText>?</ws:marketingText>

            <ws:abo>true</ws:abo>
            <ws:chargingCount>12</ws:chargingCount>
            <!--Optional:-->
            <ws:periodLength>1</ws:periodLength>
            <!--Optional:-->
            <ws:periodType>MONTH</ws:periodType>
            <!--Optional:-->
            <ws:merchantTransactionId>7696906a-3d30-4ec1-a75d-95c07f52bbef</ws:merchantTransactionId>
        </ser:DiscoveryInput>
    </ser:DiscoveryRequest>
    </soapenv:Body>
    </soapenv:Envelope>`

    console.log(`post \nurl => `, url, `\nheaders => `, headers, `\ndata => `, data);

    const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: data
    });

    console.log(JSON.stringify(response));
}

test();
