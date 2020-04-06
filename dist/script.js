const placeholder =
`This Markdown Previewer allows you to preview GitHub Flavored Markdown (aka GFM) code !

# Isn't it awesome ?!
## Yes, it is!!
None of this would have been possible without [FreeCodeCamp tutorials](https://www.freecodecamp.org/) !

\`var example=true\`
\`\`\`
if (something == wrong) {
  return toWork;
}
\`\`\`

_(Yes, something is really wrong in this code; I should get back to work...)_

With GFM, you can also add...
>... a blockquote!
... and images too:


![](https://reactnativeexample.com/favicon.png)


Actually, **coding** is so **much fun** but I still have to learn managing: 
- Data visualization
- Backend libraries
- And many other important things...
`;

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      breaks: true });

    this.state = {
      input: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value });

  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { id: "customTitle" }, "Editor"),
      React.createElement("textarea", { id: "editor", value: this.state.input, onChange: this.handleChange }),

      React.createElement("h1", { id: "customTitle" }, "Preview"),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: {
          __html: marked(this.state.input) } })));



  }}
;

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('root'));