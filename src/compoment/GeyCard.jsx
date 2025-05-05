import {Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";

function GeyCard({student}) {
    const HandleLearnMore = () => {
        alert("More in about ${student.name}")
    }

    return (
        <Card>
            <CardHeader title={student.name} />
            <CardMedia component="img" 
            height="140"
            image={student.avatar}
            alt={student.name}
            />
            <CardContent>
                <Typography varianr="body2" color="text.secondary">
                    {student.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' onClick={HandleLearnMore}>
                    Leanr MOre
                </Button>
            </CardActions>
        </Card>
    );
}

export default GeyCard;