import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        width: 361,
        backgroundPosition: "left",
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
    },
    links: {
        marginRight: "auto",
    },
    tag: {
        marginRight: 5,
        marginBottom: 5,
    },
}));

function TagsContainer({ tags }) {
    const styles = useStyles();
    return (
        <div>
            {tags.map((tag) => (
            <Chip
                className={styles.tag}
                label={tag}
                variant="outlined"
                key={tag}
            ></Chip>
            ))}
        </div>
    );
}

function Project({ title, description, imageURL, tags, links }) {
    const styles = useStyles();
    return (
        <Grid item>
            <Card className={styles.card}>
                <div>
                    <CardContent>
                        <Typography variant="h5" paragraph>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {description}
                        </Typography>
                        <Hidden mdUp>
                            <TagsContainer tags={tags} />
                        </Hidden>
                    </CardContent>
                    <CardActions>
                        <div className={styles.links}>
                            {links.map((linkItem) => (
                                <IconButton href={linkItem.href} key={linkItem.href}>
                                    <linkItem.icon />
                                </IconButton>
                            ))}
                        </div>
                        <Hidden smDown>
                            <TagsContainer tags={tags} />
                        </Hidden>
                    </CardActions>
                </div>
                <Hidden xsDown>
                    <CardMedia className={styles.cardMedia} image={imageURL}></CardMedia>
                </Hidden>
            </Card>
        </Grid>
    );
}

export default function Projects() {
    return (
        <Container maxWidth="md" id="projects">
            <Box pt={8} mb={2}>
                <Typography variant="h4">Projects</Typography>
            </Box>
            <Grid container direction="column" spacing={4}>
                {projectsData.map((data) => (
                    <Project {...data} key={data.title} />
                ))}
            </Grid>
        </Container>
    );
}
  
const projectsData = [
    {
        "title": "Movie Date",
        "imageURL": "https://i.imgur.com/wF6PZwp.jpg",
        "description": "A website to discover movies releases.",
        "tags": ["jQuery","The Movie Database API"],
        "links": [
            {
              "icon": GitHubIcon,
              "href": "https://github.com/freddoropeza/Movie-Date",
            },
            {
              "icon": OpenInNewIcon,
              "href": "https://movie-date.vercel.app/",
             },
        ]
    },
    {
        "title": "Travel Dreams",
        "imageURL": "https://i.imgur.com/jskpJmT.jpg",
        "description": "Share and explore your next vacation spot.",
        "tags": ["jQuery","MongoDB","Express.js","Node.js"],
        "links": [
            {
              "icon": GitHubIcon,
              "href": "https://github.com/freddoropeza/Travel-Dreams",
            },
            {
              "icon": OpenInNewIcon,
              "href": "https://traveldreams2021.herokuapp.com/",
             },
        ]
    },
    {
        "title": "Zen Cafe",
        "imageURL": "https://i.imgur.com/1Csz5Zh.jpg",
        "description": "Your taste buds are going to thank you at this dessert shop.",
        "tags": ["MongoDB","Express.js","React.js","Node.js"],
        "links": [
            {
              "icon": GitHubIcon,
              "href": "https://github.com/freddoropeza/zen-cafe-frontend",
            },
            {
              "icon": OpenInNewIcon,
              "href": "https://zencafe.netlify.app/",
             },
        ]
    },
    {
        "title": "Dev-to-Dev",
        "imageURL": "https://i.imgur.com/kGy8LUh.jpg",
        "description": "Learn and connect with other developers.",
        "tags": ["jQuery","Python","Django","PostgreSql"],
        "links": [
            {
              "icon": GitHubIcon,
              "href": "https://github.com/freddoropeza/dev-to-dev",
            },
            {
              "icon": OpenInNewIcon,
              "href": "https://dc-dev-to-dev-test.herokuapp.com/",
             },
        ]
    }
]