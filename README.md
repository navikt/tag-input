# Tag-input

Simple react component for tag-input fields.

Exposes a simple react-component that can be used as a simple text-input-field, but will parse and render words prefixed with `#` as tags.
```tsx
function Test() {
    const [text, setText] = useState('');
    return (
        <TagInput
              name="test"
              value={text}
              onChange={(e) => setText(e.target.value)}
        />
    );
}
```

Exposes a utility function to parse the content of `text`: `parseTekst`

```tsx
import {parseTekst} from "./tag-input";

const text = "#test #one some query";
const parsed = parseTekst(text);
console.log(parsed);
// {
//     tags: ['test', 'one'],
//     text: 'some query'
// }
```

## Styling

The application utilizes styling from the follow packages: 
```
nav-frontend-core
nav-frontend-knapper-style
nav-frontend-lenker-style
nav-frontend-paneler-style
nav-frontend-skjema-style
nav-frontend-typografi-style
```