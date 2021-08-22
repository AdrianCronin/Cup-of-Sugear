const borrowGearHandler = async (event) => {
    event.preventDefault();
    const borrowGearData = document.querySelector('#borrowGearData');
    const borrower_id = borrowGearData.dataset.borrower_id;
    const gear_id = borrowGearData.dataset.gear_id;
    const owner_id = borrowGearData.dataset.owner_id;

    if (borrower_id === owner_id) {
        alert("Cannot borrow your own stuff!");
        return;
    };

    const response = await fetch(`/api/borrow/new`, {
        method: 'POST',
        body: JSON.stringify({ user_id: borrower_id, gear_id: gear_id,}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/api/gear/mygear');
    } else {
        alert("This item is already being borrowed");
    }
};

document.querySelector('#borrowConfirmBtn').addEventListener('click', borrowGearHandler);