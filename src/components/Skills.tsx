import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import javaIcon from "../assets/images/java.png";
import csharpIcon from "../assets/images/C-sharp.png";
import springIcon from "../assets/images/springboot.png";
import pythonIcon from "../assets/images/python.png";
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/javascript.png";
import reactIcon from "../assets/images/react.png";
import nodeIcon from "../assets/images/nodejs.png";
import cloudIcon from "../assets/images/aws-cloud-formation.png";
import rIcon from "../assets/images/r-language.png";
import sqlIcon from "../assets/images/sql.png";
import gitIcon from "../assets/images/git.png";

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
                                <img src={htmlIcon} className='skills' alt="HTML Icon" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssIcon} className='skills' alt="CSS Icon" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={jsIcon} className='skills' alt="Javascript Icon" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={nodeIcon} className='skills' alt="Node JS Icon" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={reactIcon} className='skills' alt="React JS Icon" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={javaIcon} className='skills' alt="Java Icon" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={csharpIcon} className='skills' alt="C Sharp Icon" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={rIcon} className='skills' alt="R Language Icon" />
                                <h5>R Language</h5>
                            </div>
                            <div className="item">
                                <img src={pythonIcon} className='skills' alt="Python Icon" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={springIcon} className='skills' alt="Spring Boot Icon" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={cloudIcon} className='skills' alt="Cloud Formation Icon" />
                                <h5>Cloud Formation</h5>
                            </div>
                            <div className="item">
                                <img src={sqlIcon} className='skills' alt="SQL Icon" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={gitIcon} className='skills' alt="Git Icon" />
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