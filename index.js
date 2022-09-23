const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const qtyInput = document.querySelector('#qty');
const submitButton = document.querySelector('form__submit-button');
const form = document.querySelector('form');
const params = document.querySelector('#parameters');
const error = document.querySelector('#error');

const filmTotalField = document.querySelector('#filmTotal');
const filmPriceField = document.querySelector('#filmPrice');
const printPriceField = document.querySelector('#printPrice');
const totalPriceField = document.querySelector('#totalPrice');

const dtfWidth = 50;




form.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const width = parseInt(widthInput.value) + 1;
    const height = parseInt(heightInput.value) + 1;
    const qty = parseInt(qtyInput.value);

    

    if (width && height && qty) {

        if (width <= dtfWidth) {
            const printToWidth = Math.floor(dtfWidth / width);

            const orderHeight = Math.ceil(qty / printToWidth) * height;
            const orderHeightInMeters = Math.ceil(orderHeight / 100);

            
            if (orderHeightInMeters <= 10) {

                const filmPrice = orderHeightInMeters * 2000;
                const printPrice = qty * 150;
                const totalPrice = filmPrice + printPrice;
                //console.log(totalPrice);

               
                params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;

                filmTotalField.textContent = `${orderHeightInMeters}м. /`;
                filmPriceField.textContent = `${filmPrice}р. печать /`;
                printPriceField.textContent = `${printPrice}р. перенос /`;
                totalPriceField.textContent = `${totalPrice}р. итого /`;

            } else {

                const filmPrice = orderHeightInMeters * 1500;
                const printPrice = qty * 150;
                const totalPrice = filmPrice + printPrice;
                console.log(totalPrice);

                
                params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;

                filmTotalField.textContent = `${orderHeightInMeters}м. /`;
                filmPriceField.textContent = `${filmPrice}р. печать /`;
                printPriceField.textContent = `${printPrice}р. перенос /`;
                totalPriceField.textContent = `${totalPrice}р. итого /`;

            }

        } else if (width > dtfWidth && height < dtfWidth) {
            const printToWidth = Math.floor(dtfWidth / height);

            const orderHeight = Math.ceil(qty / printToWidth) * width;
            const orderHeightInMeters = Math.ceil(orderHeight / 100);

            if (orderHeightInMeters <= 10) {

                const filmPrice = orderHeightInMeters * 2000;
                const printPrice = qty * 150;
                const totalPrice = filmPrice + printPrice;
                console.log(totalPrice);

                
                params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;

                filmTotalField.textContent = `${orderHeightInMeters}м. /`;
                filmPriceField.textContent = `${filmPrice}р. печать /`;
                printPriceField.textContent = `${printPrice}р. перенос /`;
                totalPriceField.textContent = `${totalPrice}р. итого /`;


            } else {

                const filmPrice = orderHeightInMeters * 1500;
                const printPrice = qty * 150;
                const totalPrice = filmPrice + printPrice;
                console.log(totalPrice);

                
                params.textContent = `ш: ${width - 1}см. в: ${height - 1}см. кол-во: ${qty} шт.`;

                filmTotalField.textContent = `${orderHeightInMeters}м. /`;
                filmPriceField.textContent = `${filmPrice}р. печать /`;
                printPriceField.textContent = `${printPrice}р. перенос /`;
                totalPriceField.textContent = `${totalPrice}р. итого /`;

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
