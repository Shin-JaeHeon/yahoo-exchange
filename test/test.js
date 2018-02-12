const index = require('../index');

index.getData('USDKRW', data => {
	console.log(data);
});
index.getDataArray(['USDKRW', 'JPYKRW'], data =>console.log(data));
