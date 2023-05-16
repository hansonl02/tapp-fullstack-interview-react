import { motion } from "framer-motion";
import styled from "styled-components";
import { Modal } from "@mui/material";

/** CSS for styled divs */

const ModalView = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  margin: 0;
  box-sizing: border-box;
  display: flex;
  padding: 48px;
  padding-bottom: 32px;
  background-color: #ffffff;
`;

const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeftContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: var(--tapp-black-200);
`;

const Subtitle = styled.h4`
  font-size: 14px;
  max-width: 300px;
  font-weight: 400;
  color: var(--tapp-black-80);
  margin-bottom: 16px;
`;

const SubmitButton = styled(motion.button)`
  padding: 12px 24px;
  width: 100%;
  margin-top: 16px;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) =>
    props.enabled ? "var(--tapp-black-200)" : "var(--tapp-black-10)"};
  color: ${(props) => (props.enabled ? "#ffffff" : "var(--tapp-black-80)")};
  transition: background-color 100ms linear, color 150ms linear;
`;

const CancelButton = styled(motion.button)`
  padding: 4px 8px;
  margin-top: 4px;
  align-self: center;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  color: var(--tapp-black-80);
  transition: background-color 100ms linear, color 150ms linear;
`;

function ExampleModal(props) {
  const { isOpen, setIsOpen } = props;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        onBackdropClick={(e) => {
          e.preventDefault();
        }}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalView
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LeftContainer>
            <LeftContent onSubmit={handleClose}>
              <Title>Example Modal</Title>
              <Subtitle>UI components go here!</Subtitle>
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.9 }}
              >
                Submit
              </SubmitButton>
              <CancelButton
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
              >
                Cancel
              </CancelButton>
            </LeftContent>
          </LeftContainer>
        </ModalView>
      </Modal>
    </>
  );
}

export default ExampleModal;
