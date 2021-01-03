import React from 'react'
import { Box, Grid, Typography  } from '@material-ui/core';
import Logo from "../assets/img/logo.svg";
import "../assets/css/custom.css";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <Box>
                <Grid container spacing={2} justify="center" alignItems="center" className="headerSpace" bgcolor="white">
                    <Grid xs={9} className="single-line">
                        <img src={Logo} alt="React Logo" height={40}/>
                        <Typography variant="subtitle1" className="title">Intugine</Typography>
                    </Grid>
                    <Grid xs={1}>
                        <Typography variant="body1" className="title"> Home </Typography>
                    </Grid>
                    <Grid xs={1} >
                        <Typography variant="body1" className="title">Brand</Typography>
                    </Grid>
                    <Grid xs={1} className="lines-align">
                        <Typography variant="body1" className="title"> Transporters</Typography>
                        {/* <IconButton>
                            <ExpandMoreIcon/>
                        </IconButton> */}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}



export default Header
