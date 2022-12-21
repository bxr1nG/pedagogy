import styled from "styled-components";

export const Home = styled.div`
    display: flex;
    flex-grow: 1;

    .h1 {
        color: ${(props) => props.theme.palette.primary.main};
        font-weight: 600;
        font-size: 2rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
`;

export const Link = styled.a`
    color: ${(props) => props.theme.palette.common.black};
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1rem;

    &:hover {
        color: ${(props) => props.theme.palette.primary.main};
        text-decoration: underline;
    }
`;
