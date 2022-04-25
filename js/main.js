// Show Megamenu Start
const megaMenu = document.querySelector("header .container nav > ul li.other-links .mega-menu");
const megaMenuLi = document.querySelector("header .container nav > ul li.other-links");

megaMenuLi.addEventListener("mouseover", () => {
	showMegaMenu();
});

megaMenuLi.addEventListener("mouseout", () => {
	hideMegaMenu();
});


function showMegaMenu() {
	megaMenu.style.cssText = "opacity: 1; z-index: 100; top: calc(100%);";
}

function hideMegaMenu() {
	megaMenu.style.cssText = "opacity: 0; z-index: 1-; top: calc(100% + 50px);";
}
// Show Megamenu End
// Skills Section Fill Start
const skillsBars = document.querySelectorAll(".our-skills .bar");
const skillsSection = document.querySelector("main .our-skills");
let skillsStarted = false;

window.addEventListener("scroll", () => {
	if (window.scrollY >= skillsSection.offsetTop) {
		if (!skillsStarted) {
			skillsBars.forEach((skill) => {
				fillProgressBar(skill);
			});
		}
		skillsStarted = true;
	}
});

function fillProgressBar(skill) {
	let length = skill.dataset.length;
	let i = 0;
	let fillBarInterval = setInterval(() => {
		skill.style.width = `${i++}%`;
		if (skill.style.width == `${length}%`) {
			clearInterval(fillBarInterval);
		}
	}, 2000 / length);

}
// Skills Section Fill End
// Event Section Timer Start
const eventDays = document.querySelector("main .counter .unit .days");
const eventHours = document.querySelector("main .counter .unit .hours");
const eventMinuets = document.querySelector("main .counter .unit .minuets");
const eventSeconds = document.querySelector("main .counter .unit .seconds");
let eventYear = 2022;
let targetDate = new Date(`Jun 17, ${eventYear} 23:59:59`).getTime();

let eventCounter = setInterval(() => {
	let dateNow = new Date().getTime();
	let timeDiff = targetDate - dateNow;

	let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	let hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	let minuets = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
	let seconds = Math.floor(timeDiff % (1000 * 60) / 1000);

	eventDays.textContent = days < 10 ? `0${days}` : days;
	eventHours.textContent = hours < 10 ? `0${hours}` : hours;
	eventMinuets.textContent = minuets < 10 ? `0${minuets}` : minuets;
	eventSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;

	if (timeDiff < 0) {
		eventYear++;
	}
}, 1000);

// Event Section Timer End
// Status Section Counter Start
const statNumbers = document.querySelectorAll(".status .number");
const statusSection = document.querySelector("main .status");
let statusStarted = false;

window.onscroll = function () {
	if (window.scrollY >= statusSection.offsetTop) {
		if (!statusStarted) {
			statNumbers.forEach((stat) => {
				increaseNumber(stat);
			});
		}
		statusStarted = true;
	}
};

function increaseNumber(stat) {
	let goal = stat.dataset.goal;
	const increaseNumberInterval = setInterval(() => {
		stat.textContent++;
		if (stat.textContent == goal) {
			clearInterval(increaseNumberInterval);
		}
	}, 2000 / goal);
}
// Status Section Counter End

