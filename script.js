const portfolioData = [
  {
    title: "Hello, abh (Assistive Bot for Habits)",
    description:
      "AI bot that lives in telegram chat that plans, assists and gives advice about habits.",
  },

  {
    title: "Community Q&A/Freedom wall",
    description:
      "A platform that helps a community of student spread and ask valuable information.",
  },

  {
    title: "Event management platform",
    description: "Built using HTML/CSS, Javascript, PHP, and MySQL",
  },

  {
    title: "Machine learning (image classification)",
    description: "$",
  },
  {
    title: "",
    description: "$",
  },
  {
    title: "",
    description: "$",
  },
];

function renderContent(content) {
  const projectContainerElement = document.getElementById("projectContainer");

  content.forEach((data) => {
    const projectInfoWrapperElement = document.createElement("div");

    projectInfoWrapperElement.classList = `
    col-12
    `;

    projectInfoWrapperElement.innerHTML = `
      <article>
        <div class="d-flex flex-row justify-content-between">
        <header class="ibm-plex-sans-condensed fs-xs fg-black fw-700">${data.title}
        </header>
        <svg xmlns="http://www.w3.org/2000/svg" width="12"      height="12" fill="currentColor" class="bi bi-arrow-up-right fg-3" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
        </svg>
        </div>
        
        <p class="mb-1 ibm-plex-serif fs-xs fg-black">${data.description}</p>
        <div class="border-bottom border" style="border-style: dotted!important; border-color: oklch(0.65 0 0)"></div>
      </article> 
    `;

    projectContainerElement.appendChild(projectInfoWrapperElement);
  });
}

renderContent(portfolioData);
