import { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./index.css";

const htmlobj = [
  /* **** question 1 **** */
  {
    id: 1,
    question: `1. What is the difference between HTML and XHTML?`,
    answer: [
      `HTML (HyperText Markup Language) and XHTML (Extensible HyperText Markup Language) are both markup languages used to create web pages. However, there are some key differences between the two.`,
      `the main difference between HTML and XHTML lies in their syntax and document structure. XHTML is stricter and more consistent, but requires more attention to detail in coding. HTML is more flexible and widely supported by browsers, but is less consistent and can be prone to errors.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 2 **** */
  {
    id: 2,
    question: `2. What is the difference between inline and block elements?`,
    answer: [
      `Layout: Block-level elements take up the full width available on their container, and stack vertically on top of one another. They create a new line before and after the element. Examples of block-level elements include <div>, <h1>-<h6>, <p>, <ul>, <ol>, and <li>.`,
      `Inline elements, on the other hand, only take up the necessary width to display their content. They do not create a new line before or after the element, and can be nested inside block-level elements. Examples of inline elements include <span>, <a>, <img>, <strong>, and <em>.`,
      `Default styling: Block-level elements have a default margin and padding applied to them, which can be modified using CSS. Inline elements, on the other hand, do not have any default margin or padding.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 3 **** */
  {
    id: 3,
    question: `3. What are the advantages of using external style sheets over inline styles?`,
    answer: [
      `external style sheets offer several advantages over inline styles, including better separation of concerns, reusability, faster loading times, easier collaboration, and better accessibility.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 4 **** */
  {
    id: 4,
    question: `4. Explain the use of the <head> tag in HTML.?`,
    answer: [
      `The <head> tag is an HTML element that provides metadata about a web page, such as its title, author, keywords, and other information that is not displayed on the page itself. The <head> element is typically placed at the beginning of the HTML document, before the <body> tag.`,
      `Document title: The <title> tag, which is placed within the <head> element, specifies the title of the web page that is displayed in the browser's title bar and in search engine results.`,
      `Metadata: The <meta> tag is used to provide additional information about the web page, such as its description, keywords, and author. These elements can help improve search engine rankings and make the page more easily discoverable.`,
      `Stylesheets: The <link> tag is used to link to external stylesheets that define the visual appearance of the web page, including fonts, colors, and layout.`,
      `Scripts: The <script> tag is used to include JavaScript code in the web page, which can be used for interactivity, animations, and other dynamic features.`,
      `Overall, the <head> tag is an important element in HTML that provides important metadata and other information about a web page. By properly using the <head> tag, web developers can improve the usability, accessibility, and search engine optimization of their web pages.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 5 **** */
  {
    id: 5,
    question: `5. What is the difference between the <div> and <span> tags?`,
    answer: [
      `The <div> tag is a block-level element, which means that it takes up the full width available on its container and creates a new line before and after the element. The <div> tag is typically used to group related content together and apply styles and formatting to that group. For example, you might use a <div> to group together a set of form fields or to create a section of a page with a specific background color or border.`,
      `The <span> tag, on the other hand, is an inline element that only takes up as much width as necessary to display its content. The <span> tag is typically used to apply styles and formatting to individual pieces of content within a larger block of text. For example, you might use a <span> to apply a different color or font size to a specific word or phrase within a paragraph.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 6 **** */
  {
    id: 6,
    question: `6. How do you optimize your HTML code for search engines?`,
    answer: [
      `Optimizing your HTML code for search engines involves making sure that your web pages are well-structured, include relevant content and keywords, and are easy for search engines to crawl and index. Here are some tips for optimizing your HTML code for search engines:`,
      `Use semantic HTML: Using semantic HTML tags (such as <header>, <main>, <article>, and <footer>) can help search engines understand the structure and meaning of your content.`,
      `Include relevant keywords: Make sure that your web pages include relevant keywords in the title tag, meta description, and body content. However, be careful not to overuse keywords, as this can be seen as spammy by search engines.`,
      `Optimize image tags: Use descriptive alt tags to describe your images, and compress your images to reduce page load times.`,
      `Use descriptive URLs: Use descriptive URLs that include relevant keywords, rather than generic or numeric URLs.`,
      `Minimize code bloat: Minimize unnecessary code bloat by using CSS for styling and avoiding inline styles, using external scripts, and compressing your HTML and CSS files.`,
      `Ensure mobile-friendliness: Ensure that your web pages are mobile-friendly by using responsive design and avoiding the use of Flash and other technologies that may not work on mobile devices.`,
    ],
    code: ``,
    video: ``,
  },
];

const ObjBluePrint = {
  id: 1,
  question: ``,
  answer: [``, ``, ``],
  code: ``,
  video: ``,
};

class Html extends Component {
  state = { sortingFlag: true };

  sortByDescending = (obj, prop) => {
    return obj.sort((a, b) => b[prop] - a[prop]);
  };

  sortByAscending = (obj, prop) => {
    return obj.sort((a, b) => a[prop] - b[prop]);
  };

  onClickSorting = () => {
    const { sortingFlag } = this.state;
    this.setState({ sortingFlag: !sortingFlag });
  };

  render() {
    const { sortingFlag } = this.state;
    sortingFlag
      ? this.sortByAscending(htmlobj, "id")
      : this.sortByDescending(htmlobj, "id");
    const sortingText = sortingFlag ? "Sort Desc" : "Sort Asc";

    return (
      <div className="main-container">
        <div className="btn-container">
          <h1 className="obj-len">Total Questions: {htmlobj.length}</h1>
          <button className="button" onClick={this.onClickSorting}>
            {sortingText}
          </button>
        </div>
        <div className="about-container">
          {htmlobj.map((eachItem) => (
            <div className="question 1">
              <h1 className="question-header">{eachItem.question}</h1>
              <ul className="ul">
                {eachItem.answer.map((eachAnswer) => (
                  <li className="answer">{eachAnswer}</li>
                ))}
              </ul>
              <div className="code">
                <SyntaxHighlighter language="javascript" style={okaidia}>
                  {eachItem.code}
                </SyntaxHighlighter>
              </div>
              <a href={eachItem.video} target="_blank">
                {eachItem.video}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Html;
