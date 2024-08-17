import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css"

export default function Infobox({info}){
    return (
        <div className='infobox'>
            <div className='cardComp'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://images.unsplash.com/photo-1628525805814-cf9fe2582727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature = {info.temp} &deg; C</p>
                            <p>Humidity = {info.humid}</p>
                            <p>Min Temp = {info.min} &deg; C</p>
                            <p>Max Temp = {info.max}&deg; C</p>
                            <p>Feels Liks = {info.feelLike}&deg; C</p>
                            <p>Weather is described as = {info.weather}</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            
        </div>
    )
}