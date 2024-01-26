import { render, screen, fireEvent } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas de <LoginPage/>', () => {

    const setUserMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>);

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

    });

    test('debe de llamar el setUser cuando se hace click en el botón', () => {

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>);


        const buttonElement = screen.getByLabelText('setbtn');
        fireEvent.click(buttonElement);


        expect( setUserMock ).toHaveBeenCalledWith( {"email": "kevin@gmail.com", "id": 123, "name": "Kevin"} );

    });
});