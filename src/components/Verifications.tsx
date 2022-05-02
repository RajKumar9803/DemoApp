import React from 'react'
import { Box, Button, CardMedia, Grid, Typography, Avatar, Card, CardContent } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay';






const Verifications = () => {
    return (
        <Grid container lg={12}>

            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "1600px" }}>
                    <Grid item lg={6} sm={12}>
                        <CardContent sx={{ flex: '1 0 auto' }}>

                            < CardMedia
                                component={'img'}
                                sx={{
                                    position: "absolute",
                                    width: "97px",
                                    height: "106px",
                                    left: "245px",
                                    top: "120px"

                                }}
                                image="\asset\logo 1.png"
                                alt="logo images"
                            />
                            <Typography variant='h4' display={"block"} sx={{
                                position: "absolute",

                                left: "200px",
                                top: "240px",
                                fontFamily: "Bai Jamjuree",
                                fontStyle: "normal",
                                fontWeight: "600px",
                                fontSize: "35px",
                                lineHeight: "44px",
                                textAlign: "center"

                            }} >Verification</Typography>

                            <Typography sx={{
                                position: "absolute",
                                height: "28px",
                                left: "100px",
                                top: "290px",
                                fontFamily: "Bai Jamjuree",
                                fontStyle: "normal",
                                fontWeight: "600px",
                                fontSize: "22px",
                                lineHeight: "28px",
                                textAlign: "center",
                                textTransform: "capitalize",
                                color: "#A2A3A5"

                            }}>
                                Enter the OTP sent to +91 9876543210

                            </Typography>


                            <Box component={"div"} display="flex" sx={{
                                position: "absolute",
                                left: 155,
                                top: 330
                            }}>
                                <Box component={"span"} margin={1} sx={{

                                    border: "2px solid black",
                                    boxSizing: "border-box",
                                    borderRadius: "10px",
                                    width: "60px",
                                    height: "72px",
                                    left: 288,
                                    top: 418,


                                }}>

                                </Box>
                                <Box component={"span"} margin={1} sx={{

                                    border: "2px solid black",
                                    boxSizing: "border-box",
                                    borderRadius: "10px",
                                    width: "60px",
                                    height: "72px",
                                    left: 288,
                                    top: 418,


                                }}>


                                </Box>

                                <Box component={"span"} margin={1} sx={{

                                    border: "2px solid black",
                                    boxSizing: "border-box",
                                    borderRadius: "10px",
                                    width: "60px",
                                    height: "72px",
                                    left: 288,
                                    top: 418,


                                }}>


                                </Box>
                                <Box component={"span"} margin={1} sx={{

                                    border: "2px solid black",
                                    boxSizing: "border-box",
                                    borderRadius: "10px",
                                    width: "60px",
                                    height: "72px",
                                    left: 288,
                                    top: 418,


                                }}>


                                </Box>
                            </Box>

                            <Typography variant='caption' sx={{
                                position: "absolute",
                                left: 150,
                                top: 425,

                                weight: 600,
                                fontFamily: "Bai Jamjuree",
                                fontSize: 20,
                                fontStyle: "normal",
                                color: " #DF201F",
                                textTransform: "capitalize",
                                marginLeft: "110px",

                            }}>
                                sec 08
                            </Typography>
                            <Box component={"div"} display="flex" sx={{
                                position: "absolute",
                                left: 230,
                                top: 460,

                            }} >
                                <Button variant="text" sx={{
                                    fontStyle: "normal",
                                    fontFamily: "Montserrat Alternates",
                                    textTransform: "uppercase",
                                    color: "#161A1D"

                                }}>Resend OTP <Avatar sx={{ bgcolor: "red", width: "24px", height: "24px", left: 4 }}>
                                        <ReplayIcon />
                                    </Avatar>

                                </Button>


                                <Button variant="contained" sx={{
                                    position: "absolute",
                                    left: -70,
                                    top: 55,
                                    lineHeight: 2.5,
                                    width: 347,
                                    height: 50,
                                    bgcolor: "#DF201F",
                                    boxShadow: "2px 2px 25px 2px rgba(223, 32, 31, 0.5)",
                                    borderRadius: 60

                                }}>
                                    Verification

                                </Button>


                            </Box>






                        </CardContent>
                    </Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                    </Box>
                </Box>
                <Grid item lg={6} sm={12}>
                    <CardMedia
                        component="img"
                        sx={{ width: 630 }}
                        image="\asset\Untitled-1 5.png"
                        alt="Live from space album cover"
                    />

                </Grid>

            </Card>
        </Grid>
    )
}

export default Verifications