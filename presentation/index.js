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
  v0support: require("../assets/v0-support.png"),
  v1support: require("../assets/v1-support.png"),
  polyfillsupport: require("../assets/polyfill-support.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default function Presentation() {
  return (
    <Deck progress="pacman" transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} caps lineHeight={1} textColor="tertiary">
          An introduction to Web Components
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          What is it
        </Heading>
        <Text margin="10px 0 0" textColor="primary" size={1}>
          <Appear>
            <BlockQuote>
              <Quote>
                Set of native APIs that allow you to create custom, reusable, encapsulated HTML tags to use in web pages and web apps.
              </Quote>
              <Cite>Webcomponents.org</Cite>
            </BlockQuote>
          </Appear>
        </Text>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          What can I do with it?
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          { "An example with the <video> element" }
        </Heading>
          <video width="600" style={{ backgroundColor: "#000" }} controls />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          How do I do this??
        </Heading>
        <Appear>
          <Text margin="10px 0 0" textColor="primary" size={1}>
            Use the API's, Luke!
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          Specifications
        </Heading>
        <List>
          <ListItem>Custom Elements</ListItem>
          <ListItem>HTML Templates</ListItem>
          <ListItem>HTML Imports</ListItem>
          <ListItem>Shadow DOM</ListItem>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          Create a template
        </Heading>
        <CodePane lang="html" textSize="24px" source={ require("raw-loader!./examples/html-templates.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} fit textColor="secondary">
          Create your custom component
        </Heading>
        <CodePane lang="javascript" textSize="24px" source={ require("raw-loader!./examples/custom-elements.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} fit textColor="secondary">
          Make it use your template
        </Heading>
        <CodePane lang="javascript" textSize="22px" source={ require("raw-loader!./examples/use-the-template.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          Load it onto your web application
        </Heading>
        <CodePane lang="html" textSize="24px" source={ require("raw-loader!./examples/how-to-use.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="papayawhip">
        <Heading size={2} textColor="secondary">
          So you've just created your component and...
        </Heading>
        <Appear>
          <Text margin="10px 0 0" textColor="primary" size={1}>
            OMG, the CSS is leaking!!
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          What have we got here?
        </Heading>
        <CodePane lang="html" textSize="24px" source={ require("raw-loader!./examples/the-leak.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          Shadow DOM
        </Heading>
        <List>
          <Appear><ListItem>Provides encapsulation for CSS</ListItem></Appear>
          <Appear><ListItem>Provides encapsulation for DOM</ListItem></Appear>
          <Appear><ListItem>Must be attached to an existing element</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          { "Back to the <video> example" }
        </Heading>
          <video width="600" style={{ backgroundColor: "#000" }} controls />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          Let's fix this then...
        </Heading>
        <CodePane lang="html" textSize="24px" source={ require("raw-loader!./examples/adding-shadow-root.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          Cool, it works!
        </Heading>
        <Appear>
          <Text margin="10px 0 0" textColor="primary" size={1}>
            But... What about browser support?
          </Text>
        </Appear>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Image src={images.v0support.replace("/", "")} width="100%" />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Image src={images.v1support.replace("/", "")} width="100%" />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          Polyfills to the rescue!
        </Heading>
        <Image src={images.polyfillsupport.replace("/", "")} width="100%" />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          Some libraries ou there
        </Heading>
        <List>
          <ListItem>Polymer</ListItem>
          <ListItem>Skate.js</ListItem>
          <ListItem>X-Tag</ListItem>
          <ListItem>Slim.js</ListItem>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary" fit>
          Thank you!
        </Heading>
      </Slide>
    </Deck>
  );
}
