# @frankycty/easycss-cli

> Cli for generating utility styles and the css builder that allows you to separate the css concern

## Requirements

- Node.js
- Yarn (package manager)
- npm (Gemfury authentication/version management)

## Generate utility styles and the css builder

In your github repo

Install @frankycty/easycss-cli:

```bash
yarn add -D @frankycty/easycss-cli
```

Execute the cli command to generate utility styles and the css builder function:

```bash
npx easycss [-o] <outputDir> [-u] <customUtilityStylesDir>
```

**`customUtilityStylesDir`**:

The file must has name `easyCss.custom.json`

```json
{
  "bg-pink-500": {
    "backgroundColor": "#FFC0CB"
  }
}
```

> Example: npx easycss -o ./lib -u ./lib

## Use easycss

Install @emotion/styled and @emotion/react:

```bash
yarn add @emotion/styled @emotion/react
```

Export the styled function from @emotion/styled:

```bash
// styled.js or any js
import styled from '@emotion/styled'

export { styled }
```

> Current file structure (can be different)

```bash
lib
    easyCss.js
    easyCss.custom.json
    styled.js
```

Make use of the easyCss, which will integrate emotion and utilityStyles

```javascript
import { ez } from './lib/easyCss'
import styled from './lib/styled'

const Container = styled.div(
  ez('w-16 h-16 bg-pink'),
  ({ test }) => ({
    background: test === true ? 'red' : 'blue',
  }),
  ez({ background: 'pink' }, 'text-yellow')
)

function App() {
  return (
    <Container className="App" test={false}>
      text is here
    </Container>
  )
}
```
