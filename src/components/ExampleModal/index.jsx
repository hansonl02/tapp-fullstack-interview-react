import { motion } from "framer-motion";
import styled from "styled-components";
import { Modal } from "@mui/material";
import { theme } from "../../styles/theme";

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

const Content = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #000;
`;

const Subtitle = styled.h4`
  font-size: 14px;
  max-width: 300px;
  font-weight: 400;
  color: ${theme.colors.black[80]};
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
  color: #fff;
  background-color: #000;
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
  color: ${theme.colors.black[80]};
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
          <Content onSubmit={handleClose}>
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
          </Content>
        </ModalView>
      </Modal>
    </>
  );
}

export default ExampleModal;
