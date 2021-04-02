import { Avatar, Card, CardContent, Grid, Typography, TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import MoneyIcon from '@material-ui/icons/Money';
import { green } from '@material-ui/core/colors';
import SendIcon from '@material-ui/icons/Send';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
	actionButton: {
		justifyItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},
	inputField: {
		width: '100%',
	},
	cardTitle: {
		justifyContent: 'space-between',
		marginBottom: 30,
	},
	avatar: {
		backgroundColor: green[600],
		height: 40,
		width: 40,
	},
	cardItem: {
		height: '100%',
	},
	cardForm: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '80%',
	},
}));

const Entry = (props) => {
	const classes = useStyles();

	return (
		<Card className={classes.cardItem} {...props}>
			<CardContent className={classes.cardItem}>
				<Grid container className={classes.cardForm}>
					<Grid container item className={classes.cardTitle}>
						<Grid item>
							<Typography color="textSecondary" gutterBottom variant="h6">
								INPUT:
							</Typography>
						</Grid>
						<Grid item>
							<Avatar className={classes.avatar}>
								<MoneyIcon />
							</Avatar>
						</Grid>
					</Grid>
					<Grid container item>
						<Grid item className={classes.inputField}>
							<TextField id="standard-basic" fullWidth />
						</Grid>
						<Grid container item className={classes.actionButton}>
							<Grid item>
								<Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
									CONVERT NUMBER
									<SendIcon className={classes.extendedIcon} />
								</Fab>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Entry;
