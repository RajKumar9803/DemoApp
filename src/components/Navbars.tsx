import { AppBar, Avatar, Badge, Box, Button, CardMedia, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import CustomizedDialogs from './Dialog'
import AddIcon from '@mui/icons-material/Add';
import Lists from './List'
const Navbars = () => {
    return (
        <Box>
            <AppBar position="sticky" sx={{
                background: "#FFFFFF",
                boxShadow: "2px 2px 30px 2px #FFF3E5",
                height: "100px",

            }}>
                <Toolbar variant="dense">
                    <CardMedia
                        component="img"
                        sx={{
                            position: "absolute",
                            height: 57,
                            width: 52,
                            left: 50,
                            top: 20,
                            display: { xs: 'none', sm: 'block' }

                        }}
                        image="\asset\logo 1.png"
                        alt="Paella dish"
                    />
                    <Typography sx={{
                        position: "absolute",
                        width: 164,
                        height: 54,
                        left: 120,
                        top: 23,
                        color: "#161A1D",
                        fontStyle: "normal",
                        fontWeight: "700px",
                        fontSize: "24px",
                        lineHeight: "48px",
                        fontFamily: "Kozuka Gothic Pr6N"

                    }}>
                        Food Delivery
                    </Typography>
                    <Box sx={{
                        position: "absolute",
                        width: "603px",
                        height: "23px",
                        left: "350px",
                        top: "39px",
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#161A1D",
                        fontStyle: "normal",
                        fontWeight: "600px",
                        fontSize: "18px",
                        lineHeight: "22px"


                    }}>
                        <Typography>Dashboard</Typography>
                        <Typography>
                            <CustomizedDialogs />

                        </Typography>
                        <Typography>Orders</Typography>
                        <Typography>Restaurant list</Typography>


                    </Box>
                    <Avatar sx={{
                        position: "absolute",
                        width: "58px",
                        height: "58px",
                        left: "1100px",
                        top: "23px",

                    }} alt="abc" src="\asset\Ellipse 11.png" />
                    <Badge badgeContent={4} color="error" sx={{
                        position: "absolute",
                        width: "26px",
                        height: "22px",
                        left: "1200px",
                        top: "40px",

                    }}>
                        <NotificationsIcon
                            sx={{
                                color: "black"
                            }} />

                    </Badge>

                </Toolbar>
            </AppBar>
            <Typography
                sx={{
                    marginLeft: 10,
                    marginTop: 5,
                    fontStyle: "normal",
                    fontWeight: "600px",
                    fontSize: "26px",
                    lineHeight: "32px"
                }}

            >Product list</Typography>


            <Box sx={{
                position: "absolute",
                width: "393px",
                height: "60px",
                left: "500px",
                top: "140px",
                background: "#FFFFFF",
                border: " 1px solid #E7E7E9",
                boxSizing: "border-box",
                borderRadius: "60px",
            }}>
                <InputBase placeholder='search....' sx={{
                    position: "absolute",
                    Width: "72px",
                    Height: "28px",
                    Top: "156px",
                    Left: "733px",
                    fontFamily: "Montserrat Alternates",
                    fontStyle: "normal",
                    fontWeight: "500px",
                    fontSize: "16px",
                    lineHeight: "28px",
                    textTransform: "capitalize",
                    color: "#A2A3A5",
                    margin: "15px"




                }} />
                <SearchIcon sx={{
                    position: "absolute",
                    left: "350px",
                    right: "0%",
                    top: "20px",
                    bottom: "0%",
                }} />


            </Box>
            <Box component={"span"} sx={{
                position: "absolute",
                width: "284px",
                height: "60px",
                left: "930px",
                top: "140px",
                background: " #94CD00",
                boxShadow: " 2px 2px 25px 2px rgba(148, 205, 0, 0.4)",
                borderRadius: "60px",

            }}>
                <Button sx={{ position: "absolute", left: 40, top: "10px" }}>add new product</Button>
                <AddIcon sx={{
                    position: "absolute",
                    left: "220px",
                    top: "10px",
                    fontFamily: "Bai Jamjuree",
                    fontStyle: "normal",
                    fontWeight: "400px",
                    fontSize: "30px",
                    lineHeight: "50px",
                    color: "#FFFFFF"
                }} />



            </Box>





        </Box>
    )
}

export default Navbars