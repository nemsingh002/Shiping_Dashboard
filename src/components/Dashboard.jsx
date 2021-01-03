import { Grid, Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import React from 'react'
import "../assets/css/custom.css";
import Destination from "../assets/img/destination.svg";
import Warehouse from "../assets/img/warehouse.svg";
import { Row, Col } from 'react-bootstrap';

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);




class dashboard extends React.Component {

    constructor() {
        super()
        this.state = {
            datas: []
        }
    }



    componentDidMount() {


        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer tTU3gFVUdP'
            },
            body: JSON.stringify({ email: 'mayankmittal@intugine.com' })
        };
        fetch('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch', requestOptions)
            .then(async response => {
                const data = await response.json();

                this.setState({ datas: data })

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    console.warn(data.message)
                    return Promise.reject(error);
                }

                this.setState({ postId: data.id })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }



    render() {
        return (
            <div className="DashboardCount">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Box className="Box">
                        <WhiteTextTypography variant="subtitle2" >DEL</WhiteTextTypography>
                        <WhiteTextTypography variant="h4" className="productcount">685</WhiteTextTypography>
                    </Box>
                    <Box className="Boxs">
                        <Typography variant="subtitle2" >INT</Typography>
                        <Typography variant="h4" className="productcount">685</Typography>
                    </Box>
                    <Box className="Boxs">
                        <Typography variant="subtitle2" >OOD</Typography>
                        <Typography variant="h4" className="productcount">685</Typography>
                    </Box>
                    <Box className="Boxs">
                        <Typography variant="subtitle2" >DEX</Typography>
                        <Typography variant="h4" className="productcount">685</Typography>
                    </Box>
                    <Box className="Boxs">
                        <Typography variant="subtitle2" >NFI</Typography>
                        <Typography variant="h4" className="productcount">685</Typography>
                    </Box>
                </Grid>

                {/* product show */}

                <Row mt={2} className="trackingdata">
                    <Col xs={4}>
                        <div className="tracking-side"  >
                            <div>
                                <img src={Destination} alt="Destination" />
                            </div>
                            <div className="dash-line">
                                <div className="single-line">
                                    <span className="circule"></span>
                                    <div className="line"></div>
                                    <div className="box-shipment">
                                        <Typography variant="subtitle1">Delivered</Typography>
                                    </div>
                                </div>

                                <div className="single-lines">
                                    <span className="circule"></span>
                                    <div className="line"></div>
                                    <div className="box-shipment">
                                        <Typography variant="subtitle1">Out for Delivery</Typography>
                                    </div>
                                </div>

                                <div className="single-lines">
                                    <span className="circule"></span>
                                    <div className="line"></div>
                                    <div className="box-shipment">
                                        <Typography variant="subtitle1">Arrived at Mysore</Typography>
                                    </div>
                                </div>

                           

                                <div className="single-lines">
                                    <span className="circule"></span>
                                    <div className="line"></div>
                                    <div className="box-shipment">
                                        <Typography variant="subtitle1">Arrived at Bangalore </Typography>
                                    </div>
                                </div>

                                <div className="single-lines">
                                    <span className="circule"></span>
                                    <div className="line"></div>
                                    <div className="box-shipment">
                                        <Typography variant="subtitle1">Transit to Next Hub</Typography>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <img src={Warehouse} alt="Destination" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={8} className="tracking-sides">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell >AWB NUMBER</TableCell>
                                    <TableCell >TRANSPORTER</TableCell>
                                    <TableCell >SOURCE</TableCell>
                                    <TableCell >DESTINATION</TableCell>
                                    <TableCell >BRAND</TableCell>
                                    <TableCell >START DATE</TableCell>
                                    <TableCell >ETD</TableCell>
                                    <TableCell >STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {

                                    this.state.datas ?
                                        this.state.datas.map((item, i) =>
                                            <TableRow >
                                                <TableCell>{item.awbno}</TableCell>
                                                <TableCell>{item.carrier}</TableCell>
                                                <TableCell>{item.from}</TableCell>
                                                <TableCell>{item.to}</TableCell>
                                                <TableCell>{item.carrier}</TableCell>
                                                <TableCell>{item.time}</TableCell>
                                                <TableCell></TableCell>
                                                <TableCell>{item.current_status}</TableCell>
                                            </TableRow>
                                        )
                                         : null
                                }

                            </TableBody>
                        </Table>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default dashboard


