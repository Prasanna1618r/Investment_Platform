import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Css/card.css";
import { Link } from 'react-router-dom';
export default function MyCard() {
  return (
    <div className='ba'>
      <div className='cc1'>
   <Card className='card1' sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/dxgechnhe/image/upload/v1689309336/i1_ec5ccw.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Public Provident Fund (PPF)
        </Typography>
        <Typography variant="body2" color="text.secondary">
Available at almost all Indian banks and post offices.
You can only open one account.
No restriction on the age limit to open an account. A minor’s account is handled by their guardian till the age of 18.
Minimum investment amount is INR 500 per annum.
Maximum amount is INR 1.5 lakh per annum.
You can deposit anywhere between one to 12 times in one financial year.
The current interest rate is 7.10% per annum.
PPF interest rates are floating in nature, which implies they could change every quarter. The interest rate change is anywhere between 0.25% to 0.75% in general.
A PPF fund matures in a span of 15 years.
Partial withdrawals are allowed after five years of the account opening.
Investment in PPF is tax-free.
Interest earned on your investment is also tax-free.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/ppf"> <Button size="small">Invest</Button></Link>
      </CardActions>
    </Card>

    <Card className='card2' sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/dxgechnhe/image/upload/v1689309337/i2_xxabkc.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        National Savings Certificate (NSC)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
The certificate can be readily bought at Indian public banks, some private banks and all post offices.

A minimum investment amount of INR 1,000 is mandatory.
You can invest any amount in the multiple of 100 in 12 installments in one financial year or the desired deposit at once.
No upper limit on investment.

Interest compounds annually at the rate announced by the Ministry of Finance every quarter.
Interest is paid at the end of the maturity period.

NSC has a lock-in period of five years.
Premature withdrawal is possible in cases such as the passing away of the certificate holder.

Investment up to INR 1.5 lakh per annum is exempt from your taxable income under Section 80C of the Income Tax Act.
         </Typography>
      </CardContent>
      <CardActions>
        <Link to="nsc"> <Button size="small">Invest</Button></Link>
      </CardActions>
    </Card>

   <Card className='card3'sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/dxgechnhe/image/upload/v1689309337/i3_imvckn.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Post Office Monthly Income Scheme
        </Typography>
        <Typography variant="body2" color="text.secondary">
The Indian postal service offers single account, joint account (up to three adults), a guardian or parent of a minor and/or of a person of unsound mind; and even under the name of a minor above 10 years of age.

A minimum investment of INR 1,000 is required to open an account and a maximum balance of up to INR 4.50 lakh and 9 lakh are permitted for single and joint accounts, respectively.

Account can be closed after five years from the date of opening. However, premature closure before one year is not allowed. Similarly, 2% is deducted from the principal amount if the account is closed between one year and three years, and 1% for three and five years.
Nominees can file a claim if the depositor dies before the maturity period.

       </Typography>
      </CardContent>
      <CardActions>
        <Link to="/postoffice"><Button size="small">Invest</Button></Link>
      </CardActions>
    </Card>

   <Card className='card4'sx={{ maxWidth: 400}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/dxgechnhe/image/upload/v1689309341/i4_j60foi.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Government Bonds
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
The government announces its bond offering ahead of the date of auction. Both the state governments and the Central government issue these bonds.

Most government bonds are fixed rate bonds, which means the interest rate is fixed for the entire tenure of the bond till maturity.Depending on the coupon rate determined at the time of purchase of the bond, you get a half-yearly interest for the stipulated bond holding period.Any capital gain (or capital loss) when the bond is sold or matures.

The maturity period of a government bond can be a year or more depending on the offering.

Tax will be charged as per a person’s income bracket from the income generated by the interest that one receives from these bonds.Any price increase in the value of the bond will also be regarded as capital gains and taxed accordingly.
</Typography>
      </CardContent>
      <CardActions>
        <Link to="govtbonds"><Button size="small">Invest</Button></Link>
      </CardActions>
    </Card>
    </div>

<div className='cc2'>
    <Card className='card5'sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/dxgechnhe/image/upload/v1689309338/i5_qi6jem.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        National Pension Scheme (NPS)
        </Typography>
        <Typography variant="body2" color="text.secondary">
Indian citizens between the age of 18 and 65 can invest.An account can be opened by visiting an authorized bank or any of its branches called point of presence (POP) appointed by the Pension Fund Regulatory and Development Authority. Alternatively, by visiting the eNPS web portal.After a request for opening an account, you receive a 12-digit number and a permanent retirement account is created.

You can open this account by depositing INR 500.To keep the account active, you have to deposit at least INR 1,000 in a financial year.No upper limit on how much you can invest per year.
After reaching the age of 60, you can withdraw a maximum of 60% of your total balance.The remaining 40% has to be compulsorily used to buy a pension plan of your choice.

Investment of INR 2 lakh per annum is exempted from tax under Section 80 C and Section 80CCD.
Returns earned on NPS tier I accounts are exempted from tax.
         </Typography>
      </CardContent>
      <CardActions>
        <Link to="nps"><Button size="small">Invest</Button></Link>
      </CardActions>
    </Card>

   <Card className='card6'sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/dxgechnhe/image/upload/v1689309338/i6_hforgd.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sovereign Gold Bonds (SGBs)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Availability:
SBGs are open for auction on dates announced by the central government. These bonds are issued by the RBI multiple times a year.
You must have a PAN Card to buy an SGB.
You can buy SGBs from banks, post offices, stock brokerage companies both online and offline.
Investment Amount:
Each bond unit you purchase has the value of one gram of pure gold based on gold’s average closing price of the previous three business days. You can purchase a maximum of 4 kgs of SGBs for individuals and 20 kgs for trusts. You currently receive a discount of INR 50 on each gram purchased online.
Return on Investment:
2.5% paid twice a year.
Maturity:
Eight years. Early redemption after five years.
Taxation:
Interest payments are taxed based on your tax slab.Any gains made at maturity are free from tax.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="sgb"><Button size="small">Invest</Button></Link>
      </CardActions>
    </Card>

    <Card className='card7'sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/dxgechnhe/image/upload/v1689309337/i7_yfkytd.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Unit-linked Insurance Plans (ULIPs)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
You can purchase ULIPs from any bank or insurance company operating in India.
Financial institutions expect you to provide your proof of income given ULIP is a long-term investment product.

The minimum investment in ULIP varies from one financial entity to another. Generally, a minimum of INR 1,500 is required as premium payment per month.
Since ULIPs fall under the Section 80 C tax exemption category, an investment of up to INR 1.5 lakh per year can be done to get a tax benefit.

After which the policyholder can withdraw their funds without any penalty and are also eligible to continue the policy depending on its terms and conditions.
Payment of premiums can be halted after three years but the withdrawal of funds invested is possible only after the maturity period of five years. ULIPs are considered long-term investment plans with up to 10 years considered an average investment period.
</Typography>
      </CardContent>
      <CardActions>
        <Link to="/ulip"><Button size="small">Invest</Button></Link>
      </CardActions>
    </Card>

    <Card className='card8'sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://res.cloudinary.com/dxgechnhe/image/upload/v1689309338/i8_vff2eo.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Equity Mutual Funds
        </Typography>
        <Typography variant="body2" color="text.secondary">
You can readily invest via SEBI-authorized individuals, agencies and stock brokerage companies online or offline.
Most mutual funds expect a minimum investment of INR 1,000; there is no cap on the maximum amount that can be invested.
To invest in equity mutual funds, you need to have a demat account and a trading account.
Investors are free to redeem their investments in open-ended equity mutual fund schemes.

Equity mutual funds are known to deliver the highest returns among other kinds of mutual fund investments. For instance, some equity mutual funds have given a 5-year annualized return of up to 35% and as high as 117% in a year of historic highs in 2021.
The return depends on the market fluctuations and the overall economic scenario.
In case of a short-term capital gain, tax is applied at 15% plus 4% cess.
For long-term capital gains, if the profits are less than INR 1 lakh in a financial year, the investment return is completely tax-free.
 </Typography>
      </CardContent>
      <CardActions>
        <Link to="/equity"><Button size="small">Invest</Button></Link>
      </CardActions>
    </Card>

</div>
    </div>
  );
}
