const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const qtyInput = document.querySelector('#qty');
const submitButton = document.querySelector('form__submit-button');
const form = document.querySelector('form');
const result = document.querySelector('#calculations__result');
const params = document.querySelector('#parameters');
const error = document.querySelector('#error');

const dtfWidth = 50;




form.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const width = parseInt(widthInput.value) + 1;
    const height = parseInt(heightInput.value) + 1;
    const qty = parseInt(qtyInput.value);

    console.log(typeof width);
    console.log(width);

    if (width && height && qty) {

        if (width <= dtfWidth) {
            const printToWidth = Math.floor(dtfWidth / width);

            const orderHeight = Math.ceil(qty / printToWidth) * height;
            const orderHeightInMeters = Math.ceil(orderHeight / 100);

            if (orderHeightInMeters <= 10) {

                result.textContent = `>> ${orderHeightInMeters} м. / ${orderHeightInMeters * 2000}р. печать / ${qty * 150}р. перенос / ${orderHeightInMeters * 1500 + qty * 150}р итого`;
                params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;

            } else {
                result.textContent = `>> ${orderHeightInMeters} м. / ${orderHeightInMeters * 1500}р. печать / ${qty * 150}р. перенос / ${orderHeightInMeters * 1500 + qty * 150}р итого`;
                params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;
            }

        } else if (width > dtfWidth && height < dtfWidth) {
            const printToWidth = Math.floor(dtfWidth / height);

            const orderHeight = Math.ceil(qty / printToWidth) * width;
            const orderHeightInMeters = Math.ceil(orderHeight / 100);

            if (orderHeightInMeters <= 10) {

                result.textContent = `>> ${orderHeightInMeters} м. / ${orderHeightInMeters * 2000}р. печать / ${qty * 150}р. перенос / ${orderHeightInMeters * 1500 + qty * 150}р итого`;
                params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;

            } else {
                result.textContent = `>> ${orderHeightInMeters} м. / ${orderHeightInMeters * 1500}р. печать / ${qty * 150}р. перенос / ${orderHeightInMeters * 1500 + qty * 150}р итого`;
                params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;
            }

        } else {
            params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;
            error.textContent = 'принт больше области печати';
            result.textContent = 'ERROR';
        }
    } else {
        error.textContent = 'параметры не указаны';
        result.textContent = 'ERROR'; 
    }

    
})
