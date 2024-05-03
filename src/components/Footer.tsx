import { Container, Row, Col } from "react-bootstrap";
import LinkedInIcon from "../assets/images/linkedin-icon.svg";
import GitHubIcon from '../assets/images/github-icon.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center">
          <Col xs={12} sm={6}>
            <div className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                <path
                  d="M12 2L1 7v10l11 5 10-5V7L12 2zm0 2.827l7.445 3.384L12 11.96 4.555 8.21 12 4.827zM12 14.094l7.445 3.383L12 21.237l-7.445-3.76L12 14.094zM3 16.175v-3.538l9 4.5v3.538l-9-4.5zm9 1.538v-3.538l9 4.5v3.538l-9-4.5zm-8-6.05l8 4 8-4-8-4-8 4zm8 2.616l6.893 3.448L20 14.141l-6.893-3.316L12 11.739z"
                  stroke="#C0C0C0"
                  strokeWidth="1"
                />
              </svg>
              &nbsp; Andre Moura
            </div>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end mt-3 mt-sm-0">
            <div className="social-icon">
              <a href="https://github.com/andre-moura" target="_blank" rel="noreferrer"><img src={GitHubIcon} alt="" /></a>
              &nbsp;
              <a href="https://www.linkedin.com/in/andre-moura-tech/" target="_blank" rel="noreferrer"><img src={LinkedInIcon} alt="" /></a>
            </div>
            <p className="mt-3 mt-sm-0">Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}