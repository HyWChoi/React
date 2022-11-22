import styled from 'styled-components';
import '../FlexBox/DisplayFlex.css'

const StyledButton = styled.button`
    color: white;
    background-color: orange;
    font-size: 15px;
`;

const BlueButton = styled.button`
    color: white;
    backgrouond-color: blue;
    font-size: 15px;
`;

const MyButton = styled.button`
    color: white;
    background-color: yellow;
    font-size: 15px;
`;

const YellowButton = styled(MyButton)`
    color: black;
`

function StyledButtons(){
    return(
        <div className='flexContainer5'>
            <StyledButton>스타일 버튼</StyledButton>
            <BlueButton>블루 버튼</BlueButton>
            <YellowButton>옐로우 버튼</YellowButton>
        </div>
    )
};

export default StyledButtons;