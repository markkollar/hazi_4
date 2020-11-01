"use strict";
// import * as dateFns from 'date-fns';
// import * as Chart from 'chart.js';
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
});
let dateElement = document.getElementById('date-picker');
let weightElement = document.getElementById('weight-picker');
const parentDivEl = document.querySelector('.history__hero');
function maxDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
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
const addElement = document.getElementById('weight-add');
addElement.addEventListener('click', function (e) {
    e.preventDefault;
    addHistory();
    let count = getCount(parentDivEl, false);
    removeLastEl(count);
});
function addHistory() {
    const dateValue = dateElement.value.trim();
    // let newDate: any = new Date(dateValue);
    // const datte = dateFns.format(newDate, 'EEEE');
    // console.log('sample: ' +datte)
    const weightValue = weightElement.value;
    localStorage.setItem(dateValue, weightValue);
    const basicDiv = document.querySelector('.history__hero');
    var newDiv = document.createElement('div');
    basicDiv.appendChild(newDiv);
    newDiv.className = 'history__hero__items';
    var dateText = document.createElement('p');
    newDiv.appendChild(dateText);
    dateText.appendChild(document.createTextNode(dateValue));
    basicDiv.insertBefore(newDiv, basicDiv.childNodes[0]);
    var weightText = document.createElement('p');
    newDiv.appendChild(weightText);
    weightText.appendChild(document.createTextNode(weightValue + ' kg'));
    basicDiv.insertBefore(newDiv, basicDiv.childNodes[0]);
}
function getCount(parent, getChildrensChildren) {
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for (var i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
            if (getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i], true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}
function removeLastEl(count) {
    if (count >= 10) {
        let lastElement = document.querySelector('.history__hero');
        lastElement.removeChild(lastElement.lastChild);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVDQUF1QztBQUN2QyxxQ0FBcUM7QUFFckMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFJSCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBcUIsQ0FBQztBQUM3RSxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBcUIsQ0FBQztBQUNqRixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFtQixDQUFDO0FBRy9FLFNBQVMsT0FBTztJQUNaLElBQUksS0FBSyxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7SUFDNUIsSUFBSSxHQUFHLEdBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLElBQUksS0FBSyxHQUFRLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUM7SUFDcEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRS9CLElBQUcsR0FBRyxHQUFHLEVBQUUsRUFBQztRQUNSLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ25CO0lBQ0QsSUFBRyxLQUFLLEdBQUUsRUFBRSxFQUFDO1FBQ1QsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7S0FDdkI7SUFDRCxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUV2QyxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDNUMsQ0FBQztBQUNELE9BQU8sRUFBRSxDQUFDO0FBR1YsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXNCLENBQUM7QUFFOUUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxVQUFTLENBQUM7SUFDMUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUVqQixVQUFVLEVBQUUsQ0FBQztJQUViLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXhCLENBQUMsQ0FBQyxDQUFBO0FBSUYsU0FBUyxVQUFVO0lBQ2YsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQywwQ0FBMEM7SUFDMUMsaURBQWlEO0lBQ2pELGlDQUFpQztJQUNqQyxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBRXhDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBRTVDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW1CLENBQUM7SUFFNUUsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7SUFFMUMsSUFBSSxRQUFRLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pELFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0RCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxXQUFXLENBQUUsVUFBVSxDQUFDLENBQUM7SUFDaEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXJFLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUkxRCxDQUFDO0FBR0QsU0FBUyxRQUFRLENBQUMsTUFBVyxFQUFFLG9CQUE2QjtJQUN4RCxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztJQUN6QixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUN4QyxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFDO1FBQzNCLElBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO1lBQ2xDLElBQUcsb0JBQW9CO2dCQUNuQixnQkFBZ0IsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUM1RCxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RCO0tBQ0o7SUFDRCxPQUFPLGdCQUFnQixDQUFDO0FBQzVCLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFVO0lBQzVCLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtRQUNiLElBQUksV0FBVyxHQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRCxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNsRDtBQUNMLENBQUMifQ==