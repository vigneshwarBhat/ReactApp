import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';
import EmployeeDetails from './Pages/Employee/employee-details';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import PrivateElement from './Components/privateroute';

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Routes>
							<Route element={<Home />} path='/'></Route>
							<Route element={<Login />} path='/Login'></Route>
							<Route element={<Register />} path='/Register'></Route>
							<Route
								path='EmployeeDetails'
								element={
									<PrivateElement>
										<EmployeeDetails />
									</PrivateElement>
								}
							></Route>
						</Routes>
					</div>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
