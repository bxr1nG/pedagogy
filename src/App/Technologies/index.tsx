import React, { useContext } from "react";

import Container from "styles/Container";
import TableContainer from "styles/TableContainer";
import source from "source.json";
import Context from "context";
import image from "assets/technologies.jpg";

type TechnologiesProps = Record<string, never>;

const Technologies: React.FC<TechnologiesProps> = () => {
    const technologies = source.technologies;
    const { type } = useContext(Context);

    return (
        <Container>
            <h1
                style={{
                    textAlign: "center"
                }}
            >
                Технологии
            </h1>
            {(() => {
                switch (type) {
                    case "text":
                        return technologies.map((item, index) => (
                            <div key={index}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                        ));
                    case "table":
                        return (
                            <TableContainer>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Название</th>
                                            <th>Описание</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {technologies.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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

export default Technologies;
