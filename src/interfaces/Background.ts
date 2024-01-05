interface Author {
  name: string;
  platform: string;
  url: string;
}

export default interface Background {
  url: string;
  author?: Author
}
