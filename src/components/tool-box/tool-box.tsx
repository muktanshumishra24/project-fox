import React, { useCallback, useEffect, useState } from 'react';
import { CirclePicker, SliderPicker, SketchPicker, ColorResult } from 'react-color';
import {
  RiPencilFill as PenIcon,
  RiPaintFill as BucketIcon,
  RiEraserFill as EraserIcon,
  RiGridFill as PixelSquareIcon,
  RiFocusFill as PixelCircleIcon,
  RiShape2Fill as PixelFrameIcon,
  RiSipFill as ColorPickerIcon,
  RiQuillPenFill as RandomWidthPenIcon
} from 'react-icons/ri';
import {
  ActiveBackgroundColor,
  ActiveForegroundColor,
  ColorBoxContainer,
  InstrumentBoxContainer,
  Overlay,
  RangeColorPickerContainer,
  SelectedColorContainer,
  SketchPickerContainer,
  SliderContainer,
  InstrumentButton
} from './tool-box.styles';

enum ActiveColorType {
  FOREGROUND = 'FOREGROUND',
  BACKGROUND = 'BACKGROUND'
}

enum ActiveInstrumentType {
  PEN = 'PEN',
  RANDOM_WIDTH_PEN = 'RANDOM_WIDTH_PEN',
  BUCKET = 'BUCKET',
  ERASER = 'ERASER',
  PIXEL_SQUARE = 'PIXEL_SQUARE',
  PIXEL_CIRCLE = 'PIXEL_CIRCLE',
  PIXEL_FRAME = 'PIXEL_FRAME',
  COLOR_PICKER = 'COLOR_PICKER'
}

type ToolBoxProps = {
  onChangeForegroundColor: React.Dispatch<React.SetStateAction<string>>;
  onChangeBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
};

function ToolBox({ onChangeForegroundColor, onChangeBackgroundColor }: ToolBoxProps): JSX.Element {
  const [activeInstrumentType, setActiveInstrumentType] = useState<ActiveInstrumentType>(
    ActiveInstrumentType.PEN
  );
  const [activeColorType, setActiveColorType] = useState<ActiveColorType>(
    ActiveColorType.FOREGROUND
  );
  const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false);
  const [foregroundColor, setForegroundColor] = useState<ColorResult>({
    hex: '#000000',
    hsl: { h: 240, s: 0, l: 0, a: 1 },
    rgb: { r: 0, g: 0, b: 0, a: 1 }
  });
  const [backgroundColor, setBackgroundColor] = useState<ColorResult>({
    hex: '#ffffff',
    hsl: { h: 240, s: 0, l: 1, a: 1 },
    rgb: { r: 255, g: 255, b: 255, a: 1 }
  });

  const onChangeSketchColor = useCallback(
    (value: ColorResult): void => {
      switch (activeColorType) {
        case ActiveColorType.FOREGROUND:
          setForegroundColor(value);
          break;
        case ActiveColorType.BACKGROUND:
          setBackgroundColor(value);
          break;
        default:
          break;
      }
    },
    [activeColorType]
  );

  useEffect(() => {
    onChangeForegroundColor(
      `rgba(${foregroundColor.rgb.r}, ${foregroundColor.rgb.g}, ${foregroundColor.rgb.b}, ${foregroundColor.rgb.a})`
    );
  }, [foregroundColor, onChangeForegroundColor]);

  useEffect(() => {
    onChangeBackgroundColor(
      `rgba(${backgroundColor.rgb.r}, ${backgroundColor.rgb.g}, ${backgroundColor.rgb.b}, ${backgroundColor.rgb.a})`
    );
  }, [backgroundColor, onChangeBackgroundColor]);

  return (
    <>
      <InstrumentBoxContainer>
        <InstrumentButton
          active={activeInstrumentType === ActiveInstrumentType.PEN}
          onClick={() => setActiveInstrumentType(ActiveInstrumentType.PEN)}>
          <PenIcon />
        </InstrumentButton>
        <InstrumentButton
          active={activeInstrumentType === ActiveInstrumentType.RANDOM_WIDTH_PEN}
          onClick={() => setActiveInstrumentType(ActiveInstrumentType.RANDOM_WIDTH_PEN)}>
          <RandomWidthPenIcon />
        </InstrumentButton>
        <InstrumentButton
          active={activeInstrumentType === ActiveInstrumentType.ERASER}
          onClick={() => setActiveInstrumentType(ActiveInstrumentType.ERASER)}>
          <EraserIcon />
        </InstrumentButton>
        <InstrumentButton
          active={activeInstrumentType === ActiveInstrumentType.BUCKET}
          onClick={() => setActiveInstrumentType(ActiveInstrumentType.BUCKET)}>
          <BucketIcon />
        </InstrumentButton>
        <InstrumentButton
          active={activeInstrumentType === ActiveInstrumentType.PIXEL_SQUARE}
          onClick={() => setActiveInstrumentType(ActiveInstrumentType.PIXEL_SQUARE)}>
          <PixelSquareIcon />
        </InstrumentButton>
        <InstrumentButton
          active={activeInstrumentType === ActiveInstrumentType.PIXEL_CIRCLE}
          onClick={() => setActiveInstrumentType(ActiveInstrumentType.PIXEL_CIRCLE)}>
          <PixelCircleIcon />
        </InstrumentButton>
        <InstrumentButton
          active={activeInstrumentType === ActiveInstrumentType.PIXEL_FRAME}
          onClick={() => setActiveInstrumentType(ActiveInstrumentType.PIXEL_FRAME)}>
          <PixelFrameIcon />
        </InstrumentButton>
        <InstrumentButton
          active={activeInstrumentType === ActiveInstrumentType.COLOR_PICKER}
          onClick={() => setActiveInstrumentType(ActiveInstrumentType.COLOR_PICKER)}>
          <ColorPickerIcon />
        </InstrumentButton>
      </InstrumentBoxContainer>
      <ColorBoxContainer>
        <RangeColorPickerContainer>
          <CirclePicker
            color={
              activeColorType === ActiveColorType.FOREGROUND
                ? foregroundColor.rgb
                : backgroundColor.rgb
            }
            onChange={onChangeSketchColor}
          />
          <SelectedColorContainer>
            <ActiveForegroundColor
              color={`rgba(${foregroundColor.rgb.r}, ${foregroundColor.rgb.g}, ${foregroundColor.rgb.b}, ${foregroundColor.rgb.a})`}
              onClick={() => setActiveColorType(ActiveColorType.FOREGROUND)}
              onDoubleClick={() => setIsColorPickerOpen(true)}
            />
            <ActiveBackgroundColor
              color={`rgba(${backgroundColor.rgb.r}, ${backgroundColor.rgb.g}, ${backgroundColor.rgb.b}, ${backgroundColor.rgb.a})`}
              onClick={() => setActiveColorType(ActiveColorType.BACKGROUND)}
              onDoubleClick={() => setIsColorPickerOpen(true)}
            />
            {isColorPickerOpen ? (
              <SketchPickerContainer>
                <Overlay onClick={() => setIsColorPickerOpen(false)} />
                <SketchPicker
                  color={
                    activeColorType === ActiveColorType.FOREGROUND
                      ? foregroundColor.rgb
                      : backgroundColor.rgb
                  }
                  onChange={onChangeSketchColor}
                />
              </SketchPickerContainer>
            ) : null}
          </SelectedColorContainer>
        </RangeColorPickerContainer>
        <SliderContainer>
          <SliderPicker
            color={
              activeColorType === ActiveColorType.FOREGROUND
                ? foregroundColor.rgb
                : backgroundColor.rgb
            }
            onChange={onChangeSketchColor}
          />
        </SliderContainer>
      </ColorBoxContainer>
    </>
  );
}

export default ToolBox;
