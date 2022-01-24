Task for [Orthogonality](https://orthogonality.tech/)

The web app is deployd in Netlify: [react-animations](https://react-animations.netlify.app/)

Notes:

- In this project we showcase the `framer-motion` library. Further we also use `React Testing Library` and `Jest`.
- The `api` key for `themoviedb.org` is send with personal message. Its possition is in the `src` folder, and as a default export of the `api_key.js`.
- The site is pumbed up with animations. Some of course are not well suited according to UX. We just added as match as we could, to showcase `framer-motion`.
- The number of movies downloaded is 20, but we slice them in 3, to avoid waiting...

#### Animations:

- `Modal` slides from above to welcome user,
- User presses `OK` button, `Modal` slides away to the oposite direction and `Input` slides from left, and CSS letter M (for Movies) and a ball running in the letter fades in above the `Input`.
- Wnen user types, `Search` button slides from right.
- When `Search` button is pressed the list of movies slide one by one from left.
- Namely, movie item 1 slides in from left. Once in position, image for item 1 fades in. Step 1 & 2 is repeated, for each item.
- Once all list items are animated, the movie `release date` for each card is pulsed in.
- If user hovers over movie tile, or the movie poster, they scale up.
- If user clicks on a movie, the item expants and all info is available.
- If user clicks on an expand movie item, it snaps back to normal.

#### Testing coverage:

- components: 76%
- utils: 93%
