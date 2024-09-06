import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@material-ui/core';
const Mycard =()=>{
    return(
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card sx={{ maxWidth: 400 ,backgroundImage :""}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689228694/SSCs_ojobvn.png" 
             alt="SCSS"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Senior Citizen Saving Scheme
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A senior citizen savings plan (SCSS) is a wonderful investing choice if 
            you are a senior citizen and is the . It is backed by the government, and 
            only senior people (over the age of 60) are permitted to invest.This service is available at
             certain bank branches and post offices. You must join the plan within one month after retiring.
              SCSS is offering an annual interest rate of 8.2 per cent, payable weekly.
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button className='b0'>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
          </Card>
          <Card sx={{ maxWidth: 400 ,backgroundImage:" "}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689229458/Govn_odxovo.png"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Post Office Monthly Income Scheme
            </Typography>
            <Typography variant="body2" color="text.secondary">
            India Post's Post Office Monthly Income Scheme (POMIS) is
             a type of investment and is a nice way of . Because it is backed by the government,
              it is a great investment choice for risk-averse individuals seeking consistent regular income
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button className='b0'>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{ maxWidth: 400 ,backgroundImage:" "}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689229117/POMI_gnaoyt.png"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Long-Term Government Bonds
            </Typography>
            <Typography variant="body2" color="text.secondary">
            For risk-averse investors, government bonds are a great low-risk investing choice.
             These bonds have maturities ranging from 5 to 40 years. Government bonds payout monthly 
             interest or give coupon payments set by the Indian government.
            Government bonds have a fixed maturity date. The primary goal of issuing government
             bonds is to raise funds for government spending.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button className='b0'>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{ maxWidth: 400 ,backgroundImage:" "}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689229680/corp_ecpogk.jpg"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Corporate Deposits
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Corporate deposits are available from a wide range of non-banking financial firms (NBFCs) 
            and housing finance businesses (HFCs). These are comparable to bank deposits in that you invest
             with a corporate organization, but they are not as safe as a bank deposit.
             Corporate deposits pay a high-interest rate and provide additional flexibility 
             that bank deposits do not. Before investing in corporate deposits, you should investigate 
             the NBFCs' financial health and reputation, so make sure you look into it before you do it.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button className='b0'> 
        <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      </div>
      
      


)
};
export default Mycard;