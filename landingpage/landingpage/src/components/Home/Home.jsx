import Header from "../Header/Header";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
    return (
        <div className="hero-container">
            <Header />

            <div className="hero-content">
                <h1>
                    A Frontend <br />developer <br />that creates free <br />quality content
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam ipsa <br />commodi eum id necessitatibus dignissimos optio exercitationem,
                    <br />consectetur officiis itaque ad quia deserunt odio.
                    Quibusdam, <br />blanditiis. Repellendus recusandae hic rerum!
                </p>

                <button>
                    Explore Page {""}
                    <FaArrowUp
                        style={{
                            transform: "rotate(40deg)",
                        }} />
                </button>
            </div>
        </div>
    )
}

export default Home;