import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { getStyles } from "./styles";
import { CategorySelectProps } from "./types";

export const CategorySelect = <T extends string>({
  theme,
  options,
  selectedValue,
  onChange,
}: CategorySelectProps<T>) => {
  const styles = getStyles({ theme });

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {options.map((option) => {
          const selected = option.value === selectedValue;

          return (
            <Pressable
              accessibilityRole="radio"
              accessibilityState={{ selected }}
              key={option.value}
              onPress={() => onChange(option.value)}
              style={[styles.option, selected && styles.selectedOption]}
            >
              <Text
                style={[
                  styles.optionText,
                  selected && styles.selectedOptionText,
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};
