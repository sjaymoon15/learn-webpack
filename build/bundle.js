/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0bd576997866bcd211f5fde65ee0aff4.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNzAK/9sAhAAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQyAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCADIAMgDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUCAwYBAAf/2gAIAQEAAAAAHSH6TM3dDgzPopVMVjwy60az51EtvS/LxLO4E6fYU+f8sLBXEJE1lxxGghitCKOauv8AMmlUSqkyqPeQ8eyacRMk7NcvYOqpWBlQUJi+2ViOzmMFXWAYLAgE5jUsJoxDY4GcRmZrtavMYBX1AlmtPJZYe3eDZfhdfmzMIY5kGtn4qbatWMi0D8DMi+je9NUWuli5sP6khhQhy7LYuQs+ELdx60zzCQZd61olciC54lq5aAJgxCaS9Jl+tqr03tCHeOpzmpMZ8EUiz8dRpcxcd0bPnvk7QX5vr9X2sVvVkOcLMb5ssoleAwuVXdoasILL9kNkUlTNyEme+LV9aoRB8x9Bc1DCUb9VkQ6mJHV7wtUvueZ6udj/ALIUAceiV3BjVxzdnlJsJKSVLpjSwqAJoUwIOzzPizRMFJjLKxXlN+zYwXEVZ61pfmfoWQUa6FZvsuE4nawItCC9xX1yq9tMWHvkK5/nVQb8hkxsWC8MiNFjltM2xZW1xq/U5BHt18nrShB28mmpjRkNLWgeNM80ISg3i3vWoqapuZSVYiBVTH31ufbEdzqpI4cG2rLHNfT1yp5k2CZyxpuItyI61kY3LXEGVysQPJ25Rbt84fNkjGoHt88sqItnNVNlm2SJk6Q6BI7zhXuwgbEuu00JO4QL/ouGeG5lq3yPG0BKrSJejdIW4RE3/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/aAAgBAhAAAAD4ySsfIeEm0ddMUN2mqcR6dAFBJUhnlMrsn0pJfYWpPuQM82aTRaG9WUBYa59GpdFPDp683pGRuCu3jDVekS3m0rvGFFFWI9dzGWV82JrTHpcm+JnSmmg6Mvs6mhBjerNz3ShSi4DTQWyCp23wDYhutlPNpR//xAAYAQEBAQEBAAAAAAAAAAAAAAACAQADBP/aAAgBAxAAAADicskFues2Ry0FWOzlugeMy12YyF52o26LG88tKoy6eGcYVuW3lbNuuUR5TpiqpdIM5i9rpuLZjOWxfOzJC3G7GZ0xa6f/xAA4EAACAgEDAgQEBAUBCQAAAAABAgADEQQSITFBEyIyUQVCYXEQFCOxJDNSgZHBFTRDYnKCodHw/9oACAEBAAE/AbrRVTtEr8zR036ilYCE59o9m6wmK2RDHMBlNWOWm8BZmM/EYZM0VYQvef8Ahjj7wVWWPnHWVU7B5jM56CCvHJm4CNZ2mV09LO01Vtl1zMe/aIOIBNT5jNMuWldedRu9hLf5bQvl5XGMaUV8bzHs5wJvheE5iIWMFIShaj/1NOBwgi15PMwFEssj3YlOEr8e04HaanVHVHjisdPrCuWgE6R+VmkXmU+tpf8A7u/2laEtEq2rH4zK0LvLX2jAm7EB4gBJlemJ9UrRA2IW8Rmf3m7tFaWWS14rgvmz0D/zL77NS+P8AdpsAG2eHgZgHMaY4mnGBNP8x+sv/lGUVgOY5wkwb7MCbRSnHWNzzMcyqlniVpUI9pbhZ4W8c9+I/kgbJgMMuMc/4lSbeT6jD1g6zGIx5gicLNP/ACMy/wBMBw0c+J5ZVWK0lzQKX4Eq0mOWj2rWMLN7WSuvaMmIO/tLBv6zbt4gmobw0XjJY7RD8STUajwxwB3zwZpqPFfPyr+8sQrM+8VvaN6ZsiHiZ9pX5aBLH3tMESlYTxPANhyYgSkSy4npNpMrSE4GIieXiMJYCXyP2g3KM+Uz4rqtRfirSq5qtxyV/afD/hx0K5avdqrOF9llVArrCDtLklw88UQCP0xK/TNMm64fQboxyioO8twj4mQTE+kSvby0uvVfKvWYLGbcQRYnnsgOOkc+8duZbqhT7dPmOBPhtmmvF3gv+ojbg23hft9Os0ubX8d+p4X7QDMuEuTzzpA09XJlMo8tF1v/AGCVrhVz1mp82oi07ioiqtSzUagnpKU32ZPabOI8rXiaqzwaCe56TTIaqFz6jyYHlt2EzLNRsBdlbAmtr1mrtNNVLLWT6m6/XH0mk0FenXwdpJODax7/AElPMXpLpZ1hWHrAmIhwsLBa6qPm6n7z2lp/iDmJcM59uIzF4VlK4EZsQtveIMCXj8zrkq+ROscwvzGfdNdqUqqtFhwAPT3aaPXNdphete187NnZh/8AGIuPueplEzgSwx40xF6RFLXIo95X5/iLf8vEPWao/qMZSD3g6Q8mFtsuvmnfnMrbM8StLG/q6QYxlo4rYYZBNQHqqzTz9DzP9kPq7z41wFScgLNPTxuAAReKwBgfeKJXxHsllnEd8zxPwzjpKWFSW3/0jifDebTD3lnP+ZXBF9UveNkmUiI2ypnPabsf36xvVLLVT1sFz7may99Vqmo0vnDMfT3mn01tddOlLjKjlx7dxMYUKBxMR3xxN8TQrtzeTn2Eu0FDL5NyH7yypqbdrTMaavyadKR1PJnwysrkmaizw6nP4VxjgRFwkt5nh5aJXNQ20JX/AHMc8SuwWAB2II+vWPpkvxU/O/3OYlVOlazwv0nXjaB27ffpNPUa1zYcueTBGOIzTRYfVLmEcywT4l8hg6RoR4lzMfeabAJmrs3rYflT95R7SsQLvsAlp2riFuYkq9/aWMXdnPcwtmWkpSzZx9faU23ar4kv5ZioXknPaUg6rU+KxDJX0x0zDMywwyu403K47Su9L6t6MJfraq+pmp1J1D56DsPwPJgsnmNJYGagCrQ7c+YnmaeDgSgdWmqt8+Jvlb8y1vB0v1MZsiCoO3SW/D1tLBtzVBMlA3eJpqKaK006pl+hHT7ypRVWFHaA8wGWDvGhTMZGX0mbD3iztK0y2YMgT8wFCgdF5/vLndzuaaYzM/l0R/O5MFZmlpzaPpNZZ4luB0EU5fEts/LKPSM9zzifDPitmo1V2UymM/WaYZZrSMbug9hC8FnMH3lkxFTyx1lxxE/BF2pGeabRM67m4E+JKKxWo9pRZKTudZqrPJiVpnmYg/Q0zP3PSM2TK3wd2CZqk1etQeHtQMxQ7T1HYSvSrpVGnrfI6ucdZv2zOYgzEXEsPEB5gsxLbBtljZaIcSsZMubYkqTxLlEXy1CfFTm37CUzRV7jman1xWxKvO4WfErgP0x8v7zfLdWtRJc4Vew6tNN8Rq1OhJarbzjZ1+0XyL5jlu5mN5yekCxFxCY5mcQZMsHlgrxzAsqGFmvtwk0o/XEPomv817ShPNNKmymak+cmeJNEMVve3pAmqcmznr3llnhjOMwfDb3cnUEeGh9IMGcJisLWBhQBEHPPWKkVOJ0ljnMyT+CjEdcwqIleTMYE1nmMwvj4TovEs7TU82MfrNHXvsj+Smag5gGSBL7BXpkpQH+oxyTucgxtaqXVpsDjI6Gas1eL5fWeuDM+aIfPKfwtOBHfmK0H4boFLREmofaJcdxmmcZ5PearXbn2p095dau7G4f2mgXVOM6epQP67D/pLtPqNv6+sY/RBtEt44ycfUz4ZSHv3/KsuLXuzg8OeOO3aaunUMvh0isk+80vwrwM36j9Sz37CZGS4GM9PtDbzKrMmVPgQWcS18xz5omcxFmMCCvMVMCHgS9t0r0/iPEsLc9J6iZtG7gTQ6la6BWRLH8TmX15MRPy+gCfPccf+4BkcDgRawTntNQ7D+HzlB3+ntHaNnxJp+k3cStjHBnfmInMUYEYmUnJ/DUWYgU2mU1bFlGlssKgDqMy7Tiihv6omJWD1iW8YmQXmX1NwbpUoxugfediej95qLRRSTOWOT1PWWCbMtKxtm+UDiHgQ+qIszGlcd8R2NlmBKKgiy23as06iqtieAoxma7VGxWKejOBNEhdxmNWFqjnDStcVC20HYx2gDqZqXCv4VeVqXos0teyvcepmrt8W7Hyr+8xHECfgp80rbAj2cRB3hMBzMT0iXWdppae5llgRZqL9006XaxMW+WsHn6zWeZ9o9ImhrAMvs8uIwHiDP8AiWNvvUfLSu8/ftNOp1OqJ+UdZrbvApwOp6SvGJszPBE8AT8tF0+GzNnE2xFjxBFHEvfasRS75m8Is1GpzKwXfmJ5dNGTc+fcyhNvHvNRUNPQbLebT6EmmP8AEFn6KNxlxavQ5b+Zcd5/0mjpGn0/PXqZrL/HvJ7dpUYsf7w2MveDVNmC9jPEeecze6zxX9p4zDtPzR9pZbvlTrNU7Y8s2uTyJQuJ/8QAJRABAAICAgIBBQEBAQAAAAAAAQARITFBUWFxgZGhscHR4fAQ/9oACAEBAAE/EAeICqlzXuXmWWrERYIZTlv/AMg5IlpKjBa6IHeY4CJCEKPj2wx7L7crBEZTa1lI/AQSqVy25UoomemVwEWFot8xVUVy0dSsSzE+ASpgiushBngWKgdzUZxTfEEo54Jbe9xvjqcE+BEQF3iKcdffBBohS5wxxUM5m0stAdiYdW4PLuCqSrEMLYrXub02eqJezympWrHFUvqNdsM0PETmpkmBKAF3BBwIXFAZV4mdcPHriFWmIYYmCowLcsc7EN+EA8daAiFZxwSlJuG2j4mVJZMyO5TEO5gDjEKzQR4Q5Zjh7Tco2jY4JaELitFE175UD7yoqqDiNdxFDEeLZc+INroR8egv14gcOWXQEdBLVK1KTx8iseBCsukY9Qa2zDzMru9zAtw568FxR4hdBmFfio98ylQsjerY1DiY0qEui6dvGoxUGlLLZy1+IzsvnNPT4/kztZ4lAVUvcMxkvPU6viWfBLjBpW0ATrEZK0ajYXnUcRTO5XQ3HWpKZi5gdIpt3Km2VA2wQmRUMPBHShbzb9yyQAXdp9synmcMFqUfY35gdSOBCWEINu15X5hhNI1KmFVsYQaggEdIvj/aie5p6jGwdEKlC2CLMyt2WoorqBFsNzGVuvBK1KoiWrgYx4KspugCrt+TiL6lr0BKwfRxh44dAKaODse9+qlDEvxLU9Rx8xQzxMpxEGIRzkP2/n7S+bIFM4MRwOX7SwNXAklnzUgDSVCpbaUK1ii8tn9SAGYTUXwZYYh3a/sukgrF8Cmds1fPqHyIW4poHV3vNX2Q2xBVJow3FrDdOIA1czfRc2L/AKzHCOo+RRcEhwp+/wDvEyq4l24fvg4XqYk7hwcTOSQGiV7YmsMAtUc761eAzvOnki67LGbNmXkUfW+xMFtL7mCqDUTC8ZmrLBiNmZ2hNWoxHv2YH7RfRLAmCXLWYjGCkOYRrqLaDLEpgkats5Bj69yy3h0S/wBG48ybKHsWGRWtZmNPU/Dozm+1vJV9BjL9XH9Pr3FNkYbljQ6gG0tYcRFyxLjXlEJyntGN5crMbeIwvVP7+phE1MrdRAZcrzGEIHHGCDCUWrXbHpwEr0ZVZGeo+Tkw5ur3UBMzeqK8nvWOb4gBABQHUBcM0iloyseWFm6q9srY4OxHm85gliTMa+uSRtP4gK9UTDXYZ+c/yBUmOJkGG8ODKDUIXr+coSQAoVin1S69LDkAFqX9L8xbGQhZdWybUb7UlUCbOuj4lH3LzL1WEPg3BUsAhBpyxOVR4pj8pXxLhoCpRuT+sJQWXb7ghOgBgjBsUG+YBt6FzGO4jo4mMQy+V3Xk1moWKYNBSrVcp7gCyBVS+66/PqVujiNIrPOZGFXAjwGS9MuA16JgajHQREqaV5l+e8y0OU8cvBATCB8ncGYsE2vqaZ1NojXuEJOgl/SrzUVm8FFOQPf6KiMBG0udujnc10ii9vmWodVmWGME1DmK4ijOcXkaiDbV8ykrNnjRHsQzoDDvhByuXEACNwCXRe6je0ZQuo5Exky4ThPiUBhnFStaKeD86IcLhkDIcW4NRMoSnpP65n24/r1GJQE9wqUOCGScws3cMLSDgRDoiY1BC4doQFufrCpAExBJmWoeHmCrQMPE4/Zl6muIdIl7qvzCJPEo5LG6Ry/MVo7TB897rvVym+CYxDcVTkQCFVmAAWOofeLvx4l6VS6hpF7FzBROpQhwkz13ER6NQUCGJhnLmUi4FfL+H5jZ8RFQhNg6C8B5zpiUrAFdKKNYyb7jqLXPcywY+BLQQoqVIYy7mWtUKXKnyxQ9oy3Ev7iOXmWrWh/n7mIPBHj8USgncG1OJlktu4amlP0hEV7e7BzjsKOLag7VhuOeLDLr/MQFsAGV/wBn6soOyl1TAIlIhVEmSArKwQFUAPiZyozu44hWMBC9t2/iKgsZ2+ErmoCvxHTRiVUmWrla8F9VYa+/4mI0Wq4ggbRGznWssGKOIWwOzTXcb2to0PERvcN0sKoqD54izuG4lVhgsiwb3GM6lZdQFCN80KTJk3/3mXTYwn6Vk/aZIDwj6Mxtk+uH9hdvpkblyBAMpiG1HHL5+ZX2qOQ8ZOq/k7PlAj5M1bL8B8KyeXnmCPMyH/iXGpoShESx5jbjgy76gwRnllHUoHZDqjfFeIVa0TFCC+JqQaSMHtLGpULWR5Dl9IdFQUdBGlLRSvPgjuco330XbjfUZ1GqXjmclQqKikCWLNhEVItmJiUEtLxEsdRSCaGYhAsSaJFbxB3bouK1bSFBXUEScxB5LiJpXHo7rt0fEEyQcc+TEP1gOWK3Kl+0oIZNSrDpMljMkq3NygthYCVYaWVmeR0EqZgVXEgLAuAIJyKw8+ZvZc0PiOzCRIeQeoDrCrb+XzOA83qKw217/wAQIQG7gDc1EQTVSygZnOlEqBMmGyPkuWUNW5vGpaS88S5DZVKXepRTB6A4hNTUNqYk87dOYaQFZ4EUfgtjn2WoVqGPwgRD7wEKQYjux7EuCo5FsBIMyqCWYLS9tRo7qpeQcQkiXsqsX7xNotdlAGXhMTBq3XlgXdqX1CZazyXp8FQRiItimuOPTv5h3UokSGIHjCLFaHMNMQLgPGZa5cOdhqaTotQpVlxFMiGTKmFZU//EACgRAAICAgIBBAEEAwAAAAAAAAECAAMRIQQSMRMiQVEyECNCkUNhgf/aAAgBAgEBPwBAFrJlr9yqx0wJXHOTgQVxPZuHk4JIj2ZO4Ky0roLHqPHzMgKAJkyxsIRP8sut7HAhbqMfMrAxHsCxuzfkYFzAm5QgxAVAwIxgGpYIo7OTDgbiHfZobGbS+JhVGfmDZyYDnU4nF9V9+JyGqU9afEr1M7nYy0+ZVgtiWuAMCV1a7vA+dTr3bqJaMNgSipnM9KuqjBb3H6iN2bUduuBFOf0sAO/rc4oy0sQKdRiSMRaSq9pSSGJHnErpJ8zh01p+5YcATk2IXPQStwISXbMAKwMZYAKWb7nFXRaPsxMFpZYMYlIOCfuIqg+6crljoFUaH9kzcrrJ1EoRRjEcYOIo1LELDBlYAqOIxxkymo9cy5DkD7igAblV9ddZxsn+hLX7nA8CKNyueuSITGtAOJZ1Ay8x6lWRHXLBYbcaEqzY5b6ldQawdtCcs1liahowKAJn3TYMqGZZ7dxUL7nPfLASrVAERu9xlqdVzONRhABL66egC7P2JY2NxnzqJX8wnErswJdZnU4wUV7jUu9gA+I6MKtTi1Kpz2zLSGsAPxKbKRX2f/gi1kDE5CGIh7TpqOdw2ASodmyZ6ypqNagbqPM5OxiVAoY6n58+TOICcsfEpIAloyYxw0Z9QeYwy2ocUr/udHfc41Si09tmcqwvbgRjjGpdnIrHkzSDqILgBPVXE0TmE5MY4lKfyMWtrnzAqpqcM7aA5tAln5LOF7rGc+ZcNxFEapMQ6nUT0ljIOuJScJHO5//EACARAAICAgICAwAAAAAAAAAAAAABEBECMSFBIFEDEmH/2gAIAQMBAT8AFs2M0WMor2NjYlDjGGI5G6LMsqMVU3GI/BlH1TyscUKEPmVGQlQ5Q9Cix6hC9zUdjFoYkONuhwkUUXGy+Re40hKkMSLlX0Ph0aRR+CRt2NxfhgPY9RdsehDQiihxZxcqkIsbF4ULFtlwmbhsQ4bFGLENl8GAxoQ4Yi2dHUM+MY4cuP/Z"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);