import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./Social";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
    section: {
        height: "91vh",
        backgroundImage: "linear-gradient(to bottom, transparent, 80%, black),url(https://i.imgur.com/NmlGrNR.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
    },
    content: {
        height: "100%",
    },
    container: {
        height: "100%",
    },
}))

export default function HeroSection() {
    const styles = useStyles();
    const [shouldShow, setShouldShow] = useState(false)
    useEffect(() => setShouldShow(true),[])
    return (
        <div className={styles.section} id="top">
            <Container className={styles.container} maxWidth="md">
                <Grid 
                    className={styles.content} 
                    container 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    <Zoom in={shouldShow}>
                        <Grid item sm={8}>
                            <Typography component="h1" variant="h3">Hi, my name is Fredd.</Typography>
                            <Typography variant="h5">I build websites, web applications and responsive user interfaces.</Typography>
                        </Grid>
                    </Zoom>
                    <Hidden xsDown>
                        <Grid item>
                            <Social direction="column"/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </div>
    )
}