import React, { useContext } from "react";

import Container from "styles/Container";
import source from "source.json";
import Context from "context";
import image from "assets/receptions.jpg";
import table from "assets/receptionsTable.jpg";

type ReceptionsProps = Record<string, never>;

const Receptions: React.FC<ReceptionsProps> = () => {
    const receptions = source.receptions;
    const { type } = useContext(Context);

    return (
        <Container>
            <h1
                style={{
                    textAlign: "center"
                }}
            >
                Приемы
            </h1>
            {(() => {
                switch (type) {
                    case "text":
                        const rtn: JSX.Element[] = [];
                        rtn.push(
                            <div key="d">
                                <h2>{receptions.d.name}</h2>
                                <p>{receptions.d.description}</p>
                            </div>
                        );
                        rtn.push(
                            <div key="s">
                                <h2>{receptions.s.name}</h2>
                                {receptions.s.types.map((item, index) => (
                                    <div key={index}>
                                        <h3>{item.name}</h3>
                                        <ul>
                                            {item.subtypes.map(
                                                (item, index) => (
                                                    <li key={index}>{item}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        );
                        rtn.push(
                            <div key="t">
                                <h2>{receptions.t.name}</h2>
                                <ul>
                                    {receptions.t.types.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                        return rtn;
                    case "table":
                        return <img src={table} />;
                    case "schema":
                        return <img src={image} />;
                    default:
                        return null;
                }
            })()}
        </Container>
    );
};

export default Receptions;
