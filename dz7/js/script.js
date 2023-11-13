function filterBy(array, dataType) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== dataType) {
            result.push(array[i]);
        }
    }
    return result;
}

function getInputAndFilter() {
    var arrayInput = prompt("Введіть елементи масиву, розділені комами:");
    var dataType = prompt("Введіть тип даних для фільтрації (наприклад, 'string'):");

    var array = arrayInput.split(',').map(item => item.trim());
    
    array = array.map(item => isNaN(item) ? item : Number(item));

    var filteredArray = filterBy(array, dataType);
    console.log('Відфільтрований масив:', filteredArray);
}

getInputAndFilter();


