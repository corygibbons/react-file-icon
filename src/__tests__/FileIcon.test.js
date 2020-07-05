import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOMServer from 'react-dom/server';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { generateImage } from 'component-image';

expect.extend({ toMatchImageSnapshot });

import { FileIcon, defaultStyles } from '../../dist/react-file-icon';

const render = content => {
  return renderer.create(
    <div
      style={{
        WebkitFontSmoothing: 'antialiased',
        fontFamily: 'Arial',
      }}
    >
      {content}
    </div>
  );
};

describe('<FileIcon />', () => {
  test('standard arrangements render correctly', () => {
    const tree = render(
      <React.Fragment>
        <FileIcon fold={false} />
        <FileIcon />
        <FileIcon type="image" />
        <FileIcon extension="jpg" />
        <FileIcon type="image" extension="jpg" />
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test('border radius variations render correctly', () => {
    const radius = [0, 2, 4, 6, 8, 10];
    const tree = render(
      <React.Fragment>
        {radius.map((r, i) => (
          <FileIcon radius={r} key={i} />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test('color variations render correctly', () => {
    const colors = [
      'mistyrose',
      'papayawhip',
      'cornsilk',
      'beige',
      'aliceblue',
      'lavender',
    ];
    const tree = render(
      <React.Fragment>
        {colors.map((color, i) => (
          <FileIcon color={color} type="image" extension="png" key={i} />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test('label colors render correctly', () => {
    const colors = [
      'tomato',
      'orange',
      'gold',
      'lightgreen',
      'deepskyblue',
      'orchid',
    ];
    const tree = render(
      <React.Fragment>
        {colors.map((color, i) => (
          <FileIcon labelColor={color} extension="mp3" key={i} />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test('file type glyphs render correctly', () => {
    const types = [
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
      'video',
    ];
    const tree = render(
      <React.Fragment>
        {types.map((type, i) => (
          <FileIcon type={type} key={i} />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test('unique file icons render correctly', () => {
    const tree = render(
      <React.Fragment>
        <FileIcon
          color="#34364E"
          gradientOpacity={0}
          labelColor="#34364E"
          labelTextColor="#31C5F0"
          foldColor="#31C5F0"
          radius={2}
          extension="psd"
        />
        <FileIcon
          color="#423325"
          gradientOpacity={0}
          labelColor="#423325"
          labelTextColor="#FF7F18"
          foldColor="#FF7F18"
          radius={2}
          extension="ai"
        />
        <FileIcon
          color="#4B2B36"
          gradientOpacity={0}
          labelColor="#4B2B36"
          labelTextColor="#FF408C"
          foldColor="#FF408C"
          radius={2}
          extension="indd"
        />
        <FileIcon
          color="#2C5898"
          labelColor="#2C5898"
          type="document"
          glyphColor="rgba(255,255,255,0.4)"
          extension="doc"
        />
        <FileIcon
          color="#1A754C"
          labelColor="#1A754C"
          type="spreadsheet"
          glyphColor="rgba(255,255,255,0.4)"
          extension="xls"
        />
        <FileIcon
          color="#D14423"
          labelColor="#D14423"
          type="presentation"
          glyphColor="rgba(255,255,255,0.4)"
          extension="ppt"
        />
        <FileIcon
          color="#FF8500"
          gradientColor="#FFB900"
          gradientOpacity={1}
          fold={false}
          radius={6}
          type="document"
          glyphColor="rgba(255,255,255,0.6)"
        />
        <FileIcon
          color="#11D51D"
          gradientColor="#82FA6C"
          gradientOpacity={1}
          fold={false}
          radius={6}
          type="spreadsheet"
          glyphColor="rgba(255,255,255,0.6)"
        />
        <FileIcon
          color="#1254F8"
          gradientColor="#00D2FF"
          gradientOpacity={1}
          fold={false}
          radius={6}
          type="presentation"
          glyphColor="rgba(255,255,255,0.6)"
        />
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders uppercase label when labelUppercase is true', () => {
    const tree = render(<FileIcon extension="png" labelUppercase />);
    expect(tree).toMatchSnapshot();
  });

  test('file types have no visual regressions', async () => {
    const types = [
      '3d',
      'acrobat',
      'audio',
      'binary',
      'code',
      'code2',
      'compressed',
      'document',
      'drive',
      'font',
      'image',
      'presentation',
      'settings',
      'spreadsheet',
      'vector',
      'video',
    ];
    const component = (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {types.map((type, i) => (
          <div style={{ width: 48, margin: 6 }} key={i}>
            <FileIcon type={type} />
          </div>
        ))}
      </div>
    );

    const image = await generateImage(component, {
      renderer: ReactDOMServer.renderToStaticMarkup,
      viewport: {
        width: 600,
        height: 300,
      },
    });
    expect(image).toMatchImageSnapshot();
  });

  test('sizes have no visual regressions', async () => {
    const component = (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        {[24, 36, 48, 60, 72].map((size, i) => (
          <div style={{ width: size, margin: 6 }} key={i}>
            <FileIcon type="code" />
          </div>
        ))}
      </div>
    );

    const image = await generateImage(component, {
      renderer: ReactDOMServer.renderToStaticMarkup,
      viewport: {
        width: 600,
        height: 300,
      },
    });
    expect(image).toMatchImageSnapshot();
  });

  test('colors have no visual regressions', async () => {
    const component = (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {[
          'mistyrose',
          'papayawhip',
          'cornsilk',
          'beige',
          'aliceblue',
          'lavender',
        ].map((color, i) => (
          <div style={{ width: 48, margin: 6 }} key={i}>
            <FileIcon color={color} type="code" extension=" " />
          </div>
        ))}
      </div>
    );

    const image = await generateImage(component, {
      renderer: ReactDOMServer.renderToStaticMarkup,
      viewport: {
        width: 600,
        height: 300,
      },
    });
    expect(image).toMatchImageSnapshot();
  });

  test('default styles have no visual regressions', async () => {
    const component = (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {['psd', 'ai', 'indd', 'doc', 'xls', 'ppt'].map((kind, i) => (
          <div style={{ width: 48, margin: 6 }} key={i}>
            <FileIcon {...defaultStyles[kind]} />
          </div>
        ))}
      </div>
    );

    const image = await generateImage(component, {
      renderer: ReactDOMServer.renderToStaticMarkup,
      viewport: {
        width: 600,
        height: 300,
      },
    });
    expect(image).toMatchImageSnapshot();
  });
});
