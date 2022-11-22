import { Box, Typography } from "@mui/material";
import React from "react";
import Container from "react-bootstrap/Container";
import "./intro.scss";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
const Intro = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="intro">
        <Container>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 cardos">
                <div className="p-info">
                  <h2>Im Mark</h2>
                  <h3>Designer & </h3>
                  <h3>Developer</h3>
                </div>
              </div>
              <div className="col-lg-4 cardos">
                <div className="p-pic">
                  <img
                    width="100%"
                    src="https://media.gettyimages.com/photos/happy-redhead-female-programmer-coding-a-computer-language-on-desktop-picture-id1210773518?s=612x612"
                    alt="pic-developer"
                  />
                </div>
              </div>
              <div className="col-lg-4 cardos">
                <div className="p-success">
                  <h4>Start My Success</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odio eius sed repellat quo, adipisci laborum consequatur ut
                    quibusdam animi fuga!
                  </p>

                  <Button className="learn-more-btn" onClick={handleOpen}>
                    Read More
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.Duis mollis, est non commodo luctus, nisi erat
                        porttitor ligula.Duis mollis, est non commodo luctus,
                        nisi erat porttitor ligula.Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula.Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula.
                      </Typography>
                    </Box>
                  </Modal>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum aspernatur doloremque molestias, error accusamus
                    aperiam delectus vel nihil suscipit quae, adipisci ullam cum
                    officia assumenda quaerat, tempore alias debitis ut?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Intro;
