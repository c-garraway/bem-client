import { Button, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser, setIsLoggedIn } from "../../features/userData/userDataSlice";
import background from '../../images/background.jpg';
import { loginLocalUser } from "../../api/localLogin";
import { loginGoogleUser } from "../../api/googleLogin";
//import { loadExistingEntities } from "../../features/entityData/entityDataSlice";
import GoogleIcon from '@mui/icons-material/Google';

const formStyle = {
    position: 'absolute',
    top: {xs: "40%", sm: "40%", md: "50%"},
    left: '50%',
    transform: 'translate(-50%, -40%)',
    width: {xs: "70%", sm: "70%", md: "30%"},
    /* width: '30%', */
    maxHeight: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
    opacity: '95%',
    '& .MuiTextField-root': { mt: 2, width: '100%' },
};
const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

function UserLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        if(email.length < 1 || password.length < 1 ) {
            setErrorMessage('All fields are required!') 
            return;
        };
        const user = await loginLocalUser(email, password);

        if(user.message) {
            setErrorMessage(user.message);
            return;
        }
        if(user.firstName === 'undefined') {
            dispatch(setCurrentUser({
                id: user.id,
                email: user.email,
            }));
            navigate('/profile')
            return;
        };
        if(user) {
            dispatch(setCurrentUser({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                companyName: user.companyName,
                entityDataIndex: 0
            }));
            dispatch(setIsLoggedIn());
            navigate('/main');
            return;
        };
    };
    const handleGuestUser = async () => {
        const user = await loginLocalUser('guest@email.ca', 'guestPassword');

        if(user.message) {
            setErrorMessage(user.message);
            return;
        }
        if(user.firstName === 'undefined') {
            dispatch(setCurrentUser({
                id: user.id,
                email: user.email,
            }));
            navigate('/profile')
            return;
        };
        if(user) {
            dispatch(setCurrentUser({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                companyName: user.companyName,
                entityDataIndex: 0
            }));
            dispatch(setIsLoggedIn());
            navigate('/main');
            return;
        };  
    };
    const handleGoogleUser =  () => {
        loginGoogleUser();
    };
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleLogin();
        };
    };

  return (
    <Box style={backgroundStyle} >
        <Box
        component="form"
        sx={formStyle}
        noValidate
        autoComplete="off"
            >
            <Typography id="user-box-title" variant="h5" sx={{ mb: 2, textAlign: "center" }}>
            User Login
            </Typography>
            { errorMessage.length > 0 ?
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, fontSize: "small", color: "red", textAlign: "center"  }}>
                {errorMessage}
            </Typography>
            :
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, fontSize: "small", color: "white", textAlign: "center"  }}>
                placeholder
            </Typography>
            }
            <div >
                <TextField
                autoFocus
                required
                id="outlined-required"
                label="Email"
                type='email'
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => {
                    setEmail(e.currentTarget.value)
                    setErrorMessage('')
                }}
                />
                <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => {
                    setPassword(e.currentTarget.value)
                    setErrorMessage('')
                }}
                onKeyDown={handleKeyDown}
                />
                <Button 
                    variant="contained" 
                    onClick={handleLogin}
                    sx={{
                        display: "block",
                        width: "100%",
                        margin: "auto",
                        marginTop: "10px",
                    }}
                    >Login
                </Button>
            </div>
            <div>
                <Button 
                    variant="outlined" 
                    onClick={handleGuestUser}
                    sx={{
                        display: "block",
                        width: "100%",
                        margin: "auto",
                        marginTop: "30px",
                    }}
                    >Login as Guest
                </Button>
                <Button 
                    variant="outlined" 
                    onClick={handleGoogleUser}
                    startIcon={<GoogleIcon/>}
                    sx={{
                        /* display: "block", */
                        width: "100%",
                        /* margin: "auto", */
                        marginTop: "10px",
                    }}
                    >Login with Google
                </Button>
            </div>   
        </Box>
    </Box>
 );
}

/* const guestUserData = [{
    name: 'Furniture Corp 1',
    address: '1234 Second Street, Mississauga, ON',
    dateCreated: '1999-09-01',
    status: 'ACTIVE',
    corpID: '455FE6',
    corporateJurisdictions: [
        
        {
            jurisdiction: 'MB',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'ON',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'PQ',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'BC',
            status: 'INACTIVE',
            startDate: '1999-09-01',
            endDate: '2005-09-01'
        },
    ],
    corporateFilings: [
        {                
            name: 'Furniture Corp',
            jurisdiction: 'BC',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'MB',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'ON',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000on.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'PQ',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
        }
    ],
    dO: [
        {
            name: 'John Doe',
            position: 'CEO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jdoe@email.ca',
            endDate: null
        },
        {
            name: 'James Smith',
            position: 'CFO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsmith@email.ca',
            endDate: null
        },
        {
            name: 'Jane Doe',
            position: 'Corporate Secretary',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'janedoe@email.ca',
            endDate: null
        },
        {
            name: 'John Snow',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsnow@email.ca',
            endDate: null
        },
        {
            name: 'Catherine White',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'cwhite@email.ca',
            endDate: null
        }
    ],
    businessNames: [
        {
            businessName: 'The Brick',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        }
    ],
    businessNameFilings: [                    
        {
            businessName: 'The Brick',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },             
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
    ]       
    
},
{
    name: 'Discount Furniture Corp',
    address: '234 Second Street, Mississauga, ON',
    dateCreated: '1999-09-01',
    status: 'ACTIVE',
    corpID: '455FE6',
    corporateJurisdictions: [
        {
            jurisdiction: 'BC 2',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'MB',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'ON',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'PQ',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
    ],
    corporateFilings: [
        {                
            name: 'Furniture Corp',
            jurisdiction: 'BC 2',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'MB',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'ON',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000on.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'PQ',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
        }
    ],
    dO: [
        {
            name: 'John Doe 2',
            position: 'CEO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jdoe@email.ca',
            endDate: null
        },
        {
            name: 'James Smith',
            position: 'CFO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsmith@email.ca',
            endDate: null
        },
        {
            name: 'Jane Doe',
            position: 'Corporate Secretary',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'janedoe@email.ca',
            endDate: null
        },
        {
            name: 'John Snow',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsnow@email.ca',
            endDate: null
        },
        {
            name: 'Catherine White',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'cwhite@email.ca',
            endDate: null
        }
    ],
    businessNames: [
        {
            businessName: 'The Brick 2',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        }
    ],
    businessNameFilings: [                    
        {
            businessName: 'The Brick 2',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },             
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
    ]       
    
},
{
    name: 'Elite Furniture Corp',
    address: '34 Second Street, Mississauga, ON',
    dateCreated: '1999-09-01',
    status: 'ACTIVE',
    corpID: '455FE6',
    corporateJurisdictions: [
        {
            jurisdiction: 'BC 3',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'MB',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'ON',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
        {
            jurisdiction: 'PQ',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            endDate: null
        },
    ],
    corporateFilings: [
        {                
            name: 'Furniture Corp',
            jurisdiction: 'BC 3',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000bc.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'MB',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000mb.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'ON',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000on.pdf'                
        },
        {                
            name: 'Furniture Corp',
            jurisdiction: 'PQ',
            dueDate: '2000-09-01',
            subName: 'Jane Doe',
            confirmation: 'S:/filings/furniturcorp2000pq.pdf'                
        }
    ],
    dO: [
        {
            name: 'John Doe 3',
            position: 'CEO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jdoe@email.ca',
            endDate: null
        },
        {
            name: 'James Smith',
            position: 'CFO',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsmith@email.ca',
            endDate: null
        },
        {
            name: 'Jane Doe',
            position: 'Corporate Secretary',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'janedoe@email.ca',
            endDate: null
        },
        {
            name: 'John Snow',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'jsnow@email.ca',
            endDate: null
        },
        {
            name: 'Catherine White',
            position: 'Director',
            status: 'ACTIVE',
            startDate: '1999-09-01',
            address: '123 First Lane, Toronto, ON, CA',
            phone: '555-555-5555',
            email: 'cwhite@email.ca',
            endDate: null
        }
    ],
    businessNames: [
        {
            businessName: 'The Brick 3',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            address: '',
            creationDate: '2000-09-01',
            status: 'ACTIVE',
            closeDate: null
        }
    ],
    businessNameFilings: [                    
        {
            businessName: 'The Brick 3',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'ON',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },             
        {
            businessName: 'The Brick',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
        {
            businessName: 'Ethan Allen',
            jurisdiction: 'BC',
            subName: 'Jane Doe',
            dueDate: '2000-09-01',
            confirmation: 'S:/filings/thebrick2001on.pdf'
        },
    ]       
    
}
]  */
export default UserLogin;
