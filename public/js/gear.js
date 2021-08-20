const newGearFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#gearName').value.trim();
    const description = document.querySelector('#gearDescription').value.trim();
    const category_id = parseInt(document.querySelector('#selectCategory').value);

    if (name && description && category_id) {
        const response = await fetch(`/api/gear/create`, {
            method: 'POST',
            body: JSON.stringify({ name, description, category_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#addGearSubmit').addEventListener('submit', newGearFormHandler);