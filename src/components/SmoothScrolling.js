export default function SmoothScrolling(dataTarget) {
	if (dataTarget) {
		const startLocation = window.pageYOffset;
		const endLocation = dataTarget.offsetTop - 90;
		const distance = endLocation - startLocation;
		let increments = distance / 500;

		if (distance >= 0) {
			if (increments < 1) {
				increments = 1;
			}
		} else {
			if (increments > -1) {
				increments = -1;
			}
		}

		let runAnimation = setInterval(() => {
			if (distance >= 0) {
				if (window.pageYOffset >= dataTarget.offsetTop - 90) {
					clearInterval(runAnimation);
				}
			} else {
				if (window.pageYOffset <= dataTarget.offsetTop - 90) {
					clearInterval(runAnimation);
				}
			}

			window.scrollBy(0, increments);
		}, 1);
	}
}
