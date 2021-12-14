import React, { useState} from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, Container, TextArea, Grid } from "semantic-ui-react"
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    section: {
        height: "42vh",
        backgroundImage: "linear-gradient(#303030, #000000);",
        marginTop: "35px"
    },
    card: {
        textAlign: "-webkit-center"
    },
    content: {
        height: "100%",
    },
    container: {
        height: "100%",
    },
    form: {
        display: "table-caption",
        textAlign: "center"
    }
}))

export default function Contact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        event.target.name==="email" 
        ? setEmail(event.target.value)
        : event.target.name==="subject" 
        ? setSubject(event.target.value)
        : event.target.name==="message" 
        ? setMessage(event.target.value)
        : console.log("error")
      };

    function sendEmail(event) {
        event.preventDefault()
        emailjs.sendForm(
            `${process.env.GATSBY_SERVICE_ID}`,
            `${process.env.GATSBY_TEMPLATE_ID}`,
            event.target,
            `${process.env.GATSBY_USER_ID}`
            )
            .then(
            result => {
                console.log(result.text)
                setEmail("");
                setSubject("");
                setMessage("");
            },
            error => {
                console.log(error.text)
            }
        )
    }

    const styles = useStyles();
    return (
        <div className={styles.section} id="">
            <Container className={styles.container} id="contact" maxWidth="md">
                <Grid 
                    className={styles.content} 
                    container 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    <div>
                        <CardContent className={styles.card}>
                            <Grid item sm={8}>
                                <Form className={styles.form} onSubmit={sendEmail}>
                                    <Form.Field
                                        control={Input}
                                        label="Email"
                                        name="email"
                                        placeholder="Write your Email..."
                                        type="email"
                                        required
                                        onChange={(e) => handleChange(e)}
                                        value={email}
                                    />
                                    <Form.Field
                                        control={Input}
                                        label="Subject"
                                        name="subject"
                                        placeholder="Write your Subject..."
                                        required
                                        onChange={(e) => handleChange(e)}
                                        value={subject}
                                    />
                                    <Form.Field
                                        control={TextArea}
                                        label="Message"
                                        name="message"
                                        placeholder="Write your Message..."
                                        required
                                        onChange={(e) => handleChange(e)}
                                        value={message}
                                    />
                                    <Button
                                        primary type="submit"
                                        variant="contained"
                                        color="primary"
                                        endIcon={<SendIcon />}
                                    >
                                        Send
                                    </Button>
                                </Form>
                            </Grid>
                        </CardContent>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}