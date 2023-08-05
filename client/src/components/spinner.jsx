import React from 'react'

const Spinner = () => {
  return (
    <svg className="pl" viewBox="0 0 128 128" width="128px" height="128px">
	<defs>
		<linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stopColor="#000" />
			<stop offset="100%" stopColor="#fff" />
		</linearGradient>
		<mask id="pl-mask">
			<rect x="0" y="0" width="128" height="128" fill="url(#pl-grad)" />
		</mask>
	</defs>
	<g strokeDasharray="32 32" strokeDashoffset="-32" strokeLinecap="round" strokeWidth="6">
		<g className="pl__layer">
			<g className="pl__lines" stroke="hsl(48,90%,50%)">
				<g className="pl__line-g" transform="rotate(0,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(30,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(60,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(90,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(120,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(150,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(180,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(210,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(240,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(270,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(300,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(330,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
			</g>
		</g>
		<g className="pl__layer" mask="url(#pl-mask)">
			<g className="pl__lines" stroke="hsl(18,90%,50%)">
				<g className="pl__line-g" transform="rotate(0,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(30,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(60,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(90,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(120,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(150,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(180,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(210,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(240,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(270,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(300,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
				<g className="pl__line-g" transform="rotate(330,64,64) translate(0,-28)" >
					<polyline className="pl__line" points="64 32,64 64" />
				</g>
			</g>
		</g>
	</g>
        </svg>
  )
}

export default Spinner