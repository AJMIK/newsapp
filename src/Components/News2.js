import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class News2 extends Component {
    state={
        nesw2:[]
    }
    getNews2=()=>{
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2021-08-16&sortBy=publishedAt&apiKey=891fa0885dc24a4da50c86e61a57c0e1").then((response)=>{
            console.log(response.data.articles)
            this.setState({
                nesw2:response.data.articles
            })
        })
    }
    render() {
        return (
            <div>
              <Grid container style={{padding:70}}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography>All articles about Tesla from the last month, sorted by recent first</Typography>
                      <Button
                      type="submit"
                      variant="contained"
                      margin="normal"
                      fullWidth
                      onClick={this.getNews2}
                      >GET NEWS</Button>
                      <TableContainer>
                          <Table>
                              <TableHead>
                                  <TableRow>
                                      <TableCell>AUTHOR</TableCell>
                                      <TableCell>TITLE</TableCell>
                                      <TableCell>DESCRIPTION</TableCell>
                                      <TableCell>IMAGE</TableCell>
                                     
                                      <TableCell>CONTENT</TableCell>
                                  </TableRow>
                              </TableHead>
                              <TableBody>
                                  {this.state.nesw2.map((value,index)=>{
                                      return <TableRow>
                                         
                                          <TableCell>{value.author}</TableCell>
                                          <TableCell>{value.title}</TableCell>
                                          <TableCell>{value.description}</TableCell>
                                          <TableCell><Avatar variant="circle" src={value.urlToImage}/></TableCell>
                                         
                                          <TableCell>{value.content}</TableCell>
                                      </TableRow>
                                  })}
                              </TableBody>
                          </Table>
                      </TableContainer>
                      </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                  </Grid>  
            </div>
        )
    }
}
