import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

import glyphs from '../../glyphs';

const propTypes = {
  /** Text to display in label */
  ext: PropTypes.string,
  /** Should the corner of the icon be folded */
  fold: PropTypes.bool,
  /** Color of fold */
  foldColor: PropTypes.string,
  /** Color of file type icon */
  glyphColor: PropTypes.string,
  /** Color of icon gradient */
  gradientColor: PropTypes.string,
  /** Color of icon background */
  iconColor: PropTypes.string,
  /** Color of label */
  labelColor: PropTypes.string,
  /** Color of label text */
  labelTextColor: PropTypes.string,
  /** Style of label text */
  labelTextStyle: PropTypes.object,
  /** Radius of file icon */
  radius: PropTypes.number,
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
  ext,
  fold = true,
  foldColor,
  glyphColor,
  gradientColor,
  iconColor = 'gainsboro',
  labelColor,
  labelTextColor = 'white',
  labelTextStyle,
  radius = 6,
  type
}) => {
  const generatedGradientColor =
    gradientColor ||
    tinycolor(iconColor)
      .lighten(15)
      .toString();

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX.WIDTH} ${VIEWBOX.HEIGHT}`}
      style={{ maxWidth: '100%' }}
    >
      <defs>
        <clipPath id="pageRadius">
          <rect
            x={ICON.X_OFFSET}
            y="0"
            rx={radius}
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

        <linearGradient x1="100%" y1="0%" y2="100%" id="glyphColor">
          <stop
            stopColor={
              glyphColor ||
              tinycolor(iconColor)
                .darken(20)
                .toString()
            }
            stopOpacity="1"
            offset="0%"
          />
        </linearGradient>
        <linearGradient x1="100%" y1="0%" y2="100%" id="pageGradient">
          <stop
            stopColor={generatedGradientColor}
            stopOpacity=".2"
            offset="0%"
          />
          <stop
            stopColor={generatedGradientColor}
            stopOpacity="0"
            offset="50%"
          />
        </linearGradient>
      </defs>

      <g id="file" clipPath="url(#pageRadius)">
        {fold ? (
          <React.Fragment>
            <path
              d={`M${ICON.X_OFFSET} 0 h ${ICON.WIDTH -
                FOLD.HEIGHT} L ${ICON.WIDTH + ICON.X_OFFSET} ${
                FOLD.HEIGHT
              } v ${ICON.HEIGHT - FOLD.HEIGHT} H ${ICON.X_OFFSET} Z`}
              fill={iconColor}
            />
            <path
              d={`M${ICON.X_OFFSET} 0 h ${ICON.WIDTH -
                FOLD.HEIGHT} L ${ICON.WIDTH + ICON.X_OFFSET} ${
                FOLD.HEIGHT
              } v ${ICON.HEIGHT - FOLD.HEIGHT} H ${ICON.X_OFFSET} Z`}
              fill="url(#pageGradient)"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <rect
              x={ICON.X_OFFSET}
              y="0"
              width={ICON.WIDTH}
              height={ICON.HEIGHT}
              fill={iconColor}
            />
            <rect
              x={ICON.X_OFFSET}
              y="0"
              width={ICON.WIDTH}
              height={ICON.HEIGHT}
              fill="url(#pageGradient)"
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
              tinycolor(iconColor)
                .darken(15)
                .toString()
            }
            rx={radius}
            clipPath="url(#foldCrop)"
          />
        </g>
      )}

      {ext && (
        <React.Fragment>
          <g id="label">
            <rect
              fill={
                labelColor ||
                tinycolor(iconColor)
                  .darken(30)
                  .toString()
              }
              x={ICON.X_OFFSET}
              y={ICON.HEIGHT - LABEL_HEIGHT}
              width={ICON.WIDTH}
              height={LABEL_HEIGHT}
              clipPath="url(#pageRadius)"
            />
          </g>
          <g id="labelText" transform={`translate(${ICON.X_OFFSET} 34)`}>
            <text
              x={ICON.WIDTH / 2}
              y="11"
              fontFamily="Helvetica, sans-serif"
              fontSize="11"
              fill={labelTextColor}
              textAnchor="middle"
              style={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                textAlign: 'center',
                pointerEvents: 'none'
              }}
            >
              {ext}
            </text>
          </g>
        </React.Fragment>
      )}

      {type && <g transform={`translate(0 ${!ext ? 6 : 0})`}>{glyphs[type]}</g>}
    </svg>
  );
};

FileIcon.propTypes = propTypes;
export default FileIcon;
