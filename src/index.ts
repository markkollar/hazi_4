// import * as dateFns from 'date-fns';
// import * as Chart from 'chart.js';

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
});



let dateElement = document.getElementById('date-picker') as HTMLInputElement;
let weightElement = document.getElementById('weight-picker') as HTMLInputElement;
const parentDivEl = document.querySelector('.history__hero') as HTMLDivElement;


function maxDate(){
    let today :any = new Date();
    let day :any = today.getDate();
    let month :any = today.getMonth()+1;
    let year = today.getFullYear();

    if(day < 10){
        day = '0' + day;
    }
    if(month <10){
        month = '1' + month;
    }
    today = year + '-' + month + '-' + day;

    dateElement?.setAttribute('max', today);
}
maxDate();


const addElement = document.getElementById('weight-add') as HTMLButtonElement;

addElement.addEventListener('click',function(e){
    e.preventDefault;
    
    addHistory();

    let count = getCount(parentDivEl, false);
    
    removeLastEl(count);

})



function addHistory(){
    const dateValue = dateElement.value.trim();
    // let newDate: any = new Date(dateValue);
    // const datte = dateFns.format(newDate, 'EEEE');
    // console.log('sample: ' +datte)
    const weightValue = weightElement.value;

    localStorage.setItem(dateValue, weightValue)
    
    const basicDiv = document.querySelector('.history__hero') as HTMLDivElement;

    var newDiv = document.createElement('div');
    basicDiv.appendChild(newDiv);
    newDiv.className = 'history__hero__items';

    var dateText :any = document.createElement('p');
    newDiv.appendChild(dateText);
    dateText.appendChild(document.createTextNode(dateValue));
    basicDiv.insertBefore(newDiv, basicDiv.childNodes[0]);

    var weightText = document.createElement('p');
    newDiv.appendChild( weightText);
    weightText.appendChild(document.createTextNode(weightValue + ' kg'));
    
    basicDiv.insertBefore(newDiv, basicDiv.childNodes[0]);

    

}


function getCount(parent: any, getChildrensChildren: boolean){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}

function removeLastEl(count: any){
    if (count >= 10) {
        let lastElement:any = document.querySelector('.history__hero');
        lastElement.removeChild(lastElement.lastChild);
    }
}




