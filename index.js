const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');
const qtyInput = document.querySelector('#qty');
const submitButton = document.querySelector('form__submit-button');
const form = document.querySelector('form');

const error = document.querySelector('#error');

const filmTotalField = document.querySelector('#filmTotal');
const filmPriceField = document.querySelector('#filmPrice');
const printPriceField = document.querySelector('#printPrice');
const totalPriceField = document.querySelector('#totalPrice');
const widthField = document.querySelector('#widthOutput');
const heightField = document.querySelector('#heightOutput');
const qtyField = document.querySelector('#qtyOutput');

const dtfWidth = 50;
const screenWidth = window.screen.width;
//console.log(screenWidth);




form.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const width = parseInt(widthInput.value) + 1;
    const height = parseInt(heightInput.value) + 1;
    const qty = parseInt(qtyInput.value);

    


    

    if (width && height && qty) {

        if (width <= dtfWidth && width <= height) {
            const printToWidth = Math.floor(dtfWidth / width);

            const orderHeight = Math.ceil(qty / printToWidth) * height;
            const orderHeightInMeters = orderHeight / 100;

            
            if (orderHeightInMeters <= 10) {

                const filmPrice = orderHeightInMeters * 2000;
                const printPrice = qty * 150;
                const totalPrice = filmPrice + printPrice;
                //console.log(totalPrice);

       

                filmTotalField.textContent = `${orderHeightInMeters} м.`;
                filmPriceField.textContent = `Стоимость печати: ${filmPrice} р.`;
                printPriceField.textContent = `Стоимость переноса: ${printPrice} р.`;
                totalPriceField.textContent = `Итоговая стоимость: ${totalPrice} р.`;

                widthField.textContent = `Ширина: ${width - 1} см.`;
                heightField.textContent = `Высота: ${height - 1} см.`;
                qtyField.textContent = `Количество: ${qty}  шт.`;

                error.textContent = '';

            } else {

                const filmPrice = orderHeightInMeters * 1500;
                const printPrice = qty * 150;
                const totalPrice = filmPrice + printPrice;
                //console.log(totalPrice);

                
              

                filmTotalField.textContent = `${orderHeightInMeters} м.`;
                filmPriceField.textContent = `Стоимость печати: ${filmPrice} р.`;
                printPriceField.textContent = `Стоимость переноса: ${printPrice} р.`;
                totalPriceField.textContent = `Итоговая стоимость: ${totalPrice} р.`;

                widthField.textContent = `Ширина: ${width - 1} см.`;
                heightField.textContent = `Высота: ${height - 1} см.`;
                qtyField.textContent = `Количество: ${qty}  шт.`;

                error.textContent = '';

            }

        } else if (width <= dtfWidth && width > height || width > dtfWidth && height <= dtfWidth) {
            const printToWidth = Math.floor(dtfWidth / height);

            const orderHeight = Math.ceil(qty / printToWidth) * width;
            const orderHeightInMeters = orderHeight / 100;

            if (orderHeightInMeters <= 10) {

                const filmPrice = orderHeightInMeters * 2000;
                const printPrice = qty * 150;
                const totalPrice = filmPrice + printPrice;
                //console.log(totalPrice);

                
                
                filmTotalField.textContent = `${orderHeightInMeters} м.`;
                filmPriceField.textContent = `Стоимость печати: ${filmPrice} р.`;
                printPriceField.textContent = `Стоимость переноса: ${printPrice} р.`;
                totalPriceField.textContent = `Итоговая стоимость: ${totalPrice} р.`;

                widthField.textContent = `Ширина: ${width - 1} см.`;
                heightField.textContent = `Высота: ${height - 1} см.`;
                qtyField.textContent = `Количество: ${qty}  шт.`;

                error.textContent = '';


            } else {

                const filmPrice = orderHeightInMeters * 1500;
                const printPrice = qty * 150;
                const totalPrice = filmPrice + printPrice;
                //console.log(totalPrice);

                
              

                filmTotalField.textContent = `${orderHeightInMeters} м.`;
                filmPriceField.textContent = `Стоимость печати: ${filmPrice} р.`;
                printPriceField.textContent = `Стоимость переноса: ${printPrice} р.`;
                totalPriceField.textContent = `Итоговая стоимость: ${totalPrice} р.`;

                widthField.textContent = `Ширина: ${width - 1} см.`;
                heightField.textContent = `Высота: ${height - 1} см.`;
                qtyField.textContent = `Количество: ${qty} шт.`;


                error.textContent = '';

            }

        } else {
          
            error.textContent = 'принт больше области печати';
            filmTotalField.textContent = `м.`;
            filmPriceField.textContent = `Стоимость печати:`;
            printPriceField.textContent = `Стоимость переноса:`;
            totalPriceField.textContent = `Итоговая стоимость:`;

                widthField.textContent = `ширина:`;
                heightField.textContent = `высота:`;
                qtyField.textContent = `количество:`;
        }
    } else {
        error.textContent = 'параметры не указаны';
     
        

                filmTotalField.textContent = 'м.';
                filmPriceField.textContent = `Стоимость печати:`;
                printPriceField.textContent = `Стоимость переноса:`;
                totalPriceField.textContent = `Итоговая стоимость:`;

                widthField.textContent = `ширина:`;
                heightField.textContent = `высота:`;
                qtyField.textContent = `количество:`;

    }




    if (screenWidth < 700) {
        form.reset();
        
        widthInput.blur();
        heightInput.blur();
        qtyInput.blur();
        submitButton.blur();

       
    }

    
})


form.addEventListener('keydown', (e) => {

    console.log('test');
    if (e.key === 'Escape') {
        form.reset();
        widthInput.focus();

                filmTotalField.textContent = 'м.';
                filmPriceField.textContent = `Стоимость печати:`;
                printPriceField.textContent = `Стоимость переноса:`;
                totalPriceField.textContent = `Итоговая стоимость:`;
                error.textContent = '';
               
                widthField.textContent = `ширина:`;
                heightField.textContent = `высота:`;
                qtyField.textContent = `количество:`;
    }
})
