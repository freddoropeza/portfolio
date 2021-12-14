import React, {useState} from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const navigationLinks = [
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Resume", href: "https://drive.google.com/file/d/1Zj8SZeUaSNt434vot6_-rPu7Y3-feVyL/view?usp=sharing"},
    {name: "Contact", href: "#contact"},
]

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
    },
    header: {
        height: "9vh",
    },
    avatar: {
        marginRight: "auto",
    }
}))

export default function Header() {
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <AppBar className={styles.header} position="sticky" color="default" id="top">
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <Avatar 
                        className={styles.avatar} 
                        alt="avatar" 
                        src="https://i.imgur.com/LqVCwR4.png"
                        href
                    />
                    <Hidden xsDown>
                        {navigationLinks.map((item) => (
                            <Link
                                className={styles.link}
                                color="textPrimary"
                                variant="button"
                                underline="none"
                                href={item.href}
                                key={item.name}
                            >
                                {item.name} 
                            </Link>
                        ))}
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
            <SwipeableDrawer 
                anchor="right" 
                open={open} 
                onOpen={() => setOpen(true)} 
                onClose={() => setOpen(false)}
            >
                <div
                    onClick={() => setOpen(false)}
                    onKeyPress={() => setOpen(false)}
                    role="button"
                    tabIndex={0}
                >
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {navigationLinks.map((item) => (
                        <ListItem>
                            <Link 
                                className={styles.link}
                                color="textPrimary" 
                                variant="button" 
                                underline="none" 
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </ListItem>
                    ))}       
                </List>         
            </SwipeableDrawer>
        </AppBar>
    )
}