const portfolioData = [
  {
    title: "Hello, abh (Assistive Bot for Habits)",
    description: "$",
    hasLink: false,
    link: "",
  },

  {
    title: "Community Q&A/Freedom Wall",
    description:
      "A platform that helps a community of student spread and ask valuable information.",
    hasLink: false,
    link: "",
  },

  {
    title: "Event Management Platform",
    description: "$",
    hasLink: true,
    link: "",
  },

  {
    title: "Machine learning (image classification)",
    description: "$",
    hasLink: true,
    link: "",
  },
  {
    title: "Point of Sale Platform",
    description: "$",
    hasLink: true,
    link: "",
  },
  {
    title: "Scheduling System",
    description: "$",
    hasLink: false,
    link: "",
  },
];

const linkIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-arrow-up-right fg-3" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
  </svg>`;

function renderContent(content) {
  const projectContainerElement = document.getElementById("projectContainer");

  content.forEach((data) => {
    const arrowIcon = data.hasLink ? linkIconSvg : "";

    const articleHtml = `
      <article>
        <div class="d-flex flex-row justify-content-between">
          <header class="ibm-plex-sans-condensed fs-xs fg-black fw-700">${data.title}</header>
          ${arrowIcon}
        </div>
        <p class="mb-1 ibm-plex-serif fs-xs fg-black">${data.description}</p>
        <div class="border-bottom border" style="border-style: dotted!important; border-color: oklch(0.65 0 0)"></div>
      </article>
    `;

    const projectInfoWrapperElement = document.createElement("div");
    projectInfoWrapperElement.className = "col-12";

    projectInfoWrapperElement.innerHTML = data.hasLink
      ? `<a href="${data.link}" target="_blank" rel="noopener noreferrer" class="d-block text-decoration-none">${articleHtml}</a>`
      : articleHtml;

    projectContainerElement.appendChild(projectInfoWrapperElement);
  });
}

renderContent(portfolioData);
