import showdown from "showdown";
import { mdHighlighter } from "./highlighter";

const htmlConverter = (md) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(mdHighlighter(md))
}

export default htmlConverter