import React, {Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';

import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';



const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    forminput :{
        width: '23em'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 150,
    },


});

class NormalLoginForm extends React.Component {
    state = {
        user :{
            firstname:'',
            lastname:'',
            email:'',
            password: ''
        }
    }

    handleChange = (e) => {
        const {user} = this.state;
        user[e.target.name]=e.target.value;
        this.setState({user})
    }

    handleSubmit = () => {
        // your submit logic
    }

    componentDidMount(){
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPassword', (value) => {
            if (!this.state.user.password.match("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"))
                return false;
            return true;
        });
    }
    render(){

        const {user} = this.state;
        const { classes } = this.props;

        return (
            <Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h5">Register Now</Typography>
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <form className={classes.form}>
                                <TextField
                                    id="standard-name"
                                    label="FirstName"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                                <TextField
                                    id="standard-name"
                                    label="LastName"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                                <br/><br/>
                                <TextValidator
                                    label="Email"
                                    autoComplete="String"
                                    fullWidth="true"
                                    className={classes.forminput}
                                    onChange={this.handleChange}
                                    name="email"
                                    value={user.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email must contain @ symbol']}
                                />
                                <br/><br/>
                                <TextValidator
                                    label="Password"
                                    onChange={this.handleChange}
                                    name="password"
                                    fullWidth="true"
                                    className={classes.forminput}
                                    value={user.password}
                                    type="password"
                                    validators={['required', 'isPassword']}
                                    errorMessages={['this field is required', "Minimum 8 characters with one UpperCase and Special Symbol"]}
                                />

                                <br/><br/>
                                <div className="">
                                    <Button fullWidth="true" variant="contained" color="secondary" className={classes.button}>
                                        SignUp
                                    </Button>
                                </div>
                            </form>
                        </ValidatorForm>
                    </Paper>
                </main>
            </Fragment>
        );
    }
}


export default withStyles(styles)(NormalLoginForm);