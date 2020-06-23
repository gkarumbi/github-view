"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GithubconnectService = void 0;
var core_1 = require("@angular/core");
var GithubconnectService = /** @class */ (function () {
    function GithubconnectService(http) {
        this.http = http;
    }
    GithubconnectService.prototype.getGitHubInfo = function () {
        return this.http.get('https://api.github.com/users/gkarumbi?access_token=f58ee917fa6a74198de3eed284bfb62b89bb47cf');
    };
    GithubconnectService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GithubconnectService);
    return GithubconnectService;
}());
exports.GithubconnectService = GithubconnectService;
