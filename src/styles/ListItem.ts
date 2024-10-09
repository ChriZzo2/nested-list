import styled from "styled-components";

export const ItemContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    margin-left: 10px;
`;

export const ItemText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #333;
    width: 400px;
    margin-bottom: 5px;
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Input = styled.input`
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    color: #333;
`;