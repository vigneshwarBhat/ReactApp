import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoginState } from '../Pages/Login/loginSlice';
import { userActions } from '../Actions/userActions';

export default function Navigation() {
	const state = useSelector(selectLoginState);
	const dispatch = useDispatch();
	function OnClickHandler(e) {
		dispatch(userActions.Logout());
	}

	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>
						<img
							alt=''
							src='/EasyDay.jpg'
							width='30'
							height='30'
							className='d-inline-block align-top'
						/>{' '}
						EasyDay
					</Navbar.Brand>

					<Nav className='me-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						{state.status === 'loggedin' && state.user.username && (
							<NavDropdown title='Action' id='navActionDropDown'>
								<NavDropdown.Item href='add-employee'>
									Add Employee
								</NavDropdown.Item>
								<NavDropdown.Item href='EmployeeDetails'>
									Employee Details
								</NavDropdown.Item>
								<NavDropdown.Item href='About'>About Me</NavDropdown.Item>
							</NavDropdown>
						)}
					</Nav>
					{state.status === 'loggedin' && state.user.username ? (
						<Nav>
							<Navbar.Collapse className='justify-content-end'>
								<Navbar.Text>Hi {state.user.username}</Navbar.Text>
							</Navbar.Collapse>
							<Nav.Link href='/' onClick={OnClickHandler}>
								Logout
							</Nav.Link>
						</Nav>
					) : (
						<Navbar>
							<Nav className='me-auto'>
								<Nav.Link href='register'>Register</Nav.Link>
								<Nav.Link href='login'>Login</Nav.Link>
							</Nav>
						</Navbar>
					)}
				</Container>
			</Navbar>
		</>
	);
}
