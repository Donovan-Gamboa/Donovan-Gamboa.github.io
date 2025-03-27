let submitButton = document.querySelector('#submit-button');

function emailValidate(email) {
    return email.includes('@');
}

function clickListener(event) {
    event.preventDefault();
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');

    let emailText = emailInput.value;
    let messageText = messageInput.value;

    if (emailValidate(emailText) !== true) {
        console.log('The email address must contain @');
        return false;
    }

    // Email sending functionality using mailto link
    const subject = 'Message from your site';
    const recipient = 'drg4860@g.rit.edu';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageText)}`;

    // Open the default email client with the email pre-filled
    window.location.href = mailtoLink;
}

submitButton.addEventListener('click', clickListener);
