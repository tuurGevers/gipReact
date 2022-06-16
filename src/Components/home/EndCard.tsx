import React from 'react';
import {Card, CardContent, CardMedia, List, ListItem, ListItemIcon} from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import BoltIcon from '@mui/icons-material/Bolt';
import CodeIcon from '@mui/icons-material/Code';

type endProps = {
    img: any,
    text: string,
    width: string,
    height: string,
    id: number,
}
const EndCard = (props: endProps) => {

    const renderBack = () => {
        if (props.id == 0) {
            return (
                <List sx={{
                    color: "white",
                    height: "100px",
                    marginTop: {md: "100px", xs: "40px"},
                    display: "flex",
                    flexDirection: {md: "row", xs: "column"},
                    justifyContent: "center",
                }}>
                    <ListItem>
                        <ListItemIcon>
                            <SettingsIcon sx={{color: "white"}}/>
                        </ListItemIcon>
                        flexiebel
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <WorkspacesIcon sx={{color: "white"}}/>
                        </ListItemIcon>
                        groot ecosysteem
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <BoltIcon sx={{color: "white"}}/>
                        </ListItemIcon>
                        performance
                    </ListItem>
                </List>
            )
        } else if (props.id == 1) {
            return (
                <List sx={{
                    color: "white",
                    height: "100px",
                    marginTop: {md: "100px", xs: "40px"},
                    display: "flex",
                    flexDirection: {md: "row", xs: "column"},
                    justifyContent: "center",
                }}>
                    <ListItem>
                        <ListItemIcon>
                            <SettingsIcon sx={{color: "white"}}/>
                        </ListItemIcon>
                        robust
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <WorkspacesIcon sx={{color: "white"}}/>
                        </ListItemIcon>
                        groot ecosysteem
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CodeIcon sx={{color: "white"}}/>
                        </ListItemIcon>
                        scalability
                    </ListItem>
                </List>
            )
        }
    }
    return (
        <div className="card">
            <div className={"content"}>
                <div className="front">
                    <Card sx={{border: "3px solid white",height: {xs: "400px"}, }}>
                        <CardMedia sx={{
                            backgroundColor: "#222222",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                        }}>
                            <img src={props.img} className="image" width={props.width} height={props.height}/>
                        </CardMedia>
                        <CardContent sx={{textAlign: "center"}}>
                            {props.text}
                        </CardContent>
                    </Card>
                </div>
                <div className="back">
                    <Card sx={{border: "3px solid white"}}>
                        <CardContent sx={{height: {xs: "300px", md: "300px"}, backgroundColor: "#222222"}}>
                            {
                                renderBack()
                            }
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default EndCard;