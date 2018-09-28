const express = require('express');
const app = express()
const request = require('request');
const cheerio = require('cheerio')
app.get('/', (req, res) => {
	
	request('https://www.drugdu.com/search_products______ch__.html', function (error, response, body) {
	     // console.log('statusCode:', response && response.statusCode); // 返回状态码
	     if(!error &&response.statusCode==200){
	     	const $ = cheerio.load(body);//相当于前端选择器，获取body内的东西
	     	// console.log('category:', $(".Formulations").text()); 
	     	console.log($(".pagination-info li").eq(10).text());
	     	res.json({
	     		"产品包含ch的数量":$(".search-m-c-part").length * ($(".pagination-info li").eq(10).text()),
	     	});
	     }
	});
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
