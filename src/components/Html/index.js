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
  /* **** question 7 **** */
  {
    id: 7,
    question: `7. What is the difference between a GET and a POST request in HTML?`,
    answer: [
      `GET: A GET request is used to retrieve data from the server. When a user submits a form using GET, the form data is appended to the URL as query parameters, and the user is redirected to a new page that displays the results. GET requests are typically used for simple queries, such as searching for information or browsing a catalog.`,
      `POST: A POST request is used to submit data to the server. When a user submits a form using POST, the form data is sent in the request body, rather than being appended to the URL. This makes POST requests more secure than GET requests, as the form data is not visible in the URL. POST requests are typically used for submitting sensitive information, such as login credentials or credit card details.`,
      `Overall, the main difference between GET and POST requests is the way in which data is submitted to the server. GET requests are used for retrieving data, while POST requests are used for submitting data. Additionally, POST requests are more secure than GET requests, as the form data is not visible in the URL.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 8 **** */
  {
    id: 8,
    question: `8. What is HTML5, and what are its new features?`,
    answer: [
      `Improved multimedia support: HTML5 introduced the <audio> and <video> tags, which make it easy to embed multimedia content (such as audio and video) in web pages without relying on third-party plugins like Flash.`,
      `Canvas element: HTML5 introduced the <canvas> tag, which allows developers to create dynamic graphics and animations directly in the browser, without the need for third-party plugins.`,
      `Geolocation: HTML5 introduced the Geolocation API, which allows web applications to access a user's location information (with their permission). This can be useful for location-based services and applications.`,
      `Local storage: HTML5 introduced a new mechanism for storing data on the client side, called local storage. This allows web applications to store data locally on the user's device, even after the browser is closed.`,
      `Responsive design: HTML5 introduced new features that make it easier to create responsive web designs that can adapt to different screen sizes and devices, such as the <picture> and <source> tags for responsive images, and the <input type="range"> tag for creating sliders and other interactive elements.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 9 **** */
  {
    id: 9,
    question: `9. What is the role of meta tags in HTML?`,
    answer: [
      `the role of meta tags in HTML is to provide information about a web page that is useful to search engines, browsers, and other web services. By including relevant and accurate meta tags in an HTML document, web developers can improve the visibility and usability of their web pages.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 10 **** */
  {
    id: 10,
    question: `10. What is the difference between HTML and HTML5 forms?`,
    answer: [
      `New form elements: HTML5 introduced several new form elements such as <input type="date">, <input type="email">, <input type="url">, <input type="tel">, <input type="search">, <input type="range">, <input type="color">, <input type="datetime-local">, <input type="month">, <input type="week">, <input type="time">, <input type="datetime">, <input type="number">, and <input type="file">. These new elements provide more options for users to enter data and make it easier to validate and process the data on the server.`,
      `Placeholder and pattern attributes: HTML5 introduced the "placeholder" and "pattern" attributes for form elements. The "placeholder" attribute allows you to specify text that appears inside a form field until the user enters data, while the "pattern" attribute lets you specify a regular expression pattern that the entered data must match.`,
      `Validation: HTML5 introduced built-in form validation, which allows you to specify validation rules using attributes such as "required", "min", "max", "step", and "pattern". This makes it easier to validate user input without requiring JavaScript code.`,
      `New form attributes: HTML5 introduced several new form attributes such as "autocomplete", "autofocus", "novalidate", and "formtarget". These attributes provide more control over how form data is submitted and processed.`,
      `Support for new input types: HTML5 introduced support for new input types such as "color", "date", "datetime-local", "email", "month", "number", "range", "search", "tel", "time", "url", "week", and "file". These input types make it easier to enter and validate certain types of data.`,
    ],
    code: ``,
    video: ``,
  },
  /* **** question 11 **** */
  {
    id: 11,
    question: `11. what are the Position attributes in CSS?`,
    answer: [
      `Static: This is the default position of an element. It appears in the normal flow of the web page.`,
      `Relative: This position attribute sets the position of an element relative to its normal position on the web page. Once an element is given a relative position, it can be moved using top, right, bottom, and left properties.`,
      `Absolute: This position attribute removes an element from the normal flow of the web page and positions it relative to its nearest positioned ancestor. Once an element is given an absolute position, it can be moved using top, right, bottom, and left properties.`,
      `Fixed: This position attribute removes an element from the normal flow of the web page and positions it relative to the browser window. Once an element is given a fixed position, it can be moved using top, right, bottom, and left properties. The position of the element will not change even if the page is scrolled.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 12,
    question: `12. what is semantic HTML? name some HTML tags ?`,
    answer: [
      `Semantic HTML refers to the use of HTML markup to reinforce the meaning and structure of web content, rather than just to define its appearance. By using semantic HTML, web developers can create more accessible, reusable, and SEO-friendly web pages.`,
      `By using these and other semantic HTML tags, web developers can create web pages that are more accessible to users with disabilities, more easily understood by search engines, and easier to maintain and update over time.`,
      `<header> - used to define the header of a page or section`,
      `<nav> - used to define a set of navigation links`,
      `<main> - used to define the main content of a page`,
      `<section> - used to define a section of a page`,
      `<article> - used to define an article or blog post`,
      `<aside> - used to define a section of a page that is not directly related to the main content`,
      `<footer> - used to define the footer of a page or section`,
      `<address> - used to provide contact information for the author or owner of a page`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 13,
    question: `13. what do you mean by CSS box model ?`,
    answer: [
      `The CSS box model is a layout model that describes how elements in HTML are visually represented on the web page. It is based on the idea that every HTML element can be thought of as a rectangular box that encloses its content, including any padding, borders, and margins.`,
    ],
    code: ``,
    video: ``,
  },
  {
    id: 14,
    question: `14. Expain CSS specificity ?`,
    answer: [
      `CSS specificity refers to the set of rules that determine which styles are applied to an HTML element when multiple conflicting styles are defined. In other words, it determines which CSS rules take precedence over others when multiple rules apply to the same element.`,
      `Inline styles - styles applied directly to an HTML element using the "style" attribute. These have the highest specificity and will always override other styles, regardless of their specificity.`,
      `IDs - styles applied to an element using the "#" symbol followed by an ID name. IDs have a higher specificity than classes and elements.`,
      `Classes and attribute selectors - styles applied to elements using class names, attribute selectors, or pseudo-classes. These have a lower specificity than IDs but a higher specificity than element selectors.`,
      `Element selectors - styles applied to all instances of a particular HTML element, such as "p" or "div". These have the lowest specificity and will be overridden by all other types of selectors.`,
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
