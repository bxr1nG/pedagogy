import React from "react";
import { Link } from "react-router-dom";

import Container from "styles/Container";

import { Home as StyledHome, Link as StyledLink } from "./styles";

type HomeProps = Record<string, never>;

const Home: React.FC<HomeProps> = () => {
    return (
        <StyledHome>
            <Container>
                <div className="content">
                    <div className="h1">Меню</div>
                    <StyledLink
                        as={Link}
                        to="/methods"
                    >
                        Методы
                    </StyledLink>
                    <StyledLink
                        as={Link}
                        to="/classification"
                    >
                        Классификация методов
                    </StyledLink>
                    <StyledLink
                        as={Link}
                        to="/receptions"
                    >
                        Приемы
                    </StyledLink>
                    <StyledLink
                        as={Link}
                        to="/technologies"
                    >
                        Технологии
                    </StyledLink>
                </div>
            </Container>
        </StyledHome>
    );
};

export default Home;
