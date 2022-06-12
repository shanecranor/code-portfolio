export const projects = [
{
	eventName: 'HackUMBC',
	year: 2020,
	title: 'bubblz.space',
	languages: ['Javascript','NodeJS', 'HTML','CSS'],
	awards: [
		{ 
			award: "Best use of secured cloud technologies",
			organization: "General Dynamics Mission Systems"
		},
		{
			award: "Presented by Wolfram",
			organization: "Wolfram"
		}
	],
	summary: '', // TODO: add that MF summary 
	description: `Bubblz.space is peer to peer zoom competitor that I made in 24 hours in a team with two other ACM students (all collaborating remotely during the pandemic) for the HackUMBC hackathon. We used NodeJS and WebRTC (with the help of socket.io and peer.js) to build our application. We hosted our solution on Google Cloud. 

	Here is the pitch for our project: 
	Existing video call platforms have serious limitations. Most platforms only really let one person talk at a time, making it difficult to have natural conversations, where there may be many conversations going on in the same room at once. Furthermore, existing platforms are restrictive for remote learning, making it hard for professors and students to interact with each other in the same way they would in in-person classes.
	
	The advantage bubblz.space has over other video sharing software is the concept of “the bubble.” Bubbles are like public breakout rooms. When you go into a bubble you can only hear people who are talking in your bubble. Going in and out of bubbles is as easy as dragging your video feed to whichever bubble you want! This is nice because a professor or TA can see everyone in the class, even when in breakout rooms to more easily gauge how well the class is doing on the discussion or assignment. The site was live at bubblz.space in November 2020`
},
{
	eventName: 'CSCI306 Software Engineering',
	year: 2020,
	title: 'Campus Themed Clue Game',
	languages: ['Java'],

	description: `An accurate reconstruction of the board game Clue with a new campus themed map, bad sound effects, fun music, and pictures. Play against smart AI computer players. The game was written in a team of two using OOP principles and test driven development in Java. The final product is over 4000 lines of code. `
},
{
	eventName: 'Random Quarantine Project',
	year: 2020,
	title: ' Procedural Interactive Pixel Art Kaleidoscope',
	link: 'https://codepen.io/Thisisntme/pen/gOPvdMm',
	img: 'https://shane.cranor.org/code/imgs/ClueGame.png',
	languages: ['JavaScript','PixiJS'],
	description: `An accurate reconstruction of the board game Clue with a new campus themed map, bad sound effects, fun music, and pictures. Play against smart AI computer players. The game was written in a team of two using OOP principles and test driven development in Java. The final product is over 4000 lines of code. `
},
] 

export function getProjectsByLanguage(language: string){
	return projects.filter(p => (p.languages.includes(language)))
}

export function getProjectsByLanguages(languages: string[]){
	return projects.filter(
		proj => proj.languages.some(l => languages.includes(l))
	)
}