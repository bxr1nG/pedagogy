import React from "react";

import Container from "styles/Container";
import Image from "styles/Image";
import source from "source.json";

type ClassificationProps = Record<string, never>;

const Classification: React.FC<ClassificationProps> = () => {
    const classification = source.classification;

    return (
        <Container>
            <h1
                style={{
                    textAlign: "center"
                }}
            >
                Классификация методов
            </h1>
            {classification.map((item, index) => (
                <div key={index}>
                    {(() => {
                        if (item.description) {
                            return (
                                <div>
                                    <Image
                                        src={
                                            process.env.PUBLIC_URL + item.value
                                        }
                                    />
                                    <p>{item.description}</p>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <p>{item.value}</p>
                                </div>
                            );
                        }
                    })()}
                </div>
            ))}
        </Container>
    );
};

export default Classification;
