import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol lg="12" md="12" className="mb-4">
            <img src="https://i.imgur.com/GtzPbKm.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="12" md="6" className="mb-4">
            <img src="https://i.imgur.com/E3Gq7q4.jpg" className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          </MDBRow>
        <MDBRow>
          <MDBCol lg="12" md="6" className="mb-4">
            <img src="https://i.imgur.com/1JIHt7n.jpg" className="img-fluid z-depth-2" alt="" />
          </MDBCol>
          <MDBCol lg="12" md="12" className="mb-4">
            <img src="https://i.imgur.com/8J3TKFn.jpg" className="img-fluid z-depth-3" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="12" md="6" className="mb-4">
            <img src="https://i.imgur.com/I5xWjAb.jpg" className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="12" md="6" className="mb-4">
            <img src="https://i.imgur.com/CnFih1D.jpg" className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MasksPage;