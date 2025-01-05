import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

/**
 * A hook to manage values that change based on keyboard visibility.
 * @param {any} defaultValue - The value to use when the keyboard is hidden.
 * @param {any} onKeyboardValue - The value to use when the keyboard is visible.
 * @returns {any} The current value based on keyboard visibility.
 */
export default function flexibleValue(defaultValue, onKeyboardValue) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setValue(defaultValue);
    });

    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setValue(onKeyboardValue);
    });

    return () => {
      keyboardHideListener.remove();
      keyboardShowListener.remove();
    };
  }, [defaultValue, onKeyboardValue]);

  return value;
}