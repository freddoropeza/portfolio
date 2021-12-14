import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    section: {
        height: "91vh",
        backgroundImage: "linear-gradient(#000000, #303030);",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    },
    cardMedia: {
        width: "181px",
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
    },
    content: {
        height: "100%",
    },
    container: {
        height: "100%",
    },
}))

export default function About() {
    const styles = useStyles();
    return (
        <div className={styles.section} id="">
            <Container className={styles.container} id="about" maxWidth="md">
                <Grid 
                    className={styles.content} 
                    container 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    <Card>
                        <div>
                            <CardContent className={styles.card}>
                                <Grid item sm={8}>
                                    <Typography variant="h6">
                                        I've always had a passion for technology. From taking apart toys when I was a kid to see how they worked to now being able to write the code for some of those toys. I am a Full Stack Software Engineer with a background in customer service roles in a variety of industries such as restaurant, automotive and telecommunications. My customer facing background has given me the interpersonal skills and team collaboration to succeed in any role. I am also a first-generation Latino with a passion for developing creative solutions to assist other people’s everyday life. 
                                    </Typography>
                                </Grid>
                                <Hidden xsDown>
                                    <CardMedia>
                                        <img
                                            className={styles.cardMedia} 
                                            src="https://i.imgur.com/NuJ2Cjr.png" 
                                            alt="map"
                                        />
                                    </CardMedia>
                                </Hidden>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            </Container>
        </div>
    )
}