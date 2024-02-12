export const useIcon = (props = {}) => {
  const {
    icon,
    iconMaterial,
    icont4,
    iconMd,
    iconIos,
    iconAurora,
    iconColor,
    iconSize,
    iconBadge,
    badgeColor,
    iconBadgeColor,
  } = props;
  if (icon || iconMaterial || icont4 || iconMd || iconIos || iconAurora) {
    return {
      props: {
        material: iconMaterial,
        t4: icont4,
        icon,
        md: iconMd,
        ios: iconIos,
        aurora: iconAurora,
        color: iconColor,
        size: iconSize,
      },
      badge:
        iconBadge || iconBadge === 0
          ? { props: { color: badgeColor || iconBadgeColor }, content: iconBadge }
          : null,
    };
  }
  return null;
};
