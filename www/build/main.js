webpackJsonp([3],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_associations_associations__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AssociationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssociationsPage = /** @class */ (function () {
    function AssociationsPage(navCtrl, userProvider, associationProvider) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.associationProvider = associationProvider;
        this.listAssociations = Array();
        this.userAssociation = Array();
        this.subscriber = false;
    }
    AssociationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssociationsPage');
    };
    AssociationsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.associationProvider.getAssociations().subscribe(function (data) {
            _this.listAssociations = data;
            _this.isSuscriber();
        });
    };
    AssociationsPage.prototype.subscribe = function (association) {
        if (association.isSubscriber == true) {
            association.isSubscriber = false;
            this.userProvider.Unsubscribe(association);
        }
        else {
            this.userProvider.Subscribe(association);
            association.isSubscriber = true;
        }
    };
    AssociationsPage.prototype.isSuscriber = function () {
        var _this = this;
        this.userProvider.getUser().subscribe(function (user) {
            _this.listAssociations.forEach(function (association) {
                console.log(association.id);
                if (user.associations.find(function (x) { return x == association.id; })) {
                    association.isSubscriber = true;
                }
                else {
                    association.isSubscriber = false;
                }
                console.log(association.isSubscriber);
            });
        });
    };
    AssociationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-associations',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\associations\associations.html"*/'<!--\n\n  Generated template for the AssociationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Associations</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-card *ngFor="let association of listAssociations">\n\n      <ion-card-title>{{association.Name}}</ion-card-title>\n\n      <ion-card-header>\n\n        {{association.Description}}\n\n        {{association.id}}\n\n\n\n\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-icon *ngIf="!association.isSubscriber" (click)="subscribe(association)" name="checkmark" type="primary"></ion-icon>\n\n        <ion-icon *ngIf="association.isSubscriber" (click)="subscribe(association)" name="checkmark-circle" type="secondary"></ion-icon>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\associations\associations.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_associations_associations__["a" /* AssociationsProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_associations_associations__["a" /* AssociationsProvider */]])
    ], AssociationsPage);
    return AssociationsPage;
}());

//# sourceMappingURL=associations.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_authService__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthPage = /** @class */ (function () {
    function AuthPage(navCtrl, navParams, fb, aServ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.aServ = aServ;
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthPage');
    };
    AuthPage.prototype.doConnection = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.aServ.oAuthLogin(credentials).then(function (success) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log("ne marche pas");
        });
    };
    AuthPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\auth\auth.html"*/'<!--\n\n  Generated template for the AuthPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Connexion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <form (ngSubmit)="doConnection()" [formGroup]="loginForm">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="text" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label floating>Mot de passe</ion-label>\n\n        <ion-input formControlName="password" type="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <div padding style="text-align: center">\n\n        <button ion-button (click)="doConnection()">Connexion</button>\n\n        <p>ou</p>\n\n        <button ion-button (click)="signUp()" >Inscription</button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\auth\auth.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_authService__["a" /* AuthService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_authService__["a" /* AuthService */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sign_up_sign_up__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, signUpProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signUpProvider = signUpProvider;
        this.user = {};
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.doRegister = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.signUpProvider.register(user);
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    console.log(result);
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  <ion-content padding>\n  \n      <ion-item>\n          <ion-label floating>Prénom</ion-label>\n          <ion-input type="email" [(ngModel)]="user.firstName"></ion-input>\n        </ion-item>\n\n      <ion-item>\n          <ion-label floating>Nom</ion-label>\n          <ion-input type="email" [(ngModel)]="user.familyName"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label floating>Email Universitaire</ion-label>\n        <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label floating>Mot de passe</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n\n      <div padding style="text-align: center">\n        <button ion-button (click)="doRegister(user)">inscription</button>\n      </div>\n      \n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_sign_up_sign_up__["a" /* SignUpProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 230;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/associations/associations.module": [
		597,
		2
	],
	"../pages/auth/auth.module": [
		598,
		1
	],
	"../pages/sign-up/sign-up.module": [
		599,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 285;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_compat_add_operator_map__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_compat_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_compat_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AssociationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AssociationsProvider = /** @class */ (function () {
    function AssociationsProvider(http, firestore) {
        this.http = http;
        this.firestore = firestore;
        console.log('Hello AssociationsProvider Provider');
    }
    AssociationsProvider.prototype.getAssociations = function () {
        var listAsso = this.firestore.collection('associations');
        return listAsso.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
        //return this.firestore.collection<any>('associations/').valueChanges();
    };
    AssociationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["AngularFirestore"]])
    ], AssociationsProvider);
    return AssociationsProvider;
}());

//# sourceMappingURL=associations.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, firestore, afAuth) {
        this.http = http;
        this.firestore = firestore;
        this.afAuth = afAuth;
        this.userId = this.afAuth.auth.currentUser.uid;
    }
    UserProvider.prototype.getUser = function () {
        var listAsso = this.firestore.collection("users").doc("" + this.userId);
        return listAsso.valueChanges().map(function (a) {
            return a;
        });
    };
    UserProvider.prototype.Subscribe = function (association) {
        var userRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection("users").doc("" + this.userId);
        userRef.update({ associations: __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"].FieldValue.arrayUnion(association.id) });
    };
    UserProvider.prototype.Unsubscribe = function (association) {
        var userRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection("users").doc("" + this.userId);
        userRef.update({ associations: __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"].FieldValue.arrayRemove(association.id) });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SignUpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SignUpProvider = /** @class */ (function () {
    function SignUpProvider(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
    }
    SignUpProvider.prototype.register = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    SignUpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"]])
    ], SignUpProvider);
    return SignUpProvider;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    var ListPage_1;
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(466);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_associations_associations__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_associations_associations__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user_user__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_sign_up_sign_up__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_associations_associations__["a" /* AssociationsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/associations/associations.module#AssociationsPageModule', name: 'AssociationsPage', segment: 'associations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["AngularFireDatabaseModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_associations_associations__["a" /* AssociationsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_associations_associations__["a" /* AssociationsProvider */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_17__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_sign_up_sign_up__["a" /* SignUpProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_compat_add_operator_switchMap__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_compat_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_compat_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_compat_add_observable_of__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_compat_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_compat_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.user$ = this.afAuth.authState.switchMap(function (user) {
            if (user) {
                return _this.db.doc("/users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(null);
            }
        });
    }
    AuthService.oAuthLogin = function (credentials) {
        throw new Error("Method not implemented.");
    };
    AuthService.prototype.oAuthLogin = function (values) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(values.email, values.password)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.db.doc("/users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            roles: {
                student: true
            },
            associations: []
        };
        return userRef.set(data, { merge: true });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authService.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_associations_associations__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__["a" /* AuthPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Associations', component: __WEBPACK_IMPORTED_MODULE_7__pages_associations_associations__["a" /* AssociationsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            //firebase.initializeApp(environment.firebase);
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n\n\n\n\n\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDLBMOYZKLj4iuubjTp018f_YZJRT0HBLA",
        authDomain: "projetcommun-c454f.firebaseapp.com",
        databaseURL: "https://projetcommun-c454f.firebaseio.com",
        projectId: "projetcommun-c454f",
        storageBucket: "projetcommun-c454f.appspot.com",
        messagingSenderId: "768179778069"
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map