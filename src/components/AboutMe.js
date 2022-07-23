import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DataContext from '../context/DataContext';

import devIconDarkTransparent from '../images/developer_icon_dark_transparent.jpeg';

import sketchingTransparent from '../images/sketching_transparent.png';
import runningTransparent from '../images/running_transparent.png';
import workingOutTransparent from '../images/working_out_transparent.png';
import guitarDark from '../images/guitar_dark.png';
import nutritionTransparent from '../images/nutrition_transparent.png';
import slackliningTransparent from '../images/slacklining_transparent.webp';
import skateboardingTransparent from '../images/skateboarding_transparent.webp';

const getImage = hobby =>
  // prettier-ignore
  hobby.title.match(/(sketch)/i) ? sketchingTransparent
  : hobby.title.match(/(running)/i) ? runningTransparent
  : hobby.title.match(/(working out)/i) ? workingOutTransparent
  : hobby.title.match(/(guitar)/i) ? guitarDark
  : hobby.title.match(/(nutrition)/i) ? nutritionTransparent
  : hobby.title.match(/(slack)/i) ? slackliningTransparent
  : hobby.title.match(/(skate)/i) ? skateboardingTransparent
  : devIconDarkTransparent;

const useStyles = makeStyles(_theme => ({
  mainContainer: {
    background: '#233',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 360,
    margin: '3rem auto',
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  const data = React.useContext(DataContext);
  const [resumeData, setResumeData] = React.useState();

  React.useEffect(() => {
    (async () => {
      setResumeData(await data.resumeData);
    })();
  });

  const getTitle = hobby => hobby.title;
  const getLinkText = hobby => hobby.content.text || 'More';

  return resumeData ? (
    <Box component='div' className={classes.mainContainer}>
      <Typography variant='h4' align='center' className={classes.heading}>
        {resumeData.aboutMe.hobbies.sectionHeader}
      </Typography>
      <Grid container justify='center'>
        {resumeData.aboutMe.hobbies.items.map((hobby, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardMedia component='img' alt={getTitle(hobby)} height='300' image={getImage(hobby)} />
              <CardContent>
                <Typography variant='h5' gutterBottom>
                  {getTitle(hobby)}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {hobby.description}
                </Typography>
              </CardContent>
              {hobby.content?.link && (
                <CardActions>
                  <Button size='small' color='primary' href={hobby.content.link}>
                    {getLinkText(hobby)}
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <></>
  );
};

export default AboutMe;
