import React from 'react'
import { Avatar, Box, Button, Card, CardContent, CardMedia, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'





const LoginPage = () => {
    return (
        // <Grid container lg={12} spacing={2}  >
        //     <Grid item lg={6} >

        //         < CardMedia
        //             component={'img'}
        //             sx={{
        //                 position: "absolute",
        //                 width: "97px",
        //                 height: "106px",
        //                 left: "381px",
        //                 top: "245px"

        //             }}
        //             image="\asset\logo 1.png"
        //             alt="logo images"
        //         />


        //         <Typography variant='h4' display={"block"} sx={{
        //             position: "absolute",
        //             width: "251px",
        //             height: "44px",
        //             left: "304px",
        //             top: "371px",
        //             fontFamily: "Bai Jamjuree",
        //             fontStyle: "normal",
        //             fontWeight: "600px",
        //             fontSize: "35px",
        //             lineHeight: "44px",
        //             textAlign: "center"

        //         }} >Welcome Back!</Typography>


        //         <Typography sx={{
        //             position: "absolute",
        //             width: "151px",
        //             height: "28px",
        //             left: "354px",
        //             top: "418px",
        //             fontFamily: "Bai Jamjuree",
        //             fontStyle: "normal",
        //             fontWeight: "600px",
        //             fontSize: "22px",
        //             lineHeight: "28px",
        //             textAlign: "center",
        //             textTransform: "capitalize",
        //             color: "#A2A3A5"

        //         }}>
        //             login account

        //         </Typography>


        //         <Avatar
        //             alt="flag"
        //             src="\asset\1200px-Flag_of_India 1.png"
        //             sx={{
        //                 width: 28, height: 28, position: "absolute",
        //                 left: "210px",
        //                 top: "497px"


        //             }}
        //         />


        //         <Box component={"span"} sx={{



        //         }}>
        //             <Typography sx={{
        //                 position: "absolute",
        //                 width: " 34px",
        //                 height: "26px",
        //                 left: "247px",
        //                 top: "496px",
        //                 lineHeight: "30px",
        //                 fontFamily: "Montserrat Alternates",
        //                 fontStyle: "normal",
        //                 fontWeight: "600px",
        //                 fontSize: "18px",
        //                 textTransform: "capitalize",
        //                 color: "#161A1D",


        //             }} >
        //                 +91
        //             </Typography>

        //         </Box>
        //         <Box component={"span"} sx={{
        //             position: "absolute",
        //             width: "100px",
        //             height: "28px",
        //             left: "355px",
        //             top: "499px",

        //         }}>
        //             <Typography sx={{

        //             }}>
        //                 Mobile no
        //             </Typography>

        //         </Box>

        //         <Box sx={{
        //             position: "absolute",
        //             width: "498px",
        //             height: "2px",
        //             left: "181px",
        //             top: "545px",
        //             background: "#E8E8E8",
        //             opacity: "0.8"
        //         }}>
        //         </Box>

        //         <Button variant="contained" sx={{
        //             position:"absolute",
        //             width:"347px",
        //             height:"80px",
        //             left:"256px",
        //             top:"600px",
        //             background:"#DF201F",
        //             boxShadow:"2px 2px 25px 2px rgba(223, 32, 31, 0.5)",
        //             borderRadius:"60px"

        //         }}>Get OTP</Button>

        //     </Grid>

        //     <Grid item lg={6}>
        //         < CardMedia
        //             component={'img'}
        //             sx={{
        //                 position: "absolute",
        //                 width: "753px",
        //                 height: "578px",
        //                 left: "685px",
        //                 top: "161px",
        //             }}
        //             image="\asset\shop.png"
        //             alt="logo images"
        //         />



        //     </Grid>



        // </Grid>
        <Grid container lg={12}>
            <Card sx={{ display: 'flex', }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: "800px", height: "500px" }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Grid item lg={6} sm={12}>

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

                                left: "180px",
                                top: "240px",
                                fontFamily: "Bai Jamjuree",
                                fontStyle: "normal",
                                fontWeight: "600px",
                                fontSize: "35px",
                                lineHeight: "44px",
                                textAlign: "center"

                            }} >Welcome Back!</Typography>


                            <Typography sx={{
                                position: "absolute",
                                height: "28px",
                                left: "220px",
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
                                login account

                            </Typography>

                            <Avatar
                                alt="flag"
                                src="\asset\1200px-Flag_of_India 1.png"
                                sx={{
                                    width: 28, height: 28, position: "absolute",
                                    left: "120px",
                                    top: "350px"


                                }}
                            />
                            <Box component={'span'}>
                                <Typography sx={{
                                    position: "absolute",
                                    left: "180px",
                                    top: "355px",
                                    lineHeight: "30px",
                                    fontFamily: "Montserrat Alternates",
                                    fontStyle: "normal",
                                    fontWeight: "600px",
                                    fontSize: "18px",
                                    textTransform: "capitalize",
                                    color: "#161A1D",


                                }} >
                                    +91
                                </Typography>


                            </Box>
                            <Box component={"span"} sx={{
                                position: "absolute",
                                width: "100px",
                                left: "100px",
                                top: "360px",

                            }}>
                                <Box sx={{
                                    position: "absolute",
                                    width: "498px",
                                    height: "2px",
                                    top: "40px",
                                    background: "#E8E8E8",
                                    opacity: "0.8"
                                }}>


                                </Box>
                                <Button variant="contained" color='error' sx={{
                                    position: "absolute",
                                    width: "347px",
                                    height: "70px",
                                    left: "70px",
                                    top: "100px",
                                    background: "#DF201F",
                                    boxShadow: "2px 2px 25px 2px rgba(223, 32, 31, 0.5)",
                                    borderRadius: "60px",
                                   

                                }}>Get OTP</Button>
                            </Box>











                        </Grid>




                    </CardContent>
                  
                </Box>
                <Grid item lg={6} sm={12}>
                    <CardMedia
                        component="img"
                        sx={{ width: 753 }}
                        image="\asset\shop.png"
                        alt="Live from space album cover"
                    />
                </Grid>
            </Card>
        </Grid >

    )
}

export default LoginPage;