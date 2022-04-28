## Progress

1. I used Tailwind CSS for styling and TypeScript than JavaScript, also used Prettier and Eslint for code formatting.
2. I used useRef hooks to save cached data and make useFetch custom hooks.
3. I made useTextCapitalizeText hooks for converting text capitalize
4. I handled the Loading state and `No results` state during search

## Doubt

1. I was confused with the requirements(#1, #3) and not sure if I should show original result and searched result. So I just showed the full result at first and searched result after calling the API.
   But I didn't use the Good Endpoint to show the first result because it has the same result as `https://athena-7.herokuapp.com/ancients.json?search=`.

2. Also, I wasn't sure about the error message showcase, so I just showed it under the search result.
3. I am not good at testing as I told in the first meeting, so I made the tests as much as I could.
