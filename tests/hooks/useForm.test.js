const { act, renderHook } = require("@testing-library/react");
const { useForm } = require("../../src/hooks/");

describe('Pruebas en useForm()', () => {

    const initialForm = {
        name: 'Kevin',
        email: 'kevin@gmail.com'
    }

    test('debe de regresar la información por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('debe de cambiar el nombre del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const newValue = 'Juan';

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
        })

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });

    test('debe de realizar el reset del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        const newValue = 'Juan';

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });

            onResetForm();
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });
});