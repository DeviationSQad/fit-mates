import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
const RowStyled = styled(Row)`
  height: 80vh;
  align-items: center;
`;
class ProfileInfo extends Component {
  state = { loading: true };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }
  render() {
    const { loading } = this.state;
    return (
      <Container>
        <RowStyled>
          <Col>
            {loading ? (
              <ScaleLoader
                sizeUnit={"px"}
                size={150}
                color={"#123abc"}
                loading={this.props.loading}
              />
            ) : (
              <>
                <h1>hello</h1>
                <p>
                  This is your profile page, here you can join or create events
                </p>
              </>
            )}
          </Col>
        </RowStyled>
      </Container>
    );
  }
}

export default ProfileInfo;
