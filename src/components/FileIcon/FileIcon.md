Arrangements

```js
<div style={{'-webkit-font-smoothing': 'antialiased' }}>
  <FileIcon size="48" fold={false} />
  <FileIcon size="48" />
  <FileIcon size="48" type="image" />
  <FileIcon size="48" extension="jpg" />
  <FileIcon size="48" type="image" extension="jpg" />
</div>;
```

Sizing

```js
const icons = [72, 60, 48, 36, 24, 16].map(size => {
  return (
    <FileIcon size={size} type="code" extension="jsx" />
  );
});
<div style={{'-webkit-font-smoothing': 'antialiased' }}>{icons}</div>;
```

Colors

```js
const icons = [
  'mistyrose',
  'papayawhip',
  'cornsilk',
  'beige',
  'aliceblue',
  'lavender'
].map(color => {
  return (
    <FileIcon size="48" extension="png" color={color} type="image" />
  );
});
<div style={{'-webkit-font-smoothing': 'antialiased' }}>{icons}</div>;
```

Label colors

```js
const icons = [
  'tomato',
  'orange',
  'gold',
  'lightgreen',
  'deepskyblue',
  'orchid'
].map(color => {
  return (
    <FileIcon size="48" extension="mp3" labelColor={color} />
  );
});
<div style={{'-webkit-font-smoothing': 'antialiased' }}>{icons}</div>;
```

Border radius

```js
const icons = [0, 2, 4, 6, 8, 10].map(radius => {
  return (
    <FileIcon size="48" radius={radius} />
  );
});
<div style={{ '-webkit-font-smoothing': 'antialiased' }}>{icons}</div>;
```

File type glyphs

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
    <FileIcon size="48" type={type} />
  );
});
<div style={{'-webkit-font-smoothing': 'antialiased' }}>{icons}</div>;
```

Examples

```js
<div style={{ 'display': 'block', '-webkit-font-smoothing': 'antialiased' }}>
  <FileIcon size="48" color="#34364E" gradientOpacity="0" labelColor="#34364E" labelTextColor="#31C5F0" foldColor="#31C5F0" radius="2" extension="psd" />
  <FileIcon size="48" color="#423325" gradientOpacity="0" labelColor="#423325" labelTextColor="#FF7F18" foldColor="#FF7F18" radius="2" extension="ai" />
  <FileIcon size="48" color="#4B2B36" gradientOpacity="0" labelColor="#4B2B36" labelTextColor="#FF408C" foldColor="#FF408C" radius="2" extension="indd" />
  <FileIcon size="48" color="#2C5898" labelColor="#2C5898" type="document" glyphColor="rgba(255,255,255,0.4)" extension="doc" />
  <FileIcon size="48" color="#1A754C" labelColor="#1A754C" type="spreadsheet" glyphColor="rgba(255,255,255,0.4)" extension="xls" />
  <FileIcon size="48" color="#D14423" labelColor="#D14423" type="presentation" glyphColor="rgba(255,255,255,0.4)" extension="ppt" />
  <FileIcon size="48" color="#FF8500" gradientColor="#FFB900" gradientOpacity="1" fold={false} radius="6" type="document" glyphColor="rgba(255,255,255,0.6)" />
  <FileIcon size="48" color="#11D51D" gradientColor="#82FA6C" gradientOpacity="1" fold={false} radius="6" type="spreadsheet" glyphColor="rgba(255,255,255,0.6)" />
  <FileIcon size="48" color="#1254F8" gradientColor="#00D2FF" gradientOpacity="1" fold={false} radius="6" type="presentation" glyphColor="rgba(255,255,255,0.6)" />
</div>
```
