import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<footer className="footer">
				<div className="icon-brand">
					<FontAwesomeIcon className="icon" icon={faPepperHot} />
					<a className="navbar-brand" href="/spice-it">
						Spice IT Global
					</a>
				</div>
        <br></br>
				<address>Gothenburg, Sweden</address>
				<div className="legal">
					<p>&copy; 2025 Spice IT Global. All rights reserved.</p>
				</div>
		</footer>
	);
}

export { Footer };
