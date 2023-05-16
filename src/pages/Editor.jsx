import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Site from "../components/Site";
import { theme } from "../styles/theme";

// Component Styles

const Root = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1700px;
  margin: 0 auto;
  height: 100vh;
  padding: 32px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const SiteWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  border: 1px solid ${theme.colors.black[40]};
  border-radius: 8px;
  background-color: ${theme.colors.black[10]}; // Change to Primary color
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** Root Editor View */
function Editor() {
  return (
    <Root>
      <SiteWrapper layout>
        <Site />
      </SiteWrapper>
    </Root>
  );
}

export default Editor;
