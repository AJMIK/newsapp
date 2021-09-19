import { Button, Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Table, Avatar } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class News3 extends Component {
    state={
        news3:[]
    }
    getNews3=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=891fa0885dc24a4da50c86e61a57c0e1").then((response)=>{
            console.log(response.data.articles)
          this.setState({
              news3:response.data.articles
          })
        })
    }
    render() {
        return (
            <div>
               <Grid container style={{padding:70}}>
                   <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid> 
                   <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                       <Typography>Top business headlines in the US right now</Typography>
                       <Button
                       type="submit"
                       variant="contained"
                       margin="normal"
                       color="primary"
                       fullWidth
                       onClick={this.getNews3}
                       >GET NEWS</Button>
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
                                   {this.state.news3.map((value,index)=>{
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
