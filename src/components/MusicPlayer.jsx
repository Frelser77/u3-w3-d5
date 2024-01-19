import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Image, ProgressBar, Button } from "react-bootstrap";
import {
	clearSearchResults,
	setCurrentSong,
	setCurrentSongIndex,
	play,
	pause,
	next,
	preview,
	shuffle,
	repeat,
} from "../redux/reducers/SongsSlice";
import { Pause } from "react-bootstrap-icons";

const MusicPlayer = () => {
	// const audioRef = useRef(null);
	const dispatch = useDispatch();
	const { currentSong, isPlaying, songsList, currentSongIndex } = useSelector((state) => state.song);
	const audioRef = useRef(new Audio());

	// if (!currentSong) return null;

	useEffect(() => {
		if (currentSong) {
			audioRef.current.src = currentSong.preview;
			if (isPlaying) {
				audioRef.current.play().catch((e) => console.error("Playback failed:", e));
			} else {
				audioRef.current.pause();
			}
		}
	}, [currentSong, isPlaying]);

	useEffect(() => {
		if (currentSong && audioRef.current) {
			audioRef.current.src = currentSong.preview;
			if (isPlaying) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		}
	}, [currentSong, isPlaying]);

	const handlePlay = () => {
		dispatch(play());
		// audioRef.current.play();
	};

	const handlePause = () => {
		dispatch(pause());
	};

	const handleNext = () => {
		dispatch(next());
	};

	const handlePreview = () => {
		dispatch(preview());
	};

	const handleShuffle = () => {
		dispatch(shuffle());
	};

	const handleRepeat = () => {
		dispatch(repeat());
	};

	return (
		<Container fluid className="fixed-bottom bg-container">
			<Row>
				<Col lg={{ offset: 2 }}>
					<Row className=" align-items-center">
						<Col xs={4} md={3} className="d-flex align-items-top">
							{currentSong ? (
								<>
									<Image
										className="img-fluid"
										style={{ objectFit: "cover", maxHeight: "100px", maxWidth: "100px" }}
										src={currentSong.album.cover_medium}
										alt={currentSong.title}
									/>
									<div>
										<p className="fs-5 d-inline">{currentSong.title}</p>
										<p className="">{currentSong.artist.name}</p>
									</div>
								</>
							) : (
								<div>No song playing...</div>
							)}
						</Col>
						<Col xs={8} md={6}>
							<div className="playerControls d-flex justify-content-around">
								<Button variant="link" onClick={handleShuffle}>
									<Image src="/assets/img/playerbuttons/shuffle.png" alt="shuffle" />
								</Button>
								<Button variant="link" onClick={handlePreview}>
									<Image src="/assets/img/playerbuttons/prev.png" alt="prev" />
								</Button>
								{isPlaying ? (
									<Button variant="link" onClick={handlePause}>
										<Pause className="text-secondary" style={{ height: "40px", width: "25px" }} />
									</Button>
								) : (
									<Button variant="link" onClick={handlePlay}>
										<Image src="/assets/img/playerbuttons/play.png" alt="play" />
									</Button>
								)}
								<Button variant="link" onClick={handleNext}>
									<Image src="/assets/img/playerbuttons/next.png" alt="next" />
								</Button>
								<Button variant="link" onClick={handleRepeat}>
									<Image src="/assets/img/playerbuttons/repeat.png" alt="repeat" />
								</Button>
							</div>
							<ProgressBar />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
export default MusicPlayer;
