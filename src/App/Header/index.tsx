import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import Context from "context";
import Container from "styles/Container";

import {
    Header as StyledHeader,
    Link as StyledLink,
    Select as StyledSelect
} from "./styles";

type HeaderProps = Record<string, never>;

const Header: React.FC<HeaderProps> = () => {
    const { type, setType } = useContext(Context);
    return (
        <>
            <StyledHeader>
                <Container>
                    <div className={"headerContent"}>
                        <StyledLink
                            as={Link}
                            to={"/"}
                        >
                            Педагогика
                        </StyledLink>
                        <StyledSelect
                            defaultValue={type}
                            onChange={(event) => setType(event.target.value)}
                        >
                            <option value="text">Текст</option>
                            <option value="table">Таблица</option>
                            <option value="schema">Схема</option>
                        </StyledSelect>
                    </div>
                </Container>
            </StyledHeader>
            <Outlet />
        </>
    );
};

export default Header;
