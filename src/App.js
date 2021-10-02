  import * as React from 'react';

  import { createTheme, ThemeProvider } from '@mui/material/styles';

  import Avatar from '@mui/material/Avatar';
  import Stack from '@mui/material/Stack';
  import Paper from '@mui/material/Paper';
  import Button from '@mui/material/Button';
  import Container from '@mui/material/Container';

  import './index.css';   

  function App(){

    let user = '/roadtocode-org';
    let data;

    if(window.location.pathname!=="/")
    {
      user=window.location.pathname;   
    }    
    try{
    data =require(`./users${user}.json`); 
    }
    catch(e){
      data={
        "name": "Profile is not updated yet",
        "image": "http://github.com/surajshende247.png",
        "bio": "visit https://github.com/surajshende247/biotree",    
        "links":[],    
      };
    }

    const theme = createTheme({
      palette: {
        github: {
          main: '#000000',
        },
        linkedin:{
          main: '#2867B2',
        },
        youtube: {
          main: '#FF0000',
        },
        twitter: {
          main: '#1DA1F2',
        },  
        instagram: {
          main: '#F77737'
        }
      },
    });

    
    return(
      <Container maxWidth="md">
        <ThemeProvider theme={theme}>
       
          <Paper 
          className="user-card"          
          elevation={12}
          sx={{
             p: 2
            }}>

            <Stack
            direction="column" 
            sx={{
              width: '100%',
              mx: 'auto', 
              textAlign: 'center',
              }}>

            <Avatar
              alt={data.name}
              src={`http://github.com${user}.png`}
              sx={{ width: 100, height: 100, mx: 'auto', textAlign: 'center' }}
            />

            <h1>{data.name}</h1>

            <p>{data.bio}</p>       

            </Stack>  
            
          </Paper>
        
              <br /><br />
        <div >
          <Stack direction="column" spacing={2}>
            {
              
                  data.links.map((link)=>(
                    <Button 
                    variant="contained" 
                    color={link.icon} 
                    style={{color: '#ffffff'}}
                    href={link.url} 
                    target="_blank" >
                      <i className={`fab fa-${link.icon}`}></i>                  
                        &nbsp;&nbsp;&nbsp;
                        {link.name}                                           
                    </Button>
                  ))
              
            }

          </Stack>          
        </div>
        </ThemeProvider>
      </Container>
    );
  }

  export default App;