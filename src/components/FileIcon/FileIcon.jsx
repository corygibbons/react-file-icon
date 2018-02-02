import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import uniqueId from 'lodash.uniqueid';

import glyphs from '../../glyphs';

const propTypes = {
  /** Text to display in label */
  extension: PropTypes.string,
  /** Should the corner of the icon be folded */
  fold: PropTypes.bool,
  /** Color of fold */
  foldColor: PropTypes.string,
  /** Color of file type icon */
  glyphColor: PropTypes.string,
  /** Color of icon background */
  color: PropTypes.string,
  /** Color of page gradient */
  gradientColor: PropTypes.string,
  /** Opacity of page gradient */
  gradientOpacity: PropTypes.number,
  /** Color of label */
  labelColor: PropTypes.string,
  /** Color of label text */
  labelTextColor: PropTypes.string,
  /** Style of label text */
  labelTextStyle: PropTypes.object,
  /** Radius of file icon */
  radius: PropTypes.number,
  /** Width and height of the file icon */
  size: PropTypes.number,
  /** Type of icon glyph to display */
  type: PropTypes.oneOf([
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
  ])
};

const VIEWBOX = {
  WIDTH: 48,
  HEIGHT: 48
};

const ICON = {
  WIDTH: 40,
  HEIGHT: VIEWBOX.HEIGHT,
  X_OFFSET: 4
};

const FOLD = {
  HEIGHT: 12
};

const LABEL_HEIGHT = 14;

export const FileIcon = ({
  extension,
  fold = true,
  foldColor,
  glyphColor,
  gradientColor = 'white',
  gradientOpacity = 0.25,
  color = 'whitesmoke',
  labelColor,
  labelTextColor = 'white',
  labelTextStyle,
  radius = 4,
  size,
  type
}) => {
  const UNIQUE_ID = uniqueId();

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX.WIDTH} ${VIEWBOX.HEIGHT}`}
      width={size}
      height={size}
      style={{ maxWidth: '100%' }}
    >
      <defs>
        <clipPath id={`pageRadius${UNIQUE_ID}`}>
          <rect
            x={ICON.X_OFFSET}
            y="0"
            rx={radius}
            ry={radius}
            width={ICON.WIDTH}
            height={ICON.HEIGHT}
          />
        </clipPath>

        <clipPath id="foldCrop">
          <rect
            width={ICON.WIDTH}
            height={FOLD.HEIGHT}
            transform={`rotate(-45 0 ${FOLD.HEIGHT})`}
          />
        </clipPath>
        <linearGradient x1="100%" y1="0%" y2="100%" id={`pageGradient${UNIQUE_ID}`}>
          <stop
            stopColor={gradientColor}
            stopOpacity={gradientOpacity}
            offset="0%"
          />
          <stop
            stopColor={gradientColor}
            stopOpacity="0"
            offset="66.67%"
          />
        </linearGradient>
      </defs>

      <g id="file" clipPath={`url(#pageRadius${UNIQUE_ID})`}>
        {fold ? (
          <React.Fragment>
            <path
              d={`M${ICON.X_OFFSET} 0 h ${ICON.WIDTH -
                FOLD.HEIGHT} L ${ICON.WIDTH + ICON.X_OFFSET} ${
                FOLD.HEIGHT
              } v ${ICON.HEIGHT - FOLD.HEIGHT} H ${ICON.X_OFFSET} Z`}
              fill={color}
            />
            <path
              d={`M${ICON.X_OFFSET} 0 h ${ICON.WIDTH -
                FOLD.HEIGHT} L ${ICON.WIDTH + ICON.X_OFFSET} ${
                FOLD.HEIGHT
              } v ${ICON.HEIGHT - FOLD.HEIGHT} H ${ICON.X_OFFSET} Z`}
              fill={`url(#pageGradient${UNIQUE_ID})`}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <rect
              x={ICON.X_OFFSET}
              y="0"
              width={ICON.WIDTH}
              height={ICON.HEIGHT}
              fill={color}
            />
            <rect
              x={ICON.X_OFFSET}
              y="0"
              width={ICON.WIDTH}
              height={ICON.HEIGHT}
              fill={`url(#pageGradient${UNIQUE_ID})`}
            />
          </React.Fragment>
        )}
      </g>

      {fold && (
        <g transform={`translate(32 ${FOLD.HEIGHT}) rotate(-90)`}>
          <rect
            width={ICON.WIDTH}
            height={ICON.HEIGHT}
            fill={
              foldColor ||
              tinycolor(color)
                .darken(10)
                .toString()
            }
            rx={radius}
            ry={radius}
            clipPath="url(#foldCrop)"
          />
        </g>
      )}

      {extension && (
        <React.Fragment>
          <g id="label">
            <rect
              fill={
                labelColor ||
                tinycolor(color)
                  .darken(30)
                  .toString()
              }
              x={ICON.X_OFFSET}
              y={ICON.HEIGHT - LABEL_HEIGHT}
              width={ICON.WIDTH}
              height={LABEL_HEIGHT}
              clipPath={`url(#pageRadius${UNIQUE_ID})`}
            />
          </g>
          <g id="labelText" transform={`translate(${ICON.X_OFFSET} 34)`}>
            <text
              x={ICON.WIDTH / 2}
              y="10"
              fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
              fontSize="9"
              fill={labelTextColor}
              textAnchor="middle"
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textAlign: 'center',
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            >
              {extension}
            </text>
          </g>
        </React.Fragment>
      )}

      {type && (
        <g
          transform={`translate(0 ${!extension ? 6 : 0})`} fill={
            glyphColor ||
            tinycolor(color)
              .darken(15)
              .toString()
            }>
          {glyphs[type]}
        </g>
      )}
    </svg>
  );
};

FileIcon.propTypes = propTypes;
export default FileIcon;
