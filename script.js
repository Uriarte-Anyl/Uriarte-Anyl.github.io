const portfolioData = [
  {
    title: "Hello, abh (Assistive Bot for Habits)",
    description: "$",
    hasLink: false,
    inDevelopment: true,
    link: "",
  },

  {
    title: "Community Q&A/Freedom Wall",
    description:
      "A platform that helps a community of student spread and ask valuable information.",
    hasLink: false,
    inDevelopment: true,
    link: "",
  },

  {
    title: "Event Management Platform",
    description: "$",
    hasLink: true,
    inDevelopment: false,
    link: "",
  },

  {
    title: "Machine learning (image classification)",
    description: "$",
    hasLink: true,
    inDevelopment: false,
    link: "",
  },
  {
    title: "Point of Sale Platform",
    description: "$",
    hasLink: true,
    inDevelopment: false,
    link: "",
  },
  {
    title: "Scheduling System",
    description: "$",
    hasLink: false,
    inDevelopment: true,
    link: "",
  },
];

const linkIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-up-right fg-3" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
  </svg>`;

const inDevelopmentLabel = `<span class="in-development ibm-plex-sans-condensed fs-xxs fg-4 fw-700">in development</span>`;

function renderContent(content) {
  const projectContainerElement = document.getElementById("projectContainer");

  content.forEach((data) => {
    // In-development projects show a label instead of the arrow, and are never linked
    const isLinked = data.hasLink && !data.inDevelopment;
    const trailingElement = data.inDevelopment
      ? inDevelopmentLabel
      : isLinked
        ? linkIconSvg
        : "";

    const titleColor = data.inDevelopment ? "fg-4" : "fg-black";

    const descriptionColor = data.inDevelopment ? "fg-4" : "fg-black";

    const articleHtml = `
      <article>
        <div class="d-flex flex-row justify-content-between">
          <header class="ibm-plex-sans-condensed fs-xs ${titleColor} fw-700">${data.title}</header>
          ${trailingElement}
        </div>
        <p class="mb-1 ibm-plex-serif fs-xs ${descriptionColor}">${data.description}</p>
        <div class="project-line border-bottom border" style="border-style: dotted!important; border-color: oklch(0.65 0 0)"></div>
      </article>
    `;

    const projectInfoWrapperElement = document.createElement("div");
    projectInfoWrapperElement.className = "col-12";

    projectInfoWrapperElement.innerHTML = isLinked
      ? `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="project-link d-block text-decoration-none">${articleHtml}</a>`
      : articleHtml;

    projectContainerElement.appendChild(projectInfoWrapperElement);
  });
}

renderContent(portfolioData);
