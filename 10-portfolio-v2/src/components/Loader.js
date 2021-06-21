import React from "react";

const Loader = () => {
  return (
    <>
      <div class="loader">
        {/* <svg
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
				</svg> */}
        <svg
          className="svg__loader"
          version="1.1"
          id="L2"
          //   xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          //   xml:space="preserve"
        >
          <circle
            fill="none"
            stroke="#fff"
            stroke-width="1"
            stroke-miterlimit="10"
            cx="50"
            cy="50"
            r="48"
          />
          <line
            fill="none"
            stroke-linecap="round"
            stroke="#fff"
            stroke-width="1"
            stroke-miterlimit="10"
            x1="50"
            y1="50"
            x2="85"
            y2="50.5"
          >
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </line>
          <line
            fill="none"
            stroke-linecap="round"
            stroke="#fff"
            stroke-width="1"
            stroke-miterlimit="10"
            x1="50"
            y1="50"
            x2="49.5"
            y2="74"
          >
            <animateTransform
              attributeName="transform"
              dur="15s"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </line>
        </svg>

        <span>Loading...</span>
      </div>
    </>
  );
};

export default Loader;
