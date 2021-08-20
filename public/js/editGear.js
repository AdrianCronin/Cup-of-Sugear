const editGearFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#editGearName').value.trim();
    const description = document.querySelector('#editGearDescription').value.trim();
    const category_id = document.querySelector('#selectCategory').value;
    const gear_id = document.querySelector('#editGearForm').dataset.gear_id;

    if (name && description && category_id) {
        const response = await fetch(`/api/gear/update/${gear_id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description, category_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/api/gear/mygear');
        } else {
            alert('Failed');
        }
    }
};

// const deleteBtnHandler = async (event) => {
//     const post_id = document.querySelector('#editForm').dataset.post_id;

//     const response = await fetch(`/api/posts/delete/${post_id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         alert('Failed');
//     }
// };

document.querySelector('#editGearForm').addEventListener('submit', editGearFormHandler);
// document.querySelector('#deletePostBtn').addEventListener('click', deleteBtnHandler);