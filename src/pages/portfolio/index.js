import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Box, Card, CardActions, CardContent, CardMedia, CardHeader, Button } from '@mui/material';
import { meta } from "../../content_option";
import todolist from './todolist.png';

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio Highlights</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Box
          component="span"
          sx={{ display: "flex", justifyContent: "center" }}>
          <center>
            <Card
              variant="outlined">
              <CardHeader title="Civicly"></CardHeader>
              <CardMedia>{/* <img src={todolist} /> */}</CardMedia>
              <CardContent>Communication between citizens and local governments is important but can be cumbersome. Reciprocal communication is even non-existent at times, which leads to a breakdown of the relationship between citizens and their local government. Civicly is a reporting app where citizens can report non-emergency issues they find in their municipality. Things like potholes, graffiti, loose animals, and many others can be more easily reported by citizens and handled by their city. Citizens can report a geo-tagged location, violation/issue, attach a photo, and include comments to inform the municipality. An admin/city worker can look at the reports and dispatch appropriate resources and communicate back to citizens who requested help. A huge win for everyone! This workable prototype is mobile first for citizens, desktop for admins.This project was a team effort - built in its entirety over the course of two weeks as a part of Prime Digital Academy.</CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button
                    style={{
                      borderRadius: 7,
                      borderColor: 'black',
                      backgroundColor: 'lightseagreen'
                    }}>
                <a href={'https://civiclyapp.herokuapp.com/'}>View Project</a>
                </Button>
                <Button
                    style={{
                      borderRadius: 7,
                      borderColor: 'black',
                      backgroundColor: 'grey'
                    }}>
                <a href={'https://github.com/vanessawharton/Civicly-App'}>GitHub Code</a>
                </Button>
              </CardActions>
            </Card>
            <Card
              variant="outlined">
              <CardHeader title="Pack Hack"></CardHeader>
              <CardMedia></CardMedia>
              <CardContent>VACATION: The thing that helps make regular life more bearable.
                TRAVEL: Getting out of your bubble.
                The worst thing about travel? Definitely losing your luggage. A close second is having to pack, or worse– forgetting something you should have packed!

                Currently, options are to write down a list, or keep a spreadsheet, or just open your suitcase and wing it!

                A better solution that I’ve created is PACK HACK, a packing list tool to keep track of personalized packing lists for each of your travel plans. 
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    style={{
                      borderRadius: 7,
                      borderColor: 'black',
                      backgroundColor: 'lightseagreen'
                    }}>
                    <a href={'https://aqueous-lake-08103.herokuapp.com/#/home'}>View Project</a>
                  </Button>
                  <Button
                    style={{
                      borderRadius: 7,
                      borderColor: 'black',
                      backgroundColor: 'grey'
                    }}>
                <a href={'https://github.com/vanessawharton/PACK-HACK-prime-solo-project'}>GitHub Code</a>
                </Button>
              </CardActions>
            </Card>
            <Card
              variant="outlined">
              <CardHeader title="SQL To-Do List"></CardHeader>
              {/* <CardMedia
                component="img"
                height="80"
                width="80"
                image={todolist}
                >
                </CardMedia> */}
              <CardContent>The goal of this project was to create a full-stack CRUD app that allowed a user to keep a dynamic to-do list. Any changes the user submits through the client are stored and sent through a server to be stored on a local database. Any changes to the database, including tasks being added, completed, and deleted result in a full refresh of the information stored on the database. There are simple buttons to toggle tasks to mark as completed/incomplete, priority/non-priority, and to delete a task. Priority items are listed before non-priority tasks.</CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button
                    style={{
                      borderRadius: 7,
                      borderColor: 'black',
                      backgroundColor: 'lightseagreen'
                    }}>
                <a href={'https://desolate-journey-29049.herokuapp.com/'}>View Project</a>
                </Button>
                <Button
                    style={{
                      borderRadius: 7,
                      borderColor: 'black',
                      backgroundColor: 'grey'
                    }}>
                <a href={'https://github.com/vanessawharton/weekend-sql-to-do-list'}>GitHub Code</a>
                </Button>
              </CardActions>
            </Card>
            <Card
              variant="outlined">
              <CardHeader title="Calculator built with Server and jQuery"></CardHeader>
              <CardMedia>{/* <img src= /> */}</CardMedia>
              <CardContent>This calculator was built to use a user interface where a user can input two values and the select type of mathematical operation (Addition, Subtraction, Multiplication, and Division). A clear button was created to clear the user input fields. History is tracked below of previous calculation inputs. Stretch goals were met to create an interface more similar to a real calculator and use the buttons to create a string of equation rather than the objects of two values and one operation. A delete button was added to clear the history of previous calculations, along with the ability to click on a previous historical entry to re-run.</CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button
                    style={{
                      borderRadius: 7,
                      borderColor: 'black',
                      color: 'black',
                      backgroundColor: 'lightseagreen'
                    }}>
                <a href={'https://server-side-calculator-with-jq.herokuapp.com/'}>View Project</a>
                </Button>
                <Button
                    style={{
                      borderRadius: 7,
                      borderColor: 'black',
                      backgroundColor: 'grey'
                    }}>
                <a href={'https://github.com/vanessawharton/weekend-jquery-server-calculator'}>GitHub Code</a>
                </Button>
              </CardActions>
            </Card>
          </center>
        </Box>
      </Container>
    </HelmetProvider>
  );
};
