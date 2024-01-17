# HOOKS APP
This repository, is a couple of exercise that i made in the course: [React: De cero a experto ( Hooks y MERN )](https://www.udemy.com/course/react-cero-experto/)

## List of the Hooks implemented
```jsx
// basics and main hook
useState();
useEffect();

// customHooks
useCounter();
useFetch();
useForm();
```
Also, how to export `Hooks methods`, `useEffect dependencies`, `useEffect - cleanup`, forms with `customHooks` & how to connect both `hooks`.


## API Reference

#### .env
```env
  VITE_BASE_URL = https://api.breakingbadquotes.xyz/v1
```

#### Get items ( random )

```http
  GET ${import.meta.env.VITE_BASE_URL}/quotes
```