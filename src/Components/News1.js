import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class News1 extends Component {
    state={
        news1:[]
    }
    getNews1=()=>{
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2021-09-15&to=2021-09-15&sortBy=popularity&apiKey=891fa0885dc24a4da50c86e61a57c0e1").then((response)=>{
            console.log(response.data.articles)
            this.setState({
                news1:response.data.articles
            })
        })
    }
    render() {
        return (
            <div>
                <Grid container style={{padding:70}}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography>All articles mentioning Apple from yesterday, sorted by popular publishers first</Typography>
                        <Button
                        type="submit"
                        variant="contained"
                        margin="normal"
                        color="secondary"
                        onClick={this.getNews1}
                        fullWidth
                        >GET NEWS</Button>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>IMAGE</TableCell>
                                        <TableCell>AUTHOR</TableCell>
                                        <TableCell>TITLE</TableCell>
                                        <TableCell>DESCRIPTION</TableCell>
                                        <TableCell>CONTENT</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.news1.map((value,index)=>{
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
