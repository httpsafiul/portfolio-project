import emailjs from '@emailjs/browser';

emailjs.init({
    publicKey: 'stidvsqrPJHSgZZ89',
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

export default function sendEmail(message, setSending, setFeedback, setMessage) {
    setSending(true);
    emailjs.send('service_es0sgih', 'template_54qh6ih', {message}).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSending(false);
            setFeedback(1);
            setMessage("");
        },
        (error) => {
            console.log('FAILED...', error);
            setSending(false);
            setFeedback(2)
        },
    );
}
