import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './components/Card';
import Button from './components/Button';
import HomeLayout from './components/HomeLayout/HomeLayout';
import Databinding from './components/databinding/Databinding';
import StyleComponent from './components/StyleComponent/StyleComponent';
import HandleEvent from './components/HandleEvent/HandleEvent';
import StateComopent from './components/StateComponent/StateComopent';
import ChangeColor from './components/StateComponent/ChangeColor';
import ChangeAvatar from './components/StateComponent/ChangeAvatar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        {/* <Card></Card>

        <Button></Button> */}


        {/* <HomeLayout></HomeLayout> */}

        {/* <Databinding></Databinding> */}

        {/* <StyleComponent></StyleComponent> */}

        {/* <HandleEvent></HandleEvent> */}

        {/* <StateComopent></StateComopent> */}

        {/* <ChangeColor></ChangeColor> */}

        <ChangeAvatar></ChangeAvatar>

        
    </div>
);

