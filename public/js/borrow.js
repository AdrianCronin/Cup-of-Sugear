const borrowGearHandler = async (event) => {
    event.preventDefault();
    const borrowGearData = document.querySelector('#borrowGearData');
    const user_id = borrowGearData.dataset.borrower_id;
    const gear_id = borrowGearData.dataset.gear_id;

    const response = await fetch(`/api/borrow/new`, {
        method: 'POST',
        body: JSON.stringify({ user_id: user_id, gear_id: gear_id,}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/api/gear/mygear');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#borrowConfirmBtn').addEventListener('click', borrowGearHandler);