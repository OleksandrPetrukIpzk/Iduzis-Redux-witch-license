import styled from "styled-components";

export const Header = styled.div`
  padding: 20px;
  background-color: darkgrey;
  color: #FF9A5A;
  text-align: left;
`
export const TriangleMainLeft = styled.div`
  position: absolute;
  top: 100px;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 80px solid darkgrey;
`
export const TriangleLowLeft = styled.div`
  position: relative;
  bottom: 30px;
  right: 11px;
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 30px solid #EF4765;
`
export const TriangleMainRight = styled.div`
  position: absolute;
  top: 100px;
  left: 130px;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 80px solid darkgrey;
`
export const TriangleLowRight = styled.div`
  position: relative;
  bottom: 30px;
  right: 11px;
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 30px solid #EF4765;
`
export const HeaderText = styled.p`
  padding-left: 50px;
  font-size: 20px;
  font-family: sans-serif;
  color: #FFFFFF;
`
export  const ButtonDelete = styled.button`
  position: relative;
  top: 10px;
  background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
`
export const ButtonAdd = styled.button`
  margin-top: 50px;
  justify-content: center;
  background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
`
export const TableForText = styled.div`
  border: 1px black solid;
  background-color: #852999;
  color: white;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  margin-top: 30px;
  margin-right: 80px;
  inline-size: 400px;
  overflow-wrap: break-word;
  opacity: .5;
  text-align: center;
`
export const TextOnTable = styled.p`
  max-width: 150px;
  padding-left: 25%;
  opacity: 100%;
    `
export const InputsTable = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 400px;
    `
export const MainPage = styled.div`
  display: flex;
  justify-content: space-between;
    `