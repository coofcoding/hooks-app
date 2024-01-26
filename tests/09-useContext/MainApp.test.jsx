import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas a <MainApp/>', () => {
    test('debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();

    });

    test('debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();

    });

    test('debe de mostrar el AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('AboutPage') ).toBeTruthy();

    });
});