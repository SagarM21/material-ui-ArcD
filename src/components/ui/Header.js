import React from "react";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
	},
}));

const Header = (props) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position='fixed'>
					<Toolbar>
						<Typography>Arc Development</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

export default Header;
