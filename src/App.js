import React, { useState } from 'react';
import Button from "./components/Button";
import Input from "./components/Input";
import Typography from './components/Typography';
import Heading from './components/Heading';
import Tooltip from './components/Tooltip';
import Accordion from './components/Accordion';

function App() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      
        <div>
          
            <div className="button-container">
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button 
                    variant="bordered" 
                    size="md" 
                    onClick={() => alert('Clicked!')}
                >
                    Bordered Medium
                </Button>
                <Button variant="primary" size="lg">Primary Large</Button>
                <Button variant="bordered" size="lg" disabled>Disabled Bordered Large</Button>
            </div>

            <div className="Input">
                <Input
                    label="Username"
                    placeholder="S1mple "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    label="Danger Username"
                    placeholder="Alexander Kovoch"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    danger 
                />
                <Input
                    label="Email"
                    type="email"
                    placeholder="gaben_v1@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="This password is just dumb"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    label="Disabled Field"
                    value="Cannot change this"
                    disabled
                />
            </div>

            <div className='Typography'> 
                <Typography textSize="sm">
                    SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This is the pit itself
                </Typography>

                <Typography textSize="md">
                    MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Twelve tangos for lifestealer
                </Typography>

                <Typography textSize="lg">
                    LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Bro, you need to train
                </Typography>
            </div>

            <div className="Heading"> 
                <Heading level={1}>H1. Heading</Heading>
                <Heading level={2}>H2. Heading</Heading>
                <Heading level={3}>H3. Heading</Heading>
                <Heading level={4}>H4. Heading</Heading>
                <Heading level={5}>H5. Heading</Heading>
                <Heading level={6}>H6. Heading</Heading>
            </div>
            <div className="Tooltip-Top">
                <Tooltip text="i am toolip" position="top">Tooltip Top</Tooltip>
            </div>
            <div className="Tooltip-Right">
                <Tooltip text="i am toolip" position="right">Tooltip Right</Tooltip>
            </div>
            <div className="Accordin">
            <Accordion title="Accordion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion>

            </div>
            
            
        </div>
    );
}

export default App;
