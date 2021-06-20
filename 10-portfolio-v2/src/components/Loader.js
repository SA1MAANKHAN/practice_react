import React from "react";

const Loader = () => {
	return (
		<>
			<div class="loader">
				<svg
					width="300"
					height="250"
					viewBox="0 0 818 498"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="strokeGradient">
							<stop offset="5%" stop-color="#191919" />
							<stop offset="60%" stop-color="#0089e4" />
							<stop offset="100%" stop-color="#0a66a3" />
						</linearGradient>
					</defs>
					<path
						class="pulse"
						d="M0 305.5H266L295.5 229.5L384 496L460 1.5L502.5 377.5L553 305.5H818"
						stroke-width="8"
					/>
				</svg>
				<span>Loading...</span>
			</div>
		</>
	);
};

export default Loader;
