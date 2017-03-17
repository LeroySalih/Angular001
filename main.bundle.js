webpackJsonp([1,4],{

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService() {
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    UserService.prototype.loginUser = function (email, password) {
        this.currentUser.next({
            _id: 'qwerty1234',
            email: email,
            isTeacher: true,
            classId: '',
            schoolId: "58be6aab2f1a4a38daa4ca52"
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (msg) {
        console.log(msg);
    };
    LoggerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoggerService);
    return LoggerService;
}());
//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PupilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PupilService = (function () {
    function PupilService(http) {
        this.http = http;
        this.pupilUrl = "http://localhost:8082/pupils";
    }
    PupilService.prototype.getPupils = function (classId) {
        return this.http.get(this.pupilUrl + "/" + classId).map(this.extractData);
    };
    PupilService.prototype.saveScore = function (score) {
        var url = this.pupilUrl + "/pupil/" + score.pupilId + "/score";
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        score.level = Number(score.level);
        score.score = Number(score.score);
        return this.http.post(url, score, options)
            .map(this.extractData);
    };
    PupilService.prototype.extractData = function (res) {
        var data = res.json();
        console.log("QuizService::extractData received:", data);
        return data || {};
    };
    PupilService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PupilService);
    return PupilService;
    var _a;
}());
//# sourceMappingURL=service-pupil.service.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
        this.quizUrl = "";
        this.quizUrl = "http://localhost:8082/quizzes";
    }
    QuizService.prototype.getQuizes = function () {
        return this.http.get(this.quizUrl).map(this.extractData);
    };
    QuizService.prototype.getQuiz = function (quizId) {
        return this.http.get(this.quizUrl + "/" + quizId).map(this.extractData);
    };
    QuizService.prototype.createQuiz = function (createMsg) {
        console.log('SeviceQuiz', createMsg);
        //noinspection TypeScriptValidateTypes
        return this.http.post(this.quizUrl, createMsg)
            .map(this.extractData);
    };
    QuizService.prototype.extractData = function (res) {
        var data = res.json();
        //  console.log(`QuizService::extractData received:`, data)
        return data || {};
    };
    QuizService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuizService);
    return QuizService;
    var _a;
}());
//# sourceMappingURL=service-quiz.service.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchoolService = (function () {
    function SchoolService(http) {
        this.http = http;
        this.schools = []; // [{name : "BISAK"}, {name: "DBGS"}]
        this.schoolsURL = "";
        this.schoolsURL = "http://localhost:8082/schools";
    }
    SchoolService.prototype.getSchools = function () {
        //noinspection TypeScriptValidateTypes
        return this.http.get(this.schoolsURL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SchoolService.prototype.getSchool = function (schoolId) {
        //noinspection TypeScriptValidateTypes,TypeScriptValidateTypes
        return this.http.get(this.schoolsURL + "\\" + schoolId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SchoolService.prototype.extractData = function (res) {
        var data = res.json();
        //   console.log(`schoolService::extractData recieived:`, data)
        return data || {};
    };
    SchoolService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //   console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    SchoolService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SchoolService);
    return SchoolService;
    var _a;
}());
//# sourceMappingURL=school.service.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 444;


/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(622);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.names = ['leroy', 'george', 'salih'];
        //super();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   console.log("App subscribing to currentUser")
        this.userService.currentUser.subscribe(function (user) {
            //  console.log("App: new user detected", user);
            _this.currentUser = user;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log("App Unsubscribing to currentUser");
        this.userService.currentUser.unsubscribe();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(698),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_user_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hello_world_hello_world_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_item_user_item_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_list_user_list_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_add_user_add_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__logger_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_not_found_page_not_found_component__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_home_page_home_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_about_page_about_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_contact_page_contact_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_admin_page_admin_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__page_school_page_school_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_register_page_register_component__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__page_quiz_page_quiz_component__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__class_link_class_link_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__page_login_page_login_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_user_user_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_scores_page_scores_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__star_level_type_star_level_type_component__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__timer_timer_component__ = __webpack_require__(618);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_22__page_login_page_login_component__["a" /* PageLoginComponent */] },
    { path: 'school/:schoolId', component: __WEBPACK_IMPORTED_MODULE_18__page_school_page_school_component__["a" /* PageSchoolComponent */] },
    { path: 'quiz/:quizId', component: __WEBPACK_IMPORTED_MODULE_20__page_quiz_page_quiz_component__["a" /* PageQuizComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_19__page_register_page_register_component__["a" /* PageRegisterComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_15__page_about_page_about_component__["a" /* PageAboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_16__page_contact_page_contact_component__["a" /* PageContactComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__page_home_page_home_component__["a" /* PageHomeComponent */], data: [{ title: 'Maths All Stars' }]
    },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_13__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__hello_world_hello_world_component__["a" /* HelloWorldComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_item_user_item_component__["a" /* UserItemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_add_user_add_component__["a" /* UserAddComponent */],
                __WEBPACK_IMPORTED_MODULE_13__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__page_home_page_home_component__["a" /* PageHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__page_about_page_about_component__["a" /* PageAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__page_contact_page_contact_component__["a" /* PageContactComponent */],
                __WEBPACK_IMPORTED_MODULE_17__page_admin_page_admin_component__["a" /* PageAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_18__page_school_page_school_component__["a" /* PageSchoolComponent */],
                __WEBPACK_IMPORTED_MODULE_20__page_quiz_page_quiz_component__["a" /* PageQuizComponent */],
                __WEBPACK_IMPORTED_MODULE_21__class_link_class_link_component__["a" /* ClassLinkComponent */],
                __WEBPACK_IMPORTED_MODULE_22__page_login_page_login_component__["a" /* PageLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__page_scores_page_scores_component__["a" /* PageScoresComponent */],
                __WEBPACK_IMPORTED_MODULE_25__star_level_type_star_level_type_component__["a" /* StarLevelTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__page_register_page_register_component__["a" /* PageRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__timer_timer_component__["a" /* TimerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdDialogModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__logger_service__["a" /* LoggerService */], __WEBPACK_IMPORTED_MODULE_23__service_user_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_class__ = __webpack_require__(605);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassLinkComponent; });
/* unused harmony export CreateMsg */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClassLinkComponent = (function () {
    function ClassLinkComponent() {
        this.onCreateQuiz = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    ClassLinkComponent.prototype.ngOnInit = function () {
    };
    ClassLinkComponent.prototype.handleCreateQuiz = function (f) {
        //console.log('Emitting ClassID', this.class._id);
        //console.log(f);
        var msg = { classId: this.class._id, payload: f };
        this.onCreateQuiz.emit(msg);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_class__["a" /* Class */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_class__["a" /* Class */]) === 'function' && _a) || Object)
    ], ClassLinkComponent.prototype, "class", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === 'function' && _b) || Object)
    ], ClassLinkComponent.prototype, "onCreateQuiz", void 0);
    ClassLinkComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-class-link',
            template: __webpack_require__(699),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], ClassLinkComponent);
    return ClassLinkComponent;
    var _a, _b;
}());
var CreateMsg = (function () {
    function CreateMsg(classId, payload) {
        this.classId = classId;
        this.payload = payload;
    }
    return CreateMsg;
}());
//# sourceMappingURL=class-link.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloWorldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
    };
    HelloWorldComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-hello-world',
            template: __webpack_require__(700),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
//# sourceMappingURL=hello-world.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
var Class = (function () {
    function Class(_id, name) {
        this._id = _id;
        this.name = name;
    }
    return Class;
}());
//# sourceMappingURL=class.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Score; });
var Score = (function () {
    function Score(_id, pupilId, level, type, score) {
        if (_id === void 0) { _id = ""; }
        if (pupilId === void 0) { pupilId = ""; }
        if (level === void 0) { level = 0; }
        if (type === void 0) { type = ""; }
        if (score === void 0) { score = 0; }
        this._id = _id;
        this.pupilId = pupilId;
        this.level = level;
        this.type = type;
        this.score = score;
    }
    return Score;
}());
//# sourceMappingURL=score.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageAboutComponent = (function () {
    function PageAboutComponent() {
    }
    PageAboutComponent.prototype.ngOnInit = function () {
    };
    PageAboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-about',
            template: __webpack_require__(701),
            styles: [__webpack_require__(681)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], PageAboutComponent);
    return PageAboutComponent;
}());
//# sourceMappingURL=page-about.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageAdminComponent = (function () {
    function PageAdminComponent() {
    }
    PageAdminComponent.prototype.ngOnInit = function () {
    };
    PageAdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-admin',
            template: __webpack_require__(702),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageAdminComponent);
    return PageAdminComponent;
}());
//# sourceMappingURL=page-admin.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageContactComponent = (function () {
    function PageContactComponent() {
    }
    PageContactComponent.prototype.ngOnInit = function () {
    };
    PageContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-contact',
            template: __webpack_require__(703),
            styles: [__webpack_require__(683)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], PageContactComponent);
    return PageContactComponent;
}());
//# sourceMappingURL=page-contact.component.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_school_school_service__ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageHomeComponent = (function () {
    function PageHomeComponent(route, schoolService) {
        this.schoolService = schoolService;
        console.log(route.snapshot.data[0].title);
        this.pageTitle = route.snapshot.data[0].title;
        this.schoolService = schoolService;
    }
    PageHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load schools list
        this.schoolService.getSchools()
            .subscribe(function (schools) {
            console.log("Received Schools", schools);
            _this.schools = schools;
        }, function (err) { console.log("Error Received"); }, function () { console.log("Completed"); });
    };
    PageHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-home',
            template: __webpack_require__(704),
            styles: [__webpack_require__(684)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_school_school_service__["a" /* SchoolService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_school_school_service__["a" /* SchoolService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_school_school_service__["a" /* SchoolService */]) === 'function' && _b) || Object])
    ], PageHomeComponent);
    return PageHomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=page-home.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageLoginComponent = (function () {
    function PageLoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.onNewUser = this.onNewUser.bind(this);
    }
    PageLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (user) {
            // console.log("page-login received new user",user)
            if (user) {
                //  console.log("Navigating to : /school ",user.schoolId)
                _this.router.navigate(['/school', user.schoolId]);
            }
        });
    };
    PageLoginComponent.prototype.ngOnDestroy = function () {
        //   this.userService.currentUser.unsubscribe()
    };
    PageLoginComponent.prototype.handleLogin = function () {
        this.userService.loginUser("leroysalih@bisak.org", "password");
    };
    PageLoginComponent.prototype.handleRegister = function () {
        this.router.navigate(['/register']);
    };
    // user service will publish new user...
    PageLoginComponent.prototype.onNewUser = function () {
        //this.router.navigate()
    };
    PageLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-login',
            template: __webpack_require__(705),
            styles: [__webpack_require__(685)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_user_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], PageLoginComponent);
    return PageLoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=page-login.component.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__(706),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_quiz_service_quiz_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_pupil_service_pupil_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_score__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_animations__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageQuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageQuizComponent = (function () {
    function PageQuizComponent(router, route, quizService, pupilsService) {
        this.router = router;
        this.route = route;
        this.quizService = quizService;
        this.pupilsService = pupilsService;
        this.quizId = "Not Set";
        this.schoolId = "Not Set";
        this.quiz = null;
        this.showQuestions = "hide";
        this.showAnswers = "hide";
        this.time = new Date((0 * 60 * 1000) + (5 * 1000));
        this.pupils = [];
        this.score = new __WEBPACK_IMPORTED_MODULE_4__models_score__["a" /* Score */]();
        this.handleShowAnswers = this.handleShowAnswers.bind(this);
        this.handleShowQuestions = this.handleShowQuestions.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    PageQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            //  console.log('QuizId: ', params['quizId']);
            _this.quizId = params['quizId'];
            _this.schoolId = params['schoolId'];
            console.log("School Id: " + _this.schoolId);
            // Load The quiz
            _this.quizService.getQuiz(_this.quizId)
                .subscribe(function (result) {
                //    console.log(`PageQuizComponent:: received:}`, result[0])
                _this.quiz = result[0];
                _this.showQuestions = 'show';
            });
        }, function (err) { }, function () { });
    };
    PageQuizComponent.prototype.ngOnDestroy = function () {
        this.stopTimer();
    };
    PageQuizComponent.prototype.handleShowQuestions = function () {
        this.showQuestions = (this.showQuestions == "show") ? "hide" : "show";
    };
    PageQuizComponent.prototype.handleShowAnswers = function () {
        this.showAnswers = (this.showAnswers == "show") ? "hide" : "show";
    };
    PageQuizComponent.prototype.handleBackToSchool = function () {
        this.router.navigate(['/school', this.schoolId]);
    };
    PageQuizComponent.prototype.getTime = function () {
        var mins = (this.time.getMinutes() < 10) ? '0' + this.time.getMinutes() : this.time.getMinutes().toString();
        var secs = (this.time.getSeconds() < 10) ? '0' + this.time.getSeconds() : this.time.getSeconds().toString();
        return mins + ":" + secs;
    };
    PageQuizComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.time.getMinutes() == 0 && _this.time.getSeconds() == 0) {
                _this.stopTimer();
                console.log("Boom...");
            }
            else {
                console.log("The time is " + _this.time.getMinutes() + ":" + _this.time.getSeconds());
                _this.time.setSeconds(_this.time.getSeconds() - 1);
            }
        }, 1000);
    };
    PageQuizComponent.prototype.stopTimer = function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };
    PageQuizComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-quiz',
            template: __webpack_require__(707),
            styles: [__webpack_require__(687)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_quiz_service_quiz_service__["a" /* QuizService */], __WEBPACK_IMPORTED_MODULE_3__service_pupil_service_pupil_service__["a" /* PupilService */]],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__router_animations__["a" /* routerTransition */])(),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* trigger */])('showQuestions', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* state */])('hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ transform: 'translateX(100%)', opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* state */])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* transition */])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ transform: 'translateX(100%)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* animate */])(500)
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* transition */])('* => void', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ transform: 'translateX(-100%)' }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* animate */])(500)
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* transition */])('hide => show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* animate */])('500ms ease-in')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* transition */])('show => hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* animate */])('500ms ease-in')),
                ])
            ],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_quiz_service_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_quiz_service_quiz_service__["a" /* QuizService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_pupil_service_pupil_service__["a" /* PupilService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_pupil_service_pupil_service__["a" /* PupilService */]) === 'function' && _d) || Object])
    ], PageQuizComponent);
    return PageQuizComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=page-quiz.component.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageRegisterComponent = (function () {
    function PageRegisterComponent() {
    }
    PageRegisterComponent.prototype.ngOnInit = function () {
    };
    PageRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-register',
            template: __webpack_require__(708),
            styles: [__webpack_require__(688)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [])
    ], PageRegisterComponent);
    return PageRegisterComponent;
}());
//# sourceMappingURL=page-register.component.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_school_school_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_quiz_service_quiz_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSchoolComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageSchoolComponent = (function () {
    function PageSchoolComponent(router, route, schoolService, quizService) {
        this.router = router;
        this.route = route;
        this.schoolService = schoolService;
        this.quizService = quizService;
        this.onCreateQuiz = this.onCreateQuiz.bind(this);
    }
    PageSchoolComponent.prototype.onCreateQuiz = function (msg) {
        //   console.log('Creating Quiz for classId ', msg.classId)
        var _this = this;
        this.quizService.createQuiz(msg)
            .subscribe(function (result) {
            //       console.log(`Quiz ID: ${result._id} returned`);
            _this.router.navigate(['/quiz',
                result["_id"],
                { schoolId: _this.school["_id"] }]);
        });
        //});
    };
    PageSchoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            //      console.log(`Receieved Params: ${params['schoolId']}`);
            _this.schoolService.getSchool(params['schoolId'])
                .subscribe(function (data) {
                //           console.log (`Assigning ${data[0]} to this.school`)
                //           console.log(data)
                _this.school = data[0];
            });
        });
    };
    PageSchoolComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-school',
            template: __webpack_require__(709),
            styles: [__webpack_require__(689)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_school_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_3__service_quiz_service_quiz_service__["a" /* QuizService */]],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_school_school_service__["a" /* SchoolService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_school_school_service__["a" /* SchoolService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_quiz_service_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_quiz_service_quiz_service__["a" /* QuizService */]) === 'function' && _d) || Object])
    ], PageSchoolComponent);
    return PageSchoolComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=page-school.component.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_pupil_service_pupil_service__ = __webpack_require__(417);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageScoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageScoresComponent = (function () {
    function PageScoresComponent(pupilsService) {
        this.pupilsService = pupilsService;
        this.saveForm = this.saveForm.bind(this);
    }
    PageScoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load Pupils for the class
        this.pupilsService.getPupils(this.classId)
            .subscribe(function (result) {
            console.log("Loading Pupils.", result);
            _this.pupils = result;
        });
    };
    PageScoresComponent.prototype.saveForm = function (score) {
        score.quizId = this.quizId;
        console.log('Saving Score', score);
        this.pupilsService.saveScore(score).subscribe(function (result) {
            console.log(result);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', String)
    ], PageScoresComponent.prototype, "quizId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', String)
    ], PageScoresComponent.prototype, "classId", void 0);
    PageScoresComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-page-scores',
            template: __webpack_require__(710),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_pupil_service_pupil_service__["a" /* PupilService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_pupil_service_pupil_service__["a" /* PupilService */]) === 'function' && _a) || Object])
    ], PageScoresComponent);
    return PageScoresComponent;
    var _a;
}());
//# sourceMappingURL=page-scores.component.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarLevelTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarLevelTypeComponent = (function () {
    function StarLevelTypeComponent() {
    }
    StarLevelTypeComponent.prototype.ngOnInit = function () {
        //   console.log("StarLevelTypeComponent::", this.questions)
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', String)
    ], StarLevelTypeComponent.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', Array)
    ], StarLevelTypeComponent.prototype, "questions", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], StarLevelTypeComponent.prototype, "showAnswers", void 0);
    StarLevelTypeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-star-level-type',
            template: __webpack_require__(711),
            styles: [__webpack_require__(691)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* trigger */])('showAnswers', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* state */])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* state */])('hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* transition */])('hide => show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* animate */])('500ms ease-in')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* transition */])('show => hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* animate */])('500ms ease-in'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], StarLevelTypeComponent);
    return StarLevelTypeComponent;
}());
//# sourceMappingURL=star-level-type.component.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerComponent = (function () {
    function TimerComponent() {
        this.time = new Date((0 * 60 * 1000) + (5 * 1000));
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    TimerComponent.prototype.ngOnInit = function () { };
    TimerComponent.prototype.getTime = function () {
        var mins = (this.time.getMinutes() < 10) ? '0' + this.time.getMinutes() : this.time.getMinutes().toString();
        var secs = (this.time.getSeconds() < 10) ? '0' + this.time.getSeconds() : this.time.getSeconds().toString();
        return mins + ":" + secs;
    };
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.time.getMinutes() == 0 && _this.time.getSeconds() == 0) {
                _this.stopTimer();
                console.log("Boom...");
            }
            else {
                console.log("The time is " + _this.time.getMinutes() + ":" + _this.time.getSeconds());
                _this.time.setSeconds(_this.time.getSeconds() - 1);
            }
        }, 1000);
    };
    TimerComponent.prototype.stopTimer = function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    };
    TimerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-timer',
            template: __webpack_require__(712),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], TimerComponent);
    return TimerComponent;
}());
//# sourceMappingURL=timer.component.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_service__ = __webpack_require__(416);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAddComponent = (function () {
    function UserAddComponent(logger) {
        this.logger = logger;
        this.onAddUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.logger.log("in ngInit ");
    };
    UserAddComponent.prototype.addArticle = function (title, link) {
        console.log("Adding article title: " + title.value);
        this.onAddUser.emit(title.value);
        return false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(), 
        __metadata('design:type', Object)
    ], UserAddComponent.prototype, "onAddUser", void 0);
    UserAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-user-add',
            template: __webpack_require__(713),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__logger_service__["a" /* LoggerService */]) === 'function' && _a) || Object])
    ], UserAddComponent);
    return UserAddComponent;
    var _a;
}());
//# sourceMappingURL=user-add.component.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserItemComponent = (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', String)
    ], UserItemComponent.prototype, "name", void 0);
    UserItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-user-item',
            template: __webpack_require__(714),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserItemComponent);
    return UserItemComponent;
}());
//# sourceMappingURL=user-item.component.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', Array)
    ], UserListComponent.prototype, "names", void 0);
    UserListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__(715),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}());
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".class {\n  margin : 5px;\n  min-width : 200px;\n  max-width : 250px;\n  -webkit-box-flex : 1;\n      -ms-flex : 1;\n          flex : 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#login_container {\n  display : -webkit-box;\n  display : -ms-flexbox;\n  display : flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n#loginForm {\n  display : -webkit-box;\n  display : -ms-flexbox;\n  display : flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left : 20px\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "@font-face{\n  font-family: 'DigitalFont';\n  src: url('/fonts/digital-7.ttf') format('truetype')\n}\n\n.countdownTimer {\n  font-family: 'DigitalFont';\n  font-size: large;\n}\n\n.starLevel {\n  display : -webkit-box;\n  display : -ms-flexbox;\n  display : flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding  :1px;\n  margin:5px;\n  min-width:1200px;\n}\n\n.starLevelIndicator {\n  min-width : 40px;\n  background-color: #00acc1;\n  padding:1px;\n}\n\n\n.starLevelQuestions {\n  padding:20px;\n  width:100%\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#classList {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width:100%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".starLevelType {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.questionType {\n  min-width : 25px;\n  font-weight: 400;\n  font-size: large;\n}\n\n.questions{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width:100%;\n  -ms-flex-pack:distribute;\n      justify-content:space-around;\n  padding:5px;\n}\n.question {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  font-size  :large;\n\n}\n.answer {\n  color: red;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "@font-face{\n  font-family: 'DigitalFont';\n  src: url('/fonts/digital-7.ttf') format('truetype')\n}\n\n.countdownTimer {\n  font-family: 'DigitalFont';\n  font-size: large;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div id=\"viewPort\">\n<header >\n  <a routerLink=\"/\">Home</a>\n\n  <a routerLink=\"/contact\">Contact</a>\n  <a routerLink=\"/about\">About</a>\n</header>\n<main>\n    <router-outlet></router-outlet>\n</main>\n<footer>\n   This is the footer...\n</footer>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"class\">\n  <form #f=\"ngForm\" (ngSubmit)=\"handleCreateQuiz(f.value)\">\n  <md-card-header>\n    <md-card-title>{{class.name}}</md-card-title>\n    <md-card-subtitle>Last Played:</md-card-subtitle>\n  </md-card-header>\n  <md-card-content>\n    <md-select placeholder=\"level\" name=\"level\" ngModel>\n      <md-option [value]=\"4\">Level 4</md-option>\n      <md-option [value]=\"5\">Level 5</md-option>\n      <md-option [value]=\"6\">Level 6</md-option>\n    </md-select>\n    <md-slide-toggle value=\"true\" name=\"addition\" ngModel>Addition</md-slide-toggle>\n    <md-slide-toggle value=\"true\" name=\"subtraction\" ngModel>Subtraction</md-slide-toggle>\n    <md-slide-toggle value=\"true\" name=\"multiplication\" ngModel>Multiplication</md-slide-toggle>\n    <md-slide-toggle value=\"true\" name=\"division\" ngModel>Division</md-slide-toggle>\n  </md-card-content>\n  <md-card-actions>\n    <button md-raised-button (click)=\"handleCreateQuiz(f.value);false;\" type=\"button\">Create Quiz</button>\n  </md-card-actions>\n  </form>\n</md-card>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<p>\n  hello-world works!\n</p>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<p >\n  This is the About Page\n</p>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<p>\n  Admin page\n</p>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<p >\n  This is the contact page\n</p>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div>\n  Log On Page Goes Here {{pageTitle}}\n  <ul>\n    <a *ngFor=\"let school of schools\"\n       [routerLink]=\"['/school', school._id]\">\n      {{ school.name }}\n    </a>\n\n  </ul>\n  <button md-button>Testing</button>\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div id=\"login_container\" >\n  <img id=\"login_logo\" src=\"/img/MathAllStars_Logo.png\"/>\n  <div id=\"loginForm\">\n    <form>\n      <div>\n        <md-input-container class=\"example-full-width\">\n          <input mdInput placeholder=\"Email\">\n        </md-input-container>\n      </div>\n      <div>\n        <md-input-container class=\"example-full-width\">\n          <input type=\"password\" mdInput placeholder=\"Password\">\n        </md-input-container>\n      </div>\n      <div>\n        <md-slide-toggle [color]=\"'primary'\">Remember Me</md-slide-toggle>\n      </div>\n      <div>\n        <button md-button (click)=\"handleLogin(); false\">Login</button>\n        <button md-button (click)=\"handleRegister(); false\">Register</button>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found\n</p>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div *ngIf=\"!this.quiz\">\n    No quiz found\n  </div>\n  <div *ngIf=\"this.quiz\">\n  <div>\n    <app-timer></app-timer>\n    <button md-raised-button (click)=\"handleShowQuestions()\">Show Questions</button>\n    <button md-raised-button (click)=\"handleShowAnswers()\">Show Answers</button>\n    <button md-raised-button >Scores</button>\n    <button md-raised-button (click)=\"handleBackToSchool()\">Back to School</button>\n  </div>\n\n  <div *ngFor=\"let starLevel of this.quiz.starLevels\">\n    <!-- StarLevel -->\n\n      <md-card [@showQuestions]=\"this.showQuestions\" class=\"starLevel\">\n\n        <div class=\"starLevelIndicator\">{{starLevel.stars}}\n\n        </div>\n\n        <div class=\"starLevelQuestions\">\n\n          <app-star-level-type type=\"+\"\n                               [questions]=\"starLevel.additionQuestions\"\n                               [showAnswers]=\"this.showAnswers\">\n          </app-star-level-type>\n          <app-star-level-type type=\"-\"\n                               [questions]=\"starLevel.subtractionQuestions\"\n                               [showAnswers]=\"this.showAnswers\">\n          </app-star-level-type>\n          <app-star-level-type type=\"*\"\n                               [questions]=\"starLevel.multiplicationQuestions\"\n                               [showAnswers]=\"this.showAnswers\">\n          </app-star-level-type>\n          <app-star-level-type type=\"/\"\n                               [questions]=\"starLevel.divisionQuestions\"\n                               [showAnswers]=\"this.showAnswers\">\n          </app-star-level-type>\n\n        </div>\n      </md-card>\n  </div>\n    Displaying QuizId : {{this.quiz._id}}\n    Displaying ClassId  : {{this.quiz.classId}}\n    Created : {{this.quiz.created}}\n  </div>\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-register works!\n</p>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div *ngIf=\"school\">\n    <h2>Quizzes for : {{school.name}}</h2>\n    <div id=\"classList\">\n      <app-class-link *ngFor=\"let class of school.classes\"\n                      [class]=\"class\"\n                      (onCreateQuiz)=\"onCreateQuiz($event)\">\n\n      </app-class-link>\n    </div>\n  </div>\n\n  <div *ngIf=\"!school\">\n    no school found\n  </div>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "\n<form #f=\"ngForm\" (ngSubmit)=\"saveForm(f.value)\">\n  <div>\n    <br/>\n    <md-select placeholder=\"Pupil\" name=\"pupilId\" ngModel>\n      <md-option *ngFor=\"let pupil of this.pupils\" value=\"{{pupil._id}}\">{{pupil.name}}</md-option>\n    </md-select>\n    <md-select placeholder=\"level\" name=\"level\" ngModel>\n      <md-option value=\"1\">1 Star</md-option>\n      <md-option value=\"2\">2 Star</md-option>\n      <md-option value=\"3\">3 Star</md-option>\n      <md-option value=\"4\">4 Star</md-option>\n      <md-option value=\"5\">5 Star</md-option>\n    </md-select>\n    <md-select placeholder=\"type\" name=\"type\" ngModel>\n      <md-option value=\"addition\">Addition</md-option>\n      <md-option value=\"subtraction\">Subtraction</md-option>\n      <md-option value=\"multiplication\">Multiplication</md-option>\n      <md-option value=\"division\">Division</md-option>\n    </md-select>\n    <md-select placeholder=\"score\" name=\"score\" ngModel>\n      <md-option value=\"1\">1</md-option>\n      <md-option value=\"2\">2</md-option>\n      <md-option value=\"3\">3</md-option>\n      <md-option value=\"4\">4</md-option>\n      <md-option value=\"5\">5</md-option>\n    </md-select>\n    <button type=\"submit\" md-raised-button >Save</button>\n  </div>\n</form>\n\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"starLevelType\" *ngIf=\"this.questions.length\">\n  <div class=\"questionType\">{{this.type}}</div>\n\n  <div class=\"questions\">\n    <div *ngFor=\"let question of this.questions\" class=\"question\">\n      <div > {{question.question}}\n        <span [@showAnswers]=\"this.showAnswers\" class=\"answer\">{{question.answer}}</span>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div>\n  <span  class=\"countdownTimer\">{{this.getTime()}}</span>\n  <button md-raised-button (click)=\"startTimer(); false\">Start Timer</button>\n  <button md-raised-button (click)=\"stopTimer(); false\">Stop Timer</button>\n\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<form>\n  <h1>Add a user</h1>\n  <div class=\"field\">\n    <label for=\"title\">Title:</label>\n    <input name=\"title\" #newtitle> <!-- changed -->\n  </div>\n  <div class=\"field\">\n    <label for=\"link\">Link:</label>\n    <input name=\"link\" #newlink> <!-- changed -->\n  </div>\n  <button (click)=\"addArticle(newtitle, newlink)\"\n          class=\"ui positive right floated button\">\n    Submit link\n  </button>\n</form>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<p>\n  user-item works {{name}}!\n</p>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<ul>\n  <app-user-item *ngFor=\"let name of names\" [name]=\"name\"></app-user-item>\n</ul>\n\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(445);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;

function routerTransition() {
    return slideToLeft();
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* trigger */])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* animate */])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ })

},[759]);
//# sourceMappingURL=main.bundle.js.map