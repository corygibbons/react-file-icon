```js
<div style={{ width: '60px' }}>
  <FileIcon />
</div>
```

```js
const icons = [
  '#E7E6F5',
  'papayawhip',
  'beige',
  'lightpink',
  'lightsteelblue'
].map(color => {
  return (
    <div style={{ width: '60px', '-webkit-font-smoothing': 'antialiased' }}>
      <FileIcon ext="exe" iconColor={color} type="image" />
    </div>
  );
});
<div style={{ display: 'flex' }}>{icons}</div>;
```

Border radius

```js
const icons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(radius => {
  return (
    <div style={{ width: '60px', '-webkit-font-smoothing': 'antialiased' }}>
      <FileIcon
        foldColor="#C6C5D4"
        gradientColor="#F7F7FC"
        iconColor="#E7E6F5"
        labelColor="#FF834A"
        radius={radius}
      />
    </div>
  );
});
<div style={{ display: 'flex' }}>{icons}</div>;
```

Label colors:

```js
const icons = [
  '#193D99',
  '#255BC1',
  '#38A7B2',
  '#53D4DB',
  '#F2C83D',
  '#F7DC6D',
  '#FF834A',
  '#FFB07A',
  '#ED5A8B',
  '#F8B4D0',
  '#A656BF',
  '#C685D6'
].map(color => {
  return (
    <div style={{ width: '60px', '-webkit-font-smoothing': 'antialiased' }}>
      <FileIcon
        ext="exe"
        foldColor="#C6C5D4"
        gradientColor="#F7F7FC"
        iconColor="#E7E6F5"
        labelColor={color}
      />
    </div>
  );
});
<div style={{ display: 'flex' }}>{icons}</div>;
```

File type glyphs:

```js
const icons = [
  '3d',
  'acrobat',
  'audio',
  'binary',
  'code',
  'compressed',
  'document',
  'drive',
  'font',
  'image',
  'presentation',
  'settings',
  'spreadsheet',
  'vector',
  'video'
].map(type => {
  return (
    <div style={{ width: '60px', '-webkit-font-smoothing': 'antialiased' }}>
      <FileIcon
        ext="exe"
        foldColor="#C6C5D4"
        glyphColor="#9F9CAD"
        gradientColor="#F7F7FC"
        iconColor="#E7E6F5"
        labelColor="#255BC1"
        type={type}
      />
    </div>
  );
});
<div style={{ display: 'flex' }}>{icons}</div>;
```

File type glyphs:

```js
const icons = [
  '3d',
  'acrobat',
  'audio',
  'binary',
  'code',
  'compressed',
  'document',
  'drive',
  'font',
  'image',
  'presentation',
  'settings',
  'spreadsheet',
  'vector',
  'video'
].map(type => {
  return (
    <div style={{ width: '60px', '-webkit-font-smoothing': 'antialiased' }}>
      <FileIcon
        foldColor="#C6C5D4"
        glyphColor="#9F9CAD"
        gradientColor="#F7F7FC"
        iconColor="#E7E6F5"
        labelColor="#255BC1"
        type={type}
      />
    </div>
  );
});
<div style={{ display: 'flex' }}>{icons}</div>;
```
