"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dateFns = __importStar(require("date-fns"));
window.addEventListener('DOMContentLoaded', function (e) {
    console.log('DOM fully loaded');
});
var dateElement = document.getElementById('date-picker');
var weightElement = document.getElementById('weight-picker');
var datePlace = document.getElementById('date-place');
function maxDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '1' + month;
    }
    today = year + '-' + month + '-' + day;
    dateElement === null || dateElement === void 0 ? void 0 : dateElement.setAttribute('max', today);
}
maxDate();
var addElement = document.getElementById('weight-add');
addElement.addEventListener('click', function (e) {
    e.preventDefault;
    addHistory();
});
function addHistory() {
    var dateValue = dateElement.value.trim();
    var newDate = new Date(dateValue);
    var datte = dateFns.format(newDate, 'EEEE');
    console.log('sample: ' + newDate);
    var weightValue = weightElement.value.trim();
    var basicDiv = document.querySelector('.history__hero');
    var newDiv = document.createElement('div');
    basicDiv === null || basicDiv === void 0 ? void 0 : basicDiv.appendChild(newDiv);
    newDiv.className = 'history__hero__list__items';
    var dateText = document.createElement('p');
    newDiv.appendChild(dateText);
    dateText.appendChild(document.createTextNode(newDate));
    newDiv.appendChild(dateText);
    var weightText = document.createElement('p');
    newDiv.appendChild(weightText);
    weightText.appendChild(document.createTextNode(weightValue + ' kg'));
    newDiv.appendChild(weightText);
}
