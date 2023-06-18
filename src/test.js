const nodes = [
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-06-11T04:20:23Z",
    url: "https://github.com/lozanopo/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-06-02T08:26:59Z",
    url: "https://github.com/duxiaofeng-github/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-05-29T15:28:03Z",
    url: "https://github.com/blanqlabs/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-05-12T03:33:38Z",
    url: "https://github.com/streetcatsky/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-05-10T13:11:50Z",
    url: "https://github.com/nl8-gh/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-05-10T06:49:02Z",
    url: "https://github.com/metapouch/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-05-05T15:02:26Z",
    url: "https://github.com/Qulon/cryptocurrency-icons",
  },
  {
    name: "krudcurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-05-04T08:04:58Z",
    url: "https://github.com/nanotomics/krudcurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-04-28T21:10:50Z",
    url: "https://github.com/pawmmm/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 1,
    updatedAt: "2023-04-20T08:52:31Z",
    url: "https://github.com/BitGo/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 0,
    updatedAt: "2023-04-18T20:40:20Z",
    url: "https://github.com/fulltimemike/cryptocurrency-icons",
  },
  {
    name: "cryptocurrency-icons",
    stargazerCount: 3,
    updatedAt: "2023-04-15T14:21:46Z",
    url: "https://github.com/sideshift/cryptocurrency-icons",
  },
];

export const sortProjects = (sort, projects) => {
  if (sort === "stars") {
    const sortedProjects = [...projects].sort(
      (a, b) => b.stargazerCount - a.stargazerCount
    );
    return sortedProjects;
  } else {
    const sortedProjects = [...projects].sort(
      (a, b) => b.updatedAt - a.updatedAt
    );
    return sortedProjects;
  }
};

//console.log(sortProjects("time", nodes));
const url =  nodes[2].url
console.log(url.split("/")[3] + "-" + url.split("/")[4]);
