import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #B22222;
    `;

const Wrapper = styled.section`
    padding: 3em;
    background: #FC7307;
    `;

function Title() {
    return (
        <Wrapper>
            <TitleStyle><strong>Welcome Vince to your new App!</strong></TitleStyle>
        </Wrapper>
    )
}

export default Title