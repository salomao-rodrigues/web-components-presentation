// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";


// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  htmlTemplatesSupport: require("../assets/html-templates-support.png"),
  customElementsSupport: require("../assets/custom-elements-support.png"),
  htmlImports: require("../assets/html-imports-support.png"),
  shadowDom: require("../assets/shadow-dom-support.png"),
  polyfillsupport: require("../assets/polyfill-support.png")
};

preloader(images);

const theme = createTheme({
  primary: "#434444",
  secondary: "#F7F0DD",
  tertiary: "#F7F0DD",
  quaternary: "#434444"
  // primary: "white",
  // quaternary: "#1F2022",
  // tertiary: "#03A9FC",
  // secondary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Montserrat",
  tertiary: "Montserrat",
  quaternary: "Montserrat"
});

export default function Presentation() {
  return (
    <Deck progress="pacman" transition={["fade"]} transitionDuration={500} theme={theme}>
      <Slide transition={["zoom"]} bgColor="primary" notes={ require("raw-loader!./notes/introduction.notes") }>
        <Heading size={3} caps lineHeight={1} textColor="secondary">
          An introduction to Web Components
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary" notes={ require("raw-loader!./notes/what-is-it.notes") } >
        <Heading size={2} textColor="quaternary">
          What is it
        </Heading>
        <Appear>
          <BlockQuote>
            <Quote textColor="#43868A" textSize="32px">
              Set of native APIs that allow you to create custom, reusable, encapsulated HTML tags to use in web pages and web apps.
            </Quote>
            <Cite textColor="#444">Webcomponents.org</Cite>
          </BlockQuote>
        </Appear>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary" notes={ require("raw-loader!./notes/what-can-i-do.notes") }>
        <Heading size={2} textColor="quaternary" fit>
          What can I do with it?
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary" notes={ require("raw-loader!./notes/the-video-example.notes") } >
        <Heading size={2} textColor="quaternary" margin="0 0 36px" fit>
          { "An example with the <video> element" }
        </Heading>
          <video width="600" style={{ backgroundColor: "#000" }} controls />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="quaternary">
          How do I do this??
        </Heading>
        <Appear>
          <Text margin="10px 0 0" textColor="primary" size={1}>
            Use the API's, Luke!
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary" notes={ require("raw-loader!./notes/specifications.notes") }>
        <Heading size={2} textColor="quaternary">
          Specifications
        </Heading>
        <List textColor="quaternary">
          <ListItem>Custom Elements</ListItem>
          <ListItem>HTML Templates</ListItem>
          <ListItem>HTML Imports</ListItem>
          <ListItem>Shadow DOM</ListItem>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary" notes={ require("raw-loader!./notes/get-started.notes") }>
        <Heading size={2} textColor="quaternary">
          Let's get started!
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary" notes={ require("raw-loader!./notes/create-template.notes") }>
        <Heading size={2} textColor="quaternary" margin="0 0 36px" fit>
          Create a template
        </Heading>
        <CodePane lang="html" textSize="24px" source={ require("raw-loader!./examples/html-templates.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary" notes={ require("raw-loader!./notes/create-custom-component.notes") }>
        <Heading size={2} textColor="quaternary" margin="0 0 36px" fit>
          Create your custom component
        </Heading>
        <CodePane lang="javascript" textSize="24px" source={ require("raw-loader!./examples/custom-elements.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="quaternary" margin="0 0 36px" fit>
          Make it use your template
        </Heading>
        <CodePane lang="javascript" textSize="16px" source={ require("raw-loader!./examples/use-the-template.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="quaternary" margin="0 0 36px" fit>
          Load it onto your web application
        </Heading>
        <CodePane lang="html" textSize="24px" source={ require("raw-loader!./examples/how-to-use.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="cornflowerblue">
        <Heading size={4} textColor="quaternary" margin="0 0 36px">
          So you've just created your component and...
        </Heading>
        <Appear>
          <Text margin="10px 0 0" textColor="tertiary">
            OMG, the CSS is leaking!!
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="quaternary" margin="0 0 36px" fit>
          What have we got here?
        </Heading>
        <CodePane lang="html" textSize="16px" source={ require("raw-loader!./examples/the-leak.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary" notes={ require("raw-loader!./notes/shadow-dom.notes") }>
        <Heading size={2} textColor="quaternary">
          Shadow DOM
        </Heading>
        <List textColor="quaternary">
          <Appear><ListItem>Provides encapsulation for CSS</ListItem></Appear>
          <Appear><ListItem>Provides encapsulation for DOM</ListItem></Appear>
          <Appear><ListItem>Must be attached to an existing element</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="quaternary" margin="0 0 36px" fit>
          { "Back to the <video> example" }
        </Heading>
          <video width="600" style={{ backgroundColor: "#000" }} controls />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="quaternary" margin="0 0 36px">
          Let's fix this then...
        </Heading>
        <CodePane lang="html" textSize="16px" source={ require("raw-loader!./examples/adding-shadow-root.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="quaternary" margin="0 0 36px">
          Cool, it works!
        </Heading>
        <Appear>
          <Text margin="10px 0 0" textColor="primary" size={1}>
            But... What about browser support?
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Image src={images.htmlTemplatesSupport.replace("/", "")} width="100%" />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Image src={images.customElementsSupport.replace("/", "")} width="100%" />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Image src={images.htmlImports.replace("/", "")} width="100%" />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Image src={images.shadowDom.replace("/", "")} width="100%" />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={3} textColor="quaternary" margin="0 0 36px">
          Polyfills to the rescue!
        </Heading>
        <Image src={images.polyfillsupport.replace("/", "")} width="100%" />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={3} textColor="quaternary" margin="0 0 36px">
          Some libraries out there
        </Heading>
        <List textColor="quaternary">
          <ListItem>Polymer</ListItem>
          <ListItem>Skate.js</ListItem>
          <ListItem>X-Tag</ListItem>
          <ListItem>Slim.js</ListItem>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="quaternary" fit>
          Thank you!
        </Heading>
      </Slide>
    </Deck>
  );
}
