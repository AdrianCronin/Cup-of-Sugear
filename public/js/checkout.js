const checkoutFormHandler = async (event) => {
    event.preventDefault();

    const picker = datepicker('#checkout-date');

    console.log('PICKER CONTIANS @@@@@ ', picker);
    // let date_out = picker;

    // if (picker) {
    //     const response = await fetch(`/api/gear/create`, {
    //         method: 'POST',
    //         body: JSON.stringify({ date_out }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });

    //     if (response.ok) {
    //         location.reload();
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
};

document.querySelector('#checkout-date').addEventListener('submit', checkoutFormHandler);