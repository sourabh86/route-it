
import React, {useState,useEffect, useRef} from 'react';
import {Row, Col, Alert, Button, Jumbotron, Container, Card, CardBody} from 'reactstrap';
import {StyledPlayArea, StyledPlayAreaWrapper} from '../styledComponents/StyledPlayArea';

import RouterImage from './RouterImage';

import { useInterval } from '../hooks/useInterval';
import DataPoint from './DataPoint';
import PlayAxis from './PlayAxis';


const routerColor = "lightblue";

const degreeArr = [30,60,90,120,150];

function getRandomDegree(){
    //return 0;
    return degreeArr[Math.floor(Math.random()*degreeArr.length)];
}

const getSpeedName = (speed)=>{
    let sppedName = "2G";
    if(speed>95){
        return "2G";
    }else if(speed>90){
        return"2.5G";
    }else if(speed>70){
        return "3G";
    }else if(speed>50){
        return "LTE";
    }else{
        return "4G";
    }
}

let count = 0;

export default function PlayArea(props){
    const [started,setStarted] = useState(false);
    const [speed,setSpeed] = useState(null);
    const [gameOver,setGameOver] = useState(false);
    const [routers,setRouters] = useState([
        {x:800,degree:getRandomDegree(),color:routerColor,key:0},
        {x:1100,degree:getRandomDegree(),color:routerColor,key:1},
        {x:1400,degree:getRandomDegree(),color:routerColor,key:2},
        {x:1700,degree:getRandomDegree(),color:routerColor,key:3}
        ]);
    const [routerCount,setRouterCount] = useState(routers.length);
    

    const onWrapperClick = ()=>{
        if(gameOver)return;
        const rClone = JSON.parse(JSON.stringify(routers));
        rClone[count].degree-=30;
        setRouters(rClone);
    }

    const checkIfGameOver = (router)=>{
        if(router.x<20 && router.degree%90!==0){
            setGameOver(true);
            setSpeed(null);
        }
    }

    const restart=()=>{
        const r = [
            {x:800,degree:getRandomDegree(),color:routerColor,key:0},
            {x:1100,degree:getRandomDegree(),color:routerColor,key:1},
            {x:1400,degree:getRandomDegree(),color:routerColor,key:2},
            {x:1700,degree:getRandomDegree(),color:routerColor,key:3}
        ];
        setRouters(r);
        setRouterCount(r.length);
        count = 0;
        setGameOver(false);
        setSpeed(100);
    }

    const moveRouters = (x)=>{
        const rClone = JSON.parse(JSON.stringify(routers));
        let newRouter = false;
        console.log("rClone beforer check and decrement",rClone);
        checkIfGameOver(rClone[count]);
        rClone.forEach((router)=>{
            if(router)
                router.x-=x;
        });
        if(rClone[count].x<-100){
            rClone.shift();
            
            // rClone[count+1].setMargin = true;
            // rClone[count].setMargin = false;
            //rClone[count] = null;
            //count++;
            const r1 = {x:rClone[rClone.length-1].x+400,degree:getRandomDegree(),color:routerColor,key:routerCount};
            rClone.push(r1);
            //newRouter=true;
            console.log("count:",count);
            console.log("rClone",rClone);
            setRouterCount(routerCount+1);
            if(speed!=20)setSpeed(speed-4);
            //if(routerCount%5==0 && speed!=20)setSpeed(speed-20);   
            //rClone[0].x+=2*x;
        }
        
        setRouters(rClone);
        // if(newRouter){
        //     setRouterCount(routerCount+1);
        //     if(routerCount%5==0 && speed!=20)setSpeed(speed-20);   
        // }
    }

    const toggle = (event)=>{
        event.preventDefault();
        setSpeed(speed?null:100);
    }

    useInterval(()=>{
        //if(count%5===0 && speed!=20)setSpeed(speed-20); 
        moveRouters(10);
    },speed);

    const start = ()=>{
        setStarted(true);
        setSpeed(100);
    }

    const getRouters = ()=>{
        return routers.map((router,index)=>{
            return(router?<RouterImage setMargin={router.setMargin} key={router.key} degree={router.degree} left={router.x} speed={speed} />:<span key={index}/>);
        })
    }
    return(
        <div onClick={onWrapperClick} style={{position:"fixed",overflow:"hidden",height:"100%",width:"100%",borderColor:"red",borderWidth:"0px",borderStyle:"solid"}}>
        <Alert color="warning">Score:{routerCount-routers.length}, Speed: {getSpeedName(speed)}</Alert>
        
        {gameOver?<><h1>GAME OVER</h1><Button onClick={restart} color="info">Restart</Button></>:
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <StyledPlayArea>
                        {getRouters()}
                        <PlayAxis />
                        <DataPoint left={"0"}/>
                </StyledPlayArea>
                {!started?<Button onClick={start} color="info">Start</Button>:null}
                {/* <canvas ref={canvasRef} width="800px" height="200px" style={{overflow:"hidden",borderColor:"palevioletred",borderWidth:"2px",borderStyle:"solid"}}/> */}
                {/* <p>
                    {routers.map(r=><p>{r.x}</p>)}
                </p> */}
                {/* <Button color="info" onClick={toggle}>Toggle</Button> */}
            </Col>
        </Row>  
        }
        </div>
    )
}