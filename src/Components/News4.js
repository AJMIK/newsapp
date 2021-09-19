import { Button, Grid, Table, TableContainer, TableHead, TableRow, Typography, TableCell, TableBody, Avatar } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class News4 extends Component {
    state={
        news4:[]
    }
    getNews4=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=891fa0885dc24a4da50c86e61a57c0e1").then((response)=>{
            console.log(response.data.articles)
            this.setState({
                news4:response.data.articles
            })
        })
    }
    render() {
        return (
            <div>
                <Grid container style={{padding:70}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography>Top headlines from TechCrunch right now</Typography>
                    <Button
                    type="submit"
                    variant="contained"
                    margin="normal"
                    fullWidth
                    onClick={this.getNews4}
                    color="inherit"
                    >
                        GET NEWS
                    </Button>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell>IMAGE</TableCell>
                                   <TableCell>AUTHOR</TableCell>
                                      <TableCell>TITLE</TableCell>
                                      <TableCell>DESCRIPTION</TableCell>
                                     
                                      <TableCell>CONTENT</TableCell><TableCell></TableCell>  
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.news4.map((value,index)=>{
                                    return <TableRow>
                                <TableCell><Avatar variant="circle" src={value.urlToImage}/></TableCell>
                                           <TableCell>{value.author}</TableCell>
                                          <TableCell>{value.title}</TableCell>
                                          <TableCell>{value.description}</TableCell>
                                          
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
