interface Background {
  url: string;
  author?: Author
}

interface Author {
  name: string;
  platform: string;
  url: string;
}

export default Background
