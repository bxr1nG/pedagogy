import styled from "styled-components";

const Container = styled.div<{
    flex?: boolean;
}>`
    display: ${(props) => (props.flex ? "flex" : "block")};
    @media (max-width: 767.98px) {
        font-size: 0.5rem;
    }
`;

export default Container;
