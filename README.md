Task for [Orthogonality](https://orthogonality.tech/)

The web app is deployd in Netlify: [react-animations](https://react-animations.netlify.app/)

Notes:

- The `api` key for `themoviedb.org` is send with personal message. Its possition is in the `src` folder, as `api_key.js`.

Animations:

- `Modal` slides from above to welcome user,
- User presses `OK` button, `Modal` slides away to the oposite direction and `Input` slides from left, and CSS letter M (for Movies) and a ball running in the letter fades in above the `Input`.
- Wnen user types, `Search` button slides from right.
- When `Search` button is pressed the list of movies slide one by one from left.
  Movie item 1 slides in from left
- Once in position, image for item 1 fades in
- Repeat step 1 & 2 for each item in the movie list
- Once all list items are animated, the movie release date for each card is pulsed in.
- If user hover over movie tile, or the movie poster, they scale up.
- If user clicks on a movie, the tile expants and all info is available.
- If user clicks on an expand movie tile, it snaps back to normal.

- Testing coverage: components: 76%, utils: 93%
