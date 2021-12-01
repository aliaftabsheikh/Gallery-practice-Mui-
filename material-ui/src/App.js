import React from "react"
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core"
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import useStyles from "./styles";

function App() {
  const classes = useStyles()
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon className={classes.icon} />
          <Typography>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" paragraph color="textSecondary" >
              One of UK's leading photographic lighting experts. 30 years experience. Studio & Location. High End Product Photography. Full creative support. Start ups to agency brand campaigns. Professional Service. Creative Support. Production. Types: Still Life, Advertising, Lifestyle, Footwear.            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">See My Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">See My Photos</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>

              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}
                      image="http://source.unsplash.com/random"
                      title="Image Title"
                    />
                    <CardContent className={classes.cardContent} >
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        This is Media Card . You Can use this Section to describe the Content
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">View</Button>
                      <Button size="small" color="primary">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

          </Container>
        </div>
      </main>
      <footer className={classes.footer} >
        <Typography gutterBottom variant="h5" align = "center">
          Footer
        </Typography>
        <Typography gutterBottom variant="subtitle1" align = "center" color = "textSecondary">
         Something here to give the footer a purpose
        </Typography>
      </footer>
    </>
  );
}

export default App;
