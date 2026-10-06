import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { TextPairStyleOptions, TextPairVariant } from "./types";

export const getStyles = ({ theme }: TextPairStyleOptions) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...theme.typography.bold.large,
      color: theme.colors.text,
    },
    subtitle: {
      ...theme.typography.regular.medium,
      color: theme.colors.secondary,
      marginTop: theme.spacing.xs,
    },
    descriptionContainer: {
      flex: 0,
      marginTop: theme.spacing.sm,
    },
    descriptionTitle: {
      ...theme.typography.regular.small,
      color: theme.colors.secondary,
    },
    descriptionSubtitle: {
      ...theme.typography.regular.small,
      color: theme.colors.text,
      marginTop: theme.spacing.xs,
    },
    informationContainer: {
      alignItems: "center",
      borderBottomColor: theme.colors.surface,
      borderBottomWidth: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      minHeight: 42,
    },
    informationTitle: {
      ...theme.typography.regular.small,
      color: theme.colors.secondary,
    },
    informationSubtitle: {
      ...theme.typography.bold.small,
      color: theme.colors.text,
    },
    sectionContainer: {
      flex: 0,
    },
    sectionTitle: {
      ...theme.typography.bold.medium,
      color: theme.colors.text,
    },
    sectionSubtitle: {
      ...theme.typography.regular.medium,
      color: theme.colors.mutedText,
    },
    entryActionContainer: {
      alignItems: "center",
      flex: 0,
    },
    entryActionTitle: {
      ...theme.typography.bold.medium,
      color: theme.colors.background,
    },
    entryActionSubtitle: {
      ...theme.typography.regular.xSmall,
      color: theme.colors.background,
    },
    exitActionContainer: {
      alignItems: "center",
      flex: 0,
    },
    exitActionTitle: {
      ...theme.typography.bold.medium,
      color: theme.colors.text,
    },
    exitActionSubtitle: {
      ...theme.typography.regular.xSmall,
      color: theme.colors.secondary,
    },
    stockContainer: {
      alignItems: "center",
      flex: 0,
      flexDirection: "row",
    },
    stockTitle: {
      ...theme.typography.bold.xxxLarge,
      color: theme.colors.text,
    },
    stockSubtitle: {
      ...theme.typography.regular.medium,
      color: theme.colors.secondary,
      marginLeft: theme.spacing.sm,
    },
    stockSummaryContainer: {
      flex: 0,
    },
    stockSummaryTitle: {
      ...theme.typography.regular.small,
      color: theme.colors.secondary,
    },
    stockSummarySubtitle: {
      ...theme.typography.bold.xxxLarge,
      color: theme.colors.text,
    },
    thresholdContainer: {
      alignItems: "center",
      flex: 0,
      flexDirection: "row",
    },
    thresholdTitle: {
      ...theme.typography.regular.medium,
      color: theme.colors.secondary,
    },
    thresholdSubtitle: {
      ...theme.typography.bold.medium,
      color: theme.colors.text,
      marginLeft: theme.spacing.xs,
    },
  });

  const variantStyles: Record<
    TextPairVariant,
    {
      container: StyleProp<ViewStyle>;
      title: StyleProp<TextStyle>;
      subtitle: StyleProp<TextStyle>;
    }
  > = {
    default: {
      container: styles.container,
      title: styles.title,
      subtitle: styles.subtitle,
    },
    description: {
      container: styles.descriptionContainer,
      title: styles.descriptionTitle,
      subtitle: styles.descriptionSubtitle,
    },
    entryAction: {
      container: styles.entryActionContainer,
      title: styles.entryActionTitle,
      subtitle: styles.entryActionSubtitle,
    },
    exitAction: {
      container: styles.exitActionContainer,
      title: styles.exitActionTitle,
      subtitle: styles.exitActionSubtitle,
    },
    information: {
      container: styles.informationContainer,
      title: styles.informationTitle,
      subtitle: styles.informationSubtitle,
    },
    section: {
      container: styles.sectionContainer,
      title: styles.sectionTitle,
      subtitle: styles.sectionSubtitle,
    },
    stock: {
      container: styles.stockContainer,
      title: styles.stockTitle,
      subtitle: styles.stockSubtitle,
    },
    stockSummary: {
      container: styles.stockSummaryContainer,
      title: styles.stockSummaryTitle,
      subtitle: styles.stockSummarySubtitle,
    },
    threshold: {
      container: styles.thresholdContainer,
      title: styles.thresholdTitle,
      subtitle: styles.thresholdSubtitle,
    },
  };

  return { ...styles, variantStyles };
};
