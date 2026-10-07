import { Modal, Pressable, Text, View } from "react-native";
import { useState } from "react";
import { useStyles } from "./styles";
import { SelectProps } from "./types";
import { ArrowDown } from "@/components/Icons";

export const Select = <T extends string>({
  theme,
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
}: SelectProps<T>) => {
  const styles = useStyles({ theme });
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const selectOption = (optionValue: T) => {
    onChange(optionValue);
    setOpen(false);
  };

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Pressable
        accessibilityLabel={label}
        accessibilityRole="button"
        onPress={() => setOpen(true)}
        style={styles.select}
      >
        <Text style={[styles.value, !selectedOption && styles.placeholder]}>
          {selectedOption?.label ?? placeholder}
        </Text>
        <Text style={styles.arrow}>
          <ArrowDown />
        </Text>
      </Pressable>
      {error && <Text style={styles.error}>{error}</Text>}
      <Modal
        animationType="slide"
        onRequestClose={() => setOpen(false)}
        transparent
        visible={open}
      >
        <Pressable onPress={() => setOpen(false)} style={styles.backdrop}>
          <View style={styles.sheet}>
            {options.map((option) => (
              <Pressable
                key={option.value}
                onPress={() => selectOption(option.value)}
                style={styles.option}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};
