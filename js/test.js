"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DOM = require('react-dom');
var doc = document.getElementById('app');
;
;
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.apply(this, arguments);
    }
    Car.prototype.render = function () {
        return (React.createElement("h1", null, "Hello World! "));
    };
    return Car;
}(React.Component));
exports.Car = Car;
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        _super.apply(this, arguments);
    }
    Truck.prototype.render = function () {
        return (React.createElement("h1", null, "Hello World! "));
    };
    return Truck;
}(React.Component));
exports.Truck = Truck;
DOM.render(React.createElement("div", null, "test"), doc);
//# sourceMappingURL=test.js.map