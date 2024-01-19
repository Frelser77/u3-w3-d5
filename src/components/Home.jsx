import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MusicSlice } from "../redux/reducers/MusicSlice";
import MusicSection from "./MusicSection";
import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import MusicPlayer from "./MusicPlayer";
import NavBar from "./NavBar";

function Home() {
	const dispatch = useDispatch();
	const [searchQuery, setSearchQuery] = useState("");
	const [showSearchResults, setShowSearchResults] = useState(false);

	const handleSearch = (query) => {
		setSearchQuery(query);
		setShowSearchResults(true);
	};

	return (
		<Container>
			<Row>
				<SideBar setSearchQuery={handleSearch} />
				<Col xs={10} className="mainPage">
					<Container>
						<Row>
							<NavBar />
							{showSearchResults && <MusicSection genre={searchQuery} isSearchResult={true} />}
							<MusicSection genre="Rock Classics" />
							<MusicSection genre="Pop Culture" />
							<MusicSection genre="HipHop" />
							<MusicPlayer />
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
