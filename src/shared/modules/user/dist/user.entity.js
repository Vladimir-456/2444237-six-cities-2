"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModel = exports.UserEntity = void 0;
var hash_js_1 = require("../../helpers/hash.js");
var typegoose_1 = require("@typegoose/typegoose");
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity(userData) {
        var _this = _super.call(this) || this;
        _this.name = userData.name;
        _this.email = userData.email;
        _this.avatar = userData.avatar;
        _this.password = userData.password;
        _this.isPro = userData.isPro;
        return _this;
    }
    UserEntity.prototype.setPassword = function (password, salt) {
        this.password = hash_js_1.createSha256(password, salt);
    };
    UserEntity.prototype.verifyPassword = function (password, salt) {
        var hash = hash_js_1.createSha256(password, salt);
        return this.password === hash;
    };
    UserEntity.prototype.getPassword = function () {
        return this.password;
    };
    __decorate([
        typegoose_1.prop({ required: true, minlength: 1, maxlength: 15, "default": "" })
    ], UserEntity.prototype, "name");
    __decorate([
        typegoose_1.prop({ required: true, "default": "", unique: true })
    ], UserEntity.prototype, "email");
    __decorate([
        typegoose_1.prop({ required: false, "default": "" })
    ], UserEntity.prototype, "avatar");
    __decorate([
        typegoose_1.prop({ required: true, minlength: 6, maxlength: 1024, "default": "" })
    ], UserEntity.prototype, "password");
    __decorate([
        typegoose_1.prop({ required: true })
    ], UserEntity.prototype, "isPro");
    __decorate([
        typegoose_1.prop({ ref: "OfferEntity", "default": [] })
    ], UserEntity.prototype, "favorites");
    UserEntity = __decorate([
        typegoose_1.modelOptions({
            schemaOptions: {
                collection: "users",
                timestamps: true
            }
        })
        // eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
    ], UserEntity);
    return UserEntity;
}(typegoose_1.defaultClasses.TimeStamps));
exports.UserEntity = UserEntity;
exports.UserModel = typegoose_1.getModelForClass(UserEntity);
