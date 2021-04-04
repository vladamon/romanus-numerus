import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: red[600],
		height: 40,
		width: 40,
	},
	cardTitle: {
		justifyContent: 'space-between',
		marginBottom: 30,
	},
	cardItem: {
		height: '100%',
	},
}));

const Result = (props) => {
	const classes = useStyles();

	const inputValue = useSelector((state) => state.convertor.inputValue);
	const convertedValue = useSelector((state) => state.convertor.convertedValue);

	const getInputValue = () => {
		return inputValue || 'Input value i.e. MCM';
	};

	const getConvertedValue = () => {
		return convertedValue || 'Converted value i.e. 1900';
	};

	return (
		<Card className={classes.cardItem} {...props}>
			<CardContent>
				<Grid container spacing={3} className={classes.cardTitle}>
					<Grid item>
						<Typography color="textSecondary" gutterBottom variant="h6">
							RESULT:
						</Typography>
					</Grid>
					<Grid item>
						<Avatar className={classes.avatar}>
							<MoneyIcon />
						</Avatar>
					</Grid>
				</Grid>
				<Grid item>
					<Typography color="textSecondary" variant="caption">
						You've entered number:
					</Typography>
				</Grid>
				<Grid item>
					<Typography color="textPrimary" variant="h3">
						{getInputValue()}
					</Typography>
				</Grid>
				<Grid item>
					<Typography color="textSecondary" variant="caption">
						And the converted value is:
					</Typography>
				</Grid>
				<Grid item>
					<Typography color="textPrimary" variant="h3">
						{getConvertedValue()}
					</Typography>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Result;
