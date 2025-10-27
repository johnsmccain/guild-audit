const main = () => {
    const btns = document.getElementsByTagName('button')

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        console.log(btn)
        btn.addEventListener('click', function () {
            console.log("clicked")
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            console.log(body);
            console.log("hello")
            const mailtoLink = `mailto:XXXXXXXXXXXXXXXXXXXXXXXXX?subject=Contact Form Submission&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        });
    }

    console.log(document.getElementsByTagName('form')[0])

    document.getElementsByTagName('form')[0]
        .addEventListener('submit', function (event) {
            event.preventDefault();
            console.log("first")
            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_0ft2s2n';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('Sent!');
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        });
};

// window.onload = main;
main().then(() => {
    console.log("hello")
})