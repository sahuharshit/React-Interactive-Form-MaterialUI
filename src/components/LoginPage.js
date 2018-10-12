import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import NormalLoginForm from './NormalLoginForm'
import NormalRegistrationForm from './NormalRegistrationForm'

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3  }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({

    paper: {
        marginTop: theme.spacing.unit * 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },

    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 1.1,
        marginRight: theme.spacing.unit * 1.1,
        marginTop: -theme.spacing.unit * 6,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '23em',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    appbar: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        position:'absolute',
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '26em',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
});

class LoginPage extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.layout}>
               <div className={classes.paper}>
                   <AppBar position="static" className={classes.appbar}  color="default">
                       <Tabs
                           value={this.state.value}
                           onChange={this.handleChange}
                           indicatorColor="primary"
                           textColor="primary"
                           fullWidth
                       >
                           <Tab label="Login" />
                           <Tab label="Register" />

                       </Tabs>
                   </AppBar>
                   <SwipeableViews
                       axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                       index={this.state.value}
                       onChangeIndex={this.handleChangeIndex}
                   >
                       <TabContainer dir={theme.direction}><NormalLoginForm /></TabContainer>
                       <TabContainer dir={theme.direction}><NormalRegistrationForm /></TabContainer>
                   </SwipeableViews>
               </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LoginPage);