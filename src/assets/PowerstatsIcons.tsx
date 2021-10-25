import React from "react";

interface IPowerstatsIcon {
	isHover: boolean;
	style: IStyle;
}
interface IStyle {
	width: string;
	height: string;
	fill: string;
}

export const Power = ({ isHover, style }: IPowerstatsIcon) => {
	return (
		<svg
			style={style}
			width="53"
			height="72"
			viewBox="0 0 53 72"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={style.fill}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M48.8253 0L38.9446 19.5112C42.1634 22.5578 44.17 26.8632 44.17 31.6355C44.17 32.6713 44.0754 33.6852 43.8946 34.6688L53 41.997L42.1638 39.5701C39.7246 44.0695 35.2753 47.3288 30.0145 48.1536L27.3838 72L25.2151 48.2195C23.6478 48.0181 22.1483 47.6013 20.7474 47.0001L14.6727 51.0776L17.3265 45.0254C13.4109 42.102 10.8198 37.5139 10.611 32.3153L0 28.2009L11.2462 27.0165C11.9242 24.6613 13.1077 22.5191 14.6723 20.7136L14.6727 16.5244L19.6956 16.7665C21.0923 16.0484 22.6032 15.5198 24.1941 15.2149H24.0266L26.6043 1.53565L29.1445 15.0042C31.0976 15.207 32.9512 15.7434 34.6467 16.5553L48.8253 0ZM27.3838 23.8318C23.0573 23.8318 19.5502 27.3257 19.5502 31.6355C19.5502 35.9454 23.0573 39.4393 27.3838 39.4393C31.7101 39.4393 35.2174 35.9454 35.2174 31.6355C35.2174 27.3257 31.7101 23.8318 27.3838 23.8318Z"
			/>
		</svg>
	);
};
export const Strength = ({ isHover, style }: IPowerstatsIcon) => {
	return (
		<svg
			style={style}
			width="36"
			height="65"
			viewBox="0 0 36 65"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={style.fill}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.9578 0C12.6832 8.4565 9.63777 24.4144 17.3122 27.6382C22.4288 29.7876 23.4333 23.9053 20.3265 9.99184C25.4243 17.3133 27.6158 24.3754 26.9011 31.1782C27.8487 31.7211 28.7437 32.349 29.5748 33.0512C30.798 32.3138 31.4094 30.901 31.4094 28.8149C32.7331 31.2424 33.0577 33.6461 32.3829 36.0259C34.653 39.0531 36 42.8222 36 46.9074C36 56.8997 27.9411 65 18 65C8.05888 65 0 56.8997 0 46.9074C0 44.0276 0.669411 41.305 1.86044 38.888C0.689685 36.1612 1.00061 32.4107 2.79398 27.6382C2.79398 31.9353 3.60228 32.9691 4.55684 33.5771C4.82571 33.7482 5.14629 33.8472 5.51861 33.8738C6.06013 33.3471 6.63309 32.8579 7.23524 32.4056C6.29053 19.9418 8.86434 9.13938 14.9578 0ZM18 38.3374C13.291 38.3374 9.47368 42.1743 9.47368 46.9074C9.47368 50.5931 11.7883 53.7353 15.0363 54.9456C15.3493 51.9813 16.5763 49.9449 18.7181 48.833C18.7181 51.2085 18.4089 53.6261 20.0257 55.2334C23.7587 54.3182 26.5263 50.9376 26.5263 46.9074C26.5263 42.1743 22.709 38.3374 18 38.3374Z"
			/>
		</svg>
	);
};
export const Speed = ({ isHover, style }: IPowerstatsIcon) => {
	return (
		<svg
			style={style}
			width="69"
			height="51"
			viewBox="0 0 69 51"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={style.fill}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.439 0.0300327C11.9533 14.5257 14.8036 35.4945 32.5833 51C24.017 50.5963 17.1802 49.4018 12.0733 47.4166C15.1923 45.42 16.7517 44.4219 16.7517 44.4219C-1.27383 32.5954 -1.11398 17.7607 0.919944 13.9241C2.85595 18.0753 4.896 20.5902 7.04008 21.4689C6.38126 12.2321 8.84753 5.08583 14.439 0.0300327ZM54.561 0C60.1525 5.0558 62.6187 12.202 61.9599 21.4389C64.1041 20.5604 66.144 18.0453 68.08 13.8943C70.114 17.7306 70.2738 32.5654 52.2484 44.3919C52.2484 44.3919 53.8078 45.3902 56.9268 47.3866C51.8198 49.3718 44.983 50.5663 36.4167 50.97C54.1965 35.4645 57.0467 14.4957 54.561 0ZM45.8994 25.0605C46.7893 29.9374 41.8065 35.306 34.5019 39.6421L34.5021 39.6434H34.5C27.1956 35.306 22.213 29.9374 23.1027 25.0605C23.9925 20.1828 32.0419 18.5434 34.5021 25.0605L34.5 25.0584L34.6451 24.7002C37.2616 18.6065 45.0264 20.275 45.8994 25.0605ZM34.5 9.43897C36.6172 9.43897 38.3334 11.1293 38.3334 13.2145C38.3334 15.2996 36.6172 16.99 34.5 16.99C32.3829 16.99 30.6667 15.2996 30.6667 13.2145C30.6667 11.1293 32.3829 9.43897 34.5 9.43897Z"
			/>
		</svg>
	);
};
export const Durability = ({ isHover, style }: IPowerstatsIcon) => {
	return (
		<svg
			style={style}
			width="70"
			height="35"
			viewBox="0 0 70 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={style.fill}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M54.9228 33.9063V1.0937H59.769L61.9229 3.82803L65.6921 1.0937L70 0V5.46866L65.6921 8.74992L70 13.125V19.6874H67.8461L61.9229 16.4063L70 25.1562V32.2657L64.6152 35L61.9229 32.2657L59.769 33.9063H54.9228ZM18.3076 34.4532V1.09386H32.8463V34.4532H29.0769L23.6923 31.7189V34.4532H18.3076ZM36.6156 34.4532V1.09386H42.0002L44.1542 8.75008L45.7696 1.09386H51.1542V34.4532H44.1542L42.0002 31.7189L40.3848 34.4532H36.6156ZM0 1.64063L8.07705 11.4844L0 8.74992V26.2501C1.07694 27.1615 2.58466 29.422 0 31.1718V34.4531H6.46164L8.61553 31.7187L10.7694 34.4531H14.5387V1.64063H0Z"
			/>
		</svg>
	);
};
export const Combat = ({ isHover, style }: IPowerstatsIcon) => {
	return (
		<svg
			style={style}
			width="52"
			height="46"
			viewBox="0 0 52 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={style.fill}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.77582 22.894L26 46L48.2243 22.894C53.301 17.6157 53.2523 9.26822 48.1139 4.04935C42.7983 -1.34978 34.0762 -1.34978 28.7605 4.04935L26 6.85315L23.2395 4.04935C17.9237 -1.34978 9.20168 -1.34978 3.88599 4.04935C-1.25226 9.26822 -1.30106 17.6157 3.77582 22.894ZM37.0023 20.4373C33.938 20.2861 31.3401 19.1021 29.2087 16.8852C27.0774 14.6685 26.0116 12.0242 26.0116 8.95253C26.0116 12.0242 24.9421 14.6685 22.8031 16.8852C20.6641 19.1021 18.0624 20.2861 14.9981 20.4373C17.0157 20.5282 18.8665 21.0994 20.5504 22.1511C22.2342 23.2027 23.5654 24.5947 24.5439 26.3274C25.5224 28.0599 26.0116 29.9401 26.0116 31.9677C26.0116 28.8808 27.0774 26.2252 29.2087 24.0009C31.3401 21.7765 33.938 20.5887 37.0023 20.4373Z"
			/>
		</svg>
	);
};
export const Intell = ({ isHover, style }: IPowerstatsIcon) => {
	return (
		<svg
			style={style}
			width="53"
			height="58"
			viewBox="0 0 53 58"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={style.fill}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M26.5 0L26.7459 0.581669C29.2638 6.6983 30.9958 15.9263 31.9415 28.2655L32.0279 29.4315L28.0842 34.3385V36.4377C29.055 36.4377 32.0279 38.4726 32.0279 41.6087C32.0279 44.6083 30.0664 46.0991 29.3532 46.223L29.264 46.2314V56.6235C29.264 57.4174 28.4614 57.8701 26.8562 57.9814L26.5 58C24.6574 57.933 23.7361 57.4741 23.7361 56.6235V46.2314C23.1161 46.2314 20.9721 44.7447 20.9721 41.6087C20.9721 38.4726 23.9451 36.4377 24.9158 36.4377V34.3385L20.9721 29.4315C21.9258 16.1022 23.7684 6.29159 26.5 0ZM0.0213617 8.96575L0.422448 9.35101C4.17729 13.0347 8.25352 19.1955 12.6511 27.8333L13.1235 28.7682L11.5489 33.5639L12.1787 35.0974C12.9287 34.7993 15.8364 35.3728 16.7773 37.6638C17.7184 39.9546 16.5079 41.6992 16.029 41.8895C18.215 47.2118 19.4356 50.1837 19.6909 50.8052C19.928 51.382 19.4498 51.9562 18.2564 52.5276L17.9684 52.6593C16.5245 53.1762 15.6749 53.124 15.4197 52.5025L11.7577 43.587C11.2788 43.7773 9.17607 43.3496 8.23497 41.0587C7.29404 38.7677 8.98068 36.3685 9.73063 36.0704L9.10064 34.5367L4.58115 32.1631C1.31852 22.1332 -0.201433 14.4007 0.0213617 8.96575ZM52.9786 8.96575C53.2014 14.4007 51.6815 22.1332 48.4189 32.1631L43.8994 34.5367L43.2694 36.0704C44.0193 36.3685 45.706 38.7677 44.765 41.0587C43.8239 43.3496 41.7213 43.7773 41.2423 43.587L37.5804 52.5025C37.3251 53.124 36.4755 53.1762 35.0316 52.6593L34.7436 52.5276C33.5503 51.9562 33.0722 51.382 33.3091 50.8052C33.5644 50.1837 34.785 47.2118 36.971 41.8895C36.4921 41.6992 35.2816 39.9546 36.2227 37.6638C37.1636 35.3728 40.0714 34.7993 40.8213 35.0974L41.4511 33.5639L39.8765 28.7682L40.3489 27.8333C44.7465 19.1955 48.8227 13.0347 52.5776 9.35101L52.9786 8.96575ZM26.5 38.9688C24.9734 38.9688 23.7361 40.1861 23.7361 41.6876C23.7361 43.1891 24.9734 44.4064 26.5 44.4064C28.0266 44.4064 29.264 43.1891 29.264 41.6876C29.264 40.1861 28.0266 38.9688 26.5 38.9688ZM11.7141 37.4328C10.5346 37.9016 9.94369 39.1707 10.3944 40.2676C10.8449 41.3645 12.1662 41.8737 13.3456 41.405C14.5252 40.9362 15.116 39.6671 14.6655 38.5702C14.215 37.4733 12.8935 36.9641 11.7141 37.4328ZM41.286 37.4328C40.1065 36.9641 38.7851 37.4733 38.3346 38.5702C37.8841 39.6671 38.4748 40.9362 39.6544 41.405C40.8339 41.8737 42.1552 41.3645 42.6057 40.2676C43.0563 39.1707 42.4654 37.9016 41.286 37.4328Z"
			/>
		</svg>
	);
};
