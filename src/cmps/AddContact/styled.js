import styled from 'styled-components';
import { colors } from 'styles/variables';

export const FormContainer = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 12px;
    flex-wrap: wrap;
    background-color: ${colors.CARD_CLR};
    border-radius: 4px;
    margin-top: 2rem;
    color: white;

    > * {
        margin: .5rem;

        label {
            margin-right: 0.5rem;
            font-size: 14px;
            font-weight: 200;
        }
    }

    > button {
        background-color: ${colors.SECONDARY_BTN_CLR};
        padding: 6px;
        border-radius: 6px;
    }
`;