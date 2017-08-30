"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var index_1 = require("../_constants/index");
var ApiCaller = (function () {
    function ApiCaller(http) {
        this.http = http;
    }
    ApiCaller.prototype.get = function (url) {
        return this.genericRequest('get', url);
    };
    ApiCaller.prototype.post = function (url, data) {
        return this.genericRequest('post', url, data);
    };
    ApiCaller.prototype.put = function (url, data) {
        return this.genericRequest('put', url, data);
    };
    ApiCaller.prototype.delete = function (url) {
        return this.genericRequest('delete', url);
    };
    ApiCaller.prototype.genericRequest = function (method, url, body) {
        var args = [
            index_1.CONST.apiUrl(url),
            body,
            this.jwt()
        ].filter(function (par) { return par; });
        return (_a = this.http)[method].apply(_a, args).map(this.extractData);
        var _a;
    };
    ApiCaller.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    ApiCaller.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return ApiCaller;
}());
ApiCaller = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiCaller);
exports.ApiCaller = ApiCaller;
//# sourceMappingURL=api-caller.service.js.map