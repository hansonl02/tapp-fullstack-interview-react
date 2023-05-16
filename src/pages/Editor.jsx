import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Site from "../components/Site";

// Component Styles

const Root = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1700px;
  margin: 0 auto;
  height: 100vh;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const RootContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: height 100ms linear;
  padding: 32px;
`;

const SiteWrapper = styled(motion.div)`
  flex: 1;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  border: 1px solid #dfe1e7;
  border-radius: 8px;
  background-color: #f5f6f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** Root Editor View */
function Editor() {
  return (
    <Root>
      <RootContent>
        <SiteWrapper layout>
          <Site />
        </SiteWrapper>
      </RootContent>
    </Root>
  );
}

export default Editor;
