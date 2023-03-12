
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938876_960_720.jpg) center/55% repeat-x #000;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    display: flex;
    flex-direction: column;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #000000;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background:black;
    margin:10px;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Code for Interview</SubHeading>
        </Image>
    )
}

export default Banner;