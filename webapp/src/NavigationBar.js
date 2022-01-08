import * as React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';

class NavigationBar extends React.Component {

    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <div className="AppBareSpaces">
                            <Typography variant="h6" color="inherit">
                                <Link to="/create" className="link">Create a User</Link>
                            </Typography>
                        </div>
                        <div className="AppBareSpaces">
                            <Typography variant="h6" color="inherit">
                                <Link to="/viewdata" className="link">View Users</Link>
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default NavigationBar;

