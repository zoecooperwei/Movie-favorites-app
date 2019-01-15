(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app--routing.module.ts":
/*!****************************************!*\
  !*** ./src/app/app--routing.module.ts ***!
  \****************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie/movie-list/movie-list.component */ "./src/app/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _code404_code404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code404/code404.component */ "./src/app/code404/code404.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _movie_movieform_movieform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie/movieform/movieform.component */ "./src/app/movie/movieform/movieform.component.ts");
/* harmony import */ var _guard_confirm_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/confirm.guard */ "./src/app/guard/confirm.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// routes configuration
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'movie', component: _movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["movieListComponent"] },
    { path: 'movie/:id', component: _movie_movieform_movieform_component__WEBPACK_IMPORTED_MODULE_6__["movieformComponent"], canDeactivate: [_guard_confirm_guard__WEBPACK_IMPORTED_MODULE_7__["ConfirmGuard"]] },
    { path: '**', component: _code404_code404_component__WEBPACK_IMPORTED_MODULE_4__["Code404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    /* really important to define min-height to show the background image */\n    /* min-height: 700px;\n    background: url(../assets/img/bg.jpg);\n    background-size: cover; \n    background-position: center;\n    background-repeat: no-repeat; */\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main body -->\n<div class=\"wrapper\">\n    <!-- Main Header -->\n    <app-header></app-header>\n\n    <!-- Content Wrapper. Contains page content -->\n    <app-content></app-content>\n    \n    <!-- Main Footer -->\n    <app-footer></app-footer>\n</div>\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movieM';
        this.myData = "hello";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie/movie-list/movie-list.component */ "./src/app/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _heart_heart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./heart/heart.component */ "./src/app/heart/heart.component.ts");
/* harmony import */ var _code404_code404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code404/code404.component */ "./src/app/code404/code404.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app--routing.module */ "./src/app/app--routing.module.ts");
/* harmony import */ var _movie_movieform_movieform_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movie/movieform/movieform.component */ "./src/app/movie/movieform/movieform.component.ts");
/* harmony import */ var _movie_movie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movie/movie.service */ "./src/app/movie/movie.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
                _movie_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_9__["movieListComponent"],
                _heart_heart_component__WEBPACK_IMPORTED_MODULE_10__["HeartComponent"],
                _code404_code404_component__WEBPACK_IMPORTED_MODULE_11__["Code404Component"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _movie_movieform_movieform_component__WEBPACK_IMPORTED_MODULE_14__["movieformComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]
            ],
            providers: [_movie_movie_service__WEBPACK_IMPORTED_MODULE_15__["MovieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code404/code404.component.css":
/*!***********************************************!*\
  !*** ./src/app/code404/code404.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/code404/code404.component.html":
/*!************************************************!*\
  !*** ./src/app/code404/code404.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main 404 Info-->\n<div class=\"py-5 my-5\" style=\"color: #fff\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 mx-auto text-center mt-5 mb-3 px-3 py-4\" style=\"border: 3px solid #fff; color: #fff; min-width:400px\">\n          <h4 class=\"mx-auto text-center mt-5 pb-4 px-2\" style=\"line-height: 30px;\"> Oooops! 404 NOT FOUND...</h4>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/code404/code404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/code404/code404.component.ts ***!
  \**********************************************/
/*! exports provided: Code404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code404Component", function() { return Code404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Code404Component = /** @class */ (function () {
    function Code404Component() {
    }
    Code404Component.prototype.ngOnInit = function () {
    };
    Code404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code404',
            template: __webpack_require__(/*! ./code404.component.html */ "./src/app/code404/code404.component.html"),
            styles: [__webpack_require__(/*! ./code404.component.css */ "./src/app/code404/code404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Code404Component);
    return Code404Component;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content-wrapper, display page content -->\n<div class=\"content-wrapper pt-5\">\n  <!-- Main content -->\n  <section class=\"content container-fluid\" style=\"padding:0\">\n    <!--------------------------\n      | Page Content Here |\n      -------------------------->\n    <router-outlet></router-outlet>\n  </section>\n</div>\n<!-- /.Content-wrapper -->"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent(router) {
        this.router = router;
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact li{\n    display: inline;\n}\n\n.line {\n    width: 350px !important;\n    height: 1px;\n    background-color: #fff;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Footer -->\n<footer class=\"container-fluid mx-auto text-center\">\n    <div class=\"col-sm-9 mx-auto mt-2 py-5\">\n        <div class=\"line text-center mt-3 mx-auto\"></div>\n    </div>\n    <div class=\"row text-center pt-3 mx-auto\">\n        <ul class=\"contact list-unstyled mx-auto\" style=\"list-style: none\">\n            <li class=\"px-2\"><a class=\"btn badge\" (click)=\"nav()\"><i class=\"fab fa-facebook-square\" style=\"font-size: 40px; color: #fff\"></i></a></li>\n            <li class=\"px-2\"><a class=\"btn badge\" (click)=\"nav()\"><i class=\"fab fa-linkedin\" style=\"font-size: 40px; color: #fff\"></i></a></li>\n            <li class=\"px-2\"><a class=\"btn badge\" (click)=\"nav()\"><i class=\"fab fa-github\" style=\"font-size: 40px; color: #fff\"></i></a></li>\n        </ul>\n    </div>\n    <div class=\"col-sm-10 mx-auto pb-3\">\n        <p class=\"text-capitalize\" style=\"color:#fff\">Coded & Designed by zoe </p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    // navigate to home page
    FooterComponent.prototype.nav = function () {
        this.router.navigateByUrl('/home');
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guard/confirm.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guard/confirm.guard.ts ***!
  \****************************************/
/*! exports provided: ConfirmGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmGuard", function() { return ConfirmGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfirmGuard = /** @class */ (function () {
    function ConfirmGuard() {
    }
    ConfirmGuard.prototype.canDeactivate = function (component) {
        if (component.saved) {
            return true;
        }
        else {
            return window.confirm("Are your sure you wanna leave?");
        }
    };
    ConfirmGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ConfirmGuard);
    return ConfirmGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".getMenu:focus {\n    outline: none;\n}\n\n.getMenu {\n    transition: all 0.5s ease;\n    border: 0;\n    cursor: pointer;\n    opacity: 0.5;\n}\n\nnav {\n    background-color: rgba(146, 141, 141, 0.5);\n}\n\nnav a{\n    color: #fff !important;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Header -->\n<div class=\"header\">\n  <nav class=\"px-5 navbar navbar-expand-sm navbar-dark fixed-top\">\n      <div class=\"navbar-brand\">Angular-Movies</div>\n    <!-- display links -->\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngFor=\"let list of navlist\">\n            <a class=\"nav-link btn\" (click)=\"nav(list)\">\n                {{list.name}}\n            </a>\n        </li>\n      </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // navbar link list
        this.navlist = [
            new List(1, 'Home', 'home'),
            new List(2, 'Movie', 'movie')
        ];
    };
    // navigate to link
    HeaderComponent.prototype.nav = function (li) {
        this.router.navigateByUrl(li.link);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

// navbar link class
var List = /** @class */ (function () {
    function List(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
    return List;
}());



/***/ }),

/***/ "./src/app/heart/heart.component.css":
/*!*******************************************!*\
  !*** ./src/app/heart/heart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\n    display:none;\n}"

/***/ }),

/***/ "./src/app/heart/heart.component.html":
/*!********************************************!*\
  !*** ./src/app/heart/heart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- display rating value-->\n<span class=\"px-1\" *ngFor=\"let heart of hearts; let i = index\" (click)=\"clickheart(i*2)\">\n      <i class=\"fas fa-heart\" [class.hidden]=\"heart\"></i> \n      <i class=\"far fa-heart\" [class.hidden]=\"!heart\"></i>\n</span>"

/***/ }),

/***/ "./src/app/heart/heart.component.ts":
/*!******************************************!*\
  !*** ./src/app/heart/heart.component.ts ***!
  \******************************************/
/*! exports provided: HeartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartComponent", function() { return HeartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeartComponent = /** @class */ (function () {
    function HeartComponent() {
        this.rating = 0;
        this.ratingupdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = true;
    }
    HeartComponent.prototype.ngOnInit = function () {
    };
    HeartComponent.prototype.ngOnChanges = function () {
        // generate heart array
        this.hearts = [];
        for (var i = 1; i <= 5; i++) {
            this.hearts.push(i * 2 > this.rating);
        }
    };
    // click allowed when not in readonly pattern 
    HeartComponent.prototype.clickheart = function (newrating) {
        if (!this.readonly) {
            this.rating = newrating + 2;
            this.ratingupdate.emit(this.rating);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeartComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeartComponent.prototype, "ratingupdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeartComponent.prototype, "readonly", void 0);
    HeartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heart',
            template: __webpack_require__(/*! ./heart.component.html */ "./src/app/heart/heart.component.html"),
            styles: [__webpack_require__(/*! ./heart.component.css */ "./src/app/heart/heart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeartComponent);
    return HeartComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n    width: 550px;\n    margin: 0 auto;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main home content -->\n<!-- Home title -->\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 mx-auto text-center mt-5 mb-3 px-3 py-4\" style=\"border: 3px solid #fff; color: #fff; min-width:400px\">\n            <h5 class=\"mx-auto text-center mt-5 text-uppercase pb-4 px-2\" style=\"line-height: 30px;\">A movie is not a movie. It's the life. Without the movie, life would be a mistake.</h5>\n        </div>\n        <div class=\"col-sm-9 mx-auto mb-3\">\n                <div class=\"line text-center mx-auto\"></div>\n        </div>\n        <div class=\"col-sm-7 mx-auto text-center mb-5\">\n            <a href=\":js;\" [routerLink]=\"['/movie']\" routerLinkActive=\"router-link-active\" class=\"btn btn-lg btn-outline-light mb-5\"><span class=\"text-uppercase\">get started</span></a>\n        </div>\n    </div>\n</div>\n\n<!-- Carousel with animated slides -->\n<section style=\"background: rgba(255,255,255,0.5)\">\n    <div class=\"carousel py-5 mt-2\">\n        <ngb-carousel style=\"outline:none\">\n            <ng-template ngbSlide>\n                <img class=\"img-fluid rounded\" [src]=\"imgpath1\" alt=\"first slide\">\n                <div class=\"carousel-caption\">\n                    <h5 class=\"text-uppercase\">Schidler's list</h5>\n                    <p>Save the World.</p>\n                </div>\n            </ng-template>\n\n            <ng-template ngbSlide>\n                <img class=\"img-fluid rounded\" [src]=\"imgpath2\" alt=\"second slide\">\n                <div class=\"carousel-caption\">\n                    <h5 class=\"text-uppercase\">Leon</h5>\n                    <p>Shape of my heart.</p>\n                </div>\n            </ng-template>\n\n            <ng-template ngbSlide>\n                <img class=\"img-fluid rounded\" [src]=\"imgpath3\" alt=\"third slide\">\n                <div class=\"carousel-caption\">\n                    <h5 class=\"text-uppercase\">Inception</h5>\n                    <p>You're waiting for a train.</p>\n                </div>\n            </ng-template>\n        </ngb-carousel>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Images path
        this.imgpath1 = "../../assets/img/schindler.jpeg";
        this.imgpath2 = "../../assets/img/leon.jpeg";
        this.imgpath3 = "../../assets/img/inception.jpeg";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie-list/movie-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/movie/movie-list/movie-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n\tmargin-right: 15px;\n\tcolor: #fff !important;\n}\n\n.table {\n    background: transparent !important;\n}\n\n.searchBox{\n    height: 100px;\n    padding: 30px; \n    width: 300px;\n}\n\n#movieName{\n\tfont-size: 15px;\n\tletter-spacing: 0.05pc;\n\tcolor: #fff;\n\twidth: 200px;\n\theight: 30px;\t\n\tpadding: 0;\n\tmargin: auto;\n\tborder-top: none;\n\tborder-right: none;\n\tborder-left: none;\n\tborder-bottom: 1px solid white;\n\tbackground-color: transparent;\n\ttransition: 1s;\n\ttransition-timing-function: ease-in-out;\n}\n\n#search_button{\n    margin-left: 10px;\n\ttransition: 1s;\n    transition-timing-function: ease-in-out;\n    background-color: transparent;\n\tborder: 0;\n\tpadding: 0;\n\tcolor: #fff;\n\tcursor: pointer;\n}\n\n#movieName:hover{\n\tborder-bottom: 1px solid rgba(255, 255, 255, 0.7);\n}\n\n#search_button:hover{\n\tcolor: rgba(255, 255, 255, 0.7);\n}\n\n::-webkit-input-placeholder{\n\tpadding: 2px;\n\tcolor: #fff;\n\topacity: 0.4;\n}\n\n::-ms-input-placeholder{\n\tpadding: 2px;\n\tcolor: #fff;\n\topacity: 0.4;\n}\n\n::placeholder{\n\tpadding: 2px;\n\tcolor: #fff;\n\topacity: 0.4;\n}\n\n#search_button .fas{\n\tfont-size: 20px;\n}\n\n#search_button:focus, #movieName:focus{\n\toutline: none;\n}\n\n.new-button:focus {\n    outline: none;\n}\n"

/***/ }),

/***/ "./src/app/movie/movie-list/movie-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/movie/movie-list/movie-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Movie lists content -->\n<div class=\"pt-5 movies\">\n  <!-- Searchbox -->\n  <div class=\"pt-5\" style=\"margin: auto\">\n    <div class=\"searchbox text-center pb-5\">\n      <input style=\"margin:0\" #myValue type=\"text\" name=\"table_search\" \n      placeholder=\"movie name..\" id=\"movieName\">\n      <button (click)=\"filter(myValue.value)\" type=\"submit\" id=\"search_button\"><i class=\"fas fa-search\"></i></button>\n    </div>\n  </div>\n\n  <!-- Movie table -->\n  <div class=\"movielist px-5 mx-5\">\n    <div class=\"create text-right\">\n      <a class=\"btn\" (click)=\"create()\">\n          <span><i class=\"fas fa-plus\"></i> New</span>\n      </a>\n    </div>\n    <table class=\"table table-dark table-striped table-borderless\">\n      <thead>\n        <tr>\n          <!-- <th style=\"width: 10px\">movies</th> -->\n          <th>Name</th>\n          <th>Year</th>\n          <th>Director</th>\n          <th>Rating</th>\n          <th>Edit</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let movie of movies | async\">\n          <!-- <td>{{movie.id}}</td> -->\n          <td>{{ movie.name }}</td>\n          <td>{{ movie.year }}</td>\n          <td>{{ movie.director }}</td>\n          <td><app-heart [rating]=\"movie.rating\"></app-heart></td>\n          <td>\n            <a class=\"btn badge\" (click)=\"edit(movie)\"><span><i class=\"fas fa-user-edit\" style=\"font-size: 18px\"></i></span></a>\n            <a class=\"btn badge\" (click)=\"delete(movie)\"><span><i class=\"far fa-trash-alt\" style=\"font-size: 18px\"></i></span></a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/movie/movie-list/movie-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie/movie-list/movie-list.component.ts ***!
  \**********************************************************/
/*! exports provided: movieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movieListComponent", function() { return movieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var movieListComponent = /** @class */ (function () {
    function movieListComponent(router, movieservice) {
        this.router = router;
        this.movieservice = movieservice;
        this.newmovies = [];
    }
    movieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // request and subscribe movie data from remote server
        this.movies = this.movieservice.getMovies();
        this.movies.subscribe(function (data) {
            _this.newmovies = data;
        });
    };
    // search the movie name and navigate to the movie page
    movieListComponent.prototype.filter = function (info) {
        var filterS = this.newmovies.find(function (e) { return e.name.indexOf(info) != -1; });
        console.log(filterS);
        var id = filterS.id;
        this.router.navigateByUrl('/movie/' + id);
    };
    // navigate to new movie page
    movieListComponent.prototype.create = function () {
        this.router.navigateByUrl('/movie/0');
    };
    // navigate to edit page
    movieListComponent.prototype.edit = function (movie) {
        this.router.navigateByUrl('/movie/' + movie.id);
    };
    // delete the movie
    movieListComponent.prototype.delete = function (movie) {
        var _this = this;
        this.movieservice.deleteMovie(movie, movie.id).subscribe(function () {
            _this.movies = _this.movieservice.getMovies();
            _this.movies.subscribe(function (data) {
                _this.newmovies = data;
            });
        });
    };
    movieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/movie/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/movie/movie-list/movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], movieListComponent);
    return movieListComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie.service.ts":
/*!****************************************!*\
  !*** ./src/app/movie/movie.service.ts ***!
  \****************************************/
/*! exports provided: MovieService, Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
    }
    // get movies data
    MovieService.prototype.getMovies = function () {
        return this.http.get('http://localhost:3001/api/movies');
    };
    // get the movie data with given id
    MovieService.prototype.getMovie = function (id) {
        var movie = this.http.get('http://localhost:3001/api/movies/' + id);
        return movie;
    };
    // add movie data
    MovieService.prototype.addMovie = function (movie) {
        return this.http.post('http://localhost:3001/api/movies', movie);
    };
    // update movie data
    MovieService.prototype.updateMovie = function (movie, id) {
        return this.http.put('http://localhost:3001/api/movies/' + id, movie);
    };
    // delete movie data
    MovieService.prototype.deleteMovie = function (movie, id) {
        return this.http.delete('http://localhost:3001/api/movies/' + id);
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());

// create class movie
var Movie = /** @class */ (function () {
    function Movie(id, name, year, director, rating, desp) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.director = director;
        this.rating = rating;
        this.desp = desp;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/movie/movieform/movieform.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie/movieform/movieform.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hasError {\n    border: 1px solid crimson;\n}\n\n.noCategory {\n    color: crimson;\n}\n\n.hidden {\n    display:none;\n}\n\n.movieinfo{\n\tfont-size: 15px;\n\tletter-spacing: 0.05pc;\n\tcolor: #fff;\n\theight: 30px;\t\n\tpadding: 0;\n\tborder-top: none;\n\tborder-right: none;\n\tborder-left: none;\n\tborder-bottom: 1px solid white;\n\tbackground-color: transparent;\n\ttransition: 1s;\n\ttransition-timing-function: ease-in-out;\n}\n\n.moviearea {\n    font-size: 15px;\n\tletter-spacing: 0.05pc;\n\tcolor: #fff;\n\tpadding: 0;\n\tborder: 1px solid white;\n\tbackground-color: transparent;\n\ttransition: 1s;\n\ttransition-timing-function: ease-in-out;\n}\n\n.moviearea:focus, .movieinfo:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}"

/***/ }),

/***/ "./src/app/movie/movieform/movieform.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie/movieform/movieform.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Movie form page -->\n<div class=\"pt-5 mx-auto\">\n  <div class=\"movie-form mx-auto px-5\">\n    <!-- page title -->\n    <div class=\"px-5\" style=\"color:#fff\">\n      <h3>Movie Info</h3>\n    </div>\n    <!-- form start -->\n    <div class=\"d-flex h-100 col-sm-12 pt-3\">\n      <div class=\"mx-auto\">\n        <form [formGroup]=\"movieForm\" class=\"mx-auto px-5 justify-content-center\" style=\"width:500px; color: #fff\">\n          <!-- movie name -->\n          <div class=\"form-group pt-3\">\n            <label for=\"name\" class=\"col-sm-5 control-label\">Movie name</label>\n            <div class=\"col-sm-12 text-center\">\n              <input formControlName=\"movieName\" type=\"text\" class=\"form-control movieinfo\" id=\"name\" placeholder=\"movie name..\">\n            </div>\n            <!-- name validation -->\n            <div class=\"text-warning pl-3 pt-3\" *ngIf=\"movieForm.get('movieName').touched && movieForm.get('movieName').invalid\">\n              <p style=\"font-size: 14px\" *ngIf=\"movieForm.get('movieName').errors.required\">\n                  Name is required.\n              </p>\n              <p style=\"font-size: 14px\" *ngIf=\"movieForm.get('movieName').errors.minlength\">\n                  Name must be at least 4 characters long.\n              </p>\n              <p style=\"font-size: 14px\" *ngIf=\"movieForm.get('movieName').errors.char\">\n                  Name must be characters.\n              </p>\n            </div>\n          </div>\n\n          <!-- movie year -->\n          <div class=\"form-group\">\n            <label for=\"year\" class=\"col-sm-5 control-label\">Movie year</label>\n            <div class=\"col-sm-12\">\n              <input formControlName=\"movieYear\" type=\"number\" class=\"form-control movieinfo\" id=\"year\" placeholder=\"movie year..\">\n            </div>\n            <!-- year validation -->\n            <div class=\"text-warning pl-3 pt-3\" *ngIf=\"movieForm.get('movieYear').touched && movieForm.get('movieYear').invalid\">\n              <p style=\"font-size: 14px\" *ngIf=\"movieForm.get('movieYear').errors.required\">\n                  Year is required.\n              </p>\n            </div>\n          </div>\n\n          <!-- movie director -->\n          <div class=\"form-group\">\n            <label for=\"director\" class=\"col-sm-5 control-label\">Movie director</label>\n            <div class=\"col-sm-12\">\n              <input formControlName=\"movieDirector\" type=\"text\" class=\"form-control movieinfo\" id=\"director\" placeholder=\"movie director..\">\n            </div>\n            <!-- director validation -->\n            <div class=\"text-warning pl-3 pt-3\" *ngIf=\"movieForm.get('movieDirector').touched && movieForm.get('movieDirector').invalid\">\n              <p style=\"font-size: 14px\" *ngIf=\"movieForm.get('movieDirector').errors.required\">\n                  Director is required.\n              </p>\n              <p style=\"font-size: 14px\" *ngIf=\"movieForm.get('movieDirector').errors.char\">\n                  Director must be characters.\n              </p>\n            </div>\n          </div>\n\n          <!-- movie rating -->\n          <div class=\"form-group\">\n            <label for=\"rating\" class=\"col-sm-5 control-label\">Movie rating</label>\n            <div class=\"col-sm-12\">\n              <app-heart [rating]=\"movie.rating\" [readonly]=\"false\" (ratingupdate)=\"updateRating($event)\"></app-heart>\n            </div>\n          </div>\n\n          <!-- movie description -->\n          <div class=\"form-group pb-3\">\n            <label for=\"detail\" class=\"col-sm-5 control-label\">Movie detail</label>\n            <div class=\"col-sm-12\">\n              <textarea formControlName=\"movieDesp\" class=\"form-control moviearea px-2 py-2\" name=\"desp\" id=\"desp\" rows=\"5\">{{ movie.desp }}</textarea>\n            </div>\n          </div>\n\n          <!-- buttons -->\n          <div class=\"py-1 row\" style=\"letter-spacing: 0.07pc\">\n            <!-- back button -->\n            <div class=\"col-sm-6 col-md-6 text-left\">\n              <button type=\"submit\" (click)=\"cancel()\" class=\"btn btn-light\">Back</button>\n            </div>\n            <!-- save button and form validation -->\n            <div class=\"col-sm-6 col-md-6 text-right\">\n              <button type=\"button\" style=\"margin-left:0\" [disabled]=\"movieForm.invalid\" (click)=\"save()\" class=\"btn btn-light\">Save</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/movie/movieform/movieform.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie/movieform/movieform.component.ts ***!
  \********************************************************/
/*! exports provided: movieformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movieformComponent", function() { return movieformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_charValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validators/charValidator */ "./src/app/validators/charValidator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var movieformComponent = /** @class */ (function () {
    function movieformComponent(movieservice, routeInfo, router, fb) {
        this.movieservice = movieservice;
        this.routeInfo = routeInfo;
        this.router = router;
        this.fb = fb;
        this.movie = new _movie_service__WEBPACK_IMPORTED_MODULE_1__["Movie"](0, '', 0, '', 0, '');
        this.saved = false;
        this.movies = [];
    }
    movieformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // request and subscribe movies data from remote server
        var id = this.routeInfo.snapshot.params['id'];
        this.movieservice.getMovies().subscribe(function (data) {
            _this.movies = data;
        });
        // create movieForm
        this.movieForm = this.fb.group({
            movieName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), Object(_validators_charValidator__WEBPACK_IMPORTED_MODULE_4__["charValidator"])('char', /^[a-zA-Z_+\s]+$/)]],
            movieYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            movieDirector: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, Object(_validators_charValidator__WEBPACK_IMPORTED_MODULE_4__["charValidator"])('char', /^[a-zA-Z_+.\s]+$/)]],
            movieDesp: [''],
        });
        // request and update movie form by movie id
        this.movieservice.getMovie(id).subscribe(function (data) {
            _this.movie = data;
            _this.movieForm.reset({
                movieName: data.name,
                movieYear: data.year,
                movieDirector: data.director,
                movieDesp: data.desp,
            });
        });
    };
    // unsave movie info and leave current page
    movieformComponent.prototype.cancel = function () {
        this.router.navigateByUrl("/movie");
    };
    // save movie info
    movieformComponent.prototype.save = function () {
        var _this = this;
        this.saved = true;
        this.movie.name = this.movieForm.value.movieName;
        this.movie.year = this.movieForm.value.movieYear;
        this.movie.director = this.movieForm.value.movieDirector;
        this.movie.desp = this.movieForm.value.movieDesp;
        // save new movie info
        if (this.routeInfo.snapshot.params['id'] == 0) {
            this.movieservice.addMovie(this.movie).subscribe(function () {
                _this.router.navigateByUrl("/movie");
            });
        }
        // update movie info
        else {
            this.movieservice.updateMovie(this.movie, this.movie.id).subscribe(function () {
                _this.router.navigateByUrl("/movie");
            });
        }
        // this.movieForm.value.rating = this.movie.rating;
    };
    // receive rating value from heart component and update it
    movieformComponent.prototype.updateRating = function (newrating) {
        this.movie.rating = newrating;
    };
    movieformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movieform',
            template: __webpack_require__(/*! ./movieform.component.html */ "./src/app/movie/movieform/movieform.component.html"),
            styles: [__webpack_require__(/*! ./movieform.component.css */ "./src/app/movie/movieform/movieform.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], movieformComponent);
    return movieformComponent;
}());



/***/ }),

/***/ "./src/app/validators/charValidator.ts":
/*!*********************************************!*\
  !*** ./src/app/validators/charValidator.ts ***!
  \*********************************************/
/*! exports provided: charValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charValidator", function() { return charValidator; });
function charValidator(type, validatorReg) {
    return function (control) {
        var str = control.value;
        var res = {};
        res[type] = { str: str };
        var valid = validatorReg.test(str);
        return valid ? null : res;
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenwei/Desktop/angular_movie-app_zoe/Angular-movie/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map