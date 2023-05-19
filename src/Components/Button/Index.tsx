import styled, { css } from "styled-components";


export const AppButton = styled.button`
    margin: 5px;
    border-radius: 4px;
    ${props => props.type === ButtonType.DEFAULT && css`
        background-color: #7cf63a;
    `};
    ${props =>props.type === ButtonType.EDIT && css`
        background-color: #2973d9;
        float: right;
       
    `};
    ${props => props.type === ButtonType.DELETE && css`
        background-color: #ff7373;
        margin-right: 20px;
        float: right;
      
    `};
    ${props => props.type === ButtonType.DONE && css`
        background-color: #fbe041c7;
    `};
`;
export const ButtonType = {
    DEFAULT: 'DEFAULT',
    EDIT:'EDIT',
    DELETE:'DELETE',
    DONE:'DONE',
}
export const Button = ({...rest}) => {
    return <AppButton {...rest}></AppButton>
}