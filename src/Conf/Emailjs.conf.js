import emailjs from '@emailjs/browser';

emailjs.init({
    publicKey: 'Qr0qdm0H9KxcqfGmf',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
        // Block the suspended emails
        // list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        // watchVariable: 'userEmail',
    },
    limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
    },
});

export default function sendEmail(name, message, email, setSending, setFeedback) {
    setSending(true);
    emailjs.send('service_pe4myjj', 'template_li0jmtl', {name, message, email}).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSending(false);
            setFeedback(1)
        },
        (error) => {
            console.log('FAILED...', error);
            setSending(fasle);
            setFeedback(2)
        },
    );
}
