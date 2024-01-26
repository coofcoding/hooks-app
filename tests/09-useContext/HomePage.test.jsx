import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en componente <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'kevin'
    }

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
    });

    test('debe de mostrar el componente CON el usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');

        // 1. PRIMERA OPCIÓN
        // expect(preTag.innerHTML).toBe('{\n   "id": 2,\n   "name": "kevin"\n}');

        // 2. SEGUNDA OPCIÓN -> Falla el test, pero en algunas ocasiones podría ser buena opción
        // expect( Object.is( JSON.parse(preTag.innerHTML), user ) ).toBe(true);

        // 3. TERCERA OPCIÓN
        expect( JSON.parse(preTag.innerHTML) ).toEqual( user );

        // SOLUCIONES DE FERNANDO
        // expect( preTag.innerHTML ).toContain( user.name );
        // expect( preTag.innerHTML ).toContain( `${user.id}` );

    });
});