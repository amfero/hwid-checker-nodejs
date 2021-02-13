const { getHWID } = require('hwid')
var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('PASTEBIN API KEY');

getHWID().then(id => {
    console.log(id)
    pastebin
    .getPaste('PASTE id')
    .then(function (data) {
        if(data.includes(id)) {
        	console.log('Successfully!')
        }
     	else {
     		console.log('Failed!!!')
     	}
})
})