
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled,Container } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';
import './categories.css'

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
    width:180px;
`;
    

    
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <Container>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}  >
                <button class="button-91" role="button">Create a Blog</button>
            </Link>
            
            
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"} sx={{color:'white',fontSize:'18px'}}>
                                All Categories
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody  >
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${category.type}`} sx={{color:'white',fontSize:'16px',textAlign:'center'}}>
                                        {category.type}
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </Container>
    )
}

export default Categories;