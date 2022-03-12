import { ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import CustomSoftware from "./CustomSoftware";
import LandingPage from "./LandingPage";
import MobileApps from "./MobileApps";
import Revolution from "./Revolution";
import Services from "./Services";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import Websites from "./Websites";

const App = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [value, setValue] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<LandingPage
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						}
					/>
					<Route
						exact
						path='/services'
						element={
							<Services
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						}
					/>
					<Route
						exact
						path='/customsoftware'
						element={
							<CustomSoftware
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						}
					/>
					<Route
						exact
						path='/mobileapps'
						element={
							<MobileApps
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						}
					/>
					<Route
						exact
						path='/websites'
						element={
							<Websites
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						}
					/>
					<Route
						exact
						path='/revolution'
						element={
							<Revolution
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						}
					/>
					<Route
						exact
						path='/about'
						element={
							<About setValue={setValue} setSelectedIndex={setSelectedIndex} />
						}
					/>
					<Route exact path='/contact' element={<div>Contact</div>} />
					<Route exact path='/estimate' element={<div>Estimate</div>} />
				</Routes>
				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
