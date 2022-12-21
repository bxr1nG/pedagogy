import styled from "styled-components";

export const Header = styled.div`
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
    padding: 1rem 0;

    .headerContent {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Link = styled.a`
    color: ${(props) => props.theme.palette.primary.contrastText};
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 1rem;

    &:hover {
        text-decoration: underline;
    }
`;

export const Select = styled.select`
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    margin-right: 1rem;

    &:focus {
        outline: none;
    }

    option {
        background-color: ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.primary.contrastText};
    }
`;
