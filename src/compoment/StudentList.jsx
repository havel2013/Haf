import {Container, Grid} from "@mui/material"
import GeyCard from "./GeyCard";

const students = [
    {id: 1, name: 'Jan Novák', description: 'Milovník programování', avatar: 'https://thispersondoesnotexist.com/', category: 'Science'},
    {id: 2, name: 'David Václavka', description: 'Milovník dobreho ravu a plantáží', avatar: 'https://thispersondoesnotexist.com/', category: 'Science'},
    {id: 3, name: 'Adam Kaňka', description: 'Milovník matiky', avatar: 'https://thispersondoesnotexist.com/', category: 'Science'},
    {id: 4, name: 'Klara Zaži', description: 'Milovník hudby', avatar: 'https://thispersondoesnotexist.com/', category: 'Science'},
    {id: 5, name: 'Matyáš Zubr', description: 'Milovník Olika', avatar: 'https://thispersondoesnotexist.com/', category: 'Science'}
]

function StudentList() {
    return (
        <Container sx={{marginTop: 4}}>
        <Grid container spacing={2}>
            {students.map((student) => (
                <Grid item xs={12} sm={6} md={4} key={student.id}>
                    <GeyCard student={student}></GeyCard>
                </Grid>
            ))}
        </Grid>
        </Container>
    );
}

export default StudentList;