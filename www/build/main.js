webpackJsonp([9],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailAssoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
 * Generated class for the DetailAssoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailAssoPage = /** @class */ (function () {
    function DetailAssoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.association = navParams.get('association');
    }
    DetailAssoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailAssoPage');
    };
    DetailAssoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-asso',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\detail-asso\detail-asso.html"*/'<!--\n\n  Generated template for the DetailAssoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{association.Name}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  {{association.Description}}\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\detail-asso\detail-asso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailAssoPage);
    return DetailAssoPage;
}());

//# sourceMappingURL=detail-asso.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_authService__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(175);
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
    function AuthPage(navCtrl, navParams, formBuilder, toastCtrl, aServ, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.aServ = aServ;
        this.ngZone = ngZone;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Votre email est obligatoire.' },
                { type: 'pattern', message: 'Entrez un email valide, Merci!' }
            ],
            'password': [
                { type: 'required', message: 'Votre mot de passe est obligatoire.' },
            ]
        };
        this.validations_form = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('(^[a-zA-Z0-9_.+-]+@etu.univ-paris1.fr+$)|(^[a-zA-Z0-9_.+-]+@univ-paris1.fr+$)|(^[a-zA-Z0-9_.+-]+@admin.fr+$)')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
            ]))
        });
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthPage');
    };
    AuthPage.prototype.doConnection = function () {
        var _this = this;
        var data = this.validations_form.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.aServ.oAuthLogin(credentials).then(function (success) {
            _this.ngZone.run(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            });
            _this.toastCtrl.create({
                message: 'Bienvenue',
                duration: 2000
            }).present();
        }, function (err) {
            _this.toastCtrl.create({
                message: err.message,
                duration: 2000
            }).present();
        });
    };
    AuthPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\auth\auth.html"*/'<!--\n\n  Generated template for the AuthPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Connexion</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form class="form" [formGroup]="validations_form" (ngSubmit)="doConnection()">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Email universitaire</ion-label>\n\n        <ion-input type="email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.email">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Mot de passe</ion-label>\n\n        <ion-input type="password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.password">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <div padding style="text-align: center">\n\n        <button ion-button [disabled]="!validations_form.valid" (click)="doConnection()">Connexion</button>\n\n        <p>Si vous n\'êtes pas inscrits ?</p>\n\n        <button ion-button (click)="signUp()" >Inscription</button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\auth\auth.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_authService__["a" /* AuthService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_authService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAssoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_associations_associations__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_utils_Association__ = __webpack_require__(565);
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
 * Generated class for the AddAssoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAssoPage = /** @class */ (function () {
    function AddAssoPage(navCtrl, navParams, userProvider, associationProvider, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.associationProvider = associationProvider;
        this.formBuilder = formBuilder;
        this.association = new __WEBPACK_IMPORTED_MODULE_5__assets_utils_Association__["a" /* Association */]();
        this.userProvider.getUser().subscribe(function (data) {
            _this.idAdminAsso = data.uid;
        });
        this.validations_form = this.formBuilder.group({
            Name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](),
            Description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]()
        });
    }
    AddAssoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAssoPage');
    };
    AddAssoPage.prototype.buttonAddAsso = function () {
        this.association.idAdminAsso = this.idAdminAsso;
        this.associationProvider.addAsso(this.association);
        this.navParams.get("parentPage").update();
        this.navCtrl.pop();
    };
    AddAssoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-asso',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\add-asso\add-asso.html"*/'<!--\n\n  Generated template for the AddAssoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ajout d\'une association</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form class="form" [formGroup]="validations_form" (ngSubmit)="buttonAddAsso()">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating color ="primary">Nom association</ion-label>\n\n        <ion-input type="text" formControlName="Name" [(ngModel)]="association.Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating color="primary">Description</ion-label>\n\n        <ion-input type="text" formControlName="Description" [(ngModel)]="association.Description"></ion-input>\n\n      </ion-item>\n\n      <button ion-button [disabled]="!validations_form.valid" color="primary">Ajouter association</button>\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\add-asso\add-asso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_associations_associations__["a" /* AssociationsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], AddAssoPage);
    return AddAssoPage;
}());

//# sourceMappingURL=add-asso.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_associations_associations__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_asso_detail_asso__ = __webpack_require__(115);
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
    function AssociationsPage(navCtrl, userProvider, associationProvider, popoverController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.associationProvider = associationProvider;
        this.popoverController = popoverController;
        this.listAssociations = Array();
        this.userAssociation = Array();
        this.subscriber = false;
        this.userProvider.getUser().subscribe(function (data) {
            _this.user = data;
            console.log(data);
        });
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
    AssociationsPage.prototype.getAssociationPage = function (association) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_asso_detail_asso__["a" /* DetailAssoPage */], { association: association });
    };
    AssociationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-associations',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\associations\associations.html"*/'<!--\n\n  Generated template for the AssociationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n  <ion-navbar >\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Associations</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-card *ngFor="let association of listAssociations" (click)="getAssociationPage(association)">\n\n      <ion-item-sliding  >\n\n        <ion-item >\n\n      <ion-card-title>{{association.Name}}</ion-card-title>\n\n      <ion-card-header>\n\n        {{association.Description}}\n\n        {{association.id}}\n\n        <p color="danger">{{user.email}}</p>\n\n\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-icon *ngIf="!association.isSubscriber" (click)="subscribe(association)" name="checkmark" type="primary"></ion-icon>\n\n        <ion-icon *ngIf="association.isSubscriber" (click)="subscribe(association)" name="checkmark-circle" type="secondary"></ion-icon>\n\n      </ion-card-content>\n\n        </ion-item>\n\n        <ion-item-options side="end" *ngIf="user.roles.admin == true ">\n\n          <button color="danger" ion-button>Supprimer</button>\n\n          <button color="primary" ion-button>Modifier</button>\n\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\associations\associations.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_associations_associations__["a" /* AssociationsProvider */]
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_associations_associations__["a" /* AssociationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
    ], AssociationsPage);
    return AssociationsPage;
}());

//# sourceMappingURL=associations.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sign_up_sign_up__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth__ = __webpack_require__(116);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, toastCtrl, signUpProvider, formBuilder, afa) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.signUpProvider = signUpProvider;
        this.formBuilder = formBuilder;
        this.afa = afa;
        this.user = {};
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Votre prénom est obligatoire.' },
                { type: 'minlength', message: 'Votre prénom doit comporter au moins 2 caractères.' },
                { type: 'pattern', message: 'Votre prénom doit contenir que des lettres!' }
            ],
            'lastName': [
                { type: 'required', message: 'Votre nom est obligatoire.' },
                { type: 'minlength', message: 'Votre nom doit comporter au moins 2 caractères.' },
                { type: 'pattern', message: 'Votre nom doit contenir que des lettres!' }
            ],
            'email': [
                { type: 'required', message: 'Votre email est obligatoire.' },
                { type: 'pattern', message: 'Entrez un email valide, Merci!' }
            ],
            'password': [
                { type: 'required', message: 'Votre mot de passe est obligatoire.' },
                { type: 'minlength', message: 'Le mot de passe doit comporter au moins 5 caractères.' },
                { type: 'pattern', message: 'Votre mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre.' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirmer le mot de passe est requis' },
                { type: 'validator', message: 'Les mots de passes sont déffirents attention!' }
            ]
        };
        this.validations_form = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('([a-zA-Z]+$)')
            ])),
            lastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('([a-zA-Z]+$)')
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('(^[a-zA-Z0-9_.+-]+@etu.univ-paris1.fr+$)|(^[a-zA-Z0-9_.+-]+@univ-paris1.fr+$)')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required
            ])),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required,])),
        }, {
            validator: this.matchingPasswords('password', 'confirm_password')
        });
    }
    SignUpPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: false
                };
            }
        };
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.doRegister = function (user) {
        var _this = this;
        if (this.validations_form.valid) {
            this.signUpProvider.register(user).then(function (value) {
                _this.toastCtrl.create({
                    message: 'Votre compte a été crée avec succès',
                    duration: 2000
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__auth_auth__["a" /* AuthPage */]);
            })
                .catch(function (err) {
                _this.toastCtrl.create({
                    message: err.message,
                    duration: 2000
                }).present();
            });
        }
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\sign-up\sign-up.html"*/'<!--\n\n  Generated template for the SignUpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Inscription</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <form class="form" [formGroup]="validations_form" (ngSubmit)="doRegister(user)">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating color ="primary">Prénom</ion-label>\n\n        <ion-input type="text" formControlName="name" [(ngModel)]="user.name"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.name">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Nom</ion-label>\n\n        <ion-input type="text" formControlName="lastName" [(ngModel)]="user.lastName"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.lastName">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'lastName\').hasError(validation.type) && (validations_form.get(\'lastName\').dirty || validations_form.get(\'lastName\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Email universitaire</ion-label>\n\n        <ion-input type="email" formControlName="email" [(ngModel)]="user.email"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.email">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Mot de passe</ion-label>\n\n        <ion-input type="password" formControlName="password" [(ngModel)]="user.password"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.password">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Confirmation de mot de passe</ion-label>\n\n        <ion-input type="password" formControlName="confirm_password"></ion-input>\n\n      </ion-item>\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.confirm_password">\n\n          <div class="error-message"\n\n            *ngIf="validations_form.get(\'confirm_password\').hasError(validation.type) && (validations_form.get(\'confirm_password\').dirty || validations_form.get(\'confirm_password\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <!-- These validations are for the form group -->\n\n      <div class="validation-errors">\n\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n\n          <div class="error-message"\n\n          *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').dirty || validations_form.get(\'matching_passwords\').touched)">\n\n            {{ validation.message }}\n\n          </div>\n\n        </ng-container>\n\n      </div>\n\n\n\n      <div padding style="text-align: center">\n\n        <button ion-button [disabled]="!validations_form.valid">inscription</button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n  <pre>{{validations_form.value | json}}</pre>\n\n</ion-content>'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_sign_up_sign_up__["a" /* SignUpProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAssociationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_association_tab_association__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_association_created_tab_association_created__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(63);
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
 * Generated class for the MyAssociationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAssociationsPage = /** @class */ (function () {
    function MyAssociationsPage(navCtrl, navParams, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.userProvider.getUser().subscribe(function (user) {
            if (user.roles.isAdminAsso == true) {
                _this.isAssociationCreator = true;
            }
            else {
                _this.isAssociationCreator = false;
            }
        });
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__tab_association_tab_association__["a" /* TabAssociationPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__tab_association_created_tab_association_created__["a" /* TabAssociationCreatedPage */];
    }
    MyAssociationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAssociationsPage');
    };
    MyAssociationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-associations',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\my-associations\my-associations.html"*/'<!--\n\n  Generated template for the MyAssociationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mes Associations</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-tabs>\n\n    <ion-tab tabTitle="Inscrits" tabIcon="contact" [root]="tab1"></ion-tab>\n\n    <ion-tab tabTitle="Crées" tabIcon="compass" [root]="tab2" *ngIf="isAssociationCreator"></ion-tab>\n\n  </ion-tabs>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\my-associations\my-associations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], MyAssociationsPage);
    return MyAssociationsPage;
}());

//# sourceMappingURL=my-associations.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabAssociationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_associations_associations__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_asso_detail_asso__ = __webpack_require__(115);
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
 * Generated class for the TabAssociationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabAssociationPage = /** @class */ (function () {
    function TabAssociationPage(navCtrl, navParams, userProvider, associationProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.associationProvider = associationProvider;
        this.listAssociations = Array();
        this.userProvider.getUser().subscribe(function (data) {
            data.associations.forEach(function (id) {
                console.log("coucou");
                console.log(id);
                _this.associationProvider.getAssociationsById(id).then(function (data) {
                    _this.listAssociations.push(data);
                });
            });
        });
    }
    TabAssociationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabAssociationPage');
    };
    TabAssociationPage.prototype.getAssociationPage = function (association) {
        console.log(association.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_asso_detail_asso__["a" /* DetailAssoPage */], { association: association });
    };
    TabAssociationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-association',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\tab-association\tab-association.html"*/'<!--\n\n  Generated template for the TabAssociationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card *ngFor="let association of listAssociations" (click)="getAssociationPage(association)">\n\n        <ion-card-title>\n\n            {{association.Name}}\n\n        </ion-card-title>\n\n        <ion-card-header>\n\n            {{ association.Description}}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\tab-association\tab-association.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_associations_associations__["a" /* AssociationsProvider */]])
    ], TabAssociationPage);
    return TabAssociationPage;
}());

//# sourceMappingURL=tab-association.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabAssociationCreatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_asso_add_asso__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_associations_associations__ = __webpack_require__(86);
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
 * Generated class for the TabAssociationCreatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabAssociationCreatedPage = /** @class */ (function () {
    function TabAssociationCreatedPage(navCtrl, navParams, userProvider, associationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.associationProvider = associationProvider;
        this.update();
    }
    TabAssociationCreatedPage.prototype.update = function () {
        var _this = this;
        this.userProvider.getUser().subscribe(function (data) {
            _this.associationProvider.getAssoCreatedByUser(data.uid).then(function (data) {
                console.log(data);
                _this.myAssociationsCreate = data;
            });
        });
    };
    TabAssociationCreatedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabAssociationCreatedPage');
    };
    TabAssociationCreatedPage.prototype.addAsso = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_asso_add_asso__["a" /* AddAssoPage */], { parentPage: this });
    };
    TabAssociationCreatedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-association-created',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\tab-association-created\tab-association-created.html"*/'<!--\n\n  Generated template for the TabAssociationCreatedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card *ngFor="let association of myAssociationsCreate">\n\n        <ion-card-title>{{association.Name}}</ion-card-title>\n\n        <ion-card-header>{{association.Description}}</ion-card-header>\n\n    </ion-card>\n\n\n\n    <ion-fab right bottom>\n\n        <button (click)="addAsso()" ion-fab color="primary">\n\n            <ion-icon name="add">\n\n            </ion-icon>\n\n        </button>\n\n\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\tab-association-created\tab-association-created.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_associations_associations__["a" /* AssociationsProvider */]])
    ], TabAssociationCreatedPage);
    return TabAssociationCreatedPage;
}());

//# sourceMappingURL=tab-association-created.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterCountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_parameter_count_parameter_count__ = __webpack_require__(303);
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
 * Generated class for the ParameterCountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParameterCountPage = /** @class */ (function () {
    function ParameterCountPage(navCtrl, navParams, toastCtrl, parameterCountProvider, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.parameterCountProvider = parameterCountProvider;
        this.formBuilder = formBuilder;
        this.user = {};
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Votre prénom est obligatoire.' },
                { type: 'minlength', message: 'Votre prénom doit comporter au moins 2 caractères.' },
                { type: 'pattern', message: 'Votre prénom doit contenir que des lettres!' }
            ],
            'lastName': [
                { type: 'required', message: 'Votre nom est obligatoire.' },
                { type: 'minlength', message: 'Votre nom doit comporter au moins 2 caractères.' },
                { type: 'pattern', message: 'Votre nom doit contenir que des lettres!' }
            ]
        };
        this.parameterCountProvider.getUser().subscribe(function (data) {
            _this.name = data.name;
            _this.lastName = data.lastName;
            _this.email = data.email;
        });
        this.validations_form = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('([a-zA-Z]+$)')
            ])),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(2),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('([a-zA-Z]+$)')
            ]))
        });
    }
    ParameterCountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParameterCountPage');
    };
    ParameterCountPage.prototype.modify = function (user) {
        var _this = this;
        if (this.validations_form.valid) {
            this.parameterCountProvider.modify(user).then(function (value) {
                _this.toastCtrl.create({
                    message: 'Votre nom et prénom ont été bien modfiés',
                    duration: 2000
                }).present();
            })
                .catch(function (err) {
                _this.toastCtrl.create({
                    message: err.message,
                    duration: 2000
                }).present();
            });
        }
    };
    ParameterCountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parameter-count',template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\parameter-count\parameter-count.html"*/'<!--\n  Generated template for the ParameterCountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mon compte</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p><strong>Prénom: </strong>{{name}}</p>\n  <p><strong>Nom: </strong>{{lastName}}</p>  \n  <p><strong>Email universitaire: </strong>{{email}}</p>\n<form class="form" [formGroup]="validations_form" (ngSubmit)="modify(user)">\n    <ion-list>\n      <ion-item>\n        <ion-label floating color ="primary">Prénom</ion-label>\n        <ion-input type="text" formControlName="name" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.name">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating color="primary">Nom</ion-label>\n        <ion-input type="text" formControlName="lastName" [(ngModel)]="user.lastName"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.lastName">\n          <div class="error-message"\n            *ngIf="validations_form.get(\'lastName\').hasError(validation.type) && (validations_form.get(\'lastName\').dirty || validations_form.get(\'lastName\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <div padding style="text-align: center">\n        <button ion-button [disabled]="!validations_form.valid">Modifier</button>\n      </div>\n    </ion-list>\n  </form>\n  <pre>{{validations_form.value | json}}</pre>    \n</ion-content>\n'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\pages\parameter-count\parameter-count.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_parameter_count_parameter_count__["a" /* ParameterCountProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ParameterCountPage);
    return ParameterCountPage;
}());

//# sourceMappingURL=parameter-count.js.map

/***/ }),

/***/ 240:
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
webpackEmptyAsyncContext.id = 240;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-asso/add-asso.module": [
		606,
		8
	],
	"../pages/associations/associations.module": [
		607,
		7
	],
	"../pages/auth/auth.module": [
		608,
		6
	],
	"../pages/detail-asso/detail-asso.module": [
		609,
		5
	],
	"../pages/my-associations/my-associations.module": [
		610,
		4
	],
	"../pages/parameter-count/parameter-count.module": [
		611,
		3
	],
	"../pages/sign-up/sign-up.module": [
		612,
		2
	],
	"../pages/tab-association-created/tab-association-created.module": [
		613,
		1
	],
	"../pages/tab-association/tab-association.module": [
		614,
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
webpackAsyncContext.id = 295;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
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
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.user$ = this.afAuth.authState.switchMap(function (user) {
            if (user) {
                return _this.db.doc("/users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(null);
            }
        });
    }
    SignUpProvider.prototype.sendVerificationMail = function () {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
        }).catch(function (err) {
            throw Error('échec lors de la transmission de mail de confirmation');
        });
    };
    SignUpProvider.prototype.register = function (user) {
        var _this = this;
        console.log(user);
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function (value) {
            _this.sendVerificationMail();
            _this.updateUserData(value.user, user);
        })
            .catch(function (err) {
            throw new Error('Cet email est déjà utilisé par un autre utilisateur');
        });
    };
    SignUpProvider.prototype.updateUserData = function (userAuth, user) {
        var userRef = this.db.doc("/users/" + userAuth.uid);
        var regex1 = RegExp('@etu.univ-paris1.fr*');
        if (regex1.test(userAuth.email)) {
            var data = {
                uid: userAuth.uid,
                email: userAuth.email,
                name: user.name,
                lastName: user.lastName,
                roles: {
                    student: true,
                    admin: false
                },
                associations: []
            };
            return userRef.set(data, { merge: true });
        }
        else {
            var data = {
                uid: userAuth.uid,
                email: userAuth.email,
                name: user.name,
                lastName: user.lastName,
                roles: {
                    student: true,
                    admin: false
                },
                associations: []
            };
            console.log(data);
            return userRef.set(data, { merge: true });
        }
    };
    SignUpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], SignUpProvider);
    return SignUpProvider;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterCountProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(178);
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
  Generated class for the ParameterCountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ParameterCountProvider = /** @class */ (function () {
    function ParameterCountProvider(platform, statusBar, splashScreen, http, afAuth, db) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.afAuth = afAuth;
        this.db = db;
        this.currentUser = null;
        this.initializeApp();
        this.authState = this.afAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    ParameterCountProvider.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            //firebase.initializeApp(environment.firebase);
            _this.splashScreen.hide();
        });
    };
    ParameterCountProvider.prototype.getAuthState = function () {
        return this.authState;
    };
    ParameterCountProvider.prototype.modify = function (user) {
        var userRef = this.db.doc("/users/" + this.currentUser.uid);
        return userRef.set(user, { merge: true });
    };
    ParameterCountProvider.prototype.getUser = function () {
        this.userId = this.afAuth.auth.currentUser.uid;
        var listAsso = this.db.collection("users").doc("" + this.userId);
        return listAsso.valueChanges().map(function (a) {
            return a;
        });
    };
    ParameterCountProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], ParameterCountProvider);
    return ParameterCountProvider;
}());

//# sourceMappingURL=parameter-count.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogOutProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
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
  Generated class for the LogOutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LogOutProvider = /** @class */ (function () {
    function LogOutProvider(http, afAuth) {
        var _this = this;
        this.http = http;
        this.afAuth = afAuth;
        this.currentUser = null;
        this.authState = this.afAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    LogOutProvider.prototype.getAuthState = function () {
        return this.authState;
    };
    LogOutProvider.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    LogOutProvider.prototype.isLoggedIn = function () {
        if (this.currentUser == null) {
            return false;
        }
        return true;
    };
    LogOutProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], LogOutProvider);
    return LogOutProvider;
}());

//# sourceMappingURL=log-out.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(475);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sign_up_sign_up__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_associations_associations__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_associations_associations__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_sign_up_sign_up__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_detail_asso_detail_asso__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_log_out_log_out__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_my_associations_my_associations__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tab_association_tab_association__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tab_association_created_tab_association_created__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_add_asso_add_asso__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_parameter_count_parameter_count__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_parameter_count_parameter_count__ = __webpack_require__(207);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_associations_associations__["a" /* AssociationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detail_asso_detail_asso__["a" /* DetailAssoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_my_associations_my_associations__["a" /* MyAssociationsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tab_association_tab_association__["a" /* TabAssociationPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tab_association_created_tab_association_created__["a" /* TabAssociationCreatedPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_asso_add_asso__["a" /* AddAssoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_parameter_count_parameter_count__["a" /* ParameterCountPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-asso/add-asso.module#AddAssoPageModule', name: 'AddAssoPage', segment: 'add-asso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/associations/associations.module#AssociationsPageModule', name: 'AssociationsPage', segment: 'associations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-asso/detail-asso.module#DetailAssoPageModule', name: 'DetailAssoPage', segment: 'detail-asso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-associations/my-associations.module#MyAssociationsPageModule', name: 'MyAssociationsPage', segment: 'my-associations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parameter-count/parameter-count.module#ParameterCountPageModule', name: 'ParameterCountPage', segment: 'parameter-count', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-association-created/tab-association-created.module#TabAssociationCreatedPageModule', name: 'TabAssociationCreatedPage', segment: 'tab-association-created', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-association/tab-association.module#TabAssociationPageModule', name: 'TabAssociationPage', segment: 'tab-association', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["AngularFireDatabaseModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_associations_associations__["a" /* AssociationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detail_asso_detail_asso__["a" /* DetailAssoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_my_associations_my_associations__["a" /* MyAssociationsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tab_association_tab_association__["a" /* TabAssociationPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tab_association_created_tab_association_created__["a" /* TabAssociationCreatedPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_asso_add_asso__["a" /* AddAssoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_parameter_count_parameter_count__["a" /* ParameterCountPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_associations_associations__["a" /* AssociationsProvider */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_17__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_sign_up_sign_up__["a" /* SignUpProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_log_out_log_out__["a" /* LogOutProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_parameter_count_parameter_count__["a" /* ParameterCountProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Association; });
var Association = /** @class */ (function () {
    function Association() {
    }
    return Association;
}());

//# sourceMappingURL=Association.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_compat_add_operator_switchMap__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_compat_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_compat_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_compat_add_observable_of__ = __webpack_require__(569);
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
    function AuthService(afAuth, db, ngZone) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.ngZone = ngZone;
        this.user$ = this.afAuth.authState.switchMap(function (user) {
            if (user) {
                return _this.db.doc("/users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(null);
            }
        });
    }
    AuthService.prototype.oAuthLogin = function (values) {
        return this.afAuth.auth.signInWithEmailAndPassword(values.email, values.password)
            .then(function (credential) {
            if (credential.user.emailVerified !== true && credential.user.email !== 'admin@admin.fr') {
                throw new Error('Merci de valider votre adresse email. Veuillez vérifier votre boîte de réception');
            }
        })
            .catch(function (err) {
            if (err.message == 'Merci de valider votre adresse email. Veuillez vérifier votre boîte de réception') {
                throw new Error(err.message);
            }
            throw new Error('Email universitaire ou mot de passe incorrect !');
        });
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.db.doc("/users/" + user.uid);
        console.log(user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            roles: {
                student: true
            }
        };
        return userRef.set(data, { merge: true });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authService.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_associations_associations__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_log_out_log_out__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_associations_my_associations__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_parameter_count_parameter_count__ = __webpack_require__(207);
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











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, logOutProvider, alertController) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.logOutProvider = logOutProvider;
        this.alertController = alertController;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__["a" /* AuthPage */];
        this.user = null;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Associations', component: __WEBPACK_IMPORTED_MODULE_7__pages_associations_associations__["a" /* AssociationsPage */] },
            { title: 'Mes associations', component: __WEBPACK_IMPORTED_MODULE_9__pages_my_associations_my_associations__["a" /* MyAssociationsPage */] }
        ];
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.logOutProvider.getAuthState().subscribe(function (user) { return _this.user = user; });
    };
    MyApp.prototype.parameterCount = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_parameter_count_parameter_count__["a" /* ParameterCountPage */]);
    };
    MyApp.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.logOutProvider.logout();
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_auth_auth__["a" /* AuthPage */]);
                return [2 /*return*/];
            });
        });
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>      \n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}        \n\n      </button>\n\n      <button menuClose ion-item (click)="parameterCount()">\n\n        <ion-icon name="build"></ion-icon> Mon compte\n\n      </button>      \n\n      <button menuClose ion-item (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon> Déconnexion\n\n      </button>      \n\n    </ion-list>    \n\n  </ion-content>\n\n  \n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\L3_MIAGE_S6\projet_commun\projetCommun\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_log_out_log_out__["a" /* LogOutProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 596:
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

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(300);
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
    UserProvider.prototype.getUserAux = function () {
        return this.firestore.doc("users/" + this.userId).valueChanges();
    };
    UserProvider.prototype.getUser = function () {
        this.userId = this.afAuth.auth.currentUser.uid;
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssociationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_compat_add_operator_map__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_compat_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_compat_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(300);
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
    AssociationsProvider.prototype.getAssociationsById = function (id) {
        console.log(id);
        return __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('associations/').doc(id).get().then(function (data) {
            return data.data();
        });
    };
    AssociationsProvider.prototype.addAsso = function (association) {
        var ref = this.firestore.collection('associations');
        ref.add({
            Name: association.Name,
            Description: association.Description,
            idAdminAsso: association.idAdminAsso
        });
    };
    AssociationsProvider.prototype.getAssoCreatedByUser = function (id) {
        var ref = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]().collection('associations');
        return ref.where('idAdminAsso', '==', id).get().then(function (data) {
            return data.docs.map(function (association) {
                return association.data();
            });
        });
    };
    AssociationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["AngularFirestore"]])
    ], AssociationsProvider);
    return AssociationsProvider;
}());

//# sourceMappingURL=associations.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map