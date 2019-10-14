import { makeStyles } from '@material-ui/core/styles';
import StarDrug from '../../images/star-drug.jpg';
import Pharmacist from '../../images/PharmacyBenefits.jpg';
import StarDrugLocation from '../../images/star-drug-location.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  pharmTitleStyle: {
    fontSize: '56px',
    fontWeight: 500,
    margin: 0
  },
  pharmDescStyle: {
    fontSize: '26px',
    fontWeight: 300,
    margin: '0 0 20px 0'
  },
  gridContainer: {
    padding: '40px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ccc',
    backgroundImage: `url(${Pharmacist})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    height: '500px'
  },
  categories: {
    marginRight: '20px'
  },
  contactSection: {
    fontSize: '1.5em',
    backgroundColor: '#f2f2f2',
    padding: '20px 40px',
    height: 'auto',
    minHeight: '500px',
    alignItems: 'center'
  },
  contactTextWrapper: {
    padding: '30px 0'
  },
  contactTextLine: {
    display: 'flex',
    alignItems: 'center',
  },
  contactText: {
    fontSize: '32px'
  },
  contactTextCaption: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactTextIcon: {
    marginRight: theme.spacing(3)
  },
  mapWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  map: {
    height: '400px',
    width: '374px',
    backgroundColor: 'black',
    backgroundImage: `url(${StarDrugLocation})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '4px'
  },
  introWrapper: {
    padding: '20px 100px'
  },
  paper: {
    height: '100%',
    backgroundImage: `url(${StarDrug})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.4) !important',
    backgroundBlendMode: 'multiply',
    color: 'white !important',
    padding: '50px'
  },
  innerContainer: {
    height: '100%',
  },
  title: {
    fontWeight: 400,
    textShadow: 'black 0 0 12px',
    fontSize: '5em'
  },
  caption: {
    textShadow: 'black 0 0 15px',
    fontSize: '20px',
    fontWeight: 400,
    marginBottom: '25px'
  },
  categoryTitle: {
    paddingLeft: '13px'
  },
}));

export default useStyles;