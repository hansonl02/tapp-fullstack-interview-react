import "./App.css";
import Editor from "./pages/Editor";
import { COLORS } from "./colors";
import { createGlobalStyle } from "styled-components";

/** Global CSS styles for the project */

const GlobalStyles = createGlobalStyle`
html {
  --tapp-black-200: ${COLORS.black[200]};
  --tapp-black-100: ${COLORS.black[100]};
  --tapp-black-80: ${COLORS.black[80]};
  --tapp-black-40: ${COLORS.black[40]};
  --tapp-black-10: ${COLORS.black[10]};
  --color-primary: white;
  --color-primary-text: black;
  --color-secondary: black;
  --color-secondary-text: white;
  --theme-font: "Inter";
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Editor />
    </div>
  );
}

export default App;
