
import { Grid } from '@mui/material';

//components
import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';
import './categories.css'
const Home = () => {

    return (
        <>
            <Banner />
            <div className='headerText'>
                <h2>Latest Posts</h2>
            </div>
            <Grid container>
                <Grid item lg={2} xs={12} sm={2} sx={{marginTop:'-50px'}}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10} sx={{marginLeft:'-100px'}}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;