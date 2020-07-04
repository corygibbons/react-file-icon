import React from "react";
import renderer from "react-test-renderer";
import ReactDOMServer from "react-dom/server";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { generateImage } from "component-image";

expect.extend({ toMatchImageSnapshot });

import { FileIcon } from "../FileIcon";

const render = (content) => {
  return renderer.create(
    <div
      style={{
        WebkitFontSmoothing: "antialiased",
        fontFamily: "Arial",
      }}
    >
      {content}
    </div>
  );
};

describe("<FileIcon />", () => {
  test("standard arrangements render correctly", () => {
    const tree = render(
      <React.Fragment>
        <FileIcon size={48} fold={false} />
        <FileIcon size={48} />
        <FileIcon size={48} type="image" />
        <FileIcon size={48} extension="jpg" />
        <FileIcon size={48} type="image" extension="jpg" />
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test("sizing variations render correctly", () => {
    const sizes = [16, 24, 36, 60, 72];
    const tree = render(
      <React.Fragment>
        {sizes.map((size, i) => (
          <FileIcon size={size} key={i} />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test("border radius variations render correctly", () => {
    const radius = [0, 2, 4, 6, 8, 10];
    const tree = render(
      <React.Fragment>
        {radius.map((r, i) => (
          <FileIcon radius={r} size={48} key={i} />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test("color variations render correctly", () => {
    const colors = [
      "mistyrose",
      "papayawhip",
      "cornsilk",
      "beige",
      "aliceblue",
      "lavender",
    ];
    const tree = render(
      <React.Fragment>
        {colors.map((color, i) => (
          <FileIcon
            color={color}
            size={48}
            type="image"
            extension="png"
            key={i}
          />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test("label colors render correctly", () => {
    const colors = [
      "tomato",
      "orange",
      "gold",
      "lightgreen",
      "deepskyblue",
      "orchid",
    ];
    const tree = render(
      <React.Fragment>
        {colors.map((color, i) => (
          <FileIcon labelColor={color} size={48} extension="mp3" key={i} />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test("file type glyphs render correctly", () => {
    const types = [
      "3d",
      "acrobat",
      "audio",
      "binary",
      "code",
      "compressed",
      "document",
      "drive",
      "font",
      "image",
      "presentation",
      "settings",
      "spreadsheet",
      "vector",
      "video",
    ];
    const tree = render(
      <React.Fragment>
        {types.map((type, i) => (
          <FileIcon size={48} type={type} key={i} />
        ))}
      </React.Fragment>
    );
    expect(tree).toMatchSnapshot();
  });

  test("unique file icons render correctly", () => {
    const tree = render(
      <React.Fragment>
        <FileIcon
          size={48}
          color="#34364E"
          gradientOpacity={0}
          labelColor="#34364E"
          labelTextColor="#31C5F0"
          foldColor="#31C5F0"
          radius={2}
          extension="psd"
        />
        <FileIcon
          size={48}
          color="#423325"
          gradientOpacity={0}
          labelColor="#423325"
          labelTextColor="#FF7F18"
          foldColor="#FF7F18"
          radius={2}
          extension="ai"
        />
        <FileIcon
          size={48}
          color="#4B2B36"
          gradientOpacity={0}
          labelColor="#4B2B36"
          labelTextColor="#FF408C"
          foldColor="#FF408C"
          radius={2}
          extension="indd"
        />
        <FileIcon
          size={48}
          color="#2C5898"
          labelColor="#2C5898"
          type="document"
          glyphColor="rgba(255,255,255,0.4)"
          extension="doc"
        />
        <FileIcon
          size={48}
          color="#1A754C"
          labelColor="#1A754C"
          type="spreadsheet"
          glyphColor="rgba(255,255,255,0.4)"
          extension="xls"
        />
        <FileIcon
          size={48}
          color="#D14423"
          labelColor="#D14423"
          type="presentation"
          glyphColor="rgba(255,255,255,0.4)"
          extension="ppt"
        />
        <FileIcon
          size={48}
          color="#FF8500"
          gradientColor="#FFB900"
          gradientOpacity={1}
          fold={false}
          radius={6}
          type="document"
          glyphColor="rgba(255,255,255,0.6)"
        />
        <FileIcon
          size={48}
          color="#11D51D"
          gradientColor="#82FA6C"
          gradientOpacity={1}
          fold={false}
          radius={6}
          type="spreadsheet"
          glyphColor="rgba(255,255,255,0.6)"
        />
        <FileIcon
          size={48}
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

  test("renders uppercase label when labelUppercase is true", () => {
    const tree = render(<FileIcon extension="png" labelUppercase />);
    expect(tree).toMatchSnapshot();
  });

  test("file types have no visual regressions", async () => {
    const types = [
      "3d",
      "acrobat",
      "audio",
      "binary",
      "code",
      "code2",
      "compressed",
      "document",
      "drive",
      "font",
      "image",
      "presentation",
      "settings",
      "spreadsheet",
      "vector",
      "video",
    ];
    const component = (
      <React.Fragment>
        {types.map((type, i) => (
          <FileIcon size={48} type={type} key={i} />
        ))}
      </React.Fragment>
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
