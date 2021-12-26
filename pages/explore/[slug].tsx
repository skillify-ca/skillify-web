import TFSA from "../../components/finance/tfsa";
import Navbar from "../../components/Navbar";

const Explore = ({ unitTitle }) => {
    const getComponent = () => {
        if (unitTitle === "tfsa") {
            return <TFSA />
        } else {
            return "Default"
        }
    }
    return <div>
        <Navbar />
        {getComponent()}
    </div>
}

export async function getStaticProps({ params }) {
    return { props: { unitTitle: params.slug } };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "addition" } },
            { params: { slug: "subtraction" } },
            { params: { slug: "multiplication" } },
            { params: { slug: "division" } },
            { params: { slug: "tfsa" } },
            { params: { slug: "budgeting" } },
        ],
        fallback: true,
    };
}


export default Explore;