
window.onload = () => {
    let titles = document.querySelectorAll('.title');

    titles.forEach(title => {
        if (title) {
            title.addEventListener('click', () => {
                title.parentElement.childNodes[3].classList.toggle('hidden');
            })
        }
    });

    let form = document.getElementById('contact-me-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelector('.contact_submit_btn').innerHTML = `
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Sending ...
            `;
            let name = document.querySelector('.contact_name').value
            let email = document.querySelector('.contact_email').value
            let title = document.querySelector('.contact_title').value
            let message = document.querySelector('.contact_message').value
            const data = {
                'name': name,
                'email': email,
                'title': title,
                'message': message
            }
            fetch('/contact-me', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()
            .then(data => {
                document.querySelector('.contact_submit_btn').innerHTML = "";
                document.querySelector('.contact_submit_btn').innerText = "Say Hi!";
                document.querySelector('.contact_header').innerText = `${data.message}`;
                form.reset();
            }))
            .catch (e => {
                console.log(e)
            });
        });
    }

    let deleteBtns = document.querySelectorAll('.delete-message')

    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.innerHTML = `
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            `;
            fetch('/admin/messages', {
                method: 'DELETE',
                body: JSON.stringify({id: btn.dataset.id}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()
            .then(data => {
                console.log(data)
                btn.parentElement.parentElement.remove();
                document.querySelector('.messages-header').innerText = `${data.message}`;
            }))
            .catch (e => {
                console.log(e)
            });
        })
    })
}