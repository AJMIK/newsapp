import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
              <AppBar>
                  <Toolbar>
                      <Typography>THE TIMES OF INDIA</Typography>
                    
                     <Link to="/">Latest News</Link>
                    <Link to="/news2">News</Link>
                    <Link to="/news3">business headline</Link>
                    <Link to="/news4">TechCrunch</Link>

                  </Toolbar>
                  </AppBar>  
            </div>
        )
    }
}
