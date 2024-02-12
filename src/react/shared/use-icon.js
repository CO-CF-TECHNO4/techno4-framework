import React from 'react';
import Icon from '../components/icon.js';
import Badge from '../components/badge.js';

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
    return (
      <Icon
        material={iconMaterial}
        t4={icont4}
        icon={icon}
        md={iconMd}
        ios={iconIos}
        aurora={iconAurora}
        color={iconColor}
        size={iconSize}
      >
        {(iconBadge || iconBadge === 0) && (
          <Badge color={badgeColor || iconBadgeColor}>{iconBadge}</Badge>
        )}
      </Icon>
    );
  }
  return null;
};
