# React File Icons

```js
import { FileIcon } from 'react-file-icons';
```

## Props

| Property         | Type   | Default   | Description                                                                        |
| :--------------- | :----- | :-------- | :--------------------------------------------------------------------------------- |
| `ext`            | string | undefined | Text to render inside label                                                        |
| `fold`           | bool   | true      | Should the icon display a folded corner                                            |
| `foldColor`      | string | undefined | Fill color of the fold. Will render slightly darker than `iconColor` if left blank |
| `gradientColor`  | string | undefined | Fill color of the gradient overlaid on the file icon                               |
| `iconColor`      | string | undefined | Fill color of the icon background                                                  |
| `labelColor`     | string | undefined | Fill color of label text. If left blank it will automatically render legible text  |
| `labelTextColor` | string | undefined | Fill color of label text. If left blank it will automatically render legible text  |
| `radius`         | string | undefined | Border radius of the file icon.                                                    |
| `type`           | enum   | undefined | Which icon glyph to render.                                                        |
