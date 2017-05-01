// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
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
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
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
    <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Web Components
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Semantical Composition
        </Text>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          What is it
        </Heading>
        <Text margin="10px 0 0" textColor="primary" size={1}>
          Set of APIs that allow you to create custom, reusable, encapsulated HTML tags to use in web pages and web apps.
        </Text>
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
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Why?
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          Custom Elements
        </Heading>
        <CodePane lang="javascript" source={ require("raw-loader!./examples/custom-component.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          HTML Templates
        </Heading>
        <CodePane lang="javascript" source={ require("raw-loader!./examples/html-templates.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          HTML Imports
        </Heading>
        <CodePane lang="javascript" source={ require("raw-loader!./examples/html-imports.example") } />
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={2} textColor="secondary">
          Shadow DOM
        </Heading>
      </Slide>
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={6} textColor="primary" caps>Typography</Heading>
        <Heading size={1} textColor="secondary">Heading 1</Heading>
        <Heading size={2} textColor="secondary">Heading 2</Heading>
        <Heading size={3} textColor="secondary">Heading 3</Heading>
        <Heading size={4} textColor="secondary">Heading 4</Heading>
        <Heading size={5} textColor="secondary">Heading 5</Heading>
        <Text size={6} textColor="secondary">Standard text</Text>
      </Slide>
      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>Standard List</Heading>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>Example Quote</Quote>
          <Cite>Author</Cite>
        </BlockQuote>
      </Slide>
    </Deck>
  );
}
