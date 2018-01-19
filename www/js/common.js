var dataBalanceMB, mainBalanceMB, dataRemaininginMB, dataRemaininginGB, percentDataRemainingInGB, apiUrl;

//var apiEndpoint = '';
//var apiEndpoint = 'http://192.168.43.148:3000';
var apiEndpoint = 'http://147.128.240.39:8180';

var apiGBADUrl = apiEndpoint + '/fdpBusiness/fdpservice/fulfillmentService?iname=IVR&username=fulfillmentService&password=fulfillmentService@123&msisdn=8118056611&circleCode=HP&input=GBAD';
var buyProductApi = apiEndpoint + '/fdpBusiness/fdpservice/fulfillmentService?MSISDN=8118056611&circlecode=HP&username=fulfillmentService&password=fulfillmentService@123&input=';
apiUrl = apiEndpoint + '/fdpBusiness/fdpservice/fulfillmentService?transaction_id=0&action=NETXCELL_SERVICE&password=fulfillmentService@123&iname=IVR&circleCode=HP&MSISDN=8118056611&username=fulfillmentService&input=';

//apiUrl = 'http://147.128.240.34:8180/fdpBusiness/fdpservice/fulfillmentService?iname=IVR&username=fulfillmentService&password=fulfillmentService@123&msisdn=8118056611&circleCode=HP&input=';
