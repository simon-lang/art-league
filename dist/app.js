/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const getData = () => {\n    const a = _.range(0, 9).map(i => ({\n        year: 2000 + i,\n        value: _.random(1, 4),\n        series: 1,\n    }))\n    const b = _.range(0, 9).map(i => ({\n        year: 2000 + i,\n        value: _.random(1, 4),\n        series: 2,\n    }))\n    return a.concat(b)\n}\nconst getSpec = (values, width = 130, height = 40) => {\n    return {\n        \"$schema\": \"https://vega.github.io/schema/vega-lite/v3.json\",\n        \"description\": \"Google's stock price over time.\",\n        \"config\": {\n            \"style\": {\n                \"cell\": {\n                    \"stroke\": \"transparent\"\n                }\n            }\n        },\n        \"data\": {\n            values\n        },\n        width,\n        height,\n        \"mark\": \"line\",\n        \"encoding\": {\n            \"x\": {\n                \"field\": \"year\",\n                \"type\": \"ordinal\",\n                \"axis\": null\n            },\n            \"y\": {\n                \"field\": \"value\",\n                \"type\": \"quantitative\",\n                \"axis\": null\n            },\n            \"color\": {\n                \"field\": \"series\",\n                \"type\": \"quantitative\",\n                \"legend\": null,\n                scale: { range: ['#20324A', '#777'] }\n            }\n        }\n    }\n}\nconst artists = [\n    ['Anri Sala', 45974, 389226, '05/04/2018'],\n    ['Helen Marten', 46504, 438464, '06/04/2018'],\n    ['Ryan Gander', 47939, 377680, '07/04/2018'],\n    ['Andrea Zittel', 51718, 411401, '08/04/2018'],\n    ['Pierre Huyghe', 47837, 374527, '09/04/2018'],\n    ['Annette Messager', 50451, 397528, '10/04/2018'],\n    ['Tabor Robak', 47797, 434827, '11/04/2018'],\n    ['Ai Weiwei', 51006, 384454, '12/04/2018'],\n]\nconst Home = {\n    template: __webpack_require__(/*! ./home.html */ \"./src/home.html\"),\n    data: () => {\n        return {\n            artists\n        }\n    }\n}\nconst Profile = { template: __webpack_require__(/*! ./profile.html */ \"./src/profile.html\") }\nconst Portfolio = {\n    template: __webpack_require__(/*! ./portfolio.html */ \"./src/portfolio.html\"),\n    data: () => {\n        return {\n            artists\n        }\n    },\n    methods: {\n        add: function () {\n            this.artists.push(['Jase', 1337])\n        },\n        remove: function (i) {\n            this.artists = [\n                ...this.artists.slice(0, i)\n            ]\n        },\n    }\n}\nconst Calculator = {\n    template: __webpack_require__(/*! ./calculator.html */ \"./src/calculator.html\"),\n    data: () => {\n        return {\n            value: ''\n        }\n    },\n    methods: {\n        add: function (n) {\n            this.value += n\n        }\n    }\n}\nconst Chart = {\n    template: `<img src=\"chart.svg\">`,\n}\nwindow.Vue.directive('vis', {\n    inserted: function (el) {\n        const spec = getSpec(getData())\n        const opts = {\n            actions: false,\n            defaultStyle: true,\n        }\n        vegaEmbed(el, spec, opts).catch(console.error)\n    }\n})\nwindow.Vue.directive('bigVis', {\n    inserted: function (el) {\n        const getBigVisSpec = () => ({\n            \"$schema\": \"https://vega.github.io/schema/vega-lite/v3.json\",\n            \"data\": {\n                \"url\": \"data.json\"\n            },\n            \"vconcat\": [\n                {\n                    \"autosize\": \"fit\",\n                    \"width\": el.clientWidth,\n                    \"height\": 9 / 16 * el.clientWidth,\n                    \"mark\": {\n                        \"type\": \"line\"\n                    },\n                    \"encoding\": {\n                        \"x\": {\n                            \"field\": \"label\",\n                            \"type\": \"temporal\",\n                            \"timeUnit\": \"year\",\n                            \"axis\": {\n                                tickOpacity: 0.1,\n                                \"title\": \"Year\"\n                            }\n                        },\n                        \"y\": {\n                            \"field\": \"value\",\n                            \"type\": \"quantitative\",\n                            \"axis\": {\n                                tickOpacity: 0.1,\n                                \"title\": \"Value\"\n                            }\n                        },\n                        \"color\": {\n                            \"field\": \"color\",\n                            \"type\": \"nominal\",\n                            \"axis\": {\n                                \"title\": \"Institution Name\"\n                            },\n                            \"scale\": {\n                                \"range\": {\n                                    \"scheme\": \"blues\"\n                                }\n                            },\n                            \"legend\": null\n                        }\n                    }\n                }\n            ],\n            \"config\": {\n                \"title\": {\n                    \"color\": \"#fff\"\n                },\n                \"style\": {\n                    \"guide-label\": {\n                        \"fill\": \"#fff\"\n                    },\n                    \"guide-title\": {\n                        \"fill\": \"#fff\"\n                    }\n                },\n                \"axis\": {\n                    \"domainColor\": \"#fff\",\n                    \"gridColor\": \"#aaa\",\n                    \"tickColor\": \"#fff\"\n                }\n            }\n        })\n        const opts = {\n            actions: false,\n            defaultStyle: true,\n            renderer: 'svg'\n        }\n        const render = () => {\n            const spec = getBigVisSpec()\n            vegaEmbed(el, spec, opts).catch(console.error)\n        }\n        window.addEventListener('resize', _.debounce(render, 100))\n        render()\n    }\n})\nconst routes = [\n    { path: '/', component: Home },\n    { path: '/portfolio', component: Portfolio },\n    { path: '/profile', component: Profile },\n    { path: '/calculator', component: Calculator },\n]\nconst router = new VueRouter({ routes })\nconst app = new window.Vue({\n    router,\n    components: {\n        Portfolio\n    },\n    mounted: function () {\n        console.log('mounted')\n        // window.addEventListener('scroll', scrollWindow)\n    },\n    methods: {\n        go: function (path) {\n            this.$router.push(path)\n        },\n    }\n}).$mount('#app')\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/calculator.html":
/*!*****************************!*\
  !*** ./src/calculator.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"scene container calculator scene--active\\\" id=\\\"calculator\\\">\\n    <div class=\\\"scene-header\\\">\\n        <p class=\\\"artist__name text-center large\\\">\\n            Anri Sala\\n        </p>\\n        <div class=\\\"main__value text-center large\\\">\\n            45, 974\\n        </div>\\n        <p class=\\\"text--negative text-center\\\">\\n            -4.6%\\n        </p>\\n    </div>\\n    <div class=\\\"scene-body\\\">\\n        <input class=\\\"input text-center\\\"\\n            type=\\\"text\\\"\\n            placeholder=\\\"Total (ALC)\\\"\\n            v-model=\\\"value\\\"\\n        >\\n\\n        <div class=\\\"keypad\\\">\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(1)\\\">1</div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(2)\\\">2</div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(3)\\\">3</div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(4)\\\">4</div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(5)\\\">5</div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(6)\\\">6</div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(7)\\\">7</div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(8)\\\">8</div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(9)\\\">9</div>\\n            <div class=\\\"keypad-item\\\"></div>\\n            <div class=\\\"keypad-item\\\" @click=\\\"add(0)\\\">0</div>\\n            <div class=\\\"keypad-item\\\"></div>\\n        </div>\\n\\n        <div class=\\\"metrics-actions\\\">\\n            <router-link to=\\\"/portfolio\\\" class=\\\"btn btn--positive metrics-action-button\\\">BUY</router-link>\\n            <router-link to=\\\"/portfolio\\\" class=\\\"btn btn--negative metrics-action-button\\\">SELL</router-link>\\n        </div>\\n    </div>\\n\\n</div>\\n\";\n\n//# sourceURL=webpack:///./src/calculator.html?");

/***/ }),

/***/ "./src/home.html":
/*!***********************!*\
  !*** ./src/home.html ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"charts\\\">\\n    <div class=\\\"scene-header\\\">\\n        <div class=\\\"text-center\\\">\\n            Art Market\\n        </div>\\n        <div class=\\\"text-center large\\\">\\n            194,200\\n        </div>\\n        <p class=\\\"text--positive text-center\\\">\\n            6.8%\\n        </p>\\n    </div>\\n    <div class=\\\"line-chart text-center\\\">\\n        <div v-big-vis class=\\\"vis\\\"></div>\\n    </div>\\n    <table class=\\\"home-table\\\">\\n        <thead>\\n            <tr>\\n                <th class=\\\"home-table-heading\\\"></th>\\n                <th class=\\\"home-table-heading\\\">Artist</th>\\n                <th class=\\\"home-table-heading\\\">Value</th>\\n                <th class=\\\"home-table-heading\\\">%</th>\\n                <th class=\\\"home-table-heading\\\">Total Market Value</th>\\n                <th class=\\\"home-table-heading\\\">%</th>\\n            </tr>\\n        </thead>\\n        <tbody>\\n            <tr v-for=\\\"(artist, i) in artists\\\">\\n                <td>{{i + 1}}.</td>\\n                <td>\\n                    <router-link to=\\\"/profile\\\">\\n                        {{artist[0]}}\\n                    </router-link>\\n                </td>\\n                <td>{{artist[1].toLocaleString()}}</td>\\n                <td>2</td>\\n                <td>{{artist[2].toLocaleString()}}</td>\\n                <td>4</td>\\n            </tr>\\n        </tbody>\\n    </table>\\n\\n    <ul hidden>\\n        <li><router-link to=\\\"/portfolio\\\">Portfolio</router-link><br></li>\\n        <li><router-link to=\\\"/profile\\\">Artist Profile</router-link><br></li>\\n        <li><router-link to=\\\"/calculator\\\">Buy / Sell</router-link><br></li>\\n    </ul>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./src/home.html?");

/***/ }),

/***/ "./src/portfolio.html":
/*!****************************!*\
  !*** ./src/portfolio.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"portfolio\\\">\\n    <div class=\\\"scene-header\\\">\\n        <div class=\\\"text-center\\\">\\n            Portfolio\\n        </div>\\n        <div class=\\\"text-center large\\\">\\n            681,926\\n        </div>\\n        <p class=\\\"text--positive text-center\\\">\\n        6.8%\\n        </p>\\n    </div>\\n    <div class=\\\"portfolio-row\\\" v-for=\\\"(artist, i) in artists\\\">\\n        <router-link to=\\\"/profile\\\" class=\\\"portfolio-item portfolio-item--name\\\">\\n            {{artist[0]}}\\n        </router-link>\\n        <div class=\\\"portfolio-item portfolio-item--chart\\\">\\n        </div>\\n        <div class=\\\"portfolio-item portfolio-item--price\\\">\\n            {{artist[1]}}\\n            <p class=\\\"text--positive text-center small flat\\\">\\n                6.8%\\n            </p>\\n            <button @click=\\\"remove(i)\\\" class=\\\"portfolio-item__action\\\" hidden>\\n                <i class=\\\"fa fa-minus-circle\\\"></i>\\n            </button>\\n        </div>\\n    </div>\\n    <p hidden>\\n    <router-link to=\\\"/\\\">Back to Home</router-link>\\n    </p>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./src/portfolio.html?");

/***/ }),

/***/ "./src/profile.html":
/*!**************************!*\
  !*** ./src/profile.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"profile\\\">\\n    <div class=\\\"profile__header\\\">\\n        <h1 class=\\\"artist__name text-center large\\\">\\n            Anri Sala\\n        </h1>\\n        <div>\\n            <div class=\\\"main__value text-center large\\\">\\n                45, 974\\n            </div>\\n            <p class=\\\"text--negative text-center\\\">\\n                -4.6%\\n            </p>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"metrics-wrap\\\">\\n        <div class=\\\"metrics\\\">\\n            <div class=\\\"metric\\\">\\n                <h4 class=\\\"metric__label flat\\\">Market</h4>\\n                <p class=\\\"metric__value large\\\">3,689</p>\\n                <p class=\\\"metric__trend text--negative\\\">-22.8%</p>\\n            </div>\\n            <div class=\\\"metric\\\">\\n                <h4 class=\\\"metric__label flat\\\">Social</h4>\\n                <p class=\\\"metric__value large\\\">41,663</p>\\n                <p class=\\\"metric__trend text--negative\\\">-2.9%</p>\\n            </div>\\n            <div class=\\\"metric\\\">\\n                <h4 class=\\\"metric__label flat\\\">Collection</h4>\\n                <p class=\\\"metric__value large\\\">291</p>\\n                <p class=\\\"metric__trend text--positive\\\">42.0%</p>\\n            </div>\\n            <div class=\\\"metric\\\">\\n                <h4 class=\\\"metric__label flat\\\">Exhibition</h4>\\n                <p class=\\\"metric__value large\\\">331</p>\\n                <p class=\\\"metric__trend text--positive\\\">12.6%</p>\\n            </div>\\n        </div>\\n\\n        <div class=\\\"metrics-actions\\\">\\n            <router-link to=\\\"/calculator\\\" class=\\\"btn btn--positive metrics-action-button\\\">BUY</router-link>\\n            <router-link to=\\\"/calculator\\\" class=\\\"btn btn--negative metrics-action-button\\\">SELL</router-link>\\n        </div>\\n    </div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./src/profile.html?");

/***/ })

/******/ });