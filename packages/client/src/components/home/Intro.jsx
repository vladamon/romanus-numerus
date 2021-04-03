import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Typography } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import MoneyIcon from '@material-ui/icons/Money';
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
}));

const Intro = ({ product, ...rest }) => {
	const classes = useStyles();

	return (
		<Card
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}
			{...rest}
		>
			<CardContent>
				<Box className={classes.header}>
					<Avatar className={classes.avatar}>
						<MoneyIcon />
					</Avatar>
				</Box>
				{/* <Typography align="center" color="textPrimary" gutterBottom variant="h4">
					{product.title}
				</Typography> */}
				<Typography align="center" color="textPrimary" variant="body1">
					Welcome to simple convertor for converting Roman numbers to Integers and vice-versa!
				</Typography>
				<Typography align="center" color="textPrimary" variant="body1">
					This is only for learning purposes so we follow strict rules for representing roman numerals - this
					means 3999 is the largest representable integer
				</Typography>
			</CardContent>
			<Box sx={{ flexGrow: 1 }} />
		</Card>
	);
};

Intro.propTypes = {
	product: PropTypes.object.isRequired,
};

export default Intro;
