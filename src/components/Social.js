import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const socialItems = [
    {icon: GitHubIcon, url:"https://github.com/freddoropeza"},
    {icon: LinkedInIcon, url: "https://www.linkedin.com/in/fredd-oropeza/"},
]

export default function Social({ direction}) {
    return (
        <Grid container direction={direction || "row"} spacing={1}>
            {socialItems.map((item) => (
                <Grid item>
                    <Link href={item.url}>
                        <IconButton>
                            <item.icon />   
                        </IconButton>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}