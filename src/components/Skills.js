import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import javaIcon from "../assets/img/java.png";
import csharpIcon from "../assets/img/C-sharp.png";
import springIcon from "../assets/img/springboot.png";
import pythonIcon from "../assets/img/python.png";
import htmlIcon from "../assets/img/html.png";
import cssIcon from "../assets/img/css.png";
import jsIcon from "../assets/img/javascript.png";
import reactIcon from "../assets/img/react.png";
import nodeIcon from "../assets/img/nodejs.png";
import cloudIcon from "../assets/img/aws-cloud-formation.png";
import rIcon from "../assets/img/r-language.png";
import sqlIcon from "../assets/img/sql.png";
import gitIcon from "../assets/img/git.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = {
    width: "50%",
  }

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Languages and tools that I learned.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmlIcon} style={skills} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssIcon} style={skills} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={jsIcon} style={skills} alt="" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={nodeIcon} style={skills} alt="" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={reactIcon} style={skills} alt="" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={javaIcon} style={skills} alt="" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={csharpIcon} style={skills} alt="" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={rIcon} style={skills} alt="" />
                                <h5>R Language</h5>
                            </div>
                            <div className="item">
                                <img src={pythonIcon} style={skills} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={springIcon} style={skills} alt="" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={cloudIcon} style={skills} alt="" />
                                <h5>Cloud Formation</h5>
                            </div>
                            <div className="item">
                                <img src={sqlIcon} style={skills} alt="" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={gitIcon} style={skills} alt="" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}