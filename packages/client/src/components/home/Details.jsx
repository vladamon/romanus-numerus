import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	header: {
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: 30,
	},
	avatar: {
		backgroundColor: orange[600],
		height: 40,
		width: 40,
	},
	cardTitle: {
		justifyContent: 'space-between',
		marginBottom: 30,
	},
	cardItem: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
}));

const Details = () => {
	const classes = useStyles();

	return (
		<Card className={classes.cardItem}>
			<CardContent>
				<Typography align="center" color="textPrimary" variant="body1">
					Roman numeral, any of the symbols used in a system of numerical notation based on the ancient Roman
					system. The symbols are I, V, X, L, C, D, and M, standing respectively for 1, 5, 10, 50, 100, 500,
					and 1,000 in the Hindu-Arabic numeral system. A symbol placed after another of equal or greater
					value adds its value; e.g., II = 2 and LX = 60. A symbol placed before one of greater value
					subtracts its value; e.g., IV = 4, XL = 40, and CD = 400.
				</Typography>
				<Typography></Typography>
			</CardContent>
			<Box sx={{ flexGrow: 1 }} />
		</Card>
	);
};

export default Details;
