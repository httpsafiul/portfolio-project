import React, { useState } from 'react'
import { FormContainer, InputRow } from './Styles/ContactCard.styled'
import { Alert, Box, Button, TextField } from '@mui/material'
import sendEmail from '../../Conf/Emailjs.conf';
import { colour_green, colour_orange, colour_white } from '../../Common/colours';
import { Send } from '@mui/icons-material';


const MessageForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [feedback, setFeedback] = useState(0);

    const handleSend = () => {
        if (!name || !email || !message) {
            alert("Please fill in all fields before sending.");
            return;
        }
        sendEmail(name, message, email, setSending, setFeedback, setEmail, setName, setMessage);
    };

    return (
        <>
            <FormContainer>
                <InputRow>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required

                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </InputRow>

                <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={6}
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />

                <Box textAlign="right">
                    {sending ?
                        <Button loading variant="outlined" loadingPosition="start">
                            Sending
                        </Button>
                        :
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: colour_green,
                                color: colour_white,
                                "&:hover": { backgroundColor: colour_orange, color: colour_green },
                                fontWeight: "bold",
                                fontFamily: "Libre Caslon Text",
                            }}
                            onClick={handleSend}
                            startIcon={<Send />}
                        >
                            Send
                        </Button>
                    }
                </Box>
            </FormContainer>
            {feedback === 0 ? (
                <></>
            ) : (
                <>
                    {feedback === 1 ? (
                        <Alert sx={{ marginTop: "10px", marginBottom: "10px" }} severity="success">
                            Message sent successfully! Check your email for confirmation.
                        </Alert>
                    ) : (
                        <Alert sx={{marginTop: "0px", marginBottom: "10px"}} severity="error">
                            Oops! Something went wrong.
                        </Alert>
                    )}
                </>
            )}
        </>
    )
}

export default MessageForm
