import React, { Component } from 'react';
import Header from './components/header/header';
import MainSection from './main_section';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
		<div className="container-fluid">
			<div className="row">
				<header>
					<Header />
				</header>
				<main className="main-section">
					<MainSection />
				</main>
			</div>
			{/* Footer section */}
		</div>
	</div>
    );
  }
}

export default App;
