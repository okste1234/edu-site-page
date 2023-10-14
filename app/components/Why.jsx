import React from "react";
import Pag from "./Pag";

const Why = () => {
	return (
		<div className="pt-20 m-auto">
			<div className="min-h-screen relative max-w-7xl m-auto">
				<div>
					<Pag
						src={"/tu3.png"}
						head="Our Tutors"
						text="Our tutors are basically medical and engineering students from
							prestigious universities all across Nigeria. Their dexterity in
							tutoring as well as their intelligence knows no bounds at all. You
							can be so sure you're in safe hands."
					/>
					<Pag
						src={"/tu5.png"}
						head="Our Classes"
						text="Our classes take place on one of the most educational friendly apps, 
						Telegram where we make use of Channels, High definition audios among others."
					/>
					<Pag
						src={"/tu1.png"}
						head="Mentorship and supervised reading"
						text="Whatsapp meetings, text messages and phone calls helps us in achieving this. 
						We provide a one-on-one relationship for our students through the office of the students' 
						affairs which gives the homely feel."
					/>
					<Pag
						src={"/tu2.png"}
						head="Online Materials"
						text="We have a bank of materials safely uploaded to our 
						Google Drive containing the right pills to acing your 
						all needed entrance exams into any varsity of your choice."
					/>
					<Pag
						src={"/tu4.png"}
						head="Online Classes"
						text={
							<div>
								<p>Categories </p>
								<ul className="list-inside p-2 text-xl">
									<li>- UTME classes</li>
									<li>- POST UTME classes for all varsities</li>
									<li>- School and College of Nursing classes.</li>
								</ul>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Why;
