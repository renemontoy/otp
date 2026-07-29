import IncisorShape from "./Shapes/IncisorShape";

function Tooth({ tooth }) {

    switch (tooth.type) {

        case "incisor":
            return <IncisorShape tooth={tooth} />;

        default:
            return (
                <div style={{
                    width: 72,
                    height: 72,
                    border: "1px solid #CBD5E1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 6
                }}>
                    {tooth.number}
                </div>
            );
    }
}

export default Tooth;