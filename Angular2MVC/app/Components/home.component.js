"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "<h1>Coding Exercise - Product Management Tool by C#, MVC, Angular</h1>\n                <div class=\"row\">\n                    <h4>Simple web application to manage products which including below features:</h4>\n                    <ul style=\"padding-left:5%;\">\n                        <li><p>Feature of listing of products.</p></li>\n                        <li><p>Add a new product and persist the changes.</p></li>\n                        <li><p>When selecting a product on the listing, they are taken to the details of the product.</p></li>\n                        <li><p>Details will display all details of the product..</p></li>\n                        <li><p>On the details, the user may edit the product properties and persist the changes.</p></li>\n                    </ul>\n                </div>"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map