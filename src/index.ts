import * as dateFns from 'date-fns';

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded');
});



let dateElement = document.getElementById('date-picker') as HTMLInputElement;
let weightElement = document.getElementById('weight-picker') as HTMLInputElement;
const datePlace = document.getElementById('date-place') as HTMLDivElement;


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

})



function addHistory(){
    const dateValue = dateElement.value.trim();
    let newDate: any = new Date(dateValue);
    const datte = dateFns.format(newDate, 'EEEE');
    console.log('sample: ' +newDate)
    const weightValue = weightElement.value.trim();
    const basicDiv = document.querySelector('.history__hero');

    var newDiv = document.createElement('div');
    basicDiv?.appendChild(newDiv);
    newDiv.className = 'history__hero__list__items';

    var dateText :any = document.createElement('p');
    newDiv.appendChild(dateText);
    dateText.appendChild(document.createTextNode(newDate));
    newDiv.appendChild(dateText);

    var weightText = document.createElement('p');
    newDiv.appendChild(weightText);
    weightText.appendChild(document.createTextNode(weightValue + ' kg'));
    newDiv.appendChild(weightText);

}