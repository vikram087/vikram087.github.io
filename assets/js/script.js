// element toggle function
const elementToggleFunc = (elem) => {
	elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", () => {
	elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = () => {
	modalContainer.classList.toggle("active");
	overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
	testimonialsItem[i].addEventListener("click", function () {
		modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
		modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
		modalTitle.innerHTML = this.querySelector(
			"[data-testimonials-title]",
		).innerHTML;
		modalText.innerHTML = this.querySelector(
			"[data-testimonials-text]",
		).innerHTML;

		testimonialsModalFunc();
	});
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
	elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
	selectItems[i].addEventListener("click", function () {
		const selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		elementToggleFunc(select);
		filterFunc(selectedValue);
	});
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
	for (let i = 0; i < filterItems.length; i++) {
		if (selectedValue === "all") {
			filterItems[i].classList.add("active");
		} else if (selectedValue === filterItems[i].dataset.category) {
			filterItems[i].classList.add("active");
		} else {
			filterItems[i].classList.remove("active");
		}
	}
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
	filterBtn[i].addEventListener("click", function () {
		const selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		filterFunc(selectedValue);

		lastClickedBtn.classList.remove("active");
		this.classList.add("active");
		lastClickedBtn = this;
	});
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
	formInputs[i].addEventListener("input", () => {
		// check form validation
		if (form.checkValidity()) {
			formBtn.removeAttribute("disabled");
		} else {
			formBtn.setAttribute("disabled", "");
		}
	});
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].addEventListener("click", function () {
		for (let i = 0; i < pages.length; i++) {
			if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
				pages[i].classList.add("active");
				navigationLinks[i].classList.add("active");
				window.scrollTo(0, 0);
			} else {
				pages[i].classList.remove("active");
				navigationLinks[i].classList.remove("active");
			}
		}
	});
}

const projectItems = document.querySelectorAll(".project-item a");
const modal = document.getElementById("portfolio-modal");
const closeModal = modal.querySelector(".modal-close-btn");
const overlays = modal.querySelector(".overlay");
const modalContent = modal.querySelector(".modal-content");

// Modal content elements
const modalImgs = document.getElementById("modal-img");
const modalTitles = document.getElementById("modal-title");
const modalTexts = document.getElementById("modal-text");
const modalDescription = document.getElementById("modal-description");
const modalLinks = document.getElementById("modal-links");

const projectData = {
	"garde_📌": {
		description:
			"Garde is a revolutionary fencing platform designed to enhance training by providing real-time AI-driven feedback and analytics to coaches and fencers. The platform integrates advanced video transcoding with FFmpeg, seamless video storage on Cloudflare R2, and low-latency streaming through HTTP Live Streaming (HLS). Garde offers coaches a streamlined dashboard to analyze fencers’ performance through detailed statistics and video playback. Additionally, the system supports full-stack user authentication built from scratch, utilizing JWT tokens for secure sessions and Cloudflare D1 for efficient data management. With Next.js, Garde ensures a modern and responsive frontend, empowering coaches to improve fencer techniques effectively.",
		github: "https://github.com/GardeFencing",
	},
	"icam_materials_database_📌": {
		description:
			"The ICAM Materials Database is a cutting-edge tool for materials science research, designed to provide an efficient and user-friendly way to search, filter, and explore scientific literature. The system compiles metadata from the ArXiv API, processing it with MatBERT-NER for property extraction, and stores it in Elasticsearch for advanced query capabilities. Researchers can perform vector-based searches using sentence transformers, with support for HNSW indexing to ensure rapid retrieval of relevant papers. A Flask backend powers the API, and Redis caching optimizes query performance by reducing latency for frequently accessed data. Coupled with a React.js frontend, users benefit from a highly responsive interface with robust sorting, filtering, and pagination capabilities.",
		github: "https://github.com/vikram087/icam-materials-database",
	},
	"pomodoro_📌": {
		description:
			"Pomodoro is an award-winning productivity and educational tool that combines advanced AI technologies to create an interactive learning experience. Designed as an all-in-one platform, it integrates PDF-based Q&A functionality using Langchain for text extraction, FAISS for efficient document indexing and querying, and OpenAI’s LLM for providing detailed and contextual responses. Pomodoro allows users to engage in a conversational interface that retains in-memory context for seamless learning. Built as a Streamlit application, it provides a visually appealing and intuitive user interface, enabling efficient learning and task management. Secure user authentication and MongoDB integration support personalized course database modifications, making it a versatile tool for productivity and education.",
		github: "https://github.com/Shaurya-Srivastav/AggieGuide",
	},
	climb_gui: {
		description:
			"An OpenCV-based route picker for bouldering, built to provide optimal climbing strategies.",
		github: "https://github.com/Climb-GUI/Climb_GUI",
	},
	helpinghand: {
		description:
			"A mental health chatbot using Google Cloud APIs for TTS and STT, with a React.js and Express.js interface.",
		github: "https://github.com/Helping-Hand-HHH/HelpingHand",
	},
	sharkproof: {
		description:
			"An interview preparation tool leveraging HumeAI and Groq for real-time feedback and analytics.",
		github: "https://github.com/EW0824/CalHacks24",
	},
};

// Open modal
// biome-ignore lint/complexity/noForEach: <explanation>
projectItems.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.preventDefault();

		const imgSrc = item.querySelector("img").src;
		const title = item.querySelector(".project-title").textContent.trim();
		const category = item.querySelector(".project-category").textContent.trim();
		const key = title.toLowerCase().replace(/\s/g, "_");

		modalImgs.src = imgSrc;
		modalImgs.alt = title;
		modalTitles.textContent = title;
		modalTexts.textContent = category;

		if (projectData[key]) {
			modalDescription.textContent = projectData[key].description;
			modalLinks.querySelector("a").href = projectData[key].github;
		} else {
			modalDescription.textContent = "Description not available.";
			modalLinks.querySelector("a").href = "https://github.com/vikram087";
		}

		modal.classList.add("active");
	});
});

// Close modal on button click
closeModal.addEventListener("click", () => {
	modal.classList.remove("active");
});

// Close modal on overlay click
overlays.addEventListener("click", () => {
	modal.classList.remove("active");
});

// Close modal on outside click (not on modal content)
modal.addEventListener("click", (event) => {
	if (!modalContent.contains(event.target)) {
		modal.classList.remove("active");
	}
});
