import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'

import profileImage from './../images/profileimage.jpg';
import Page from './Page';

const AppHeader = () => (
  <Header>
    <Grid centered columns={2}>
        <Segment className='Header' padded>
          <Grid.Row centered >
            <Grid.Column textAlign='center'>
                <h2 className='Text' style={{marginTop: '-1.5%'}}>Hello, I'm Lance!</h2> 
                <Image style={{marginTop: '-1.5%'}} src={profileImage} size='small' centered circular />
                <h3 className='Text' style={{marginTop: '0%'}}>A developer from the great state of Arizona</h3>
                <h4 className='Text' style={{marginTop: '-1%'}} >I enjoy sports, playing music, writing, tennis, trying to ride my motorcyle, playing games (Super Smash and Mario Kart!) chasing around my cats, and of course, coding!<br /></h4>  
                <h4  style={{marginTop: '-1%', marginBottom: '-1%'}}>These websites are made using Reactv16, Redux, Node, Socket IO, Semantic UI, MongoDB, Mongoose, Express, and they incorporate es6 & es7 syntax.</h4>
            </Grid.Column>
          </Grid.Row>
        </Segment>
        <div className="Content">
        <Segment className='Left-Body'>
        <Grid.Row centered columns={3} className='Display'>
            <Segment className='Display' style={{ background: 'beige'}} stacked>
                <Grid.Column>
                <h3>Websites:</h3>
                <h5 style={{marginTop: '-4%'}}>(hosted on heroku, please allow their load)</h5>
                <Page html="https://crystalclear.herokuapp.com/" title="Crystal Clear Pool Service" text={<div><br />A pool business website. <br />Clicking links will auto scroll you down.</div>}/>

                <Page html="https://ricayustudios.herokuapp.com/" title="Ricayu's Photo Studio" text={<div><br />A website designed for a photographer's business</div>}/>
                </Grid.Column>
            </Segment>
        </Grid.Row>
        </Segment>
        <Segment className='Right-Body'>
        <Grid.Row centered columns={3} className='Display'>
            <Segment className='Display' style={{ background: 'beige'}} stacked>
                <Grid.Column>
                <h5 style={{marginTop: '-4%'}}></h5>

                <Page html="https://mcmtac.herokuapp.com/" title="MCMTAC" text={
                    <div><br />My first full stack app, created with React, MongoDB,
                    <br />Redux, and socket IO for chat. It is a page
                    <br />that allows my friends in others cities and I
                    <br />to play a D&D style game I created. 
                    <br />
                    <br />to login, use: name: 'gm' password: 'me123'</div>
                }/>

                <Page html="https://lwweather.herokuapp.com" title="Changing CSS Weather App" text={
                    <div><br />A weather app that displays nice, changing backgrounds,
                    <br />and a rain animation based off of the current weather.
                    <p />This site uses apixu, if location or their servers are down,
                    <br />services may temporarily not work.</div>
                }/>
                </Grid.Column>
            </Segment>
        </Grid.Row>
        </Segment>
        </div>
    </Grid>
  </Header>
)

export default AppHeader;