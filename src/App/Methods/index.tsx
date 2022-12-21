import React, { useContext } from "react";

import Container from "styles/Container";
import TableContainer from "styles/TableContainer";
import source from "source.json";
import Context from "context";
import image from "assets/methods.jpg";

type MethodsProps = Record<string, never>;

const Methods: React.FC<MethodsProps> = () => {
    const methods = source.methods;
    const { type } = useContext(Context);

    return (
        <Container>
            <h1
                style={{
                    textAlign: "center"
                }}
            >
                Методы
            </h1>
            {(() => {
                switch (type) {
                    case "text":
                        return methods.map((method, index) => (
                            <div key={index}>
                                <h2>{method.name}</h2>
                                {method.listing.map((item, index) => (
                                    <div key={index}>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        ));
                    case "table":
                        return (
                            <TableContainer flex>
                                {methods.map((method, index) => (
                                    <table key={index}>
                                        <thead>
                                            <tr>
                                                <th>{method.name}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {method.listing.map(
                                                (item, index) => (
                                                    <tr
                                                        key={index}
                                                        style={{
                                                            display: "flex"
                                                        }}
                                                    >
                                                        <td>
                                                            <strong>
                                                                {item.name}
                                                            </strong>
                                                            <br />
                                                            {item.description}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                ))}
                            </TableContainer>
                        );
                    case "schema":
                        return <img src={image} />;
                    default:
                        return null;
                }
            })()}
        </Container>
    );
};

export default Methods;
