export type TypographyWeight =
  | "thin"
  | "extraLight"
  | "light"
  | "regular"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

export type TypographySize =
  | "xSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "xxLarge"
  | "xxxLarge";

export type PoppinsFontFamily =
  | "Poppins_100Thin"
  | "Poppins_200ExtraLight"
  | "Poppins_300Light"
  | "Poppins_400Regular"
  | "Poppins_500Medium"
  | "Poppins_600SemiBold"
  | "Poppins_700Bold"
  | "Poppins_800ExtraBold"
  | "Poppins_900Black";

type FontSize = { fontSize: number; lineHeight: number };

export type TypographyStyle = FontSize & {
  fontFamily: PoppinsFontFamily;
};

export type Typography = Record<
  TypographyWeight,
  Record<TypographySize, TypographyStyle>
>;

const fontFamilies: Record<TypographyWeight, PoppinsFontFamily> = {
  thin: "Poppins_100Thin",
  extraLight: "Poppins_200ExtraLight",
  light: "Poppins_300Light",
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  semiBold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
  extraBold: "Poppins_800ExtraBold",
  black: "Poppins_900Black",
};

const fontSizes: Record<TypographySize, FontSize> = {
  xSmall: { fontSize: 10, lineHeight: 14 },
  small: { fontSize: 12, lineHeight: 18 },
  medium: { fontSize: 14, lineHeight: 22 },
  large: { fontSize: 16, lineHeight: 24 },
  xLarge: { fontSize: 20, lineHeight: 28 },
  xxLarge: { fontSize: 24, lineHeight: 32 },
  xxxLarge: { fontSize: 32, lineHeight: 40 },
};

const buildSizes = (
  fontFamily: PoppinsFontFamily,
): Record<TypographySize, TypographyStyle> => ({
  xSmall: { fontFamily, ...fontSizes.xSmall },
  small: { fontFamily, ...fontSizes.small },
  medium: { fontFamily, ...fontSizes.medium },
  large: { fontFamily, ...fontSizes.large },
  xLarge: { fontFamily, ...fontSizes.xLarge },
  xxLarge: { fontFamily, ...fontSizes.xxLarge },
  xxxLarge: { fontFamily, ...fontSizes.xxxLarge },
});

const buildTypography = (): Typography => ({
  thin: buildSizes(fontFamilies.thin),
  extraLight: buildSizes(fontFamilies.extraLight),
  light: buildSizes(fontFamilies.light),
  regular: buildSizes(fontFamilies.regular),
  medium: buildSizes(fontFamilies.medium),
  semiBold: buildSizes(fontFamilies.semiBold),
  bold: buildSizes(fontFamilies.bold),
  extraBold: buildSizes(fontFamilies.extraBold),
  black: buildSizes(fontFamilies.black),
});

export const typography: Typography = buildTypography();
