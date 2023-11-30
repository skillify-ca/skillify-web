import kaboom from "kaboom";
import { useEffect, useRef } from "react";

const VirtualHangout = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    kaboom({
      height: 600,
      width: 600,
      background: [112, 110, 179],
    });

    const SPEED = 320;
    const pad = 12;

    // List of built-in fonts ("o" at the end means the outlined version)

    // Make a list of fonts that we cycle through

    // Keep track which is the current font
    const curFont = 0;
    const curSize = 48;

    // Load assets
    loadSprite("bean", "/images/sprites/bean.png");
    loadSprite("star", "/images/sprites/star.png");

    // Create a gray box for the text
    const textBox = add([
      rect(width() - 2 * pad, height() / 2 - 2 * pad),
      pos(pad, pad),
      color(100, 100, 100),
    ]);

    // Add a game object with text() component + options
    const input = add([
      pos(pad * 2, pad * 2),
      // Render text with the text() component
      text("Welcome to skillify!\nType your message in the chat here.", {
        // What font to use
        // It'll wrap to the next line if the text width exceeds the width option specified here
        width: width() - 4 * pad,
        // The height of the character
        size: curSize,
        // Text alignment ("left", "center", "right", default "left")
        lineSpacing: 8,
        letterSpacing: 4,
        // Transform each character for special effects
        transform: (idx, ch) => ({
          color: hsl2rgb((time() * 0.5 + idx * 0.5) % 1, 0.7, 0.8),
          pos: vec2(0, wave(-4, 4, time() * 4 + idx * 0.5)),
          scale: wave(1, 1.2, time() * 3 + idx),
          angle: wave(-9, 9, time() * 3 + idx),
        }),
      }),
    ]);

    const player1 = add([
      sprite("bean"),
      // center() returns the center point vec2(width() / 4, height() / 2)
      pos(width() / 4, height() / 2),
    ]);

    const player2 = add([
      sprite("bean"),
      // center() returns the center point vec2(3 * width() / 4, height() / 2)
      pos((3 * width()) / 4, height() / 2),
    ]);

    // Like onKeyPressRepeat() but more suitable for text input.
    onCharInput((ch) => {
      input.text += ch;
    });

    // onKeyDown() registers an event that runs every frame as long as the user is holding a certain key
    onKeyDown("left", () => {
      // .move() is provided by pos() component, move by pixels per second
      player1.move(-SPEED, 0);
    });

    onKeyDown("up", () => {
      player1.move(0, -SPEED);
    });

    onKeyDown("down", () => {
      player1.move(0, SPEED);
    });

    // Like onKeyPressRepeat() but more suitable for text input.
    onCharInput((ch) => {
      input.text += ch;
    });

    onKeyDown("right", () => {
      player1.move(SPEED, 0);
    });

    // Like onKeyPress() but will retrigger when the key is being held (which is similar to text input behavior)
    // Insert a new line when the user presses Enter
    onKeyPressRepeat("enter", () => {
      input.text += "\n";
    });

    // Delete the last character
    onKeyPressRepeat("backspace", () => {
      input.text = input.text.substring(0, input.text.length - 1);
    });

    const SIZE_SPEED = 32;
    const SIZE_MIN = 12;
    const SIZE_MAX = 120;

    return () => {
      // Cleanup logic if needed
    };
  }, []); // The empty dependency array ensures that this useEffect runs only once

  return null;
  // <div className="">
  //   asdf
  //   <canvas ref={canvasRef}></canvas>
  // </div>
};

export default VirtualHangout;
