import React, { Component } from 'react';
import Header from './components/header/header';
import MainSection from './main_section';
import './App.css';

// class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<div className="container-fluid" style={{ marginLeft: '-10px', marginRight: '-35px' }}>
// 					<div className="row">
// 						<div className="navbar-header col-xs-12">
// 							<header>
// 								<Header />
// 							</header>
// 						</div>
// 						<main className="main-section">
// 							<MainSection />
// 						</main>
// 					</div>
// 					{/* Footer section */}
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default ({ children }) => (
	// <div>
	//   <h1>React Router Animated Transitions</h1>
	//   <div className='nav'>
	// 	<Link to='/'>Home</Link>
	// 	<Link to='/about'>About</Link>
	//   </div>
	//   <div className='pages'>
	// 	{children}
	//   </div>
	// </div>

		<div className="container-fluid" style={{ marginLeft: '-10px', marginRight: '-35px' }}>
			<div className="row">
				<div className="navbar-header col-xs-12">
					<header>
						<Header />
					</header>
				</div>
				<main className="main-section">
					<MainSection />
				</main>
			</div>
			<div className="row">
				{children}
			</div>
		</div>
)

// export default App;
