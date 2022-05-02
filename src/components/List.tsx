import { Avatar, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'


const Lists = () => {
  
  

  return (
    <TableContainer >
      <Table
        aria-label="simple table">
        <TableHead sx={{
          color: "#FFFFFF",
          background: "#DF201F",
          borderRadius: " 8px 8px 0px 0px"
        }} >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Product id</TableCell>
            <TableCell align="right">quantity</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Discount Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow

            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            <Box component={"span"} sx={{display:"flex"}}>
              <Avatar
               alt="fries"
                src="\asset\Ellipse 35.png"
              sx={{ width:42, height:42 }}
              />
              <Typography sx={{
                position:"absolute",
                left:70,
                top:83,
                fontStyle:"normal",
                fontWeight:600,
                fontSize:18,
                color:"#A2A3A5"
              }}>French Fries</Typography>

              </Box>

            </TableCell>
            <TableCell align="right" sx={{
              position: "absolute",
              width: 56,
              height: 476,
              left:310,
              top:75,
              fontStyle:"normal",
              fontWeight:600,
              color:" #A2A3A5"
            }}>01475</TableCell>
            <TableCell align="right" sx={{
              position:"absolute",
              top:75,
              left:525,
              fontStyle:"normal",
              fontWeight:600,
              color:" #A2A3A5"

            }}>
              9608
               
            </TableCell>
            <TableCell align="right" sx={{
               position:"absolute",
               top:75,
               left:700,
               fontStyle:"normal",
               fontWeight:600,
               color:" #A2A3A5"
            }}>
            In Stock
            </TableCell>
            <TableCell align="right" sx={{
               position:"absolute",
               top:75,
               left:900,
               fontStyle:"normal",
               fontWeight:600,
               color:" #A2A3A5"
            }}>
            ₹ 200 

            </TableCell>
            <TableCell align="right"
            sx={{
              position:"absolute",
               top:75,
               left:1150,
               fontStyle:"normal",
               fontWeight:600,
               color:" #A2A3A5"

            }}>
            ₹ 200
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Lists