import { Typography, makeStyles } from '@material-ui/core';
import reshiPic1 from '../../pics/reshi-pic1.jpg';
import reshiPic2 from '../../pics/reshi-pic2.jpg';
import reshiPic3 from '../../pics/reshi-pic3.jpg';
import reshiPic4 from '../../pics/reshi-pic4.jpg';
import reshiPic5 from '../../pics/reshi-pic5.jpg';
import { ReshiPic as ReshiPicType } from '../../types'; // Avoid name clash with component

const defaultPics: ReshiPicType[] = [
  { image: reshiPic1, quote: "Did you test it in prod?" },
  { image: reshiPic2, quote: "CI is life." },
  { image: reshiPic3, quote: "Have you tried turning it off and on again?" },
  { image: reshiPic4, quote: "Kubernetes what now?" },
  { image: reshiPic5, quote: "99 bugs in the code..." },
];

export type ReshiPicOptions = {
  extraPics?: ReshiPicType[];
};

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
  },
}));

export const ReshiPic = (options: ReshiPicOptions) => {
  const { extraPics } = options;
  const allPics = [...defaultPics, ...(extraPics ?? [])];
  const random = allPics[Math.floor(Math.random() * allPics.length)];
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img src={random.image} alt="Random Reshi" className={classes.image} />
      <Typography variant="subtitle1">{random.quote}</Typography>
    </footer>
  );
};
